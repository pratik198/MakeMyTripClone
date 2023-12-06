import React, { useEffect, useState, useCallback } from "react";
import Header2 from "../../Header2/Header2";
import "./Hotelpage.scss";
import { useNavigate, useLocation } from "react-router";
import Hotelcard from "../../HotelCard/Hotelcard";
import SearchHeader from "../../SearchHeader/SearchHeader";
import HeaderOnSecondaryPage from "../../Page/HotelPage/HeaderOnSecondaryPage";
function Hotelpage(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hotelData1, setHotelData1] = useState(location.state?.hotelData11);
  const [hotelId, setHotelId] = useState(null);
  const [hotelDetail, setHotelDetails] = useState(null);
  const [searchString, setSearchString] = useState(null);
  const [originalHotelData, setOriginalHotelData] = useState(null);
  const [starRating, setStarRating] = useState(null);
  let star = null;

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  function handleFiveStarRating() {
    console.log("five star rating called ")
    setStarRating("5");
    star="5";
    const res = getMultipleRandom(hotelData1, 6);
    const res1 = [...new Set(res)]
    
    setHotelData1(res1);
    console.log(starRating);
    console.log(star);
  }

  function handleFourStarRating() {
   
      console.log("four star rating called ")
    setStarRating("4");
    const res = getMultipleRandom(hotelData1, 8);
    const res1 = [...new Set(res)]
    
    setHotelData1(res1);
  }

  function handleThreeStarRating() {
   
      console.log("three star rating called ")
    setStarRating("3");
    const res = getMultipleRandom(hotelData1, 6);
    const res1 = [...new Set(res)]
    
    setHotelData1(res1);
  }

  function handleSearch(e) {
    const name = e.target.value;
    console.log(name);
    setSearchString(e.target.value);
  }
  function searchByName(e) {
    setHotelData1((prevData) =>
      prevData.filter((h) =>
        h.name.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      searchByName();
    }
  }
  const sortBasedOnLowestPrice = useCallback(() => {
    setHotelData1((prevData) =>
      [...prevData].sort((a, b) => getPrice(a) - getPrice(b))
    );
  }, [hotelData1]);

  const sortBasedOnHighestPrice = useCallback(() => {
    setHotelData1((prevData) =>
      [...prevData].sort((a, b) => getPrice(b) - getPrice(a))
    );
  }, [hotelData1]);

  const sortBasedOnUserRating = useCallback(() => {
    setHotelData1((prevData) =>
      [...prevData].sort((a, b) => b.rating - a.rating)
    );
  }, [hotelData1]);

  const getPrice = (item) =>
    item.rooms[0]?.costDetails?.baseCost || item.rooms[0]?.costPerNight;

  const getHotelDetails = useCallback(
    async (item) => {
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
          console.log(data.data);
          setHotelDetails(data?.data);
          navigate("/hoteldetails", {
            state: { hotelDetail: data?.data, starRating1: star},
          });
        } else {
          console.error("Error while data fetching");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [navigate]
  );

  function handleCheckboxChange(e) {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;

    switch (checkboxId) {
      case "priceCheckbox1":
        isChecked ? filterByPriceRange(0, 3000) : resetFilters();
        break;
      case "priceCheckbox2":
        isChecked ? filterByPriceRange(3001, 5000) : resetFilters();
        break;
      case "priceCheckbox3":
        isChecked ? filterByPriceRange(5001, 10000) : resetFilters();
        break;
      default:
        resetFilters();
        break;
    }
  }

  function filterByPriceRange(minPrice, maxPrice) {
    setHotelData1(
      originalHotelData.filter(
        (a) => getPrice(a) >= minPrice && getPrice(a) <= maxPrice
      )
    );
  }
  function resetFilters() {
    setHotelData1([...originalHotelData]);
  }

  useEffect(() => {
    console.log("Pratik");
    console.log(hotelData1);
    if (!originalHotelData && hotelData1) {
      setOriginalHotelData([...hotelData1]);
    }
  }, [hotelData1, originalHotelData]);

  return (
    <div>
      {/* <Header2 /> */}
      <HeaderOnSecondaryPage />
      <SearchHeader />
      <div className="hotelpage">
        <div className="page_header-section">
          <div className="sub-header-hotel">
            <p>SORT BY:</p>
            <p>Popular</p>
            <p onClick={sortBasedOnUserRating}>User rating(Highest first)</p>
            <p onClick={sortBasedOnHighestPrice}>Price(Highest first)</p>
            <p onClick={sortBasedOnLowestPrice}>Price(Lowest first)</p>

            <div>
              <label for="search__hotel_single">search hotel:</label>
              <input
                type="text"
                id="search__hotel_single"
                name="search__bar"
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
              />
              <button onClick={searchByName}>search</button>
            </div>
          </div>
        </div>
        <form className="filter-section">
          <h3>Price per night</h3>
          <br />
          <label>
            <input
              type="checkbox"
              id="priceCheckbox1"
              onChange={handleCheckboxChange}
            />{" "}
            ₹ 0 - ₹ 3000
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="priceCheckbox2"
              onChange={handleCheckboxChange}
            />{" "}
            ₹ 3001 - ₹ 5000
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="priceCheckbox3"
              onChange={handleCheckboxChange}
            />{" "}
            ₹ 5001 - ₹ 10000
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="priceCheckbox5"
              onChange={handleCheckboxChange}
            />{" "}
            ₹ 10001 - ₹ 15000
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="priceCheckbox6"
              onChange={handleCheckboxChange}
            />{" "}
            ₹ 15001 - ₹ 20000
          </label>
          <br />
          <h3>Star Category</h3>
          <br/>
          <label>
            <input
              type="checkbox"
              id="priceCheckbox6"
              onChange={handleThreeStarRating}
            />{" "}
           3 Star
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="priceCheckbox6"
              onChange={handleFourStarRating}
            />{" "}
           4 Star
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="priceCheckbox6"
              onChange={handleFiveStarRating}
            />{" "}
           5 Star
          </label>
          <br />
        </form>
      </div>
      <h2>Recently Viewed</h2>
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
