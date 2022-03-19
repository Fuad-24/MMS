import React from "react";
import '../common/Title_bar';
import TitleBar from "../common/Title_bar";
import './style.css';


const LandingPage=()=>{

    return(
        <div>
            <TitleBar/>
            <img src="./pics_icons/landing.png" id="landing_img"></img>
            <div id="Manush_lagbe"><b>Mansuh Lagbe?</b></div>
            <div id="we_are_here">We are here for you</div>
        </div>
    )
}
export default LandingPage;