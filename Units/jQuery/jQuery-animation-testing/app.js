$(document).ready(function() {
  $("#fade-div").on("click", function() {
    $("animated-div").fadeOut();
  });
  $("#custom-animate").on("click", function() {
    $("#animate-div").animate({
      "margin-top": "+=20px",
      "margin-left": "+=5px"
    }, 3000, "swing", function() {
      alert("Animation Complete!");
    }
  });
});
