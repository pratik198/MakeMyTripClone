import FlightCard from "./Components/FlightCard/FlightCard";
import Header from "./Components/Header/Header";
import Header1 from "./Components/Header1/Header1";
import Header2 from "./Components/Header2/Header2";
import Hotelcard from "./Components/HotelCard/Hotelcard";
import Traincard from "./Components/Traincard/Traincard";

function App() {
  return (
    <div className="App">
      <Traincard/>
      <FlightCard/>
      <Hotelcard/>
      <Header/>
      {/* <Header1/>
      <Header2/> */}
    </div>
  );
}

export default App;
