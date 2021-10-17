import React from "react";
import DayWeather from "./DayWeather";
import WeatherProperties from "./WeatherProperties";

function WeatherDetails() {
  return (
    <div className="container grid-3 py-2 gap-2">
      <WeatherProperties />
      <div className="week-weather card row center even-space col-2-3">
        <DayWeather />
        <div className="vl"></div>
        <DayWeather />
        <div className="vl"></div>
        <DayWeather />
        <div className="vl"></div>
        <DayWeather />
        <div className="vl"></div>
        <DayWeather />
        <div className="vl"></div>
        <DayWeather />
        <div className="vl"></div>
        <DayWeather />
      </div>
    </div>
  );
}

export default WeatherDetails;
