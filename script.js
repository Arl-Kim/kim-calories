"use strict";

const calorieCounter = document.getElementById("calo_counter");
const userBudget = document.getElementById("budget");
const userEntryChoice = document.getElementById("entry_dropdown");
const addChoiceButton = document.getElementById("add_entry");
const clearCounterButton = document.getElementById("clear");
const resultOutput = document.getElementById("res_output");
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g; // Checks for +, - and white space in String. g is flag (global).
    
    return str.replace(regex, ""); //Replaces regex values with empty String in str and returns it.
}