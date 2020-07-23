//Fetch all DOM elements
let inputUnit = document.getElementById('inputUnit');
let inputNumber = document.getElementById('inputNumber');
let sentimeterCard = document.getElementById('sentimeterCard');
let meterCard = document.getElementById('meterCard');
let kilometerCard = document.getElementById('kilometerCard');
let milCard = document.getElementById('milCard');
let inciCard = document.getElementById('inciCard');
let toMil = document.getElementById('toMil');
let toSentimeter = document.getElementById('toSentimeter');
let toMeter = document.getElementById('toMeter');
let toKilometer = document.getElementById('toKilometer');
let toInci = document.getElementById('toInci');

//Hide input value box and output cards
inputNumber.style.visibility = 'hidden';
output.style.visibility = 'hidden';

//Selected item or option
let mySelect = '0';

//List of all cards
let cardArray = ['milCard', 'sentimeterCard', 'meterCard', 'kilometerCard', 'inciCard'];

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
        noCard('sentimeterCard');
    }
    if (val === '2') {
        mySelect = 2;
        noCard('meterCard');
    }
    if (val === '3') {
        mySelect = 3;
        noCard('kilometerCard');
    }
    if (val === '4') {
        mySelect = 4;
        noCard('inciCard');
    }
    if (val === '5') {
        mySelect = 5;
        noCard('milCard');
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
        case 1: // From Sentimeter to..
            toMil.innerHTML = (val * 0.0000062137).toFixed(2);
            toMeter.innerHTML = (val / 100).toFixed(2);
            toKilometer.innerHTML = (val / 100000).toFixed(2);
            toInci.innerHTML = (val * 0.39370).toFixed(2);
            break;

        case 2: // From Meter to..
            toMil.innerHTML = (val * 0.00062137).toFixed(2);
            toSentimeter.innerHTML = (val / 0.01).toFixed(2);
            toKilometer.innerHTML = (val / 1000).toFixed(2);
            toInci.innerHTML = (val * 39.370).toFixed(2);
            break;

        case 3: // From Kilometer to..
            toMil.innerHTML = (val * 0.62137).toFixed(2);
            toSentimeter.innerHTML = (val * 100000).toFixed(2);
            toMeter.innerHTML = (val * 1000).toFixed(2);
            toInci.innerHTML = (val * 39370).toFixed(2);
            break;

        case 4: // From Inci to..
            toMil.innerHTML = val * 0.000015783;
            toSentimeter.innerHTML = (val / 0.39370).toFixed(2);
            toMeter.innerHTML = (val / 39.370).toFixed(2);
            toKilometer.innerHTML = (val / 39370).toFixed(2);
            break;

        case 5: // From Mil to..
            toSentimeter.innerHTML = (val / 0.0000062137).toFixed(2);
            toMeter.innerHTML = (val / 0.00062137).toFixed(2);
            toKilometer.innerHTML = (val / 0.62137).toFixed(2);
            toInci.innerHTML = (val * 63360).toFixed(2);
            break;
    }
}
