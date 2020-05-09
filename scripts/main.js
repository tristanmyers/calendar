/*
    make function parameters number of how many months ahead 
    and add that number to getMonth().

    I can leave this out for now but eventually make it where you can select 
    months ahead.
*/

const cellElementsArray = Array.from(document.querySelectorAll('.cell'));
const cellElements = document.querySelectorAll('.cell');
const cellContainer = document.querySelectorAll('.cells');
const dayOfMonthEle = document.querySelectorAll('.day-of-month');
let numberOfCells = 31;
let date = new Date();
let lastDay =  new Date(date.getFullYear(), date.getMonth() + 1, 0);
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 // creating an array with numbers 1-31.
let dayNumbers = [];

for (let i = 1; i < 32; i++) {
    dayNumbers.push(i);
}

function getLastDay(month, year) {
    return new Date(year, month, 0).getDate();
}

// gets the first and last day of the current month.
// also the last day is being used for days in month.
function getFirstLastDay() { 
    let date = new Date(); 
    let firstDay =  new Date(date.getFullYear(), date.getMonth(), 1); 
    let lastDay =  new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let daysInMonth = getLastDay(date.getMonth() + 1, date.getFullYear());
    
    console.log(firstDay);
    console.log(lastDay);
    console.log('Days in month '+ daysInMonth);
}

// change month header to current month.
function changeMonthHeader() {
    const options = {month: 'long'};
    let currentMonth = new Date();
    const monthHeaderElement = document.querySelector('.month');

    return monthHeaderElement.innerHTML = currentMonth.toLocaleDateString('en-US', options);
}

function removeCells() {
    cellElementsArray.splice(30, 1);
//    return cellElements.remove();
}

// changes the date on the top right to current date.
function changeDate() {
    const dateEle = document.querySelector('.date');
    let dateFormat = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`; 

    return dateEle.innerHTML = dateFormat;
}

function changeWeekDay() {
    const options = {weekday: 'long'};
    // const dayOfWeek = cellElements[0].childNodes[1];
    let currentDay = new Date();
    // testing adding a week day for each cell.
    for(let i = 0; i < numberOfCells; i++) {
        cellElementsArray.forEach(cell => {
            return cellElementsArray.innerHTML = weekDays;
        });
    }

    // return dayOfWeek.innerHTML = currentDay.toLocaleDateString('en-US', options);
}

// ISSUE: can click anywhere on the page and pull up task card.
// TODO: make the task-card specific to which cell is clicked on.
function clickCell() {
    const td = document.querySelector('td');
    const taskCard = document.querySelector('.task-card-container');

    addEventListener('click', () => {
        if (taskCard.style.visibility == 'visible') {
            taskCard.style.visibility = 'hidden';
        } else {
            return taskCard.style.visibility = 'visible';
        }
    });
}