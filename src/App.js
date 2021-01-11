import React from 'react'
import Landingpage from "./components/Landingpage"
import "./styles/style.css";
import SignupPage from './components/SignupPage'
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
    return (
        <>
            <Router>
                <Route exact path="/">
                    <Landingpage />
                </Route>
                <Route exact path="/signup">
                    <SignupPage />
                </Route>
            </Router>

        </>
    )
}

export default App;
