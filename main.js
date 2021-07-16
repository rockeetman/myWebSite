
// Function for convert temperature from F to C
function fahenreit(number) {
   number = parseFloat(number);
   document.getElementById("celsius").innerHTML = Math.floor((number - 32) * (5 / 9));
}

// Function for convert temperature from F to C
function celsius(number) {
   number = parseFloat(number);
   document.getElementById("fahenreit").innerHTML = Math.floor((number * (9 / 5) + 32));
}

// Function for convert temperature from F to C
function kelvin(number) {
   number = parseFloat(number);
   document.getElementById("kelvin").innerHTML = Math.floor((number - 273.15));
}