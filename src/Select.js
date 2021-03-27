import Option from "./Option";
import options from "./options";
function Select() {
  return (
    <select>
      {options.map((option) => (
        <Option key={option.id} value={option.value} />
      ))}
    </select>
  );
}

export default Select;
