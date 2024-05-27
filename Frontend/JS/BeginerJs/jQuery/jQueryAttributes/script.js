//LIST OF FOOD IMAGES
let images = ["https://simply-delicious-food.com/wp-content/uploads/2019/06/chicken-fried-steak-2.jpg", "https://farm8.staticflickr.com/7123/6873548082_be5bfe9f67_z.jpg"]

//KEEPING TRACK OF OF IMAGES DISPLAYED
let imageIndex = 0;
//
$("#changeImage").click(function () {
    $("img:first-of-type").attr("src", images[imageIndex % 2]);
    imageIndex++;
    $('h1:first-of-type').toggleClass("indicator");

});

$("#fade").click(function () {
$("img:first-of-type").fadeToggle("slow");
});


$("#textInput").keypress((e)=>{
    console.log(
        `You pressed a key ${e.key}, keycode: ${e.keyCode}`, e
        )
});