import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignupPage from './components/login/SignupPage'
import Dashboard from './components/login/Dashboard';
import LoginPage from './components/login/LoginPage';
import Landingpage from './components/Landingpage';
import { AuthProvider } from './components/contexts/AuthContext';
import PrivateRoute from './components/login/PrivateRoute';
import ForgotPassword from './components/login/ForgotPassword';
import UpdateProfile from './components/login/UpdateProfile';
import Navbar from './components/Navbar/Navbar'
import CheckoutCart from './components/CheckoutCart';


const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" component={Landingpage} />
                        <Route exact path="/checkout" component={CheckoutCart} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />

                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />

                    </Switch>
                </AuthProvider>
            </Router>

        </>
    )
}

export default App;
