import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignupPage from './components/SignupPage'
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import Landingpage from './components/Landingpage';
import { AuthProvider } from './components/contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';


const App = () => {
    return (
        <>
            <Router>

                <Switch>
                    <Route exact path="/" component={Landingpage} />

                    <Route path="/signup" component={SignupPage} />
                    <Route path="/login" component={LoginPage} />

                    <AuthProvider>
                        <Route path="/forgot-password" component={ForgotPassword} />
                    </AuthProvider>

                    <AuthProvider>
                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    </AuthProvider>

                    <AuthProvider>
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                    </AuthProvider>


                </Switch>

            </Router>

        </>
    )
}

export default App;
