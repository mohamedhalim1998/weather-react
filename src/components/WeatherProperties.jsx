import React, { useContext } from "react";
import PropertyCard from "./PropertyCard";
import { WeatherContext } from "../context/WeatherContext";
import DateService from "../services/DateService";

function WeatherProperties() {
  const { data } = useContext(WeatherContext);
  const { weather: weatherData } = data;
  if (!weatherData) return <div>Loading</div>;
  console.log(weatherData);
  return (
    <div className="card row center">
      <div className="col-1 grow-1">
        <PropertyCard
          icon="sunrise"
          name="Sunrise"
          value={DateService.formatTime(weatherData.weather[0].sunrise)}
        />
        <PropertyCard
          icon="sunset"
          name="Sunset"
          value={DateService.formatTime(weatherData.weather[0].sunset)}
        />
        <PropertyCard
          icon="windy"
          name="Wind"
          value={weatherData.weather[0].wind}
        />
      </div>
      <div className="vl grow-1 "></div>
      <div className="col-2 grow-1">
        <PropertyCard
          icon="humidity"
          name="Humidity"
          value={weatherData.weather[0].humidity}
        />
        <PropertyCard
          icon="barometer"
          name="Pressure"
          value={weatherData.weather[0].pressure}
        />
        <PropertyCard
          icon="cloud"
          name="Clouds"
          value={`${weatherData.weather[0].clouds}%`}
        />
      </div>
    </div>
  );
}

export default WeatherProperties;
