//Fetch all DOM elements
let inputUnit = document.getElementById('inputUnit');
let inputNumber = document.getElementById('inputNumber');
let ponCard = document.getElementById('ponCard');
let kilogramCard = document.getElementById('kilogramCard');
let gramCard = document.getElementById('gramCard');
let tonCard = document.getElementById('tonCard');
let onsCard = document.getElementById('onsCard');
let toTon = document.getElementById('toTon');
let toPon = document.getElementById('toPon');
let toKilogram = document.getElementById('toKilogram');
let toGram = document.getElementById('toGram');
let toOns = document.getElementById('toOns');

//Hide input value box and output cards
inputNumber.style.visibility = 'hidden';
output.style.visibility = 'hidden';

//Selected item or option
let mySelect = '0';

//List of all cards
let cardArray = ['tonCard', 'ponCard', 'kilogramCard', 'gramCard', 'onsCard'];

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
        noCard('ponCard');
    }
    if (val === '2') {
        mySelect = 2;
        noCard('kilogramCard');
    }
    if (val === '3') {
        mySelect = 3;
        noCard('gramCard');
    }
    if (val === '4') {
        mySelect = 4;
        noCard('onsCard');
    }
    if (val === '5') {
        mySelect = 5;
        noCard('tonCard');
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
        case 1: // From pounds to..
            toTon.innerHTML = (val * 0.00045359237).toFixed(2);
            toKilogram.innerHTML = (val * 0.45359237).toFixed(2);
            toGram.innerHTML = (val * 453.59237).toFixed(2);
            toOns.innerHTML = (val * 16).toFixed(2);
            break;

        case 2: // From kilograms to..
            toTon.innerHTML = (val * 0.001).toFixed(2);
            toPon.innerHTML = (val * 2.20462262185).toFixed(2);
            toGram.innerHTML = (val * 1000).toFixed(2);
            toOns.innerHTML = (val * 35.27396195).toFixed(2);
            break;

        case 3: // From Grams to..
            toTon.innerHTML = (val * 0.000001).toFixed(2);
            toPon.innerHTML = (val * 0.00220462262185).toFixed(2);
            toKilogram.innerHTML = (val * 0.001).toFixed(2);
            toOns.innerHTML = (val * 0.03527396195).toFixed(2);
            break;

        case 4: // From Ounces to..
            toTon.innerHTML = '*Lihat: Kilogram (kg)';
            toPon.innerHTML = (val * 0.0625).toFixed(2);
            toKilogram.innerHTML = (val * 0.02834952).toFixed(2);
            toGram.innerHTML = (val * 28.34952).toFixed(2);
            break;

        case 5: // From Tonnes to..
            toPon.innerHTML = (val * 2204.62262185).toFixed(2);
            toKilogram.innerHTML = (val * 1000).toFixed(2);
            toGram.innerHTML = (val * 1000000).toFixed(2);
            toOns.innerHTML = '*Lihat: Kilogram (kg)';
            break;
    }
}
