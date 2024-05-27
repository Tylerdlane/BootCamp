let element = document.getElementById('myId');

let element = document.getElementsByClassName('myClass');

let element = document.getElementByTagName('div');

let element = document.querySelector('.myClass');

let element = document.querySelectorAll('.myClass');

const myElement = document.getElementById('myElement');
const children = myElement.children;

const parent = myElement.parentNode;

const nextSibling = myElement.nextSibling;
const previousSibling = myElement.previousSibling;

let element = document.getElementById('myId');
const htmlContent = myElement.innerHTML;

let element = document.getElementById('myId');
const textContent = myElement.textContent;

---------------------------------------------------------------------------------------------------------------------------------------------------------

// CHANGING CONTENT 
myElement.innerHTML = "new content";

//ADDING A NEW ELEMENT
const newElement = document.createElement('div');
document.body.appendChild(newElement);

//MODIFIYING ATTRIBUTES
myElement.setAttribute('class', 'myClass');


---------------------------------------------------------------------------------------------------------------------------------------------------------
    _ _ _ _ _ _ _ _
   / l l l l l l l \
  |   DOM  EVENTS   |
   \ l_l_l_l_l_l_l / 


   COMMON DOM EVENTS INCLUDE

   Click : whenthe user clicks on an element. 
   Mouseover : When the user moves the mouse over an element. 
   Submit : When the submits a form, Or a 'submit' event occurs on an <input> element. 
   Keydown : When the user presses a key on the keyboard.
   Load : When the browser finishes loading a page.

* YOU CAN ADD EVENT LISTENERS TO ELEMENTS TO EXECUTE SPECIFIC FUNCTIONS WHEN EVENTS OCCUR. *
   
   EX.  myElement.addEventListener('click', function(){
    alert('Element Clicked');
   });

---------------------------------------------------------------------------------------------------------------------------------------------------------

