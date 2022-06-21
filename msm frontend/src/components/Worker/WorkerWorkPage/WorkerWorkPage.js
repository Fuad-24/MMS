import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const WorkerWorkPage=()=>{
     const navigate=useNavigate();
    const [workers,setWorkers]=useState([
        {name:"Tithi", service:"Painting", service_status:"Declined", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"}
        ])

    let viewProfile=(e,worker)=>{
        navigate(`/viewprofile/${worker.email}/${worker.status}`)
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/servicerequestforworker?email=${localStorage.getItem("email")}`)
        .then(res=>{
            setWorkers(res.data.result.filter(service=>service.status!=="pending"))
            console.log(res.data.result.filter(service=>service.status!=="pending"))
        })
    },[])
    return(
        <div>
            <TitleBar page="workerPage"/>
            <div id="workerwork">
                <div id="workersworktxt">My Services</div>
                {workers.map(worker=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,worker)}}>
                        <img src={worker.profile_pic?"http://localhost:3001/"+worker.profile_pic:"./pics_icons/alter.png"} class="workerimg" onClick={false}/>
                        <div class="rectxt">{worker.name} <br/>
                            <font class="servicetxt">{worker.service_name}</font>
                            
                        </div>
                        {
                            (worker.status) === "Running" ? <button class="runningbutton" >Running</button> :<button class="endedbutton" >Ended</button>
                        }
                        
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
 }
 export default WorkerWorkPage;

 