
import React from "react"
import {Switch, Route} from "react-router-dom"
import LandingPageHeader from "../displayFiles/LandingPageHeader"
import "../styles/landingPage.css"
import Login from "../userPages/Login"
import SignupPage from "../userPages/SignupPage"
export default function LandingPage(){
    return(
        <div id="mainContainer">
            <LandingPageHeader header="HESI TAKES"/>
            <Switch>
                <Route exact path="/signupPage">
                    <SignupPage/>
                </Route>
                <Route exact path="/Login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    )
}