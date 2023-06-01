const display = document.querySelector('#pressed')
let valForDel
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
    display.value = eval(display.value) 
}

const ac = function() {
    display.value = " "
}

const del = function() {
    valForDel = display.value
    display.value = valForDel.slice(0, - 1)
}

const addComma = function() {
    display.value = display.value + " . "
}

const getResult = function() {
    result = display.value.split(" ")
    for (let i = 0; i < result.length; i++) {
        
    }
    console.log(result)
}

