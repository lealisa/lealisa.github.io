$("#sup-1").hover(function () {
    

    $("#sup-1-content").css("visibility","visible");
      },
      function () {
        $("#sup-1-content").css("visibility","hidden");
      });​

$("#sup-1").hover(function(){
console.log("hello");
$(this).css("background-color", "yellow");
}, function(){
$(this).css("background-color", "pink");
});


window.onload = function() {
 
    alert( "welcome" );
    console.log("hello");
 
};