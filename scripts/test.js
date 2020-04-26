const cellElements = Array.from(document.querySelectorAll('.cell'));
const cellContainer = document.querySelectorAll('.cells');
let dayOfMonthEle = document.querySelectorAll('.day-of-month');


// creating an array of numbers 1-31.
let dayNumbers = [];

for (let i = 1; i < 32; i++) {
    dayNumbers.push(i);
}

// putting that array into the day-of-month elements
for (dayOfMonthEle of cellElements) {
    dayOfMonthEle.innerHTML = dayNumbers[0];
    break;
}

class Cell {
    constructor (dayOfWeek, dayOfMonth, isFree) {
        this.dayOfWeek = dayOfWeek;
        this.dayOfMonth = dayOfMonth;
        this.isFree = isFree;
    }

}

let newCell = new Cell('Monday', 24, true);

for (const element of cellElements) {
    // dayOfMonthEle.appendChild(dayNumbers);
}