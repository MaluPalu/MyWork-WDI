// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
let lastClick = "o";


$(".row .box").on("click", function() {
  if ($(this).html() != '') {
    return;
  }
  if (lastClick === "o") {
    lastClick = "x";
  }
  else {
    lastClick = "o";
    }
  $(this).append(lastClick);
});
$("#resetBut").on("click", function() {
  $(".row .box").html('');
})

});
