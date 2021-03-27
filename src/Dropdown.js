import React, { useState } from "react";
import options from "./options";
function Dropdown() {
const [value, setValue] = useState(options[0].value);

  return (
    <div>
      <select value={value}
      onChange={e => setValue(e.currentTarget.value)}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
