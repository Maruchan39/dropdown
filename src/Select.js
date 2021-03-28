import Option from "./Option";
import options from "./options";
function Select({ toggleOptionsOpen }) {
  return (
    <div>
      {options.map((option) => (
        <Option
        toggleOptionsOpen={toggleOptionsOpen}
          key={option.id}
          value={option.value}
        />
      ))}
    </div>
  );
}

export default Select;
