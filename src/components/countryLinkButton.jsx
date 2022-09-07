import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://restcountries.com/v2/alpha/"; //add a config for base url

const CountryLinkButton = ({ code }) => {
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    async function getCountryNameByCode(code) {
      const { data } = await axios.get(baseUrl + code);
      setCountryName(data.name);
    }
    getCountryNameByCode(code);
  }, [code]);

  return (
    <Link
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2 inline-block"
      to={"/" + code}
    >
      {countryName}
    </Link>
  );
};

export default CountryLinkButton;
