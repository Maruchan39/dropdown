import Select from "./Select";
import React, { useState } from "react";
import options from "./options";
function Dropdown() {
  const [value, setValue] = useState(options[0].value);

  return (
    <Select value={value} onChange={(e) => setValue(e.currentTarget.value)} />
  );
}
export default Dropdown;
