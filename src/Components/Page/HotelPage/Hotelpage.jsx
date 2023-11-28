import React, { useEffect, useState } from "react";
import Header2 from "../../Header2/Header2";
import "./Hotelpage.scss";
import { useNavigate, useLocation } from "react-router";
import Hotelcard from "../../HotelCard/Hotelcard";
function Hotelpage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const hotelData1 = location.state?.hotelData11 || [];
  const [hotelId, setHotelId] = useState(null);
  const [hotelDetails, setHotelDetails] = useState(null);
  const getHotelDetails = async () => {
    console.log("getting hotel data");
    const ApisUrl = `https://academics.newtonschool.co/api/v1/bookingportals/hotel/6527dc50de44dd75f5271d99`;
    console.log(ApisUrl);
    try {
      const response = await fetch(ApisUrl, {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      navigate("/hoteldetails", { state: { details: data?.data } });
      if (response.ok) {
      } else {
        console.error("Error while data fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Pratik");

    console.log(hotelData1);
    // getHotelDetails();

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
            unmarriedCouplesAllowed={
              item.houseRules?.guestProfile?.unmarriedCouplesAllowed
            }
            cost={item.rooms[0]?.costDetails?.baseCost}
            tax={item.rooms[0]?.costDetails?.taxesAndFees}
            discount={item.rooms[0]?.costDetails?.discount}
            price={item.rooms[0]?.costPerNight}
            cancelationPolicy={item.rooms[0]?.cancellationPolicy}
          />
        </div>
      ))}
    </div>
  );
}

export default Hotelpage;
