import React from "react";
import './style.css'

const UserPhoneModal=()=>{
    let hideSetPhoneModal=()=>{
        document.querySelector("#setPhoneModal").style.display="none";
    }
    return(
    <div class="ModalBody" id="setPhoneModal">
    <div class="ModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideSetPhoneModal}/>
        </div>
        <div style={{display:"flex", margin:"auto"}}>
        <input placeholder="Set new Phone no." id="ModalPhoneField"/>
        <div className="Button" id="UserPhonesavebutton">Save</div>
        </div>
    </div>
    </div>
    )
}
export default UserPhoneModal;