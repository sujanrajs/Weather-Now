import { useState, useEffect } from "react";
import { apikey } from "../data/Constants";
import CurrentWeather from "./CurrentWeather";
import SearchForm from "./SearchForm";
import "./homepage.css";

const Homepage = () => {
  const [locationKey, setLocationKey] = useState("");
  const [currentWeather, setCurrentWeather] = useState();
  const [location, setLocation] = useState("");

  const iconNumCheck = (num) => {
    const stringNum = num + "";
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return "0" + stringNum;
    } else {
      return stringNum;
    }
  };

  useEffect(() => {
    if (locationKey) {
      fetch(
        `https://the-ultimate-api-challenge.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apikey}`
      )
        .then((res) => res.json())
        .then((res) => {
          setCurrentWeather(
            res.map((cw) => {
              return {
                currentTemp: cw.Temperature.Metric.Value,
                weatherType: cw.WeatherText,
                weatherIcon: iconNumCheck(cw.WeatherIcon),
              };
            })
          );
        });
    }
  }, [locationKey]);

  return (
    <div className="city_name">
      <SearchForm
        onCityExist={(cityInfo) => {
          if(cityInfo.key === null || cityInfo.key === undefined) {
            alert("something went wrong")
          }
          setLocationKey(cityInfo.key);
          setLocation(cityInfo.name + ", " + cityInfo.country);
        }}
      />
      <div className="city_info">
        {!!currentWeather &&
          currentWeather.map((i, index) => (
            <div className="city_weather_info" key={index}>
              <h1 className="header">{location}</h1>
              <CurrentWeather
                currentTemp={i.currentTemp}
                weatherType={i.weatherType}
                weatherIcon={i.weatherIcon}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
