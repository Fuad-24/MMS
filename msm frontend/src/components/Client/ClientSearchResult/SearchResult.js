import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const SearchResult=()=>{
    const navigate=useNavigate()
    const {longitude,latitude,service,location}=useParams();
    const [workers,setWorkers]=useState([])
     useEffect(()=>{
        axios.get(`http://localhost:3001/searchworker?longitude=${longitude}&latitude=${latitude}&service_name=${service}`).then(res=>{
                console.log(res.data)
                setWorkers(res.data)
            })
     },[])
     

    let hire=(worker)=>{
        alert("Hiring "+worker.name)
    }
    let viewProfile=(e,worker)=>{
        let isClickInsideHireButton = false;
        const Buttons = document.querySelectorAll(".hirebutton");
        Buttons.forEach(button=>button.contains(e.target)?isClickInsideHireButton=true:null)
        if(isClickInsideHireButton)
            return;
        navigate(`/viewsearchedprofile/${worker.email}/${location}`)
    }
    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="searchpagehiretxt">Search Results</div>
                <div id="searchstatetxt">{service} in {location}</div>
                {workers.map(worker=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,worker)}}>
                        <img src={`http://localhost:3001/${worker.profile_pic}`} onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src=process.env.PUBLIC_URL+"/pics_icons/alter.png";
                        }} class="workerimg" onClick={false}/>
                        <div class="rectxt">{worker.name} <br/><font id="servicetxt">{worker.charge}TK/hr</font>
                         </div>
                         <button class="hirebutton" style={{visibility:"hidden"}}  onClick={()=>{hire(worker)}}>Hire Now</button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
 }
 export default SearchResult;
