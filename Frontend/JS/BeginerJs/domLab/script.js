// let item2 = document.querySelector("li:nth-child(2)");
// item2.setAttribute('class','completed');
// item2.classList.add('completed')

let clicks = document.querySelectorAll('ul li');
// click.addEventListener("click", function(){
// console.log('I have been clicked')
// })

// click.children[1].addEventListener('click', function(){
//     console.log('The 2nd li was clicked!')
// });

// let liItem = click[1];

clicks.forEach(function(li){
    li.addEventListener('click', function(){
        li.classList.toggle('completed');
    })
})

let inputElement = document.getElementById('newitem');
let buttonElement = document.getElementById('enterbtn');

buttonElement = document.addEventListener('click', function(){
    let inputValue = inputElement.value;
    let li = document.createElement('li');
    li.textContent = inputValue;
    ulItem.appendChild(li);
})

inputElement.addEventListener('keyup', function(event){
    if(event.which === 13){
        let inputValue = event.target.value;
    let li = document.createElement('li');
    li.textContent = inputValue;
    ulItem.appendChild(li);
    event.target.value = ""; 
        li.addEventListener('click', function(){
            li.classList.toggle('completed')
        })
}
});
let ulItem = document.querySelector('ul');