function Option({value, toggleOptionsOpen}) {
  return <div  onClick={() => toggleOptionsOpen()}>
      Option{value}
  </div>
}

export default Option;