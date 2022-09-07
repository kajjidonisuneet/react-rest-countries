import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  const {
    capital,
    flag,
    name,
    population,
    region,
    alpha3Code: code,
  } = props.countryData;
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <div className=" max-w-xs rounded-md overflow-hidden shadow-lg">
      <Link to={"/" + code}>
        <img className="w-full h-48 object-cover " src={flag} alt="" />
        <div className="px-6 py-4">
          <p>{name}</p>
          <p>
            Population: {population ? population.toLocaleString("en-US") : null}
          </p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
