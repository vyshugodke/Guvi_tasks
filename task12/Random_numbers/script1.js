function createColumn(element, className, id = '') {
    var col = document.createElement(element)
    col.setAttribute('class', className)
    col.id = id
    return col;
}

var cont = createColumn('div', 'cont');
var para = document.createElement('p');
para.innerHTML = 'Generate random 8 digit number'
var button = document.createElement('button', 'btn');
button.innerHTML = 'Click here'
button.addEventListener('click', gen)
var para1 = createColumn('p', 'main');
cont.append(para, button, para1);
document.body.append(cont);

// js script starts here 

let final;

function random_num(min, max) {
    let val = Math.floor(Math.random() * (max - min)) + min;
    let randm = val.toString().split("");
    let val2 = new Set(randm);
    if (val2.size == randm.length) {
        final = val;
        return;
    } else {
        random_num(min, max);
    }

}

function gen() {
    random_num(10000000, 99999999);
    para1.innerHTML = final;
}