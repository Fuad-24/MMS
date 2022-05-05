import React from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const SearchResultt=()=>{
    let workers=[
        {name:"Tithi Saha", service:"Shopping", service_status:"Running", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Arnob", service:"Shopping", service_status:"Waiting", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Tithi", service:"Painting", service_status:"Cancelled", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"}
        ]

    let endWork=(worker)=>{
        alert("End work for "+worker.name)
    }
    let deleteWorker=(worker)=>{
        alert("Delete "+worker.name)
    }

    let viewProfile=(e,worker)=>{
        let isClickInsideHireButton = false;
        let isClickOnDeleteImg = false;
        const Buttons = document.querySelectorAll(".hirebutton");
        const Images = document.querySelectorAll(".deleteimg");
        Buttons.forEach(button => button.contains(e.target) ? isClickInsideHireButton = true:null)
        Images.forEach(Image => Image.contains(e.target) ? isClickOnDeleteImg = true:null)
        if(isClickInsideHireButton || isClickOnDeleteImg)
            return;
        alert("Visiting profile of "+worker.name)
    }

    let endWorkButtonExist=(worker)=>{
        if(worker.service_status === "Running") 
           return true;
    }

    let whichButtonExist=()=>{
        const Button = document.querySelectorAll(".hirebutton");
        const Image = document.querySelectorAll(".deleteimg");
        if(endWorkButtonExist)
            return Button;
        else 
            return Image;    
    }

    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="hiretxt">My Hires</div>
                {workers.map(worker=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,worker)}}>
                        <img src={worker.profile_pic} class="workerimg" onClick={false}/>
                        <div class="rectxt">{worker.name} <br/>
                            <font class="servicetxt">{worker.service}</font>
                            <font class="statustxt">{worker.service_status}</font>
                        </div>
                        <img src="./pics_icons/delete.png" class="deleteimg" onClick={() => {deleteWorker(worker)}}/>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
 }
 export default SearchResultt;

 
 // <button class="endbutton" onClick={()=>{endWork(worker)}}>End Now</button>