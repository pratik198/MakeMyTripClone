import React from "react";
import { useEffect } from "react";
import "./Hotelcard.scss";
import Header2 from "../Header2/Header2";

function Hotelcard(props) {
  useEffect(()=>{
      console.log(props.image[0])
      console.log(props.image[1])
      console.log(props.image[2])
      console.log(props.name)
      console.log(props.rating)
  },[])
  return (
    <div>
      <Header2 />
      <div className="hotel__cards">
        <div className="hotel__img">
          img
        </div>
        <div className="hotel__name">
          <h2>Hotel names</h2>
        </div>
        <div className="hotel__rating">
          ratings
        </div>
      </div>
    </div>
  );
}

export default Hotelcard;
