// Variables to keep track of the current number, operation, and previous number
let currentInput = "";
let previousInput = "";
let operation = undefined;

/**
 * Appends a number to the current input.
 * @param {string} number - The number to append.
 */
function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

/**
 * Sets the current operation.
 * @param {string} op - The operation to set.
 */
function setOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = "";
}

/**
 * Performs the calculation based on the current and previous inputs and the operation.
 */
function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current !== 0) {
        result = prev / current;
      } else {
        alert("Division by zero is not allowed!");
        clearAll();
        return;
      }
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operation = undefined;
  previousInput = "";
  document.getElementById("display").value = currentInput;
}

/**
 * Clears all the inputs and resets the state.
 */
function clearAll() {
  currentInput = "";
  previousInput = "";
  operation = undefined;
  document.getElementById("display").value = "";
}
