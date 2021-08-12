import {  
  convertInputToANumber, 
  clearInput 
} from "./functions/InputElement.js"

import { 
  addToListIfNumber, 
  showOriginalListResult, 
  HandleClearList, 
  doubleEachValueInTheList, 
  sumAllValuesInTheList
 } from "./functions/list.js"


const inputElement = document.querySelector("#number")
const resultPlace = document.querySelector("span")
const secondResultPlace = document.querySelector(".content.-changed")
const clearSecondResultPlace = () => secondResultPlace.textContent = ""

/*============
HANDLE  CLICKS
============*/ 

document.handleAddToList = (event) => {

  event.preventDefault()
  const number = convertInputToANumber(inputElement)
  
  addToListIfNumber(number)
  showOriginalListResult(resultPlace)
  
  clearInput(inputElement)
  inputElement.focus()
  clearSecondResultPlace()
}

document.clearList = () => {
  HandleClearList(resultPlace)
  clearSecondResultPlace()
  inputElement.focus()
}

document.doubleValues = () => {
  doubleEachValueInTheList(secondResultPlace)
  inputElement.focus()
}

document.sumValues = () => {
  sumAllValuesInTheList(secondResultPlace)
  inputElement.focus()
}

