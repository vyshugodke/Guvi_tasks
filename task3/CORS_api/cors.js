let request = new XMLHttpRequest();

let url_string1 = "https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";


request.open('GET', url_string1, true)
request.send();

request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
}