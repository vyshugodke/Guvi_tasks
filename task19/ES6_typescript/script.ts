
// chunk method

let chunk = (array, size) => {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
  }

chunk ([1,2,3,4], 2)


// find method

 let findMethod = (arr) => {
     let res;
     for(let i = 0; i < arr.length; i++){
         if (arr[i] > 3){
             res = arr[i];
             return res;
         }
     }
 }

findMethod([1,9,5,2,5]);


// reduce function

let reducefunc = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total;
}
reducefunc([1,2,3,4])

// filter function

let cities = [
    {name: 'Los angeles', population: '3792'},
    {name: 'New York', population: '8175'},
    {name: 'Chicago', population: '2695'},
    {name: 'Houston', population: '2099'},
    {name: 'Sydney', population: '1526'},
]


let filterfunc = (city) => {
    let bigCities = [];
    for (let i = 0; i < city.length; i++) {
        if (city[i].population > 3000) {
            bigCities.push(city[i]);
        }
    }
    return bigCities;
    }
    
    filterfunc(cities);


 // sum function

 let sumfunc = (tot) => {
     let sumof = 0;
     for (let i = 0; i < tot.length; i++){
         sumof += tot[i]
     }
     return sumof
 }
 sumfunc([2,4,6])
