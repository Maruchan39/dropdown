function Option({value, toggleOptionsOpen, setValue}) {
  return <div  onClick={() => {toggleOptionsOpen();setValue(value)}
}>
      {value}
  </div>
}

export default Option;