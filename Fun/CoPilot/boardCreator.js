// create a function that creates a 2d square array
// function arguments: size of the array, number of queens
// fill the array with 0s except for the queens which will be randomly placed
// queen is represented by {order: 1, name: 'Q1'}
// return the array

/**
 * Creates a game board with queens placed randomly.
 * @param {number} boardSize - The size of the game board.
 * @param {number} numQueens - The number of queens to be placed on the board.
 * @returns {Array<Array<number|{order: number, name: string}>>} - The 2D array representing the game board.
 */
function boardCreator(boardSize, numQueens) {
  // create initial array of size boardSize
  const board = new Array(boardSize);
  // for each element of board array, create array of size boardSize and fill it with 0s
  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize).fill(0)
  }
  // place queens randomly on the board
  for (let i = 0; i < numQueens; i++) {
    let x = Math.floor(Math.random() * boardSize)
    let y = Math.floor(Math.random() * boardSize)
    board[x][y] = { order: i + 1, name: `Q${i + 1}` }
  }
  // return the 2d board array
  return board
}

// test with board size 8x8 and 8 queens
// console.log(boardCreator(8, 8));


// Create a board with size 8x8 and 8 queens
// const board = boardCreator(8, 2);

// Log the board to the terminal
function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    let row = '';
    for (let j = 0; j < board[i].length; j++) {
      if (typeof board[i][j] === 'object') {
        row += 'Q ';
      } else {
        row += '- ';
      }
    }
    console.log(row);
  }
}

module.exports = {boardCreator, printBoard};