Selecting Elements:

jQuery excelled in simplifying element selection for manipulation from multiple browsers.
However, modern browsers have become more standards compliant and standardized behavior is less of a problem. Further, modern JavaScript now offers concise and efficient methods for selecting and manipulating elements, making jQuery's advantages less compelling.
Handling HTTP Requests:

jQuery facilitated making HTTP calls and dynamically updating content.
Today, vanilla JavaScript, with features like the Fetch API, provides similar functionality, reducing the need for jQuery in this area.
Content Manipulation:

jQuery was is awesome for its ability to hide, show, and modify content seamlessly.
Vanilla JavaScript now provides DOM manipulation methods that are more intuitive and user-friendly.
Event Handling:

jQuery made it easy to add event handlers to elements.
Modern JavaScript offers event listeners and the Event API, making event handling simpler without the need for an additional library.
Animation:

jQuery was popular for creating animations to enhance user experiences.
CSS transitions and animations are now preferred for achieving smooth and performant animations, making jQuery less relevant in this regard.
//$(document).ready() runs as soon as the HTML has been loaded BUT does not wait for the resources. Examples of resources are images, videos, etc.
$(document).ready(()=>
alert('I am working!')
);
//window.onload runs after HTML has been loaded AND ALL resources have also been loaded.
window.onload = function() {
    alert("Page is fully loaded including images, CSS files, etc.");
  };

  //Select all image tags
$("img");

//Select all elements with class of dog
$(".dog");

//Selects the element with id of menu
$("#menu");

//Selects all the a tags inside of list item
$("li a");


//Vanilla JavaScript:

// let myHeader = document.getElementById("header");
// let myHeader = document.getElementsByTagName("h1")[0];
// let myHeader = document.querySelector("h1");


// //jQuery:

// let myHeader = $("#header");
// let myHeader = $("h1").eq(0);
// let myHeader = $("h1");



