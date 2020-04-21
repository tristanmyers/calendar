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
*/

const cellElement = document.querySelectorAll('.cell');
const cellContainer = document.querySelectorAll('.cells');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
 'Saturday', 'Sunday'];
// let numberOfCells = daysOfMonth.length();

function getNextMonth() {
    let nextMonth = new Date();
    console.log(nextMonth.getMonth() + 2);
}

function getMonths(monthNumber) {
    let month = new Date();
    console.log(month.getMonth(1) + monthNumber);
}

function getLastDay(month, year) {
    return new Date(year, month, 0).getDate();
}

function getFirstLastDay() { 
    let date = new Date(); 
    let firstDay =  new Date(date.getFullYear(), date.getMonth(), 1); 
    let lastDay =  new Date(date.getFullYear(), date.getMonth() + 1, 0)
    let daysInMonth = getLastDay(date.getMonth() + 1, date.getFullYear());
    
    console.log(firstDay);
    console.log(lastDay);
    console.log('Days in month '+ daysInMonth);
}

function changeMonthHeader() {
    let month = new Date();
    let currentMonth = month.getMonth();
    const monthHeaderElement = document.querySelector('.month');

    monthHeaderElement.innerHTML = monthNames[currentMonth];
}

function changeDayOfWeek() {
    let date = new Date();
    let dayOfWeek = date.getDate();
}

function changeDayOfMonth() {
    let date = new Date();
    let dayOfMonth = date.getDate();  
    const MonthDayElements = document.querySelectorAll('.day-of-month');
    let dayOfMonthElementsArray = [MonthDayElements];
    console.log(dayOfMonthElementsArray);

    MonthDayElements[dayOfMonth - 1].innerHTML = dayOfMonth;
}

changeMonthHeader();
getFirstLastDay();
changeDayOfMonth();