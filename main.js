let firstNumber = 0;
let secondNumber = 0;
let selectedOperator = "";
let ref = document.getElementById("screen");

function digitPressed(digit) {
    if (digit == 0 && ref.value == 0) {
    } else {
        ref.value = ref.value + digit;
    }
}

function clearScreen() {
    ref.value = "";
}

function operator(operator) {
    selectedOperator = operator;
    firstNumber = parseInt(ref.value);
    document.getElementById("button=").disabled = false;
    document.getElementById("button=").className = "green white-text";
    clearScreen()
}

function calculate() {
    if (ref.value != 0) {
    secondNumber = parseInt(ref.value);
    }
    clearScreen()
    ref.value = eval(firstNumber + selectedOperator + secondNumber);
}