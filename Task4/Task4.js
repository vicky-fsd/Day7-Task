//Qus d :Print the total population of countries using reduce function
var requst = new XMLHttpRequest();
requst.open("GET","https://restcountries.com/v3.1/all");
requst.send();
requst.onload = function(){
    var result = JSON.parse(requst.response);
    var countries = result.filter((ele)=>ele.population);
   //  console.log(countries);
  var population = countries.map((ele)=>ele.population);
  console.log(population);
  var totalPopulation = population.reduce((acc,value)=>acc+value);
   console.log("Total Population of the Countries : " + totalPopulation);
}