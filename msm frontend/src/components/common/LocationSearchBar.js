import React from "react";
import axios from 'axios';


const LocationSearchBar=({setPosition})=>{
    
    let searchLocation=(e)=>{
        //console.log(e.target.value);
        let query=e.target.value;
        if(query.length%5!=1)
            return;
        axios.get(`http://api.positionstack.com/v1/forward?access_key=e908e8dad7e3e1d2c67cc912fd54ae2b&query=${query}`)
            .then(function (response) {
            //console.log(response.data);
            addAddressToDiv(response.data,"#locationresult",query)
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
    }
    
    let selectLocaion=({latitude,longitude,label},id)=>{
        //console.log(id)
        document.querySelector("#location").value=label
        clearresult(id);
        setPosition({"latitude":latitude,"longitude":longitude,"location":label})
    }
    
    let addAddressToDiv=(results,id,query)=>{
        let resultdiv=document.querySelector(id);
        let tempresults=results.data
        console.log(tempresults)
        resultdiv.innerHTML="";
        if(query==="")
            tempresults=[];
        let i=0;
        tempresults.map(result=>{
            resultdiv.innerHTML+=`<div class="li" id=id${i}>${result.label}</div>`
            i=i+1;
        })
        i=0;
        tempresults.map(result=>{document.querySelector(`#id${i}`).onclick=()=>{selectLocaion(result,id)}
            i=i+1;
            })
        
    }
    
    let clearresult=(id)=>{
        let resultdiv=document.querySelector(id);
        resultdiv.innerHTML="";
    }
    let addLocationBarOutSideClikcListener=()=>{document.addEventListener('click', function(event) {
        const isClickInsideElement = document.querySelector("#locationresult").contains(event.target);
        if (!isClickInsideElement) {
            clearresult("#locationresult")
        }
    });}

    addLocationBarOutSideClikcListener();
    
    return(
        <div>
            <div class="inputboxcontaier">
            <div class="input"><input onKeyUp={searchLocation} placeholder="Set Location" id="location"/><img class="inputicon" src="./pics_icons//location.png"/></div>
            </div>
            <div class="resultwrapper" id="locationresult"></div>
        </div>
    )
}

export default LocationSearchBar;