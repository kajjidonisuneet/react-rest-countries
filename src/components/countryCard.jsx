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
  return (
    <div className=" max-w-[24rem] rounded-md overflow-hidden shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] mb-10 bg-white">
      <Link to={"/" + code}>
        <img className="w-full h-48 object-cover " src={flag} alt="" />
        <div className="px-6 pt-4 pb-10">
          <p className="text-2xl md:text-3xl font-extrabold my-5">{name}</p>
          <p className='text-lg md:text-xl'>
            <span className="font-semibold">Population:</span> {population ? population.toLocaleString("en-US") : null}
          </p>
          <p className='text-lg md:text-xl'><span className="font-semibold">Region:</span> {region}</p>
          <p className='text-lg md:text-xl'><span className="font-semibold">Capital:</span> {capital}</p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
