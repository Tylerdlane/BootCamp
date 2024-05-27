//This targets all of the <h1> tags, and change their text
$("h1").text('I am the big first header');
$("h1").eq(2).text("I am the last header");
//OR
$("h1").last().text("I am the last header");


let result = $("h1").eq(1).text();
console.log(result);

setTimeout(() => {
    $("h1").eq(1).text("I am a dog");

}, 3000);

$("h1").css("text-transform", "capitalize");
$("h1").eq(0).css("background-color", "blue");
$("h1").eq(2).css("border", "red 3px dotted");

let theStyle = {
    backgroundColor: "orange",
    fontSize: "48px",
    border: "green solid 4px",
};

let content = "I have changed!";

$("h1").eq(1).css(theStyle).text(content);