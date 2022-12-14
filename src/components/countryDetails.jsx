import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CountryLinkButton from "./countryLinkButton";
import BackButton from "../common/backButton";
import config from '../config.json'

const apiUrl = config.apiUrl

const CountryDetails = () => {
  const [countryData, setCountryData] = useState({});
  const countryCode = useParams().code;

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(apiUrl + "alpha/" + countryCode);
      setCountryData(data);
    }

    getData();
  }, [countryCode]);

  return (
    <div className="md:mx-10">
      <BackButton />

      <div className="md:grid md:gap-20 md:grid-cols-2 md:grid-rows-1">
        <div className="p-6">
          <img src={countryData.flag} alt="" />
        </div>
        <div className="p-6 dark:text-white">
          <p className="text-3xl md:text-5xl font-extrabold mb-6 ">{countryData.name}</p>
          <div className="md:grid md:gap-20 md:grid-cols-2 md:grid-rows-1">
            <div className="text-lg leading-loose mb-6 md:text-xl md:leading-10">
              <p>
                <span className="font-semibold">Native Name: </span>
                <span>{countryData.nativeName}</span>
              </p>
              <p>
                <span className="font-semibold">Population:</span>
                <span>
                  {countryData.population
                    ? countryData.population.toLocaleString("en-US")
                    : null}
                </span>
              </p>
              <p>
                <span className="font-semibold">Region:</span>{" "}
                <span>{countryData.region}</span>
              </p>
              <p>
                <span className="font-semibold">Sub Region:</span>{" "}
                <span>{countryData.subregion}</span>
              </p>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                <span>{countryData.capital}</span>
              </p>
            </div>
            <div className="text-lg leading-loose mb-6 md:text-xl md:leading-10">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                <span>
                  {countryData.topLevelDomain
                    ? countryData.topLevelDomain.map((d) => (
                        <span key={d}> {d} </span>
                      ))
                    : null}
                </span>
              </p>
              <p>
                <span className="font-semibold">Currencies:</span>
                <span>
                  {countryData.currencies
                    ? countryData.currencies.map((d) => (
                        <span key={d.name}> {d.name} </span>
                      ))
                    : null}
                </span>
              </p>
              <p>
                <span className="font-semibold"> Languages:</span>
                <span>
                  {countryData.languages
                    ? countryData.languages.map((d) => d.name).join(", ")
                    : null}
                </span>
              </p>
            </div>
          </div>
          <div>
            <span className="font-semibold text-lg md:text-xl md:leading-10"> Border Countries:</span>
            <div className="md:inline-block">
              {countryData.borders
                ? countryData.borders.map((d) => (
                    <CountryLinkButton key={d} code={d} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;

// 
