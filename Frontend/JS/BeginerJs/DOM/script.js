// var fruit = document.getElementById('fruit');
// console.log(fruit);
// fruit.style.color = 'green';
// fruit.style.border = '2px solid orange';
// fruit.style.fontSize = '24px';
// fruit.style.background = 'lightblue';
// fruit.style.marginTop = '150px';
// // Set the Property
// fruit.textContent = 'Plain Old Bread'
// //Got the TextContent Property
// console.log('Fruit Contains:', fruit.textContent);
// //Got the InnerHTML Property
// var breakfastqs = document.querySelectorAll('.breakfast')

// var meal = document.getElementsByClassName('breakfast');
// console.log(meal);
// console.log(meal[0]);
// console.log(meal[1]);
// meal[0].style.color = 'blue';

// var food = document.getElementsByTagName('li');
// console.log(food);
// console.log(food[0]);
// console.log(food[1]);
// console.log(food[2]);

// var fruitqs = document.querySelector('#fruit');
// console.log(fruitqs);


// var breakfastqs = document.querySelectorAll('.breakfast');
// console.log(breakfastqs);

let header = document.getElementById('header');
header.textContent = 'My Updated Book List';


let available = document.getElementsByClassName('available');
for(let i = 0; i < available.length; i++){
    available[i].style.background = 'pink';
}
let unavailable = document.getElementsByClassName('unavailable');
for(let i = 0; i < unavailable.length; i++){
    unavailable[i].style.background = 'orange';
}

let title = document.getElementsByTagName('span');
for(let i = 0; i < title.length; i++){
title[i].style.fontWeight = 'bold';
}

let highlight = document.querySelector(".title");
highlight.style.background = 'yellow';

let borderBook = document.querySelectorAll('li')
for(let i = 0; i < borderBook.length; i++){
    borderBook[2].style.border = '2px solid red';
    borderBook[3].style.border = '2px solid red'
}