import React from "react";
import './style.css'
const TitleBar=()=>{

    return(
        <div id="title_bar">
            <div id="Logo">
                <div id="mms"><b>mms</b></div>
            </div>
            <div id="buttons">
                
                <div id="login"><b>Log In</b></div>
                <div id="signup"><b>Sign Up</b></div>
                
            </div>
        </div>
    )
}
export default TitleBar;