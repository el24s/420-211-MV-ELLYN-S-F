import React from "react";
import { useState } from "react";
import "./home.css"

function Home() {
    const [button, setButton] = useState("")
    return(
        <>
        <h2> </h2>

        <div className="mainPage">
            <div>
                <img src="src\assets\rollers.png"/>
                <img src="src\assets\wynonnaearp.png"/>
            </div>

        <div className="quality">
                <h3>gentille </h3>
                <h3>souriante </h3>
                <h3> dynamique</h3>
        </div>
        <div className="passions">
            <h3> livres </h3>
            <h3> patin à roulette </h3> 
            <h3> badminton</h3> 
            <h3> gymnastique artistique</h3>
            <h3> cuisiner</h3>
            <h3> séries télés. </h3>
        </div>
        

        {/* <h2> https://www.w3schools.com/css/css_display_visibility.asp </h2> */}
        
        </div>
        {/* <button className="seeMore"> Click or not </button> */}
        </>
        
    )
}

export default Home