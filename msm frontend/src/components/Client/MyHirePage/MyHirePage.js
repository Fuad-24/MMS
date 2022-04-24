import React from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const HirePage=()=>{
    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="hiretxt">My Hires</div>
                <div className="rectangle">
                <img src="./pics_icons/profilepic.jpg" id="workerimg" onClick={false}/>
                    <div class="rectxt">Tithi Saha (23)<br/><font id="servicetxt">Painting</font><font id="statustxt">Running</font>
                    <button id="endbutton">End work</button> </div>
                </div><br/>

                <div className="rectangle">
                <img src="./pics_icons/profilepic.jpg" id="workerimg" onClick={false}/>
                    <div class="rectxt">Tithi Saha (23)<br/><font id="servicetxt">Shopping</font>
                    <img src="./pics_icons/delete.png" id="deleteimg" onClick={false}/>
                     </div>
                </div><br/>

                <div className="rectangle">
                <img src="./pics_icons/profilepic.jpg" id="workerimg" onClick={false}/>
                    <div class="rectxt">Tithi Saha (23)<br/><font id="servicetxt">Cleansing</font>
                    <img src="./pics_icons/delete.png" id="deleteimg" onClick={false}/>
                     </div>
                </div><br/>

                <div className="rectangle">
                <img src="./pics_icons/profilepic.jpg" id="workerimg" onClick={false}/>
                    <div class="rectxt">Tithi Saha (23)<br/><font id="servicetxt">Cooking</font>
                    <img src="./pics_icons/delete.png" id="deleteimg" onClick={false}/>
                     </div>
                </div><br/>

                <br/>
            </div>
            <Footer/>
        </div>
    )
 }
 export default HirePage;
