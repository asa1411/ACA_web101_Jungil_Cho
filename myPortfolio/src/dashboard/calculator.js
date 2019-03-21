function calcFunc(val) {
  document.querySelector("#results").value += val;
  console.log(val);
}

function arith(operator) {
  switch (operator) {
    case "+":
      document.querySelector("#results").value += "+";
      break;
    case "*":
      document.querySelector("#results").value += "*";
      break;
    case "/":
      document.querySelector("#results").value += "/";
      break;
    case "-":
      document.querySelector("#results").value += "-";
      break;
  }
}

function equals() {
  document.querySelector("#results").value = eval(
    document.querySelector("#results").value
  );
}

function decimal() {
  //PUT IN "." if appropriate.
  if (Current.length == 0) {
    //no leading ".", use "0."
    Current = "0.";
  } else {
    if (Current.indexOf(".") == -1) {
      Current = Current + ".";
    }
  }
  document.Calculator.Display.value = Current;
}
