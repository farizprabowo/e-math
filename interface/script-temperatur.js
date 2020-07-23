//Fetch all DOM elements
let inputUnit = document.getElementById('inputUnit');
let inputNumber = document.getElementById('inputNumber');
let celsiusCard = document.getElementById('celsiusCard');
let fahrenheitCard = document.getElementById('fahrenheitCard');
let kelvinCard = document.getElementById('kelvinCard');
let reaumurCard = document.getElementById('reaumurCard');
let rankineCard = document.getElementById('rankineCard');
let toReaumur = document.getElementById('toReaumur');
let toCelsius = document.getElementById('toCelsius');
let toFahrenheit = document.getElementById('toFahrenheit');
let toKelvin = document.getElementById('toKelvin');
let toRankine = document.getElementById('toRankine');

//Hide input value box and output cards
inputNumber.style.visibility = 'hidden';
output.style.visibility = 'hidden';

//Selected item or option
let mySelect = '0';

//List of all cards
let cardArray = ['reaumurCard', 'celsiusCard', 'fahrenheitCard', 'kelvinCard', 'rankineCard'];

//Listen for change in the select box
inputUnit.addEventListener('change', (e) => {

    // Make input box and cards visible
    inputNumber.style.visibility = 'visible';
    output.style.visibility = 'visible';

    //Get current selected option
    let val = e.target.value;

    if (val === '0') {
        mySelect = 0;
        inputNumber.style.visibility = 'hidden';
        output.style.visibility = 'hidden';
    }
    if (val === '1') {
        mySelect = 1;
        noCard('celsiusCard');
    }
    if (val === '2') {
        mySelect = 2;
        noCard('fahrenheitCard');
    }
    if (val === '3') {
        mySelect = 3;
        noCard('kelvinCard');
    }
    if (val === '4') {
        mySelect = 4;
        noCard('rankineCard');
    }
    if (val === '5') {
        mySelect = 5;
        noCard('reaumurCard');
    }
});

function noCard(card) {
    for (i = 0; i < cardArray.length; i++) {
        if (cardArray[i] === card) {
            // Hide this card and display the other cards
            document.getElementById(cardArray[i]).style.display = 'none';
        } else {
            document.getElementById(cardArray[i]).style.display = 'block';
        }
        // Update values
        updateValues();
    }
}

// Convert Inputs values
inputNumber.addEventListener('input', (e) => {

    //Get current input values
    let val = e.target.value;

    //Convert weights
    wgtConversion(mySelect, val);
});

//Update values once selection changed
function updateValues() {
    let val = inputNumber.value;
    wgtConversion(mySelect, val);
}
/**
 * Conversion ratios
 * switch statement
 **/
function wgtConversion(mySelect, val) {
    switch (mySelect) {
        case 1: // From Celsius to..
            toReaumur.innerHTML = (val * 0.8).toFixed(2);
            toFahrenheit.innerHTML = (val * 1.8 + 32).toFixed(2);
            toKelvin.innerHTML = ((+val) + (+273.15)).toFixed(2);
            toRankine.innerHTML = (val * (+1.8) + (+32) + (+459.67)).toFixed(2);
            break;

        case 2: // From Fahrenheit to..
            toReaumur.innerHTML = (( val - 32) / 2.25).toFixed(2);
            toCelsius.innerHTML = (( val - 32) / 1.8).toFixed(2);
            toKelvin.innerHTML = (((+val) + (+459.67)) / 1.8).toFixed(2);
            toRankine.innerHTML = ((+val) + (+459.67)).toFixed(3);
            break;

        case 3: // From Kelvin to..
            toReaumur.innerHTML = ((val - 273.15) * 0.8).toFixed(2);
            toCelsius.innerHTML = (val - 273.15).toFixed(2);
            toFahrenheit.innerHTML = (val * 1.8 - 459.67).toFixed(2);
            toRankine.innerHTML = (val * 1.8).toFixed(2);
            break;

        case 4: // From Rankine to..
            toReaumur.innerHTML = ((val - 32 - 459.67) / 2.25).toFixed(2);
            toCelsius.innerHTML = ((val - 32 - 459.67) / 1.8).toFixed(2);
            toFahrenheit.innerHTML = (val - 459.67).toFixed(2);
            toKelvin.innerHTML = (val / 1.8).toFixed(2);
            break;

        case 5: // From Réaumur to..
            toCelsius.innerHTML = (val * 1.25).toFixed(2);
            toFahrenheit.innerHTML = (val * 2.25 + 32).toFixed(2);
            toKelvin.innerHTML = (val * 1.25 + 273.15).toFixed(2);
            toRankine.innerHTML = (val * 2.25 + 32 + 459.67).toFixed(2);
            break;
    }
}