import React from "react";


const ServiceSearchBar=({setService})=>{
    let services=["Cleaning","RcikshawPulling","Hawkering","Caretalomg","Helping"]

    let ontype=(e)=>{
        addDataToDiv(e.target.value,"#serviceresult");
    }
    let selectService=(service)=>{
    document.querySelector("#service").value=service
    clearresult("#serviceresult");
    setService(service);
    }
    
    let clearresult=(id)=>{
        let resultdiv=document.querySelector(id);
        resultdiv.innerHTML="";
    }
    
    let addDataToDiv=(value,id)=>{
        let resultdiv=document.querySelector(id);
        resultdiv.innerHTML="";
        let search=value;
        let tempresults=services.filter(result=>result.toLowerCase().includes(search.toLowerCase()))
        if(search==="")
            tempresults=[];
        tempresults.map(result=>{
            resultdiv.innerHTML+=`<div class="li" id=${result}>${result}</div>`
        })
        tempresults.map(result=>document.querySelector(`#${result}`).onclick=()=>{selectService(result)})
    }
    
    let addServiceBarOutsideClickListener=()=>{document.addEventListener('click', function(event) {
        var isClickInsideElement = document.querySelector("#serviceresult").contains(event.target);
        if (!isClickInsideElement) {
            clearresult("#serviceresult")
        }
    });}
    addServiceBarOutsideClickListener();

    return(
        <div>
            <div class="inputboxcontaier">
            <div class="input"><input id="service" onKeyUp={ontype} placeholder="What needs to be done"/><img class="inputicon" src="./pics_icons/search.png"/></div>
            </div>
            <div class="resultwrapper" id="serviceresult"></div>
        </div>

                    
    )
}

export default ServiceSearchBar;