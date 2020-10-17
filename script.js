function add(num1,num2){
    return num1 + num2
}

function sub(num1,num2){
    return num1 - num2
}

function mul(num1,num2){
    return num1 * num2
}

function div(num1,num2){
    if (num2 == 0){
        return 'ERROR'
    }
    return num1 / num2
}

function operate(num1,num2,opCode){
    if (opCode == 1) {
        return add(num1,num2)
    }
    else if (opCode == 2) {
        return sub(num1,num2)
    }
    else if (opCode == 3) {
        return mul(num1,num2)
    }
    else if (opCode == 4) {
        return div(num1,num2)
    }
}

const display = document.querySelector(".display")
let displayArr = []
displayArr[0] = ""
displayArr[1] = ""
displayArr[2] = ""

let arrEntity = 0
let ans = ""
const buttons = document.getElementById("grid-items")

buttons.addEventListener("click", (event) => {
    // console.log('hello')
    // const isButton = event.target.nodeName === "BUTTON";
    // if (!isButton){
    //     return;
    // }
    if (event.target.className == "number"){
        console.log(arrEntity)
        displayArr[arrEntity] += event.target.value
        display.textContent = displayArr[arrEntity]
    }

    if (event.target.className == "operator"){
        arrEntity = 1
        displayArr[2] = event.target.value
        console.log(displayArr[2])
    }

    if (event.target.className == "equal-sign"){
        ans = operate(parseFloat(displayArr[0]), parseFloat(displayArr[1]), parseInt(displayArr[2]))
        display.textContent = ans
        displayArr[0] = ans
        displayArr[1] = ""
        displayArr[2] = ""
        arrEntity = 0
    }

    if(event.target.className == "all-clear"){
        displayArr[0] = ""
        displayArr[1] = ""
        displayArr[2] = ""
        arrEntity = 0
        display.textContent=""
        ans = -Infinity
    }

    if(event.target.className == "decimal"){
        displayArr[arrEntity] += "."
        display.textContent = displayArr[arrEntity]
    }
})