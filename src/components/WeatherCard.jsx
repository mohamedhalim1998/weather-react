import React, { useEffect } from "react";
import "../css/weather-card.css";
import { useContext } from "react";
import { weatherActions, WeatherContext } from "../context/WeatherContext";
import WeatherService from "../services/WeatherService";
import DateService from "../services/DateService";
function WeatherCard() {
  const { weatherData, dispatch } = useContext(WeatherContext);
  useEffect(() => {
    async function fecth() {
      const data = await WeatherService.getWeather();
      dispatch({ type: weatherActions.getWeather, payload: data });
    }
    fecth();
  }, []);
  if (!weatherData.weather) return <div>Loading</div>;
  return (
    <div>
      <div id="weather-card" className="grid-2 container card">
        <div id="weather-temperture" className="col">
          <i className={`wi wi-${weatherData.weather[0].icon}`}></i>
          <h2 className="temp">
            {Math.floor(weatherData.weather[0].temp)} &#176;
          </h2>
          <h3 className="location">
            {weatherData.city}, {weatherData.country}
          </h3>
        </div>
        <div id="weather-time" className="col">
          <h3 className="time">{DateService.getTime(weatherData.timezone)}</h3>
          <h3 className="date">{DateService.getDate(weatherData.timezone)}</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
