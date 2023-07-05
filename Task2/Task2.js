//Qus b : Get all the countries with a population of less than 2 lakhs using Filter function
var requst = new XMLHttpRequest();
requst.open("GET","https://restcountries.com/v3.1/all");
requst.send();
requst.onload = function(){
    var result = JSON.parse(requst.response);
    var countries = result.filter((ele)=>ele.population<200000);
   //console.log(countries);
    var name = countries.map((ele)=>ele.name.common);
   console.log(name);
}