import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ value, onChange, onKeyDown }) => {
  return (
    <div className="p-5 shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] m-5 rounded-lg bg-white  dark:bg-darkBlue dark:text-white">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2" />
      <input
        type="text"
        name="query"
        className="mx-2 md:text-xl md:font-semibold  dark:bg-darkBlue dark:text-white"
        placeholder="Search for a country..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            return onKeyDown();
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
