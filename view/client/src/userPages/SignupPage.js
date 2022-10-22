import React from "react"
import "../styles/loginSignUpPages.css"
import Header from "../components/Header"
export default function SignupPage(props){
    return(
        <div id="mainContainer">
            <div id="headerContainer">
                <Header header="hesi takes"/>
            </div>
            <div id="loginSignup">
                <h4>create an account</h4>
            </div>
                <form id="formContainer">
                    <input
                    placeholder="first name"
                    type="text"
                    />
                    <input
                    placeholder="last name"
                    type="text"
                    />
                    <input
                    placeholder="user name"
                    type="text"
                    />
                    <input
                    placeholder="password"
                    type="text"
                    />
                    <div id="buttonContainer">
                        <button  className="button-82-pushable" role="button">
                            <span  className="button-82-shadow"></span>
                            <span  className="button-82-edge"></span>
                            <span  className="button-82-front text">sign up</span>
                        </button>
                     </div>
                </form>
        </div>
    )
}