import React from "react";
import './style.css'

const CreateEditEducationModal=()=>{
    let hideCreateEditEducationModal=()=>{
        document.querySelector("#createEditEducationModal").style.display="none";
    }
    return(
    <div class="ModalBody" id="createEditEducationModal">
    <div class="ModalContainer" style={{margin:"20vh auto"}} id="createEditEducationModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideCreateEditEducationModal}/>
        </div>
        <div style={{margin:"auto"}}>
        <div id="educaionEditContainer" >
            <input class="educationinputbox" placeholder="Institute name"/>
            <div class="flex">
            <input class="educationinputbox HW" placeholder="Starting year"/>
            <input class="educationinputbox HW" placeholder="Eding Year"/>
            </div>
            <input class="educationinputbox" placeholder="Degree name"/>
        
        </div>
        <div className="Button" style={{width:"fit-content",marginLeft:"auto"}} id="educaionSaveButton">Save</div>
        </div>
    </div>
    </div>
    )
}
export default CreateEditEducationModal;