import React from "react";
import "./currentWeather.css";

const CurrentWeather = ({ currentTemp, currentUnit, weatherIcon, weatherType }) => {
  return (
    <div>
      <div className="current_temp">{currentTemp}&deg;{currentUnit}</div>
      <div className="image-container">
        <img
          alt="weatherIcon"
          src={`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`}
        />
      </div>
      <div>{weatherType}</div>
    </div>
  );
};

export default CurrentWeather;