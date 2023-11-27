import React from "react";
import { useEffect } from "react";
import "./Hotelcard.scss";
import Header2 from "../Header2/Header2";
import Rating from "./Rating";
function Hotelcard(props) {
  useEffect(()=>{
      console.log(props.image[0])
      console.log(props.image[1])
      console.log(props.image[2])
      console.log(props.name)
      console.log(props.rating)
      console.log(props.price)
      console.log(props.guest)
      
  },[])
  return (
    <div>
      <Header2 />
      <div className="hotel__cards">
        <div className="hotel__img">
          <img className="imgs-hotels" src={props.image[0]} alt=".."/>
         
        </div>
        <div className="hotel__name">
          <h2>{props.name}</h2>
          <div>
          <Rating star={props.rating} />
          </div>
        </div>
        <div className="hotel__rating">
         <p>{props.rating}</p>
         <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Hotelcard;
