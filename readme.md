### Live Website Link : https://manopriyam.github.io/OpenLake_Codeforge_A3/

# Task Details :

The Task is to create a simple tic tac toe game using HTML, CSS and JavaScript.

There are 4 subtasks, each of which implements some feature of the game.

## SubTask0: Setup the game board using HTML and CSS.

### Note: SubTask0 can be skipped, and the HTML and CSS code provided in the zip file can be used as the game board.

1. Create index.html, styles.css and app.js files
2. Create the game board and style it properly
3. Add a button "restart" which will later be given the functionality to restart the game

   - Hint 1: There should be 9 div elements, each of which is a cell for the game board.
   - Hint 2: Use CSS Grid

## SubTask1: Initialize the Game State and Handle Cell Clicks

### Concepts to be applied: JS Variables, Functions, Conditional Statements, Event Listeners and DOM

1. For each of the 9 cells in the game board, add the functionality such that clicking on the cell will mark it with either X or O
2. If X was marked in the previous move, then O will be marked in the next move, You may start with either X or O.
3. Make sure that once a cell is marked, it doesn't change it's state

- Hint 1: get all the cells using DOM and store them in an array to manage their state.
- Hint 2: Add a click event listener to each of the div tag using DOM, use conditional statements to avoid overwriting a cell's state

## SubTask2: Implement the feature to check for the winner and end the game at that point.

### Concepts to be applied: JS Arrays, Functions, Conditional Statements, Loops.

1. Make two functions checkWin and checkTie for determining the winner of the game.
2. Check the conditions for winning the game

- Hint 1: Note that there are only a handful of winning combinations.
- Hint 2: Use loops to check if the any of the winning combinations occur, if the board is full and checkWin returns false, then it's a tie.

## SubTask3:

### Concepts to be applied: JS Functions, Loops.

1. Make a function to add functionality to the restart button

- Hint 1: Clear the board using loops, and return to the original state of the board.
