onclick = "btnClicked(1)";
// button click action is assigned to a function "btnClicked(1)."
var score = 0;
// variable score starts with 0 at the beginning.
function btnClicked(number) {
  score = score + number;

  document.getElementById("score").innerHTML = score;
}
// The function btnClicked with parameter or argument number is made of two statements, and the number is recorded in the element "score."
onclick = "buySmallBaker()";
var baker1 = 0;
function buySmallBaker() {
  if (score >= 10) {
    baker1 = baker1 + 1;
    score = score - 10;
  }
  // Another function buySmallBaker is made with if condition statement. Baker1 is bought with 10 scores. Score records the number of score minus 10.
  document.getElementById("smallBakerNumber").innerHTML =
    "popcorn maker(s): " + baker1;
  // The number of baker1 purchased is recorded in the element "smallBakerNumber."
}
onclick = "sellSmallBaker()";
function sellSmallBaker() {
  if (baker1 >= 1) {
    baker1 = baker1 - 1;
    score = score + 10;
  }
  document.getElementById("smallBakerNumber").innerHTML =
    "popcorn maker(s): " + baker1;
}

onclick = "buyMediumBaker()";
var baker2 = 0;
function buyMediumBaker() {
  if (score >= 20) {
    baker2 = baker2 + 1;
    score = score - 20;
  }
  document.getElementById("mediumBakerNumber").innerHTML =
    "popcorn maker(s): " + baker2;
}
// The above and below functions follow the same pattern as the first function.

onclick = "sellMediumBaker()";
function sellMediumBaker() {
  if (baker2 >= 1) {
    baker2 = baker2 - 1;
    score = score + 20;
  }
  document.getElementById("mediumBakerNumber").innerHTML =
    "popcorn maker(s): " + baker2;
}

window.setInterval(function() {
  btnClicked(baker1);
}, 1000);
window.setInterval(function() {
  btnClicked(baker2);
}, 500);
// These setInterval method of the two above functions returns the btnClicked with baker1 and baker2 every 1 second and every 0.5 second respectively.
