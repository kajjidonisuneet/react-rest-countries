import React, { Component } from "react";

const CountryCard = (props) => {
  console.log(props);
  const {capital, flag, name, population, region } = props.countryData
  console.log(capital, flag, name, population, region)
  return (
    <div className="m-10 max-w-xs rounded overflow-hidden shadow-lg">
      <a href="#">
        <img className="w-full" src={flag} alt="" />
        <div className="px-6 py-4">
          <p>{name}</p>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </a>
    </div>
  );
};

export default CountryCard;
