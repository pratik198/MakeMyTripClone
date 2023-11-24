import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Components/Main/Main';
import FlightInput from '../Components/FlightInput/FlightInput';
import Hotelinput from '../Components/HotelInput/Hotelinput';
import Train from '../Components/TrainInput/Traininput'
import Hotelpage from '../Components/Page/HotelPage/Hotelpage';
function Router() {
  return (
    <BrowserRouter>
      <Main />

      <Routes>
        <Route path='/' element={<Hotelpage/>}/>
        {/* <Route path='/' element={<FlightInput />} /> */}
        <Route path='/hotels' element={<Hotelinput />} /> 
        <Route path='/trains' element={<Train/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
