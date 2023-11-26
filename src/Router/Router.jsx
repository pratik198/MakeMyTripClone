import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Components/Main/Main';
import Hotelinput from '../Components/HotelInput/Hotelinput';
import Train from '../Components/TrainInput/Traininput'
import Hotelpage from '../Components/Page/HotelPage/Hotelpage';
import FlightCard from '../Components/FlightCard/FlightCard';
import Hotelcard from '../Components/HotelCard/Hotelcard';
function Router() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path='/hotelcards' element={<Hotelcard/>}/>
        <Route path='/' element={<Hotelpage/>}/>
        <Route path='/hotels' element={<Hotelinput />} /> 
        <Route path='/trains' element={<Train/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
