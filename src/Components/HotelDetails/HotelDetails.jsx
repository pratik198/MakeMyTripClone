import React from "react";
import "./HotelDetails.scss";
import { useState, useEffect } from "react";
import Header2 from "../Header2/Header2";

function HotelDetails(props) {
  useEffect(() => {
    console.log(props.details);
  }, []);

  return (
    <div>
      <Header2 />
      <div className="hotel-details-main">
        <div className="hotel-initial-part">
          <div className="first-section">
            <div className="hotel-image-font-pic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aZ9_RsWSvtXsayvSmtg-nFNwnzYgLZBFYg&usqp=CAU" alt=".."/>
            </div>
          </div>
          <div className="second-section">
              <div className="hotel-images-small">
                    
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aZ9_RsWSvtXsayvSmtg-nFNwnzYgLZBFYg&usqp=CAU" alt=".."/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aZ9_RsWSvtXsayvSmtg-nFNwnzYgLZBFYg&usqp=CAU" alt=".."/>
              </div> 
          </div>
          <div className="third-section">3rd section-images</div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
