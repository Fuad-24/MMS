import React from "react";
import LocationSearchBar from "../../common/LocationSearchBar";
import './style.css'

const UserLocationModal=()=>{
    let hideSetLocationModal=()=>{
        document.querySelector("#setLocationModal").style.display="none";
    }
    return(
    <div class="ModalBody" id="setLocationModal">
    <div class="ModalContainer" id="locationModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideSetLocationModal}/>
        </div>
        <div style={{display:"flex", margin:"auto"}}>
        <LocationSearchBar />
        <div className="Button" id="Userlocationsavebutton">Save</div>
        </div>
    </div>
    </div>
    )
}
export default UserLocationModal;