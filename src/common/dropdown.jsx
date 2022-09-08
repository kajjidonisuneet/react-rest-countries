import React from "react";

const Dropdown = ({ name, options, onChange }) => {
  return (
    <div className="">
      <select
        className="p-5 bg-white shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] m-5 rounded-lg"
        name={name}
        onChange={onChange}
        defaultValue={'DEFAULT'}
      >
        {options.map((option) => (
          <option disabled={option.disabled} hidden={option.hidden} key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
