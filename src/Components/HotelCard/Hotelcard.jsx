import React from "react";
import { useEffect } from "react";
import "./Hotelcard.scss";
import Header2 from "../Header2/Header2";
import Rating from "./Rating";
import ratingRemark from "../../Utils/Utils";
import VacLog from "../../Assets/img/vaccsin.jpg";
import reviews from "../../Utils/Reviews";
function Hotelcard(props) {
  useEffect(() => {
    console.log(props.image[0]);
    console.log(props.image[1]);
    console.log(props.image[2]);
    console.log(props.name);
    console.log(props.rating);
    console.log(props.cost);
    console.log(props.unmarriedCouplesAllowed);
    console.log(props.tax);
    console.log(props.discount);
  }, []);
  return (
    <div>
      <Header2 />
      <div className="hotel__cards">
        <div className="hotel__img">
          <img className="imgs-hotels" src={props.image[0]} alt=".." />
          <div className="small-pic">
            <img className="small-img-hotels" src={props.image[1]} alt="..." />
            <img className="small-img-hotels" src={VacLog} alt=".." />
            <img className="small-img-hotels" src={props.image[2]} alt="..." />
            <img className="small-img-hotels" src={props.image[3]} alt="..." />
          </div>
        </div>
        <div className="hotel__name">
          <p>{props.name}</p>
          {props.unmarriedCouplesAllowed && (
            <div className="couple-frnd">
              <p className="cpl-frndly">Couple Friendly</p>
            </div>
          )}

          <div className="rating-star">
            <Rating star={props.rating} />
          </div>

          <div className="hotel_reviews">
            <p className="hotel-reviews-line">{reviews(props.rating)}</p>
          </div>
        </div>
        <div className="hotel__rating">
          <div className="rating_remark">
            <span className="remark">{ratingRemark(props.rating)}</span>
          </div>
          <div className="rating-div">
            <p className="rating__color">{props.rating}</p>
          </div>
          <p>{props.cost}</p>
          <p>{props.tax}</p>
          <p>{props.guest}</p>
        </div>
      </div>
    </div>
  );
}

export default Hotelcard;
