let images = [

    "assests/boneless.jpg",
    "assests/download.jpg",
    "assests/friedCheese.jpg",
    "assests/friedTwinkie.jpg"

];
let imageIndex = 0;

$("#next").click(()=>{
    $("img").fadeOut();
    $("img").attr("src", images[imageIndex]);
    $("img").fadeIn("slower");
     imageIndex++;
     if(imageIndex > images.length){
        imageIndex = 0;
     }
    
});

$("#previous").click(()=>{
    $("img").fadeOut();
    $("img").attr("src", images[imageIndex]);
    $("img").fadeIn();
    imageIndex--;
    if(imageIndex == -1 ){
        imageIndex = images.length -1;
     }
});
let result = $("#order").text().toUpperCase();

$("#order").keypress((event)=>{
   if(event.keyCode === 13){
    console.log('You got a :', result);
   } else if(event.keyCode < 97 || event.keyCode > 122)
   return false;
})
$("#submit").click(()=>{
console.log('You got a :', result);
});

