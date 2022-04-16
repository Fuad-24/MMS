import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import "./style.css"
 const SignUp1=()=>{
    return(
        <div id="container">
            <TitleBar page="signup"/>
            <div id="signup">
                <div id="signuptxt">Join as</div>
                <div>
                    <div className="rectangle">
                        <img class="image" src="./pics_icons/employee.png"/>
                        <div class="rectxt">Worker</div>
                    </div>
                    <div className="rectangle">
                        <img class="image" src="./pics_icons/customer.png"/>
                        <div class="rectxt">Client</div>
                    </div>
                </div>
                <br/><br/>
                <div id="alreadyhaveaccount">Already have an account?<font id="logIn">Log In</font></div>
            </div>
            <Footer/>
        </div>
    )
 }
 export default SignUp1;
