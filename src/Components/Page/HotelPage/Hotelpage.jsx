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
  const [hotelDetail, setHotelDetails] = useState(null);
 


  const getHotelDetails = async (item) => {
    setHotelId(item._id);
    console.log("getting hotel data");
    const ApisUrl = `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${item._id}`;
    console.log(ApisUrl);
    try {
      const response = await fetch(ApisUrl, {
        headers: {
          projectID: "f104bi07c490",
        },
      });
      console.log(response);
      if (response.ok) {

        const data = await response.json();
        console.log(data.data)
        setHotelDetails(data?.data);
        navigate("/hoteldetails", { state: { hotelDetail: data?.data } });
        // navigate("/hotelpage", { state: { hotelData11: data?.data?.hotels } });
        // navigate("/hoteldetails", { state: { details: data?.data } });
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
        <div key={item._id} onClick={() => getHotelDetails(item)}>
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
