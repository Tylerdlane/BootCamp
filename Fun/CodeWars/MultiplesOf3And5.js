// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// function solution(n){
//     for (let i = 0; i < n; i++){
//         if(i % 3){
//             return i + ' ';
//         }
//     }
// }
// console.log(solution(10));

function solution(number)
{
    let sum = 0;
    for (let num = 0; num < number; num++)
    {
       if ( num < 0){
            num;
    } else if (num % 3 == 0 && num % 5 == 0) {
            sum = num + sum;
      
    } else  if (num % 3 == 0 || num % 5 == 0){
            sum = num + sum;
    console.log(num);

    }

}
return (sum);
}
let N = 10;
 
console.log(solution(N));