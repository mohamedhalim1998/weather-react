import React from "react";
import PropertyCard from "./PropertyCard";

function WeatherProperties({ data }) {
  return (
    <div className="card row center">
      <div className="col-1 grow-1 pr-4">
        <PropertyCard icon="sun-o" name="Sunrise" value="5:50am" />
        <PropertyCard icon="sun-o" name="Sunrise" value="5:50am" />
      </div>
      <div className="vl grow-1 "></div>
      <div className="col-2 grow-1 pl-4">
        <PropertyCard icon="sun-o" name="Sunrise" value="5:50am" />
        <PropertyCard icon="sun-o" name="Sunrise" value="5:50am" />
      </div>
    </div>
  );
}

export default WeatherProperties;
