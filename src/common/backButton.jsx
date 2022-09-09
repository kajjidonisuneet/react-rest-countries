import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mb-10 ">
      <button
        className="px-6 py-3 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] m-5 rounded-lg md:text-xl md:font-semibold  dark:bg-darkBlue dark:text-white"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="mx-2" />
        Back
      </button>
    </div>
  );
};

export default BackButton;
