let num1 = 32 ;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add(){
      let result = num1 + num2
      sumEl.textContent ="Sum: " + result;
}

function subtract(){
      let result = num1 - num2
      sumEl.textContent ="Subtract: " + result;
}
function divide(){
      let result = num1 / num2
      sumEl.textContent ="Divide: " + result;
}

function multiply(){
      let result = num1 * num2
      sumEl.textContent ="Multiply: " + result;
}