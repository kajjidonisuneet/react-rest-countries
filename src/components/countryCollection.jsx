import React, { Component } from "react";
import CountryCard from "./countryCard";
import axios from "axios";
import Dropdown from "../common/dropdown";

const baseUrl = "https://restcountries.com/v2/region/asia";
const baseUrl2 = "https://restcountries.com/v2/region/";

class CountryCollection extends Component {
  options = [
    {
      label: "Filter by Region",
      value: "none",
      disabled: true,
      selected: true,
      hidden: true,
    },
    { label: "Africa", value: "africa" },
    { label: "America", value: "americas" },
    { label: "Asia", value: "asia" },
    { label: "Europe", value: "europe" },
    { label: "Oceania", value: "oceania" },
  ];

  state = {
    countries: [],
  };

  async componentDidMount() {
    const { data: countries } = await axios.get(baseUrl);
    this.setState({ countries });
  }

  handleRegionChange = async (e) => {
    try {
      const selectedRegion = e.target.value;
      const { data: countries } = await axios.get(baseUrl2 + selectedRegion);
      this.setState({ countries });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { countries } = this.state;
    return (
      <React.Fragment>
        <div>
          <Dropdown
            options={this.options}
            name="selectedRegion"
            onChange={this.handleRegionChange}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 p-10">
          {countries.map((c) => (
            <CountryCard countryData={c} key={c.alpha3Code} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default CountryCollection;
