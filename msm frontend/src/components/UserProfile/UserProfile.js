import React, { Component, useEffect } from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import Rating from "./Rating";
import "./style.css"
import UserNameModal from './Modals/UserNameModal'
import UserLocationModal from "./Modals/UserLocationModal";
import UserPhoneModal from "./Modals/UserPhoneModal";
import ProfilePicUploadModal from "./Modals/ProfilePicUploadModal"

 const UserProfile=()=>{
    let profilepic="./pics_icons/profilepic.jpg"
    let name="Tithi Saha"
    let location="Madina market, Sylhet, Bangladesh"
    let phoneno="01751327692"
    let Educations=[{InstitueName:"Shajalal University of Science And Technology,Sylhet",
                    StartingYear:"2018",
                    EndingYear:"2022",
                    Subject:"CSE"
                    },
                    {InstitueName:"Shajalal University of Science And Technology,Sylhet",
                    StartingYear:"2018",
                    EndingYear:"2022",
                    Subject:"CSE"
                    }
                ];
    let Services=[
        {"Name":"Shopping","Charge":"24 Tk/hr"},
        {"Name":"Teaching","Charge":"200 Tk/hr"},
        {"Name":"cooking","Charge":"200 Tk/hr"}
    ]

    let works=[
        {client:"Fuad",worker:"Tithi",rating:"2",description:"Had fun wok with blah blah... .... ...",tag:"Shopping"},
        {client:"Fuad",worker:"Tithi",rating:"2",description:"Had fun wok with blah blah... .... ...",tag:"Shopping"},
        {client:"Fuad",worker:"Tithi",rating:"2",description:"Had fun wok with blah blah... .... ...",tag:"Shopping"},
        {client:"Fuad",worker:"Tithi",rating:"2",description:"Had fun wok with blah blah... .... ...",tag:"Shopping"}
    ]

    let showSetNameModal=()=>{document.querySelector("#setNameModal").style.display="block"}
    let showSetLocationModal=()=>{document.querySelector("#setLocationModal").style.display="block"}
    let showSetPhoneModal=()=>{document.querySelector("#setPhoneModal").style.display="block"}
    let showSetProfilePicModal=()=>{document.querySelector("#setProfilePicModal").style.display="block";}
    return(
        <div id="container">
            <TitleBar page="clientPage"/>
            <div id="profilediv">
                <div id="basicinfo" class="userinfo">
                    <div id="profilepicdiv">
                        <img src={profilepic} id="profilepic"/>
                        <div id="profilepicedit" class="pointer">
                            <img onClick={showSetProfilePicModal} id="profilepiceditimg" src="./pics_icons/camera.png"/>
                        </div>
                    </div>
                    <div id="basicinfotxt">
                        <div id="username">
                            {name}
                            <img id="nameediticon" src="./pics_icons/edit.png" onClick={showSetNameModal} class="pointer"/>
                        </div>
                        
                        <div id="location">
                            <img id="locaionicon" src="./pics_icons/location.png"/>
                            {location}
                            <img id="locationediticon" src="./pics_icons/edit.png" class="pointer" onClick={showSetLocationModal}/>
                        </div>
                        
                        <div id="phoneno">
                            <img id="phoneicon" src="./pics_icons/phone-callg.png"/>
                            {phoneno}
                            <img id="phonenoediticon" src="./pics_icons/edit.png" class="pointer" onClick={showSetPhoneModal}/>
                        </div>
                    </div>
                    <div id="buttondiv">
                        <div id="profilehirebtn" class="pointer">Hire Now</div>
                    </div>
                </div>
                <div id="educationdiv" class="userinfo">
                    <div class="infotitle">
                        Education<img id="educationediticon" class="infoediticon pointer" src="./pics_icons/edit.png"/>
                    </div>
                    <div id="educationlist">
                        {Educations.map(Education=>(
                            <div class="educationlistitem">
                            <div id="educationinstitute">{Education.InstitueName}</div>
                            <div id="educationyear">{Education.StartingYear}-{Education.EndingYear}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="servicesdiv" class="userinfo">
                    <div class="infotitle">
                        Services <img id="serviceediticon" class="infoediticon pointer" src="./pics_icons/edit.png"/>
                    </div>
                    <div id="profileservicelist">
                        {Services.map(Service=>(
                            <div class="profileservicelistitem">{Service.Name}</div>
                        ))}
                    </div>
                </div>
                <div id="workhistorydiv" class="userinfo">
                    <div class="infotitle">
                        Work History
                    </div>
                    <div id="profileworkhistorylist">
                        {works.map(work=>(
                            <div class="profileworkshitorylistitem">
                                <div class="workwith">{`with ${work.client}`}</div>
                                <div class="rating"><Rating rating={work.rating}/></div>
                                <div class="description">{`${work.description}`}</div>
                                <div class="tag">{`${work.tag}`}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
            <UserNameModal/>
            <UserLocationModal/>
            <UserPhoneModal />
            <ProfilePicUploadModal />
        </div>
    )
 }
 export default UserProfile;
