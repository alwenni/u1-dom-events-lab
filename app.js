/*-------------------------------- Variables --------------------------------*/
let firstNum= ""; // Keep empty instead of "0" to avoid string concatenation
let secondNum= ""; // Same thing here
let operator= null; 
let result= null;

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
// Never used: const buttons = document.querySelectorAll('.button');
const screen = document.querySelector(".display");

screen.textContent= "0";

/*----------------------------- Event Listeners -----------------------------*/
// An event listener for the buttons becomes unnecessary as they inherit the parent "calculator"'s event listener

calculator.addEventListener('click', (event) => {
 
  // "C" should reset everything
  if (event.target.innerText === "C") {
    screen.textContent= "0";
    firstNum= ""; // Adding let would re-declare the variable, make it local and not refer to the global variable
    secondNum= ""; // Same goes here
    operator= null;
    result= null;
    console.log("Clear");
    return; // To exit the statement
  }

  // "=" should output the result and reset everything
  if (event.target.innerText=== "=") {
    result= calculate();
    screen.textContent= String(result);
    console.log(`Result: ${result}`);
    firstNum= ""; 
    secondNum= "";
    operator= null;
    result= null;
    return;
  }
  
  if (!operator) { // Used the operator to distinguish between the first and second numbers
    if (event.target.classList.contains('number')) { 
      firstNum+= event.target.innerText;
      screen.textContent = String(firstNum);
      console.log(`FirstNum: ${firstNum}`);
    } 

    else if (event.target.classList.contains("operator")) { 
    operator= event.target.innerText; // Again, adding let would re-declare the variable
    screen.textContent= String(firstNum) + String(operator);
    console.log(`Operator: ${operator}`);
    } 
  }

   else { // Once an operator exists, proceed to secondNum
   if (event.target.classList.contains('number')) { 
    secondNum+= event.target.innerText;
    screen.textContent = String(firstNum) + String(operator) +String(secondNum);
    console.log(`secondNum: ${secondNum}`)
    } 
  }
});

/*-------------------------------- Functions --------------------------------*/
const calculate = () => { // Without const this would've been global, or in other words, reassignable
  const num1= Number(firstNum); // Number() method converts data type String to Number 
  const num2= Number(secondNum);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
          return num1 - num2;
      case "*":
          return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "indivisible by zero!"; 
          }
        else {
          return num1 / num2;
          }
      default:
          console.log("Invalid Operation!") // In case of any typos
      } 
    }

// blood, sweat and tears went into this...
    