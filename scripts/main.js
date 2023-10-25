"use strict"

let additionForm = document.getElementById("additionForm")
additionForm.onsubmit= calculateSum

let addressForm = document.getElementById("addressForm")
addressForm.onsubmit= calculateAddress

function calculateSum (event){
    event.preventDefault()
    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber
    let sum = x + y 
    
    let resultDiv = document.getElementById("additonResult")
    resultDiv.innerHTML = `<h4> ${x}+ ${y} =  <span class= "display-result-red"> ${sum} </span></h4> `


}

function calculateAddress (event){
    event.preventDefault()
    let city2 = event.target.elements.city.value
    let state2 = event.target.elements.state.value
    let country2 = event.target.elements.country.value



    let addressResult = document.getElementById("addressResult")

    addressResult.innerHTML = `<h4> Address: = <span class= "display-result-red"> ${city2}, ${state2}, ${country2}   </span></h4>`
}
