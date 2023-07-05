//Qus c : Print the following details name, capital, flag using forEach function
var requst = new XMLHttpRequest();
requst.open("GET","https://restcountries.com/v3.1/all");
requst.send();
requst.onload = function(){
   var details = JSON.parse(requst.response);
    var values = Object.values(details);
    values.forEach((value) => {
     console.log("Country's Name : " +value.name.common);
     console.log("Capital : " +value.capital);
     console.log("Flag : " +value.flag);

});
}