import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase'
/* import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar' */
import NavbarShow from './components/Navbar/NavbarShow'
import SignupPage from './components/login/SignupPage'
import Dashboard from './components/login/Dashboard';
import LoginPage from './components/login/LoginPage';
import Landingpage from './components/Landingpage';
import { AuthProvider } from './components/contexts/AuthContext';
import PrivateRoute from './components/login/PrivateRoute';
import PrivateRouteNav from './components/login/PrivateRouteNav';
import ForgotPassword from './components/login/ForgotPassword';
import UpdateProfile from './components/login/UpdateProfile';
/* import Navbar from './components/Navbar/Navbar' */
import CheckoutCartList from './components/cart/CheckoutCartList';
import { handleUserProfile } from './firebase/utils';
import { createGlobalStyle } from "styled-components";
import Discover from './components/Discover';

const products = []

const App = () => {

    const [currentUser, setCurrentUser] = useState("No current user")

    let authListener = null;


    useEffect(() => {
        authListener = auth.onAuthStateChanged(userAuth => {
            if (!userAuth) {
                setCurrentUser("No current user")
            } else {
                setCurrentUser(userAuth)
            }
        })


        return function cleanup() {
            authListener();
        }
    }, [])
    /* 
        useEffect(() => {
            const fetchData = async () => {
                authListener = auth.onAuthStateChanged(userAuth => {
                    if (!userAuth) {
                        const userRef = await handleUserProfile(userAuth)
                        userRef.onSnapshot(snapshot => {
                            setCurrentUser({
                                id: snapshot.id,
                                ...snapshot.data()
                            })
                         
                         else {
                        setCurrentUser(null)
                    } return function cleanup() {
                        setCurrentUser(null)
                    }
                }, [])
            }; */



    // useEffect(() => {
    //     products.push(JSON.parse(localStorage.getItem("products")))
    //     console.log(products)
    // })




    return (
        <>
            <Router>
                <GlobalStyle />
                <NavbarShow currentUser={currentUser} />
                <AuthProvider>
                    <Switch>

                        <Route exact path="/" ><Landingpage currentUser={currentUser} /></Route>
                        <Discover path="/discover" />

                        <Route exact path="/checkout">
                            <CheckoutCartList currentUser={currentUser} />
                        </Route>

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

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  background-color: #F1F1F1;
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: 'Roboto Slab', serif; */
  font-family: "Noto Sans JP", sans-serif;
}

&:-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

&::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

&::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
  
`;

export default App;
