import React from "react";
import "../css/weather-card.css";

function WeatherCard() {
  return (
    <div>
      <div id="weather-card" className="grid-2 container card">
      
          <div id="weather-temperture" className="col">
            <i className="fa fa-sun-o"></i>
            <h2 className="temp">25 &#176;</h2>
            <h3 className="location">Cairo, Egypt</h3>
          </div>
          <div id="weather-time" className="col">
            <h3 className="time">7:50 pm</h3>
            <h3 className="date">Monday Octobar 16, 2016</h3>
          </div>
        </div>
      </div>
  );
}

export default WeatherCard;
