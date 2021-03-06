import "./App.css";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import { WeatherProvider } from "./context/WeatherContext";
function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Navbar />
        <WeatherCard />
        <WeatherDetails />
      </WeatherProvider>
    </div>
  );
}

export default App;
