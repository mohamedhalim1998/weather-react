import "./App.css";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <WeatherCard/>
      <WeatherDetails />
    </div>
  );
}

export default App;
