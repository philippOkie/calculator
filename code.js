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

const ac = function() {
    display.value = ""
    console.log("EVERYTHING DELETED")
}

const del = function() {
    valForDel = display.value
    const size = display.value.length

    if (display.value[size - 2] === " ") {
        display.value = display.value.slice(0, -2)
    }
    else if (display.value[size - 2] === "+" ||
    display.value[size - 2] === "-" || display.value[size - 2] === "*" || 
    display.value[size - 2] === "/" || display.value[size - 2] === "."){
        display.value = display.value.slice(0, -3)
    }
    else {
        display.value = display.value.slice(0, -1)
    }
    console.log("DELETED")
}

const addComma = function() {
    display.value = display.value + "."
}

const addSubtract = function(arr, i) {
    if (arr[i] === '+') return arr[i - 1] + arr[i + 1]
    if (arr[i] === '-') return arr[i - 1] - arr[i + 1]
}

const multiplyDivide = function(arr, i) {
    if (arr[i] === '/') return arr[i - 1] / arr[i + 1]
    if (arr[i] === '*') return arr[i - 1] * arr[i + 1]
}

const getResultTwo = function() {
    result = display.value.split(" ")
    let mergedArray = [] 
    // dot checker
    for (let i = 0; i < result.length; i++) {
        let currentElement = result[i]
        if (currentElement === "." && i > 0 && i < result.length - 1) {
            let previousElement = result[i - 1]
            let nextElement = result[i + 1]
            let mergedNum = previousElement + currentElement + nextElement
                mergedArray.pop()
                mergedArray.push(mergedNum)
                i++
                continue
        }
        mergedArray.push(currentElement)
    }
    result = mergedArray
   

    // num checker
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== "*" && result[i] !== "/" && 
            result[i] !== "+" && result[i] !== "-") {
            result[i] = parseFloat(result[i])
        }

        else if (result[i] === '.') {
            parseFloat(result[i])
        }
    }
    
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '/' || result[i] === '*') {
            const number = multiplyDivide(result, i)
            result.splice(i - 1, 3, number)
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '+' || result[i] === '-') {
            const numberTwo = addSubtract(result, i)
            result.splice(i - 1, 3, numberTwo)
        }
    }
    display.value = result
    console.log(result)
}