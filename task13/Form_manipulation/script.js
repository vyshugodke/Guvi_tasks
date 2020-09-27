let result = {
    Firstname: "",
    Lastname: "",
    Address: "",
    Pinode: "",
    Gender: "",
    Food: [],
    Country: "",
    State: "",
}
let num = 0;

let form = document.querySelector("form")

function createElement(tagName, classname) {
    let temp = document.createElement(tagName)
    temp.setAttribute('class', classname)
    return temp;
}

let values = [];


form.addEventListener('submit', function(e) {
    e.preventDefault()
    let data = e.target;

    for (let i = 0; i < data.length - 1; i++) {
        if (i === 4 || i === 5) {
            if (data[i].checked) {
                result.Gender = (data[i].value)
            }
        } else if (i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11) {
            if (data[i].checked) {
                (result.Food).push(data[i].value)
            }
        } else {
            values.push(data[i].value)

        }
    }

    result.Firstname = values[0];
    result.Lastname = values[1];
    result.Address = values[2];
    result.Pinode = values[3];
    result.Country = values[4];
    result.State = values[5];
    getresult();
    result.Food = [];
})

function getresult() {
    let first = createElement('tr');
    let data_one = document.querySelector('#data_one');
    first.append(++num);
    for (let k in result) {
        let td = createElement('td');
        if (typeof k == "array") {
            td.innerHTML = result[k].split(",");
        } else {
            td.innerHTML = result[k];
            first.append(td);
            console.log(first)
        }
    }
    data_one.appendChild(first)
}