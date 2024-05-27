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