let inputList = []

function addToListIfNumber(number) {
  return (number || number === 0)
  ? inputList.push(number)
  : alert("Please enter a valid number")
}

function showOriginalListResult(resultPlace) {

  if (!isListEmpty()) {
    const formatedList = inputList.map(number => " " + number)
    return resultPlace.innerHTML = `
      <p>
        your original list is: 
          <b>${formatedList}</b>
      </p>
      `
  }
  return resultPlace.textContent = ""
}

function isListEmpty() {
  return inputList.length === 0 ? true : false
}

function HandleClearList(resultPlace) {
  const successMessage = () => { 
    resultPlace.innerHTML = `
    <p>
      the list is 
        <strong>empty now</strong>.
    </p>
  `
}
  const failureMessage = () => {
    resultPlace.innerHTML = `
      <p>
        There's 
          <strong>nothing to clean</strong>,
         the list is already empty.
      </p>
    `
  }
  const clean = () => {
    inputList = []
    return successMessage()
  }
  return !isListEmpty() ? clean() : failureMessage()
}


function doubleEachValueInTheList(resultPlace) {
  
  const doubleEach = () => {
    const doubled =  inputList.map(number => " " + number * 2)
    return  resultPlace.innerHTML = `
      <p>
        The 
          <strong>double</strong> 
        values from the original list:
        <b>${doubled}</b>
      </p>
      `
  } 
  return !isListEmpty() ? doubleEach() :  ""
}


function sumAllValuesInTheList(resultPlace) {

  const sumAll = () => {
    const resultAllSummed = inputList.reduce((acc, number) => acc + number, 0)
    return resultPlace.innerHTML = `
      <p>The <strong>summed</strong> values from the original list: 
        <b>${resultAllSummed}</b>
      </p>
      `
  }
  return !isListEmpty() ? sumAll() : ""
}

export {
  addToListIfNumber,
  showOriginalListResult,
  HandleClearList,
  doubleEachValueInTheList,
  sumAllValuesInTheList
}
