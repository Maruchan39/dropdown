import Option from "./Option";
import options from "./options";
function Select({value}) {
  return (
    <select>
        <option value="" disabled selected hidden>{value}</option>
      {options.map((option) => (
        <Option key={option.id} value={option.value} />
      ))}
    </select>
  );
}

export default Select;
