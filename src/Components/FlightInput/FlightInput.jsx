import React, { useState } from "react";
import "./FlightInput.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function FlightInput() {
  // const [startDate, setStartDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState("");
  const formattedDay = moment(selectedDay).format("dddd").substring(0,3);
  console.log(formattedDay);
  return (
    <div className="flight-input-section">
      <div className="flight-input">
        <div className="first-sec">
          <ul>
            <li>One Way</li>
            <li>Round Trip</li>
            <li>Multi City</li>
          </ul>
        </div>
        <DatePicker
          selected={selectedDay}
          onChange={(date) => setSelectedDay(date)}
        />
      </div>
    </div>
  );
}

export default FlightInput;
