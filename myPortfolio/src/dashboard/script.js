onclick = "btnClicked(1)";
var score = 0;
function btnClicked(number) {
  score = score + number;

  document.getElementById("score").innerHTML = score;
}
onclick = "buySmallBaker()";
var baker1 = 0;
function buySmallBaker() {
  // var smallBakerCost = Math.floor(10 * Math.pow(1.1, baker1));
  var smallBakerCost;
  if (score >= 10) {
    baker1 = baker1 + 1;
    score = score - 10;
  }

  document.getElementById("smallBakerNumber").innerHTML =
    "popcorn maker(s): " + baker1;
  // document.getElementById("score").innerHTML = score1;
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
// var nextBakerCost = Math.floor(10 * Math.pow(1.1, baker1));

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
