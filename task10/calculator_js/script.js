let cal = document.createElement("div");
cal.id = "calc-contain";

let form = document.createElement("form")
form.name = "calculator";

let text = document.createElement("input");
text.type = "text";
text.name = "answer";

let i1 = createInput("1");
let i2 = createInput("2");
let i3 = createInput("3");
let i4 = createInput("+");
let i5 = createInput("4");
let i6 = createInput("5");
let i7 = createInput("6");
let i8 = createInput("-");
let i9 = createInput("7");
let i10 = createInput("8");
let i11 = createInput("9");
let i12 = createInput("*");
let i13 = createInput("clear");
let i14 = createInput("0");
let i15 = createInput("=");
let i16 = createInput("/");



form.append(text, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16);
cal.append(form);
document.body.append(cal);

function createInput(value) {
    let inp = document.createElement("input");
    inp.value = value;
    inp.classList.add(value);
    inp.type = "button";

    return inp;
}

document.querySelector("#calc-contain").addEventListener("click", e => {

    let num = e.target.value;
    if (!num) {
        return;
    }

    if (num === "=") {
        calculator.answer.value = eval(calculator.answer.value);
        return;
    }
    if (num === "clear") {
        calculator.answer.value = '';
        return;
    }

    calculator.answer.value += num;

})