import React from "react"
import "../styles/landingPage.css"
import {Link, Links} from "react-router-dom"
export default function LandingPageHeader(props){
    return(
        <div id="landingPageHeaderContainer">
            <h1 id="landingPageHeader">{props.header}</h1>

            <div id="mainButtonContainer">
            
            <div id="buttonContainer1">
            <Link to="/signupPage"> 
                 <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text"><Link to="/signupPage"></Link>sign up</span>
                </button> 
            </Link>
            
            </div>
            
            <div id="buttonContainer2">
                <Link to="/login">
                <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text"><Link to="/Login"></Link>login</span>
                </button>
                </Link>
                
            
            </div>
            
            </div>
            
            
        </div>
    )
}

