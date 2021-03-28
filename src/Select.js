import Option from "./Option";
import options from "./options";
function Select({ toggleOptionsOpen, setValue }) {
  return (
    <div>
      {options.map((option) => (
        <Option
        toggleOptionsOpen={toggleOptionsOpen}
        setValue={setValue}
          key={option.id}
          value={option.value}
        />
      ))}
    </div>
  );
}

export default Select;
