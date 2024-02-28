"use strict";

const calorieCounter = document.getElementById("calo_counter");
const userBudget = document.getElementById("budget");
const userEntryChoice = document.getElementById("entry_dropdown");
const addChoiceButton = document.getElementById("add_entry");
const clearCounterButton = document.getElementById("clear");
const resultOutput = document.getElementById("res_output");
let isError = false;

function cleanInputString(str) {
    const strArray = str.split('');
    const cleanStrArray = [];
  
    for (let i = 0; i < strArray.length; i++) {
      if (!["+", "-", " "].includes(strArray[i])) {
        cleanStrArray.push(strArray[i])
      }
    }
  }