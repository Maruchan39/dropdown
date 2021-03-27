import options from "./options"
function Select() {
  return (
    <select>
      {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
    </select>
  );
}

export default Select;
