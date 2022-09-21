import React from "react"
import "../styles/landingPage.css"
export default function Header(props){
    return(
        <div id="landingPageHeaderContainer">
            <h1 id="landingPageHeader">{props.header}</h1>

            <div id="mainButtonContainer">
            <div id="buttonContainer1">
                <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">login</span>
                </button>
            </div>
            
            <div id="buttonContainer2">
                <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">create account</span>
                </button>
            </div>
            </div>
            
            
        </div>
    )
}

