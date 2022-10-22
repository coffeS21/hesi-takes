import React from "react"
import Header from "../components/Header"
import "../styles/allTakes.css"

export default function AllTakesRender(){
    
    return(
        <div id="gridContainer">
            
            <div id="allTakesHeaderContainer">
                <Header header= "hesi takes"/>
            </div>

        <section id="takeContainer">
            <div id="takeTitleContainer">
                <h1>this is the title of a take</h1>
            </div>

            <div>
                <p>this is a long take about sports and it is just a placeholder so i can see what a take looks like sp it for this is the
                    so now it thssi sisthat itisand it looks funny so it its like this.
                </p>
            </div>

            <section id="buttonSection">
                
                <div id="votingContainer">
                    <button>up</button>
                    <p>6</p>
                    <button>down</button>
                    <p>1</p>
                </div>

                <div id="commentContainer">
                    <button>view comments</button>
                    <button>add comment</button>
                
                </div>
            </section>
        </section>
        <section id="takeContainer">
            <div id="takeTitleContainer">
                <h1>this is the title of a take</h1>
            </div>

            <div>
                <p>this is a long take about sports and it is just a placeholder so i can see what a take looks like sp it for this is the
                    so now it thssi sisthat itisand it looks funny so it its like this.
                </p>
            </div>

            <section id="buttonSection">
                
                <div id="votingContainer">
                    <button>up</button>
                    <p>6</p>
                    <button>down</button>
                    <p>1</p>
                </div>

                <div id="commentContainer">
                    <button>view all comments</button>
                    <button>add comment</button>
                
                </div>
            </section>
        </section>

        </div>
    )
} 