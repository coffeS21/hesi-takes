import React from "react"
import "../styles/landingPage.css"
export default function LandingPageHeader(props){
    return(
        <div id="landingPageHeaderContainer">
            <h1 id="landingPageHeader">{props.header}</h1>

            <div id="mainButtonContainer">
            
            <div id="buttonContainer1">
                <a  href="./userPages/SignupPage">
                <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">sign up</span>
                </button>
                </a>
            </div>
            
            <div id="buttonContainer2">
                <a href="./userPages/Login">
                <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">login</span>
                </button>
                </a>
            
            </div>
            
            </div>
            
            
        </div>
    )
}

