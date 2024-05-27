
let inputElement = document.getElementById('newItem');

let buttonElement = document.getElementById('giftButton');

let element = document.querySelectorAll('ul li');

let ulItem = document.querySelector('ul');

element.forEach(function(li){
    li.addEventListener('click', function(){
        li.classList.toggle('bought');
    })
})


buttonElement.addEventListener('click', function (){
    let inputValue = inputElement.value;
    let li = document.createElement('li');
    li.textContent = inputValue;
    ulItem.appendChild(li);
});
inputElement.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        let inputValue = event.target.value;
    let li = document.createElement('li');
    li.textContent = inputValue;
    ulItem.appendChild(li);
    event.target.value = ""; 
        li.addEventListener('click', function(){
            li.classList.toggle('bought')
        })
}
});



