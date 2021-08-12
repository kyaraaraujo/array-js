const convertInputToANumber = (inputValue) => {
  return parseInt(inputValue.value)
}

function clearInput(inputElement) {
  return inputElement.value="";
}

export { convertInputToANumber, clearInput}