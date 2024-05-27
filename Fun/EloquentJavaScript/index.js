for(let i = 0; i < 7; i++){
    console.log("#".repeat(i))
}


let hash = '#';

while(hash.length < 7){
    console.log(hash)
    hash = hash + "#";
}

for( let i = 1; i <= 100; i++ ){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else if(i % 3 === 0){
        console.log("Fizz")
    } else if(i % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

const chessBoard = (w) => {
    let board = [];
    for( let i = 0; i < w; i++ ){
        if(i % 2){
            board.push(" ")
        } else{
            board.push("#")
        }
        // for(let j = 0; j < h; j++){
        //     if(i % 2){
        //         board.push("3")
        //     } else{
        //         board.push("4")
        //     }
        // }
    }
    return board;
}
console.log(chessBoard(9))