import React, { Component } from "react";
import CountryCard from "./countryCard";
import axios from "axios";
import Dropdown from "../common/dropdown";
import SearchBox from "./searchBox";
import { MagnifyingGlass } from "react-loader-spinner";
import config from "../config.json";

const apiUrl = config.apiUrl;

class CountryCollection extends Component {
  options = [
    {
      label: "Filter by Region",
      value: "DEFAULT",
      disabled: true,
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
    searchQuery: "",
    loading: true,
    cardsToDisplay: true,
  };

  async componentDidMount() {
    const { data: countries } = await axios.get(apiUrl + "region/asia");
    this.setState({ countries, loading: false });
  }

  handleRegionChange = async (e) => {
    try {
      this.setState({ loading: true, cardsToDisplay: true });
      const selectedRegion = e.target.value;
      const { data: countries } = await axios.get(
        apiUrl + "region/" + selectedRegion
      );
      this.setState({ countries, loading: false });
    } catch (error) {
      this.setState({ cardsToDisplay: false });
    }
  };

  updateSearchQuery = async (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery, cardsToDisplay: true });
  };

  getSearchData = async () => {
    try {
      this.setState({ loading: true, countries: [], cardsToDisplay: true });
      const { data: countries } = await axios.get(
        apiUrl + "name/" + this.state.searchQuery
      );
      this.setState({ countries, loading: false, cardsToDisplay: true });
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.setState({ loading: false, cardsToDisplay: false });
    }
  };

  render() {
    const { countries } = this.state;
    return (
      <React.Fragment>
        <div>
          <SearchBox
            value={this.state.searchQuery}
            onChange={this.updateSearchQuery}
            onKeyDown={this.getSearchData}
          />
          <Dropdown
            options={this.options}
            name="selectedRegion"
            onChange={this.handleRegionChange}
          />
        </div>
        <div className="flex flex-col items-center">
          {this.state.loading && (
            <div>
              <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
              />
            </div>
          )}
          {!this.state.cardsToDisplay && <div>No Data</div>}
          <div className="">
            {countries.map((c) => (
              <CountryCard countryData={c} key={c.alpha3Code} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CountryCollection;

// className="grid grid-cols-4 gap-4 p-10"
