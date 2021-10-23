import React, { useState } from "react";
import "../css/search-box.css";
import { useContext } from "react";
import { weatherActions, WeatherContext } from "../context/WeatherContext";
import WeatherService from "../services/WeatherService";

function SearchBox() {
  const [city, setCity] = useState("");
  const { data, provider } = useContext(WeatherContext);
  const changeCity = ({ target: input }) => {
    setCity(input.value);
  };
  const searchCity = async (e) => {
    e.preventDefault();
    provider.searchCity(city);
  };
  return (
    <form id="search-box" onSubmit={searchCity}>
      <div className="form-input">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="search for city"
          text={city}
          onChange={changeCity}
        ></input>
        <span>
          <i className="fa fa-search" onClick={searchCity}></i>
        </span>
      </div>
    </form>
  );
}

export default SearchBox;
