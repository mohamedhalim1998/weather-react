import React from "react";
import "../css/property-card.css"
function PropertyCard({ name, value, icon }) {
  return (
    <div id="property-card" className="grid-2 p-2 gap-1">
      <i className={`fa fa-${icon}`}></i>
      <div className="col">
        <h3 className="name">{name}</h3>
        <h3 className="value">{value}</h3>
      </div>
    </div>
  );
}

export default PropertyCard;
