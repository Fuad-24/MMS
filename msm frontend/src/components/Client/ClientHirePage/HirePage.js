import React, { useEffect, useState } from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"
import ReviewModal from "./Modal/ReviewModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 const SearchResultt=()=>{
    const [workers, setWorkers]=useState([]);
    const [worker,setWorker]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3001/clientsrequests?email=${localStorage.getItem("email")}`).then(res=>{
            setWorkers(res.data)
        })
    },[]);

    let endWork=(worker)=>{
        alert("End work for "+worker.name)
    }
    let deleteWorker=(worker)=>{
        alert("Delete "+worker.name)
    }
    
    const removeWorker=(worker)=>{
        console.log(worker)
        axios.delete(`http://localhost:3001/servicerequest?start_time=${worker.start_time}&location=${worker.location}&status=${worker.status}&client_email=${worker.client_email}&worker_email=${worker.email}&service_name=${worker.service_name}`).then(res=>{
            if(res.data.status==="ok")
                setWorkers(workers.filter(curworker=>!(curworker.email===worker.email &&
                                                        curworker.service_name===worker.service_name &&
                                                        curworker.status===worker.status&
                                                        curworker.start_time===worker.start_time
                                                        )))
        })
    }


    let viewProfile=(e,worker)=>{
        let isClickInsideHireButton = false;
        let isClickOnDeleteImg = false;
        const Buttons = document.querySelectorAll(".endbutton");
        const Images = document.querySelectorAll(".workerdeleteimg");
        Buttons.forEach(button => button.contains(e.target) ? isClickInsideHireButton = true:null)
        Images.forEach(Image => Image.contains(e.target) ? isClickOnDeleteImg = true:null)
        if(isClickInsideHireButton || isClickOnDeleteImg)
            return;
        navigate(`/viewprofile/${worker.email}/${worker.status}`)
        //alert("Visiting profile of "+worker.name)
    }

    let showReviewModal=()=>{document.querySelector("#setNameModal").style.display="block"}

    return(
        <div>
            <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="clientshiretxt">My Hires</div>
                {workers.map(worker=>
                    <div className="hirerectangle" onClick={(e)=>{viewProfile(e,worker)}}>
                        <img src={'http://localhost:3001/'+worker.profile_pic} class="hireworkerimg" onClick={false}/>
                        <div class="rectxt">{worker.name} <br/>
                            <font class="servicetxt">{worker.service_name}</font>
                            <font class="statustxt">{worker.status}</font>
                        </div>
                        {
                            (worker.status) === "Running" ? <button class="endbutton" onClick={()=>{showReviewModal();setWorker(worker)}}>End Now</button> : 
                            (worker.status) === "pending" ?<img src="./pics_icons/delete.png" class="workerdeleteimg" onClick={() => { removeWorker(worker)}}/>:null
                        }
                        
                    </div>
                )}
            </div>
            <Footer/>
            <ReviewModal Worker={worker} Workers={workers} setWorkers={setWorkers}/>
        </div>
    )
 }
 export default SearchResultt;

 