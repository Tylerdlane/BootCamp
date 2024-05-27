// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
    let sum = 0;
    const newArr = numbers.map((num)=> num * num);
    for(let i = 0; i < newArr.length; i++){
        sum += newArr[i];
    }
      return sum
      }

    console.log(squareSum([1,2,2]));