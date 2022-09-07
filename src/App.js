import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import CountryCollection from "./components/countryCollection";
import CountryDetails from "./components/countryDetails";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <BrowserRouter>
          <React.Fragment>
            <Routes>
              <Route index element={<CountryCollection />} />
              <Route path="/:code" element={<CountryDetails />} />
            </Routes>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
