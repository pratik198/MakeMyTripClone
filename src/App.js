import FlightCard from "./Components/FlightCard/FlightCard";
import Header from "./Components/Header/Header";
import Header1 from "./Components/Header1/Header1";
import Header2 from "./Components/Header2/Header2";
import Hotelcard from "./Components/HotelCard/Hotelcard";
import Traincard from "./Components/Traincard/Traincard";
import Main from "./Components/Main/Main";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import Booking from "./Components/CheckOut/Booking";
import FlightInput from "./Components/FlightInput/FlightInput";
import Calendar from './../src/Calender/Calender';
function App() {
  return (
    <div className="App">
      <Main/>
      <Traincard/>
      <FlightCard/>
      <Hotelcard/> 
     <Traincard/> 
     {/* <Calendar/> */}
      <LogIn/> 
       <FlightInput/>
       <SignUp/>
      <LogIn/>
     
     
    </div>
  );
}

export default App;
