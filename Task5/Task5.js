//Qus e : Print the country which uses US Dollars as currency
var requst = new XMLHttpRequest();
requst.open("GET","https://restcountries.com/v3.1/all");
requst.send();
requst.onload = function(){
    var result = JSON.parse(requst.response);
    var countries = result.filter((ele)=>ele.currencies);
  // console.log(countries);
   var currencies = countries.filter((ele)=>ele.currencies.USD);
  // console.log(currencies)
   var name = currencies.map((ele)=>ele.name.common);
   console.log("The countries which uses US Dollars as currency : " + name);
}