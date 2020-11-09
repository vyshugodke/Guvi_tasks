let cont = document.createElement('div')
cont.className = 'container'
let h1 = document.createElement('h1')
h1.innerHTML = "RestCountries & Weather using fetch API"
cont.appendChild(h1)
document.body.append(cont)

let divclass = document.createElement('div')
divclass.className = "modal fade"
divclass.id = "exampleModal"
divclass.setAttribute("tabindex", "-1");
divclass.setAttribute("aria-labelledby", "exampleModalLabel");
divclass.setAttribute("aria-hidden", "true");
let divclass2 = document.createElement('div')
divclass2.className = "modal-dialog"
let divclass3 = document.createElement('div')
divclass3.className = "modal-content"
let divclass4 = document.createElement('div')
divclass4.className = "modal-header"
let btn1 = document.createElement('button')
btn1.className = "close"
btn1.setAttribute("type", "button")
btn1.setAttribute("data-dismiss", "modal")
btn1.setAttribute("aria-label", "Close")
let span1 = document.createElement('span')
span1.setAttribute("aria-hidden", "true")
span1.innerHTML = '&times'
let divclass5 = document.createElement('div')
divclass4.className = "modal-body"
btn1.appendChild(span1)
divclass4.appendChild(btn1)
divclass3.append(divclass4, divclass5)
divclass2.appendChild(divclass3)
divclass.appendChild(divclass2)
document.body.appendChild(divclass)


async function fetchdata() {
    let response = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    let data = await response.json()
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        var row;
        let cdiv = divcol();
        let cdiv2 = div();
        let cdiv3 = div1();

        let h = h5(data[i].name);
        let p = para(data[i].region)
        let h2 = h6(data[i].capital)
        let p2 = para(data[i].currencies[0].name + " " + data[i].currencies[0].code + " " + data[i].currencies[0].symbol)
        let temp = imge(data[i].flag)
        let p3 = para("lat:" + " " + data[i].latlng[0] + " " + "lng:" + " " + data[i].latlng[1])
        let btn1 = btn(data[i].name)


        if (i % 4 === 0) {
            row = divrow();
            cdiv3.append(h, p, h2, temp, p2, p3, btn1);
            cdiv2.append(cdiv3);
            cdiv.append(cdiv2);
            row.append(cdiv);

        } else {
            cdiv3.append(h, p, h2, temp, p2, p3, btn1);
            cdiv2.append(cdiv3);
            cdiv.append(cdiv2);
            row.append(cdiv);
            cont.append(row);
        }
    }

}
fetchdata()

cont.addEventListener('click', (e) => {
    let country = e.target.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=4fdcde0d0c1a59d3e6feeddd415f5d9f')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            let divinfo = document.querySelector('.modal-body')
            divinfo.innerHTML = nameValue + "-" + descValue + "," + "Temperature - " + tempValue;

        })

})


function divcol() {
    let element = document.createElement('div');
    element.className = "col-sm-12 col-md-6 col-lg-3"
    return element;
}


function div() {
    let element = document.createElement('div');
    element.className = 'card'
    return element;
}

function divrow() {
    let element = document.createElement('div');
    element.className = 'row'
    return element;
}

function div1() {
    let element = document.createElement('div');
    element.className = 'card-body'

    return element;
}

function h5(name) {
    let element = document.createElement('h5');
    element.className = 'card-title'
    element.innerHTML = name
    return element;
}

function h6(capital) {
    let element = document.createElement('h6');
    element.className = 'card-title'
    element.innerHTML = capital
    return element;
}

function para(region) {
    let element = document.createElement('div');
    element.className = 'card-text'
    element.innerHTML = region
    return element;
}

function imge(img) {
    let element = document.createElement('img');
    element.className = 'card-img-top'
    element.setAttribute('src', img)
    return element;
}

function btn(name) {
    let element = document.createElement('button');
    element.className = 'btn btn-primary'
    element.setAttribute('data-toggle', "modal");
    element.setAttribute('data-target', "#exampleModal")
    element.innerHTML = 'Check Weather'
    element.value = name
    return element;
}