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
        if (result[i] !== "+" && result[i] !== "-" && 
            result[i] !== "*" && result[i] !== "/") {
                result[i] = parseInt(result[i])
            }
    }
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '+' || result[i] === '-' ||
            result[i] === '/' || result[i] === '*') {
            const number = doOperations(result, i)
            result.splice(i - 1, 3, number)
        }
    }
    display.value = result
}

const doOperations = function(arr, i) {
    if (arr[i] === '+' ) return arr[i - 1] + arr[i + 1]
    if (arr[i] === '-' ) return arr[i - 1] - arr[i + 1]
    if (arr[i] === '/' ) return arr[i - 1] / arr[i + 1]
    if (arr[i] === '*' ) return arr[i - 1] * arr[i + 1]
}