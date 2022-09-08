import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-regular-svg-icons"

const Header = () => {
  return (
    <div className="flex p-8 items-center justify-between mb-10 shadow-lg">
      <div className="text-lg font-bold mx-1">Where in the world?</div>
      <div className="mx-1 text-base font-semibold">
        <FontAwesomeIcon icon={faMoon} className='mx-2'/>
        Dark Mode
      </div>
    </div>
  );
};

export default Header;
