import React from "react";
import './style.css'
const TitleBar=({page})=>{

    return(
        <div id="title_bar">
            <div id="Logo">
                <div id="mms"><b>mms</b></div>
            </div>
           { page==="landing"?(<div id="buttons">
                <div id="title_bar_login"><b>Log In</b></div>
                <div id="title_bar_signup"><b>Sign Up</b></div>
            </div>):null}
        </div>
    )
}
export default TitleBar;