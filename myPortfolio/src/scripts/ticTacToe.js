// Sanity check - open your console to ensure it's working!
console.log("Your javascript is working!");
// First, we want to set a few Global Variables!
// Set variable 'marker' to the letter 'O' initially
// This means that every game will start with a player putting an 'X' down
// If this doesn't make sense yet, check out the if statement
let marker = "O";
// The following two empty arrays will eventually hold the id's of the X and O occupied divs
let checkXWinner = [];
let checkOWinner = [];
// We want to check if there has been a winner yet so that users can't click the board after someone has won
let isWinner = false;
// This function is called in the HTML onclick on each div
// This function will not execute until a div is clicked
// The 'id' is a placeholder value for the actual id of the div that is clicked on
function place(id) {
  // If isWinner is false, the program will continue to let users place X's and O's
  if (!isWinner) {
    // Sets variable divContent to check for any div without any content yet
    var divContent = document.getElementById(id).innerHTML == "";
    // Checks FIRST to see if the box has an X or an O already
    // If the div clicked is empty, it will continue on to the inner if statement
    if (divContent) {
      // The if statement will determine whether an 'X' or 'O' will be placed
      if (marker == "O") {
        // Line 16 sets the inner HTML of whatever id of whatever div is clicked to 'X'
        document.getElementById(id).innerHTML = "X";
        // Set marker to 'X' once an 'X' is placed.
        marker = "X";
        checkXWinner.push(id);
        if (checkXWinner[2]) {
          winner(checkXWinner);
        }
      } else {
        document.getElementById(id).innerHTML = "O";
        // Set marker to 'O' once an 'O' is placed
        marker = "O";
        checkOWinner.push(id);
        if (checkOWinner[2]) {
          winner(checkOWinner);
        }
      }
    } else {
      // Alerts the user if there's already an X or O in that spot
      alert("You've already placed here!");
    }
  }
}
