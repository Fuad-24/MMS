import React from "react";
import Title_bar from '../common/Title_bar';
import Footer from "../common/footer/Footer";
import './style.css';
const ClinetSearhPage=()=>(
    <div>
         <Title_bar/>
        <hr/>
        <div id="Searchdiv">
            <div class="input"><input placeholder="Set Location"/><img class="inputicon" src="./pics_icons/search.png"/></div>
            <div class="input"><input placeholder="What nedds to bend"/><img class="inputicon" src="./pics_icons//search.png"/></div>
        </div>
        <Footer/>
        
    </div>
)
export default ClinetSearhPage;