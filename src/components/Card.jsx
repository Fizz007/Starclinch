import React, { useState } from "react";
import { imgdata } from "../Data";
import Imagescard from "./Imagescard";

const Card = ({e}) => {
  const [btn , setBtn] = useState(true)
  const [imgg , setImgg] = useState(imgdata[0].img)
  const [tog, setTog] = useState(false)
    
  
  const { id, headd, eventNo, img } = e;
    function toggle(){
        setBtn(!btn)
    }

    function setClickImage(data){
      setImgg(data.img)
      setTog(true)
    }
  return (
    <div className="card_container">
      <div className="card">
        <div className="main_img">
          <img
            src={tog ? imgg : img}
            alt="" 
          />
        </div>
        <div className="content">
          <div className="headd">
            <h1>{headd}</h1>
            <p>Singer</p>
          </div>
        
          <div className="location">
            <span>Location</span>
          </div>
          <div className="eventbooking">
            <span>Event Booking</span> <span>{eventNo}</span>
          </div>

          <div className="images">
           {imgdata.map((elem,i)=> {
            return <Imagescard elem={elem} key={i} setClickImage={setClickImage}/>
           })}
          </div>
        </div>

        <div className="bottom_btn" onClick={toggle} style={{backgroundColor : `${btn === true ? "" : "grey"}`}}>
          <p >{btn === true ? "SELECT" : "SELECTED"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
