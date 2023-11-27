import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Components/Main/Main';
import Hotelinput from '../Components/HotelInput/Hotelinput';
import Train from '../Components/TrainInput/Traininput'
// import Hotelpage from '../Components/Page/HotelPage/Hotelpage';
import FlightCard from '../Components/FlightCard/FlightCard';
import Hotelcard from '../Components/HotelCard/Hotelcard';
import FlightInput from '../Components/FlightInput/FlightInput';
import Hotelpage from '../Components/Page/HotelPage/Hotelpage';
import HotelDetails from '../Components/HotelDetails/HotelDetails';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<FlightInput/>}/>
      <Route path="/hoteldetails" element={<HotelDetails/>}/>
        <Route path='/hotelpage' element={<Hotelpage/>}/>
        <Route path='/hotels' element={<Hotelinput />} /> 
        <Route path='/trains' element={<Train/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
