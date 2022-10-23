import React from "react"
import "../styles/landingPage.css"
import {Link, Switch, Route} from "react-router-dom"
export default function LandingPageHeader(props){
    return(
        <div id="landingPageHeaderContainer">
            <h1 id="landingPageHeader">{props.header}</h1>

            <div id="mainButtonContainer">
            
            <div id="buttonContainer1">
            
                 <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">sign up</span>
                </button> 
            
            
            </div>
            
            <div id="buttonContainer2">
             <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">login</span>
                </button>
                
                
                
            
            </div>
            
            </div>
            
            
        </div>
    )
}

