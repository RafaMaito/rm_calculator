var firstNumber = "";
var secondNumber = "";
var operator = "";
let finalValue = false;
let buttonCalc = false;
let clicked = true;
let dotClicked = false;
// Let que pega o elemento display
let inputDisplay = document.getElementById("displayNumber");

// função para acrescentar numeros
function addNumber(id) {
  if (buttonCalc === false) {
    let number = document.getElementById(id).value;
    firstNumber += number;
    inputDisplay.value = firstNumber;
    clicked = false;
  } else if (finalValue === true) {
    let number = document.getElementById(id).value;
    secondNumber += number;
    inputDisplay.value = firstNumber + operator + secondNumber;
  }
}

// Função para acrescentar o ponto nos numeros
function dot() {
  let dotDot = document.getElementById("buttonDot").value;

  if (buttonCalc === false && dotClicked === false && firstNumber !== "") {
    firstNumber += dotDot;
    inputDisplay.value = firstNumber;
    dotClicked = true;
  } else if (
    finalValue === true &&
    dotClicked === false &&
    secondNumber !== ""
  ) {
    secondNumber += dotDot;
    inputDisplay.value = firstNumber + operator + secondNumber;
    dotClicked = true;
  }
}

// Função para tornar numero negativo
function positiveNegative() {
  if (finalValue === false && firstNumber !== "") {
    firstNumber = firstNumber * -1;
    inputDisplay.value = firstNumber;
  } else if (finalValue === true && secondNumber !== "") {
    secondNumber = secondNumber * -1;
    inputDisplay.value = firstNumber + operator + secondNumber;
  }
}

//  Função para limpar todos os dados
function cleanDisplay() {
  inputDisplay.value = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  buttonCalc = false;
  finalValue = false;
  clicked = true;
  dotClicked = false;
}

// Função para dizer qual o peração fazer
function calcNumbers(numberFunction) {
  function operation(operatorSignal) {
    operator = operatorSignal;
    inputDisplay.value += operator;
    clicked = true;
    finalValue = true;
    dotClicked = false;
  }
  if (clicked === false) {
    buttonCalc = true;
    switch (numberFunction) {
      case 1:
        let divide = document.getElementById("divideButton").value;
        operation(divide);
        console.log(dotClicked);
        break;
      case 2:
        let times = document.getElementById("timesButton").value;
        operation(times);
        break;
      case 3:
        let less = document.getElementById("buttonLess").value;
        operation(less);
        break;
      case 4:
        let plus = document.getElementById("buttonPlus").value;
        operation(plus);
        break;
      case 5:
        let numberOne = Math.sqrt(firstNumber).toFixed(2);
        firstNumber = numberOne;
        inputDisplay.value = firstNumber;
        secondNumber = "";
        operator = "";
        clicked = false;
        finalValue = false;
        break;
      case 6:
        let moduleNumber = (firstNumber / 100).toFixed(2);
        firstNumber = moduleNumber;
        inputDisplay.value = firstNumber;
        secondNumber = "";
        operator = "";
        clicked = false;
        finalValue = false;
        break;
    }
  }
}

//Função para calcular a operação desejada
function equal() {
  function keepValue(lastValue) {
    firstNumber = lastValue;
    inputDisplay.value = firstNumber;
    secondNumber = "";
    operator = "";
    clicked = false;
    finalValue = false;
  }
  if (operator === "/") {
    let numberOne = Number(firstNumber) / Number(secondNumber).toFixed(2);
    keepValue(numberOne);
  }
  if (operator === "*") {
    let numberOne = (Number(firstNumber) * Number(secondNumber)).toFixed(2);
    keepValue(numberOne);
  }
  if (operator === "-") {
    let numberOne = Number(firstNumber) - Number(secondNumber);
    keepValue(numberOne);
  }
  if (operator === "+") {
    let numberOne = Number(firstNumber) + Number(secondNumber);
    keepValue(numberOne);
  }
}
