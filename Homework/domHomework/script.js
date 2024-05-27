let greetingText = document.getElementById('greetingText');
greetingText.innerHTML = "Hello, World";

let moreText = document.getElementsByClassName('moreText');
const newText = document.createElement('p');
document.body.appendChild(newText);
newText.innerHTML = "Each day is a lovely gift. Enjoy it!"

document.getElementsByTagName('h2')[0].style.color = 'red';

let newDiv = document.createElement('div');
newDiv.innerHTML = "I'm new here! Let's be friends."
document.body.appendChild(newDiv);

newDiv.remove();

document.getElementById("hebLink").src="https://www.costco.com/"


