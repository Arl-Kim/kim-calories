"use strict";

const calorieCounter = document.getElementById("calo_counter");
const userBudget = document.getElementById("budget");
const userEntryChoice = document.getElementById("entry_dropdown");
const addChoiceButton = document.getElementById("add_entry");
const clearCounterButton = document.getElementById("clear");
const resultOutput = document.getElementById("res_output");
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g; // Checks for +, - and white space in String. g is flag (global)(all matches).
    
    return str.replace(regex, ""); //Replaces regex values with empty String in str and returns it.
}

function isInvalidInput(str){
    const regex = /\d+e\d+/i; //i is flag (insensitive). The + modifier in a regex allows you to match a pattern that occurs one or more times. \d is shorthand for any digit.

    return str.match(regex); //return an array of match results – containing the first match.
}

function addEntry(){
    const targetInputContainer = document.querySelector(`#${userEntryChoice.value} .input-container`); 
    const entryNumber = targetInputContainer.querySelectorAll("input[type='text']").length;

    //Dynamic HTML string
    const HTMLString = `
    <label for="${userEntryChoice.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${userEntryChoice.value}-${entryNumber}-name" placeholder="Name">
    <label for="${userEntryChoice.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" id="${userEntryChoice.value}-${entryNumber}-calories" placeholder="Calories">
    `;

    targetInputContainer.innerHTML = targetInputContainer.innerHTML + HTMLString;
}

addChoiceButton.addEventListener("click", addEntry);