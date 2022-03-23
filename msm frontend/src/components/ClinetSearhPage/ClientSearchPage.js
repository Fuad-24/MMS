import React, { useEffect } from "react";
import Title_bar from '../common/Title_bar';
import Footer from "../common/footer/Footer";
import './style.css';
import axios from 'axios';

let services=["Cleaning","RcikshawPulling","Hawkering","Caretalomg","Helping"]
let long=null,lat=null,locaion=null;
const options = [ { value: 'chocolate', label: 'Chocolate' },
{ value: 'strawberry', label: 'Strawberry' },
{ value: 'vanilla', label: 'Vanilla' }]

let ontype=(e)=>{
    addDataToDiv(e.target.value,"#serviceresult");
}
let selectService=(service)=>{
document.querySelector("#service").value=service
clearresult("#serviceresult");
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
let selectLocaion=({latitude,longitude,label},id)=>{
    console.log(id)
    locaion=label
    document.querySelector("#location").value=locaion
    long=longitude
    lat=latitude
    console.log(locaion+" "+lat+" "+long);
    document.querySelector(id).innerHTML="hello" 
    clearresult(id);
}

let searchLocation=(e)=>{
    console.log(e.target.value);
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

let addLis=()=>{document.addEventListener('click', function(event) {
    var isClickInsideElement = document.querySelector("#serviceresult").contains(event.target);
    if (!isClickInsideElement) {
        clearresult("#serviceresult")
    }
    isClickInsideElement = document.querySelector("#locationresult").contains(event.target);
    if (!isClickInsideElement) {
        clearresult("#locationresult")
    }
    

});}

addLis();
const ClinetSearhPage=()=>(
    <div>
         <Title_bar page="clientPage"/>
        <div id="searchdiv">
            <div id="inputfields">
                <div class="inputboxcontaier">
                    <div class="input"><input onKeyUp={searchLocation} placeholder="Set Location" id="location"/><img class="inputicon" src="./pics_icons//location.png"/></div>
                </div>
                <div class="resultwrapper" id="locationresult"></div>
                <div class="inputboxcontaier">
                    <div class="input"><input id="service" onKeyUp={ontype} placeholder="What needs to be done"/><img class="inputicon" src="./pics_icons/search.png"/></div>
                </div>
                <div class="resultwrapper" id="serviceresult"></div>
                <div id="searchbutton">Search</div>
            </div>
        </div>
        <Footer/>
    </div>
)


export default ClinetSearhPage;