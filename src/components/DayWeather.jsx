import React from "react";
import "../css/day-weather.css"

function DayWeather() {
  return (
    <div id="day-weather" 
    className="col center around-space">
      <h4 className="day">Mon</h4>
      <i className="fa fa-sun-o"></i>
      <h4>25&#176;</h4>
    </div>
  );
}

export default DayWeather;
