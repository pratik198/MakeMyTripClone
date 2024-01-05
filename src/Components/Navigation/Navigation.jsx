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
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
      <section className="navigation-wrapper">
        <div className="navigation">
          <Link to="/" className="nav-link">
            <MdOutlineFlight className="icon" />
            <span>Flights</span>
          </Link>
          <Link to="/hotels" className="nav-link">
            <RiHotelLine className="icon" />
            <span>Hotels</span>
          </Link>
          <div className="nav-link">
            <MdOutlineMapsHomeWork className="icon" />
            <span>Homestays</span>
          </div>
          <div className="nav-link">
            <RiHotelLine className="icon" />
            <span>Holiday Packages</span>
          </div>
          <Link to="/trains" className="nav-link">
            <FaTrain className="icon" />
            <span>Trains</span>
          </Link>
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
