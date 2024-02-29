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
    const targetId = "#" + userEntryChoice.value;
    const targetInputContainer = document.querySelector(targetId + " .input-container"); 
    //consider using template literal `${targetId} .input-container`, variable targetId won't be required. Check next line.
    //const targetInputContainer = document.querySelector(`#${userEntryChoice.value} .input-container`);

    const entryNumber = targetInputContainer.querySelectorAll("input[type='text']").length;
}