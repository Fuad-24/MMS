import React from "react";
import './style.css'

const CreateEditServiceModal=()=>{
    let hideCreateEditServiceModal=()=>{
        document.querySelector("#createEditServiceModal").style.display="none";
    }
    return(
    <div class="ModalBody" id="createEditServiceModal">
    <div class="ModalContainer" style={{margin:"30vh auto",maxWidth:"500px"}} id="createEditServiceModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideCreateEditServiceModal}/>
        </div>
        <div style={{margin:"auto"}}>
        <div id="serviceEditContainer" >
            <div class="flex">
            <input class="educationinputbox HW f18" placeholder="Service Name"/>
            <input class="educationinputbox HW f18" placeholder="Rate Tk/hr"/>
            <div className="Button f18" style={{width:"fit-content",marginLeft:"auto"}} id="serviceSaveButton">Save</div>
            </div>
        </div>
        
        </div>
    </div>
    </div>
    )
}
export default CreateEditServiceModal;