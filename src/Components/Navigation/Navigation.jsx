import React from 'react'
import './Navigation.scss';
import { FaTrain } from 'react-icons/fa';
import {
    MdOutlineFlight,
    MdOutlineMapsHomeWork,
    MdDirectionsBus,
    MdHiking,
} from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import { AiOutlineCar } from 'react-icons/ai';
import { VscGraphLine } from 'react-icons/vsc';


const Navigation = () => {
    return (
      <section className="navigation-wrapper">
        <div className="navigation">
          <div className="nav-link">
            <MdOutlineFlight className="icon" />
            <span>Flights</span>
          </div>
          <div className="nav-link">
            <RiHotelLine className="icon" />
            <span>Hotels</span>
          </div>
          <div className="nav-link">
            <MdOutlineMapsHomeWork className="icon" />
            <span>Homestays</span>
          </div>
          <div className="nav-link">
            <RiHotelLine className="icon" />
            <span>Holiday Packages</span>
          </div>
          <div className="nav-link">
            <FaTrain className="icon" />
            <span>Trains</span>
          </div>
          <div className="nav-link">
            <MdDirectionsBus className="icon" />
            <span>Buses</span>
          </div>
          <div className="nav-link">
            <AiOutlineCar className="icon" />
            <span>Cabs</span>
          </div>
          <div className="nav-link">
            <VscGraphLine className="icon" />
            <span>Forex</span>
          </div>
          {/* <div className="nav-link">
            <MdHiking className="icon" />
            <span>Activities</span>
          </div> */}
        </div>
      </section>
    );
  };
  
//   export default Navigation;
  
export default Navigation
