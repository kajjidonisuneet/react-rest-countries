import React from "react";

const Dropdown = ({ name, options, onChange }) => {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
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
