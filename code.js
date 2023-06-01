const buttons = document.querySelector('#numButtons')
const display = document.querySelector('#pressed')
let result 

const showValue = function(val){
    display.value += val
    return val
}
 
const add = function() {

    display.value = display.value + " + "
}

const subtract = function() {
    display.value = display.value + " - "
}

const multiply = function() {
    display.value = display.value + " * "
}

const divide = function() {
    display.value = display.value + " / "
}

const eq = function() {
    result = eval(display.value) 
    display.value = result
}

const ac = function() {
    display.value = " "
}


