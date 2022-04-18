import React from "react";
import './style.css'

const CreateEditEducationModal=({Educations,setEducations,selectedEducation,setSelectedEducation})=>{
    let hideCreateEditEducationModal=()=>{
        document.querySelector("#createEditEducationModal").style.display="none";
        document.querySelector("#degree").value=null;
        document.querySelector("#institute").value=null;
        document.querySelector("#starting_year").value=null;
        document.querySelector("#EdingYear").value=null;
        setSelectedEducation(null);
    }
    const saveEducation=()=>{
        let degree=document.querySelector("#degree").value;
        let institue=document.querySelector("#institute").value;
        let startingYear=document.querySelector("#starting_year").value;
        let endingYear=document.querySelector("#EdingYear").value;
        let nw=selectedEducation
        if(selectedEducation===null)
            nw={institute:null,starting_year:null,ending_year:null,degree:null}
        if(degree)
            nw.degree=degree;
        if(institue)
            nw.institute=institue;
        if(startingYear)
            nw.starting_year=startingYear
        if(endingYear)
            nw.ending_year=endingYear
        if(nw.degree ===null|| nw.institute===null || nw.starting_year===null || nw.ending_year===null)
            {console.log("invalid intput");return}
        let newEducations=Educations.filter(Education=>Education.id!==nw.id)
        newEducations=[...newEducations,nw]
        setEducations(newEducations)
        hideCreateEditEducationModal();
    }
    return(
    <div class="ModalBody" id="createEditEducationModal">
    <div class="ModalContainer" style={{margin:"20vh auto"}} id="createEditEducationModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideCreateEditEducationModal}/>
        </div>
        <div style={{margin:"auto"}}>
        <div id="educaionEditContainer" >
            <input class="educationinputbox" placeholder={selectedEducation?selectedEducation.institute:"Institute name"} id="institute"/>
            <div class="flex">
            <input class="educationinputbox HW" placeholder={selectedEducation?selectedEducation.starting_year:"Starting year"} id="starting_year"/>
            <input class="educationinputbox HW" placeholder={selectedEducation?selectedEducation.ending_year:"Eding Year"} id="EdingYear"/>
            </div>
            <input class="educationinputbox" placeholder={selectedEducation?selectedEducation.degree:"degree name"} id="degree"/>
        
        </div>
        <div className="Button" onClick={saveEducation} style={{width:"fit-content",marginLeft:"auto"}} id="educaionSaveButton">Save</div>
        </div>
    </div>
    </div>
    )
}
export default CreateEditEducationModal;