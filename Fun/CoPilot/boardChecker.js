
const { printBoard, boardCreator} = require("./boardCreator");

/*
Create another function that takes the array given by Team A (argument is array)
1. Find how large it is.  Assume it is a square array.
2. Determine if the queens are safe from each other.
3. Return true or false based on their group safety. (edited) 
*/

// Created a test board
//let board = [
 //   [0, {order: 1, name: "Queen1"}, 0],
//  [0, 0, {order: 2, name: "Queen2"}],
//    [0, 0, 0]
//];
const board = boardCreator(8,4);
printBoard(board);

//Created a function that takes the board array as an argument
const checkBoard = (arr) => {
    let size = arr.length;
    let list = [];
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++) {
            if(arr[i][j]){
                list.push({
                    queen: arr[i][j],
                    // x coordinate
                    x: i,
                    // y coordinate
                    y: j
                });
            }
        }
    }
    // loop over the list of queens (1-d)
    for(let i = 0; i < list.length; i++) {
        // loop over the rest of the list of queens
        for(let j = i+1; j < list.length - i; j++){
            // test if their columns match
            if(list[i].x === list[j].x){
                return false;
            }
            // test if their rows match
            if(list[i].y === list[j].y){
                return false;
            }
            // test if they are on the same diagonal
            if(Math.abs(list[i].x - list[j].x) === Math.abs(list[i].y - list[j].y)){
                return false;
            }
        }
    }
    // they passed all the tests and all queens are safe
    return true;
}

console.log(checkBoard(board))