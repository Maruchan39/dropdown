import Select from "./Select";
import React, { useState } from "react";
function Dropdown() {
  const [value, setValue] = useState("Please select your option");

  return (
    <Select value={value} onChange={(e) => setValue(e.currentTarget.value)} />
  );
}
export default Dropdown;
