import React from "react";
import "./currentWeather.css";

const CurrentWeather = ({ currentTemp, weatherIcon, weatherType }) => {
  return (
    <div>
      <div className="current_temp">{currentTemp}&deg;C</div>
      <div>
        <img
          alt="weatherIcon"
          src={`https://the-ultimate-api-challenge.herokuapp.com/https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`}
        />
      </div>
      <div>{weatherType}</div>
    </div>
  );
};

export default CurrentWeather;
