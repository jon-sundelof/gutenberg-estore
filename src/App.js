import React, { useState, useEffect } from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { auth } from './firebase/firebase'
import SignupPage from './components/login/SignupPage'
import Dashboard from './components/login/Dashboard';
import LoginPage from './components/login/LoginPage';
import Landingpage from './components/Landingpage';
import { AuthProvider } from './components/contexts/AuthContext';
import PrivateRoute from './components/login/PrivateRoute';
import PrivateRouteNav from './components/login/PrivateRouteNav';
import ForgotPassword from './components/login/ForgotPassword';
import UpdateProfile from './components/login/UpdateProfile';
import Navbar from './components/Navbar/Navbar'
import CheckoutCart from './components/CheckoutCart';
import Signup from './components/login/Signup';


const App = () => {

    const [currentUser, setCurrentUser] = useState(null)

    let authListener = null;

    useEffect(() => {
        authListener = auth.onAuthStateChanged(userAuth => {
            if (!userAuth) {
                setCurrentUser(null)
            } else {
                setCurrentUser(userAuth)
            }
        })


        return function cleanup() {
            authListener();
        }
    }, [])



    return (
        <>
            <Router>
                <Navbar currentUser={currentUser} />
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" ><Landingpage currentUser={currentUser} /></Route>
                        <Route exact path="/checkout" component={CheckoutCart} />

                        <PrivateRouteNav path="/signup" component={SignupPage} />
                        <PrivateRouteNav path="/login" component={LoginPage} />

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
