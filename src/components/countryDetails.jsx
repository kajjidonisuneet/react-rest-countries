import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CountryLinkButton from "./countryLinkButton";
import BackButton from "../common/backButton";
import Dropdown from "../common/dropdown";

const baseUrl = "https://restcountries.com/v2/alpha/"; //add a config for base url

const CountryDetails = () => {
  const [countryData, setCountryData] = useState({});
  const countryCode = useParams().code;

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(baseUrl + countryCode);
      setCountryData(data);
    }

    getData();
  }, [countryCode]);

  return (
    <React.Fragment>
      <BackButton/>
      
      <div className="grid gap-4 grid-cols-2 grid-rows-1">
        <div>
          <img src={countryData.flag} alt="" />
        </div>
        <div>
          <p>{countryData.name}</p>
          <div className="grid gap-4 grid-cols-2 grid-rows-1">
            <div>
              <p>
                Native Name: <span>{countryData.nativeName}</span>
              </p>
              <p>
                Population: 
                <span>
                  {countryData.population
                    ? countryData.population.toLocaleString("en-US")
                    : null}
                </span>
              </p>
              <p>
                Region: <span>{countryData.region}</span>
              </p>
              <p>
                Sub Region: <span>{countryData.subregion}</span>
              </p>
              <p>
                Capital: <span>{countryData.capital}</span>
              </p>
            </div>
            <div>
              <p>
                Top Level Domain:
                <span>
                  {countryData.topLevelDomain
                    ? countryData.topLevelDomain.map((d) => (
                        <span key={d}> {d} </span>
                      ))
                    : null}
                </span>
              </p>
              <p>
                Currencies:
                <span>
                  {countryData.currencies
                    ? countryData.currencies.map((d) => (
                        <span key={d.name}> {d.name} </span>
                      ))
                    : null}
                </span>
              </p>
              <p>
                Languages:
                <span>
                  {countryData.languages
                    ? countryData.languages.map((d) => d.name).join(", ")
                    : null}
                </span>
              </p>
            </div>
          </div>
          <div>
            Border Countries:
            {countryData.borders
              ? countryData.borders.map((d) => (
                  <CountryLinkButton key={d} code={d} />
                ))
              : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryDetails;
