import React from "react";
import "../css/day-weather.css"

function DayWeather({day, icon, temp}) {
  return (
    <div id="day-weather" 
    className="col center around-space">
      <h4 className="day">{day}</h4>
      <i className="fa fa-sun-o"></i>
      <h4>{temp}&#176;</h4>
    </div>
  );
}

export default DayWeather;
