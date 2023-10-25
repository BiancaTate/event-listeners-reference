"use strict"

window.onload = function (event) {
    let additionForm = document.getElementById("additionForm")
    additionForm.onsubmit = calculateSum

    let addressForm = document.getElementById("addressForm")
    addressForm.onsubmit = calculateAddress

    let ghostBoy = document.getElementById("👻")
    console.log(ghostBoy)
}

function calculateSum(event) {
    event.preventDefault()
    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber
    let sum = x + y

    let resultDiv = document.getElementById("additonResult")
    resultDiv.innerHTML = `<h4> ${x}+ ${y} =  <span class= "display-result-red"> ${sum} </span></h4> `


}

function calculateAddress(event) {
    event.preventDefault()
    let city2 = event.target.elements.city.value
    let state2 = event.target.elements.state.value
    let country2 = event.target.elements.country.value



    let addressResult = document.getElementById("addressResult")

    addressResult.innerHTML = `<h4> Address: = <span class= "display-result-red"> ${city2}, ${state2}, ${country2}   </span></h4>`
}

document.onkeydown= function (event){
    console.log(event)

    if (event.key=== "?"){
        console.log(showHelpBox())
    } if (event.key=== "ArrowUp"){
        console.log(movePlayerUp())
    }
    if (event.key=== "ArrowDown"){
        console.log(movePlayerDown())
    }
    if (event.key=== "ArrowLeft"){
        console.log(movePlayerLeft())
    }
    if (event.key=== "ArrowRight"){
        console.log(movePlayerRight())
    }



}

document.onclick= function flipGhost(event){
    event.target.classList.toggle("flipped")
    console.log("Ghost should be flipped")
}



