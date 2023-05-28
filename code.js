const button = document.getElementById('myButton');
const display = document.getElementById('display');


button.addEventListener('click', displayValue)

function displayValue() {
    const buttonValue = button.innerHTML;
    
    buttonValue += button.innerHTML;
    display.value = buttonValue; 
}




//add
//subtract
//multiply
//divide