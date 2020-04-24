/*
    make function parameters number of how many months ahead 
    and add that number to getMonth().

    use the last day to decide how many cells i need.

    calendar will probably will only display last, current, 
    and next month always.

    I can leave this out for now but eventually make it where you can select 
    months ahead.

    decide what day of the week the month starts by starting the 
    month page with the last known day the last month ended.

    could just number every cell for each cell number 1-3l.
        for the last day of month is less than 31 then remove
        cells until number of cells is equal to last day of month.
*/

const cellElements = Array.from(document.querySelectorAll('.cell'));
const cellContainer = document.querySelectorAll('.cells');
let numberOfCells = 31;
let date = new Date();
let lastDay =  new Date(date.getFullYear(), date.getMonth() + 1, 0);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
 'Saturday', 'Sunday'];

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
    let month = new Date();
    let currentMonth = month.getMonth();
    const monthHeaderElement = document.querySelector('.month');

    return monthHeaderElement.innerHTML = monthNames[currentMonth];
}

// change day of week in the cell.
// make sure to match according to month being displayed.
function changeDayOfWeek() {
    let date = new Date();
    let dayOfWeek = date.getDate();
}

function removeCells() {
   cellElements.splice(30, 1);
//    return cellElements.remove();
}

changeMonthHeader();
removeCells();