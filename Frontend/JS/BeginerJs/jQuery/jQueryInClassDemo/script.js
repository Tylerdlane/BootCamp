//THIS CODE RUNS EVERY TIME THE PAGE LOADS
$(document).ready(()=>{
    console.log('I am running jQuery version 3.7.1')
    $("h1").eq(0).text("I am a standard header now");
    $("h1:last").text("I am the last header");
    console.log($("h1").last().text());
    
});


let timeChange = () => {
    $("h1").eq(1).text("I am a dog!")
};
setTimeout(timeChange, 5000);

let cancelTime =  setTimeout(timeChange, 5000);

$("#cancel").click(function(){
    clearTimeout(cancelTime)
});

$("h1").last().css("border-bottom","red dotted 3px");

let styles = {
    background: "orange",
    fontSize: "48px",
    border: "solid green 4px"

};

let content = "I have changed!";

$("h1").eq(1).css(styles).text(content);
