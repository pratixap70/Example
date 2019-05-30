function myFunction() {
    window.location.href = "https://www.google.com";

}

var countries = ["Australia", "USA", "India", "France"];
document.getElementById("demo").innerHTML = countries;

function make() {
    countries.sort();
    countries.reverse();
    document.getElementById("demo").innerHTML = countries;

}