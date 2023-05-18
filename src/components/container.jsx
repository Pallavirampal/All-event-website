import React from "react";
import Sdata from "../components/Sdata.jsx";
import Carddemo from "../components/carddemo.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../CSS/cards.css";

function ncard(val) {
  return (
      <Carddemo
        imgsrc={val.imgsrc}
        month={val.month}
        date={val.date}
        heading={val.heading}
        subheading={val.subheading}
        icon={val.icon}
        para={val.para}
        link={val.links}
      />
  );
}

function Container() {
  return (
    <>
      <div className="yourevents">
        <h1> EVENTS</h1>
      </div>
      <div className="container">
       
        {Sdata.map(ncard)}
       
      </div>
    </>
  );
}
export default Container;
