import React from "react";
import "../styles/Card.css";

function Card({ img, name, population, region, capital }) {
  return (
    <div className="col-md-4 col-lg-3 col-sm-12 marginl" id="cardContainer">
      <div className="card rounded">
        <div id="imgcard" className="Rounded">
          <img 
          src={img} 
          id="just"
          className="Rounded"
          alt={name} 
          />
        </div>

        <div className="textcard">
          <h5>
            <b>{name}</b>
          </h5>
          <div className="smalltext">
            <strong>Population: </strong>
          </div>
          {population}
          <br />
          <div className="smalltext">
            <strong>Region: </strong>
          </div>
          {region}
          <br />
          <div className="smalltext">
            <strong>Capital: </strong>
          </div>
          {capital}
        </div>
      </div>
    </div>
  );
}

export default Card;
