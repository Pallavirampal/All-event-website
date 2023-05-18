import React, { useEffect } from "react";
import "../CSS/nav.css";
import { Link } from "react-router-dom";
import "./signup.jsx";
import "./login.jsx";
import Popup from './popup.jsx'
import { useState } from 'react';

export default function Nav(props) {
    useEffect(()=>{
        fetch()
        .then(res=> res.json())
        .then(data =>console.log(data))
        .catch(err=> console.log(err));
    },[])
  const[buttonPopup,setButtonPopup] = useState(false);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          <img
            src="https://t4.ftcdn.net/jpg/01/76/11/53/360_F_176115302_NQfLnF9hklFGpezLqAGDamOXGhQTsVG5.jpg"
            alt=""
          />
          <Link to="/home">AllEvents.in</Link>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
         
        </div>
        <div className="nav-right">
          <li class="nav-item">
            <a class="nav-link" href="/createvent" target="_blank">
              <button><h6>+Create Event</h6></button>
            </a>
            {/* <a class="nav-link" href="#" ><button onClick={()=> setButtonPopup(true)}>+Create Event</button></a>
                        <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}><p style={{color :'red',marginTop:'-80px',textAlign:'center',backgroundColor:'grey'}}>Please signin or login</p></Popup> */}
          </li>

          <li class="nav-item">
            <h1
              style={{
                fontSize: "17px",
                marginRight: "12px",
                marginTop: "9px",
              }}
            >
            </h1>
          </li>
          <form className="d-flex">
            <div className="search-icon" >
              <a href="/searchbar" target="_blank"><i class="fa-solid fa-magnifying-glass"></i></a>
            </div>
          </form>
        </div>
      </nav>
      <div className="blue-line"></div>
    </>
  );
}
