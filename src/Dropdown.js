import Select from "./Select";
import React, { useState } from "react";
function Dropdown() {
  const [value, setValue] = useState("Please select your option");
  const [optionsOpen, setOptionsOpen] = useState(false);
  const toggleOptionsOpen = () => {
    setOptionsOpen(!optionsOpen);
  };

  return (
    <div>
      {optionsOpen ? (
        <Select toggleOptionsOpen={toggleOptionsOpen}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      ) : (
        <div onClick={() => toggleOptionsOpen()}>{value}</div>
      )}
    </div>
  );
}
export default Dropdown;
