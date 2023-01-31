import "../scss/app.scss";

/* Your JS Code goes here */

/* Demo JS */
import "./demo.js";

for (let i = 1; i < 6; i++) {
  console.log(i);
}

// function onlyValid(num) {
//   const arr = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "0",
//     "+",
//     "-",
//     "*",
//     "/",
//     ".",
//   ];
//   console.log(arr);
//   let flag = 0;

//   for (let i = 0; i < num.length; i++) {
//     console.log("Now Checking : " + num.charAt(i));
//     for (let j = 0; j < arr.length; j++) {
//       if (num.charAt(i) != arr[j]) {
//         flag = 0;
//       } else {
//         flag = 1;
//         continue;
//       }
//       if (flag == 0) return flag;
//     }
//   }
//   return flag;
// }

function isOperator(num) {
  for (let i = 1; i < num.length; i++) {
    console.log("isOperator is Called!");
    if (
      num.charAt(i) == "+" ||
      num.charAt(i) == "-" ||
      num.charAt(i) == "*" ||
      num.charAt(i) == "/"
    ) {
      console.log("Operand Position is " + i);
      return i;
    }
  }
}

function add(num) {
  console.log("add is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));

  return a + b;
}

function subtract(num) {
  console.log("subtract is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));

  return a - b;
}

function multiply(num) {
  console.log("multiply is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));
  let res = a * b;
  return res;
}

function divide(num) {
  console.log("divide is called!");
  let a = parseFloat(num.substring(0, isOperator(num) + 1));
  let b = parseFloat(num.substring(isOperator(num) + 1, num.length));

  let res = a / b;
  return res;
}

function calc(num_user) {
  console.log("flag is called!");
  document.querySelector(".input").value = "Not a Valid Argument!";

  console.log("calc is called!");
  let num = num_user;
  let operandPosition = isOperator(num);
  if (num.charAt(operandPosition) == "+") {
    return add(num);
  } else if (num.charAt(operandPosition) == "-") {
    return subtract(num);
  } else if (num.charAt(operandPosition) == "*") {
    return multiply(num);
  } else if (num.charAt(operandPosition) == "/") {
    return divide(num);
  } else console.log("No Operand");
}

document.querySelector(".go").addEventListener("click", function () {
  let num_user = document.querySelector(".input").value;
  let result = calc(num_user);
  document.querySelector(".input").value = result;
});

document.querySelector(".reset").addEventListener("click", function () {
  // let num_user = document.querySelector(".input").value;
  // let result = calc(num_user);
  document.querySelector(".input").value = "";
});
