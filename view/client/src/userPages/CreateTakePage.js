import React from "react"
import Header from "../components/Header"
import "../styles/createTake.css"
export default function CreateTakePage(){
    return(
        <div id="mainContainer">

            <div id="headerContainer">
                <Header header="hesi takes"/>
            </div>

            <div id="subHeader">
                <Header header="create a new take"/>
            </div>

            <form id="formBox">

                <div>
                    <input
                    type="text"
                    placeholder="take title"
                    />
                </div>

                    <textarea
                    type="textarea"
                    placeholder="take"
                    />
                     <div id="buttonContainer">
                        <button  className="button-82-pushable" role="button">
                            <span  className="button-82-shadow"></span>
                            <span  className="button-82-edge"></span>
                            <span  className="button-82-front text">create take</span>
                        </button>
                     </div>
            </form>

        </div>
    )
}