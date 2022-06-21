import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";
import "./style.css"

 const WorkerRequestPage=()=>{
    const navigate=useNavigate();
    const [clients, setClients]=useState([
        {name:"Tithi Saha", service:"Shopping", service_status:"Running", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Arnob", service:"Shopping", service_status:"Waiting", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"},
        {name:"Tithi", service:"Painting", service_status:"Cancelled", profile_pic:"./pics_icons/profilepic.jpg", email:"tithi@gmailcom"}
        ]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/servicerequestforworker?email=${localStorage.getItem("email")}`)
        .then(res=>{
            setClients(res.data.result.filter(service=>service.status==="pending"))
            console.log(clients)
        })
    },[])
    let accept=(client)=>{
        axios.put("http://localhost:3001/servicerequest",{
            "location": client.location,
            "status": client.status,
            "client_email": client.client_email,
            "worker_email":client.worker_email,
            "service_name":client.service_name
        }).then(res=>{
            if(!res.data.error)
                {alert("Accept work for "+client.name)
                removeAfterAcceptOrDecline(client);}
        })
        
    }
    let decline=(client)=>{
        axios.delete(`http://localhost:3001/servicerequest?start_time=${client.start_time}&location=${client.location}&status=${client.status}&client_email=${client.client_email}&worker_email=${client.worker_email}&service_name=${client.service_name}`).then(res=>{
            if(res.data.status==="ok")
                setClients(clients.filter(curclient=>!(curclient.email===client.email &&
                                                        curclient.service_name===client.service_name &&
                                                        curclient.status===client.status&
                                                        curclient.start_time===client.start_time
                                                        )))
                alert("Decline work for "+client.name)
        })
        
    }

    const removeAfterAcceptOrDecline=(client)=>{
        setClients(clients.filter(curclient=>!(curclient.email===client.email&&curclient.service_name===client.service_name&&curclient.status===client.status)))
    }
    

    let viewProfile=(e,client)=>{
        let isClickInsideAcceptButton = false;
        let isClickInsideDeclineButton = false;
        const AcceptButtons = document.querySelectorAll(".acceptbutton");
        const DeclineButtons = document.querySelectorAll(".declinebutton");
      
        AcceptButtons.forEach(acceptbutton => acceptbutton.contains(e.target) ? isClickInsideAcceptButton = true:null)
        DeclineButtons.forEach(declinebutton => declinebutton.contains(e.target) ? isClickInsideDeclineButton = true:null)
        if(isClickInsideAcceptButton || isClickInsideDeclineButton)
            return;
        navigate(`/viewprofile/${client.email}/pending`)
    }

    return(
        <div>
            <TitleBar page="workerPage"/>
            <div id="rqst">
                <div id="rqsttxt">My Requests</div>
                {clients.map(client=>
                    <div className="rectangle" onClick={(e)=>{viewProfile(e,client)}}>
                        <img src={client.profile_pic?"http://localhost:3001/"+client.profile_pic:'./pics_icons/alter.png'} class="workerimg" onClick={false}/>
                        <div class="rectxt">{client.name} <br/>
                            <font class="servicetxt">{client.service_name}</font>
                        </div>
                        <button class="acceptbutton" onClick={()=>{accept(client)}}>Accept</button>
                        <button class="declinebutton" onClick={()=>{decline(client)}}>Decline</button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
 }
 export default WorkerRequestPage;

 
