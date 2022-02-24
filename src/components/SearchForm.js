import React, { useState } from "react";
import { apikey } from "../data/Constants";
import "./searchForm.css";

const SearchForm = ({ onCityExist }) => {
  const [city, setCity] = useState("");

  const getCity = (cityName) => {
    const url = `https://dataservice.accuweather.com/locations/v1/search?apikey=${apikey}&q=${cityName}`;
    if (city) {
      fetch(url)
        .then((res) => res.json())
        .then((res) => res.find((location) => location.Type === "City"))
        .then((res) =>{
          onCityExist({
            name: res.EnglishName,
            country: res.Country.ID,
            key: res.Key,
          })
        }
        );
      setCity("");
    }
  };

  const handleClick = () => {
    getCity(city)
  }

  return (
    <div className="search_container">
      <input
        required
        placeholder="Please enter the city name!"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button onClick={handleClick}>Search City</button>
    </div>
  );
};

export default SearchForm;
