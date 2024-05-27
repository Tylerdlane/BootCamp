let title = $("h1").text();

// alert(`The content of the h1 tags is: ${title}`)

$("h1").text("This is Tyler's Header");

$("#canine").text("lion");

$(".feline").eq(1).text("leopard");

let pics = $("img:first-of-type").attr("src","https://s3.amazonaws.com/accsoftwarebootcamp.com/garfield-1.jpg")

$("#pic").append(pics);

$("input").eq(0).attr("type","color");
$("input").eq(0).attr("id","newColor");

$( "#enter" ).on( "click", () => {
    let text = $("#input").val();
    // text = 'horse';
    $("span").eq(1).text(text);
    $('#input').val("");
  })

  $("#color").hover(function(){
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "white");
  });

$("#go").on("click",function () {
  $("#color").hide();
})
$("#come").on("click",function () {
  $("#color").show();
})

$("#color").animate(function(){
  $(this).css("background-color", "red");
  });