$(document).ready(function(){
    $("span").addClass('error')
$("#name").focusout(function(){
    let nameLength = $("#name").val().length;
 console.log(nameLength);
 if(nameLength < 5){
    $("span").eq(0).append("Please enter your first and last name")
 } else if ($("#name").val().split(/\s+/).length !== 2){
    $("span").eq(0).append("Please enter your first and last name")
 }
})
$("#email").focusout(function(){
    let email = $("#email").val();
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if(!emailRegex.test(email)){
    $("span").eq(1).append("Please enter a valid email")
 } 
 
})
$("#phoneNum").focusout(function(){
    let num = $("#phoneNum").val();
    let phoneRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}$/;
 if(!phoneRegex.test(num)){
    $("span").eq(2).append("Please enter a valid phone number")
 } 
 
})
$("#message").focusout(function(){
    let messageRegex = /^[a-z]+$/;
    let message = $("#message").val().toLowerCase();
 if(message.length < 10){
    $("span").eq(3).append("Please enter a valid message")
 } else if (!message.match(messageRegex))
 $("span").eq(3).append("Please enter a valid message")

})
})

//DANG I JUST FOUND SOME GOOD INFO TO USE ON BOOTSRAP AT THE END
