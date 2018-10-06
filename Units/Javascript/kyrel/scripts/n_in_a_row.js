/*
  INSTRUCTIONS
    - Write all of your code inside the "main" function below.
    - Use this file to build/test your programs.
    - To save your work, when you finish a challenge:
        - make a copy of this file and name it e.g. 'solution-all-blue.js'
        - then clean out play.js so you can start fresh on a new challenge.

  RESERVED WORDS (do not use as variable names)
      row, colors, kyrel, initial_state

  AVAILABLE METHODS
      moveRight(), moveLeft(),
      useGreen(), useBlue(), draw(), erase(),
      onGreen(), onBlue()

  You can also configure the initial state of the row using the following key:
    '.' => empty
    'b' => blue
    'g' => green
*/

var initial_state = [ '.', '.', '.', '.', '.' ];

let userInput = parseInt(prompt('Give a number either "2 or 3"'));
while (isNaN(userInput) || !(userInput === 2 || userInput === 3)) {
  userInput = parseInt(prompt('Give a number either "2 or 3"'));
}
function main() {
  if (userInput === 2) {
    draw();
    moveRight();
    draw();
  }
  else if (userInput === 3) {
    for (i = 0; i > 3; i++) {
      draw();
      moveRight();
    }
  }

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////



  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

} // <--- be careful not to delete or comment-out this closing bracket!
