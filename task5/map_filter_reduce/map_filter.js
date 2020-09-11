var request = new XMLHttpRequest();
var rest_url = ("https://restcountries.eu/rest/v2/all")
request.open('GET', rest_url, true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response)
        // console.log(data);
        // Get the countries in asia - filter 

    let Asiacnt = data.filter((data) => { return (data.region === "Asia") })
    console.log("Countries in Asia:")
    console.log(Asiacnt);

    // Get the countries with population less than 2L - fliter

    let pop = data.filter((data) => { return (data.population < "200000") })
    console.log(pop);

    // Bumpup the current population  of all the counteirs by 1L - Map 

    let popul = data.map((data) => { return (data.population + 100000) })
    console.log(popul);


    // convert all the names in capital - map

    let capnames = data.map((data) => { return (data.name.toUpperCase()) })
    console.log(capnames);

    // print follwoig details  name , capital , flag  - foreach,filter
    let details = data.forEach((data) => {
        console.log(data.name, data.capital, data.flag)
    });


    // Print the total population of the countries  - reduce
    let totalpopul = data.reduce((acc, val) => { return (val.population) })
    console.log(totalpopul);

    // Print the total population of the countries in asia - filter & reduce)
    let totalasia = Asiacnt.reduce((total, a) => total + a.population, 0)
    console.log(totalasia);


}
