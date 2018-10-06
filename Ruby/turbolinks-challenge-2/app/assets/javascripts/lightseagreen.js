// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready", function(e){
  $("body").css("background-color", "lightseagreen");
});

$(document).on("ready", function(){
  var current_path = "lightseagreen";
  page_view_count[current_path] += 1;
  $("#lightseagreen .view_count.badge").text(page_view_count[current_path]);
});
