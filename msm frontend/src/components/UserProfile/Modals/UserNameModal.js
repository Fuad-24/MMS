import React from "react";
import './style.css'

const UserNameModal=()=>{
    let hideSetNameModal=()=>{
        document.querySelector("#setNameModal").style.display="none";
    }
    return(
    <div class="ModalBody" id="setNameModal">
    <div class="ModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideSetNameModal}/>
        </div>
        <div style={{display:"flex", margin:"auto"}}>
        <input placeholder="Set new name" id="ModalNameField"/>
        <div className="Button" id="Usernamesavebutton">Save</div>
        </div>
    </div>
    </div>
    )
}
export default UserNameModal;