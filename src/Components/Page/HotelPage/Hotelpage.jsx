import React, { useEffect } from "react";
import Header2 from "../../Header2/Header2";
import "./Hotelpage.scss";
import { useNavigate, useLocation } from "react-router";
import Hotelcard from "../../HotelCard/Hotelcard";
function Hotelpage(props) {
  const navigate = useNavigate();

  const location = useLocation();

  const hotelData1 = location.state?.hotelData11 || [];

  useEffect(() => {
    console.log("Pratik");

    console.log(hotelData1);

    // Apicall();
  }, []);

  return (
    <div>
      <Header2 />
      <div className="hotelpage">
        <div className="page_header-section">
          <div className="sub-header-hotel">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {hotelData1.map((item) => (
        <div>
          <Hotelcard
            image={item.images}
            name={item.name}
            rating={item.rating}
            price={item.rooms[0]?.price}
            guest={item.guestProfile}
          />
        </div>
      ))}
    </div>
  );
}

export default Hotelpage;
