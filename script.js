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
    const entryNumber = targetInputContainer.querySelectorAll("input[type='text']").length + 1;

    //Dynamic HTML string
    const HTMLString = `
    <label for="${userEntryChoice.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${userEntryChoice.value}-${entryNumber}-name" placeholder="Name">
    <label for="${userEntryChoice.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" id="${userEntryChoice.value}-${entryNumber}-calories" placeholder="Calories">
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString); //insert HTMLString as the last child
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const supperNumberInputs = document.querySelectorAll('#supper input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const supperCalories = getCaloriesFromInputs(supperNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    const budgetCalories = getCaloriesFromInputs([userBudget]);

    if(isError){
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + supperCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = (remainingCalories < 0) ? "Surplus" : "Deficit"; //Ternary Operator

    resultOutput.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;

    resultOutput.classList.remove("hide");
}

function getCaloriesFromInputs(list){
    let calories = 0;

    for(const item of list){
        const currentValue = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currentValue);

        if(invalidInputMatch){ // If invalidInputMatch is truthsy (true when converted to Boolean)
            alert(`Your Input Is Invalid: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }

        calories = calories + Number(currentValue);
    }
    return calories;
}

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    for(const container of inputContainers){
        container.innerHTML = "";
    }

    userBudget.innerHTML = "";
    resultOutput.innerText = "";
}

addChoiceButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);