// Checking if it is working
// console.log ("JavaScript is working now")
// variable and its name with an array of 9 indexes "-" are given.
var game = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
// A variable "turn" is set to "X."
var turn = "X";
// A variable "win" is set or assigned to an array of 8 nested arrays consisting of 3 indexes. Each nested array represents 3 boxes in a row, in a column or in a diagonal.
var win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
// variable play is called here to relate to the function of onclick with a parameter boxNumber.
var play = function(boxNumber) {
  // A variable is defined in this function, and the variable box is assigned to the element with "box"Id and boxNumber paramenter.
  var box = document.getElementById("box" + boxNumber);
  // The condition states that the content of the box is not written X or O, then get X or O by turn variable.
  if (box.textContent === "-") {
    box.textContent = turn;
    box.style.color = "#444";
    // 	The game variable with index from 0 to 8 return O or X by turn until the 9 boxes are filled.
    game[boxNumber] = turn;
    // The for loop provides repetative execution of the block of statements 8 times because win.length value is 8.
    for (var i = 0; i < win.length; i++) {
      // 		 first square bracket calls the first index and second bracket calls the first number of the first index. If match1, match2 and match3 are consistently the same letter rendered by turn, a block of statements in the curly bracket will be executed.
      const match1 = game[win[i][0]];
      const match2 = game[win[i][1]];
      const match3 = game[win[i][2]];
      if (match1 === turn && match2 === turn && match3 === turn) {
        // 			Use Box5 to declare that the symbol rendered by turn wins with style of the whole 9 box container.
        var title = document.getElementById("box5");
        var gameBoard = document.getElementById("container");
        gameBoard.style.pointerEvents = "none";
        gameBoard.style.backgroundColor = "goldenrod";
        gameBoard.style.boxShadow = "0 0 10px 15px goldenrod";
        title.textContent = turn + " WINS!";
      }
    }
    // start to put X in the box as stated above and then O and then X.
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
    console.log(game, turn);
  }
};
