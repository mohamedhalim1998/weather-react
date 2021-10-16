import React, { useState } from "react";
import "../css/search-box.css";
function SearchBox() {
  const [city, setCity] = useState("");
  const changeCity = ({ target: input }) => {
    setCity(input.value);
  };
  return (
    <form id="search-box">
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
          <i className="fa fa-search"></i>
        </span>
      </div>
    </form>
  );
}

export default SearchBox;
