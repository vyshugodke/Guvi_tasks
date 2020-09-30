let cont = document.querySelector(".container");

function myFunc() {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        var url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'
        request.open('GET', url, true);
        request.send();
        request.onload = function() {
            var data = JSON.parse(this.response);

            resolve(data)
        };
    })
}


let data = myFunc()
data.then(function(result) {
    console.log(result);
})
data.then(function(result) {
        for (let i = 0; i < result.length; i++) {
            var row;
            let cdiv = divcol();
            let cdiv2 = div();
            let cdiv3 = div1();

            let h = h5(result[i].name);
            let p = para(result[i].region)
            let h2 = h6(result[i].capital)
            let p2 = para(result[i].currencies[0].name + " " + result[i].currencies[0].code + " " + result[i].currencies[0].symbol)
            let temp = a1(result[i].flag);
            let p3 = para("lat:" + " " + result[i].latlng[0] + " " + "lng:" + " " + result[i].latlng[1])

            if (i % 4 === 0) {
                row = divrow();
                cdiv3.append(h, p, h2, temp, p2, p3);
                cdiv2.append(cdiv3);
                cdiv.append(cdiv2);
                row.append(cdiv);

            } else {
                cdiv3.append(h, p, h2, temp, p2, p3);
                cdiv2.append(cdiv3);
                cdiv.append(cdiv2);
                row.append(cdiv);
                cont.append(row);
            }
        }
    })
    .catch(function(err) {
        console.log(err);
    });

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

function a1(href) {
    let element = document.createElement('a');
    element.className = 'btn btn-primary'
    element.innerHTML = 'view flag'
    element.setAttribute('href', href)
    return element;
}