import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config.json";

const apiUrl = config.apiUrl;

const CountryLinkButton = ({ code }) => {
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    async function getCountryNameByCode(code) {
      const { data } = await axios.get(apiUrl + "alpha/" + code);

      setCountryName(data.name);
    }
    getCountryNameByCode(code);
  }, [code]);

  return (
    <Link
      className=" bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] m-2 rounded-lg py-2 px-4 inline-block"
      to={"/" + code}
    >
      {countryName}
    </Link>
  );
};

export default CountryLinkButton;
