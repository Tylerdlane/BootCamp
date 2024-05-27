// Johnny is working as an intern for a publishing company, and was tasked with cleaning up old code. He is working on a program that determines how many digits are in all of the page numbers in a book with pages from 1 to n (inclusive).

// For example, a book with 4 pages has 4 digits (one for each page), while a 12 page book has 15 (9 for 1-9, plus 2 each for 10, 11, 12).

// Johnny's boss, looking to futureproof, demanded that the new program be able to handle books up to 400,000,000,000,000,000 pages.

function pageDigits(pages) {
    let totalDigits = 0;
    let n = 0;
    let y = 10
    for (let i = 1; i <= pages; i++) {
       
        if (i < 10) {
            totalDigits++;
        } else if (i <= y) {
            if(i % y === 0){
               y = y * 10;
            n++;
        }
            totalDigits = totalDigits + (n + 1);
        }
    }
    return totalDigits;

 }
console.log(pageDigits(100))

// function pageDigits(pages) {
//     let totalDigits = 0;
//     let y = 10;

//     for (let i = 1; i <= pages; i++) {
//         if (i === y) {
//             y *= 10;
//         }
//         totalDigits += Math.floor(Math.log10(i)) + 1;
//     }
    
//     return totalDigits;
// }




// else if(i > 99 && i < 1000){
//     totalDigits = totalDigits + 3;
// }else if(i > 999 && i < 10000){
//     totalDigits = totalDigits + 4;
// }else if(i > 9999 && i < 100000){
//     totalDigits = totalDigits + 5;
// }else if(i > 99999 && i < 1000000){
//     totalDigits = totalDigits + 6;
// }else if(i > 999999 && i < 10000000){
//     totalDigits = totalDigits + 7;
// }else if(i > 9999999 && i < 100000000){
//     totalDigits = totalDigits + 8;
// }else if(i > 99999999 && i < 1000000000){
//     totalDigits = totalDigits + 9;
// }else if(i > 999999999 && i < 10000000000){
//     totalDigits = totalDigits + 10;
// }else if(i > 9999999999 && i < 100000000000){
//     totalDigits = totalDigits + 11;
// } else if(i > 99999999999 && i < 1000000000000){
//     totalDigits = totalDigits + 12;
// } else if(i > 999999999999 && i < 10000000000000){
//     totalDigits = totalDigits + 13;
// } else if(i > 9999999999999 && i < 100000000000000){
//     totalDigits = totalDigits + 14;
// } else if(i > 99999999999999 && i < 1000000000000000){
//     totalDigits = totalDigits + 15;
// } else if(i > 999999999999999 && i < 10000000000000000n){
//     totalDigits = totalDigits + 16;
// } else if(i > 9999999999999999n && i < 100000000000000000n){
//     totalDigits = totalDigits + 17;
// } else if(i > 99999999999999999n && i < 1000000000000000000n){
//     totalDigits = totalDigits + 18;
// } 

