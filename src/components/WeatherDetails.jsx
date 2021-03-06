import React, { useContext } from "react";
import DayWeather from "./DayWeather";
import WeatherProperties from "./WeatherProperties";
import { WeatherContext } from "../context/WeatherContext";
import DateService from "../services/DateService";
import HourlyWeatherGraph from "./HourlyWeatherGraph";
function WeatherDetails() {
  const { data } = useContext(WeatherContext);
  const { weather: weatherData } = data;
  if (!weatherData) return <div>Loading</div>;
  return (
    <div className="container grid-3 py-2 gap-2">
      <WeatherProperties />
      <div className="week-weather card center  col-2-3 ">
          <HourlyWeatherGraph />
          <div className="row even-space py-2">
            {weatherData.weather.map((day, index) => {
              if (index === 0) {
                return <React.Fragment key={index}></React.Fragment>;
              }
              return (
                <React.Fragment key={index}>
                  <DayWeather
                    day={DateService.formatDay(day.sunrise)}
                    temp={Math.floor(day.temp)}
                    icon={day.icon}
                  />
                  {index < weatherData.weather.length - 1 && (
                    <div className="vl"></div>
                  )}
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
