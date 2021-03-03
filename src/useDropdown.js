import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `user-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const dropDown = () => (
    <label htmlFor={label}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((selectOption) => {
          return (
            <option value={selectOption} key={selectOption}>
              {selectOption}
            </option>
          );
        })}
      </select>
    </label>
  );

  return [state, dropDown, setState];
};

export default useDropdown;
