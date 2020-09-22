function createElement(tagName, className, id = "") {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (id)
        element.id = id;
    return element;
}

let main = createElement("div", "main");
let row1 = createElement("div", "row");

let h1 = createElement("h1", "title");
h1.innerHTML = "AGE CALCULATOR";
row1.append(h1);


let row4 = createElement("div", "row");
let label = document.createElement("label");
label.for = "date";
label.innerHTML = "Select your Date of Birth";
let input = createElement("input", "date", "date");
input.value = "", input.min = "1970-01-01", input.type = "date",
    input.name = "date";
row4.append(label, input);

let row5 = createElement("div", "row");
let button = createElement("button", "btn");
button.addEventListener("click", showOutput);
button.innerHTML = "Submit";
row5.append(button);

let info1 = createElement("div", "row");
info1.className += " info";
let h2 = createElement("h1", "result");
info1.append(h2);

let info2 = createElement("div", "row");
info2.className += " info";
let h4 = createElement("h4", "result2");
info2.append(h4);

main.append(row1, row4, row5, info1, info2);

document.body.append(main);

// js starts here 

let months = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
};

let currentTime = new Date().toDateString().split(" ");
let curYear = +currentTime[3],
    curMonth = currentTime[1],
    curDate = +currentTime[2];

curMonth = months[curMonth];


let result = document.querySelector(".result");
let result2 = document.querySelector(".result2");
let a = ["", "year", "", "month", "", "day"];
let b = ["", "minutes,", "", "seconds,", "", "milliseconds"];
document.querySelector("#date").addEventListener("change", function() {
    let userInput = this.value;
    let array = userInput.split("-");
    let year = +array[0],
        month = array[1],
        date = +array[2];
    let userBirthDate = month + "/" + date + "/" + year;
    let currentDate = curMonth + "/" + curDate + "/" + curYear;

    let date1 = new Date(userBirthDate);
    let date2 = new Date(currentDate);
    let milliSecondDiff = date2.getTime() - date1.getTime();
    let secondsDiff = milliSecondDiff / 1000;
    let minutesDiff = secondsDiff / 60;

    let noOfDays = milliSecondDiff / (1000 * 3600 * 24);
    b[0] = minutesDiff;
    b[2] = secondsDiff;
    b[4] = milliSecondDiff;

    let noOfYears = parseInt(noOfDays / 365);
    let rem = parseInt(noOfDays % 365);
    let noOfMonths = parseInt(rem / 31);
    let daysLeft = parseInt(rem % 31);
    console.log(noOfDays);

    a[0] = noOfYears;
    a[2] = noOfMonths;
    a[4] = daysLeft;
});

function showOutput() {
    result.innerHTML = a.join(" ");
    result2.innerHTML = b.join(" ");
}