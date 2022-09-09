import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div className="flex p-8 items-center justify-between mb-10 shadow-lg bg-white dark:bg-darkBlue">
      <div className="text-lg font-bold mx-1 md:text-4xl md:mx-10 text-veryDarkBlueLMT dark:text-white">
        Where in the world?
      </div>
      <div
        onClick={() => {
          document.body.classList.toggle("dark");
        }}
        className="mx-1 text-base font-semibold md:text-2xl md:font-bold md:mx-10 text-veryDarkBlueLMT dark:text-white hover:cursor-pointer"
      >
        <FontAwesomeIcon icon={faMoon} className="mx-2" />
        Dark Mode
      </div>
    </div>
  );
};

export default Header;
