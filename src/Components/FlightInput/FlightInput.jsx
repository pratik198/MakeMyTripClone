import React, { useState } from "react";
import "./FlightInput.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Main from "../Main/Main";

function FlightInput() {
  const [selectedDay, setSelectedDay] = useState("");
  const formattedDay = moment(selectedDay).format("dddd").substring(0, 3);
  console.log(formattedDay);
  return (
    <div>
    <Main/>
    <div className="flight-input-section">
      <div className="flight-input">
        <div className="top-sec">
          <div>
            <input type="radio" name="type" id="oneway" />
            <label htmlFor="oneway">One Way</label>
          </div>
          <div>
            <input type="radio" name="type" id="roundtrip" />
            <label htmlFor="roundtrip">Round Trip</label>
          </div>
          <div>
            <input type="radio" name="type" id="multicity" />
            <label htmlFor="multicity">Multi City</label>
          </div>
        </div>
        <DatePicker
          selected={selectedDay}
          onChange={(date) => setSelectedDay(date)}
        />
      </div>
    </div>
    </div>
  );
}

export default FlightInput;
