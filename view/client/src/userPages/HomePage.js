import React from "react"
import Header from "../components/Header"
import "../styles/homePage.css"
export default function HomePage(){
    
    return(
        <div id="mainContainer">
            <div id="headerContainer">
                <Header header="hesi takes"/>
            </div>
            <div id="buttonContainer">
                <div>
                <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">create a new take</span>
                </button>
                </div>

                <div>
                <button  className="button-82-pushable" role="button">
                    <span  className="button-82-shadow"></span>
                    <span  className="button-82-edge"></span>
                    <span  className="button-82-front text">view all takes</span>
                </button>
                </div>
            </div>
        </div>
    )
}