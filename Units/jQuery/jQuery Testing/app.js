$(document).ready(function() {

  //Dom is fully loaded

  $("#click-me").on("click", function() {

    alert("Clicked");

  });

    // $(document).on("click", "#click-me", function() {});

    // $("click-me").click(function() {});

  $("#change-background").on("click", function() {

    // Alter the background-color to blue

    $("#animated-div").css("background-color", "blue");

  });

  $("#animate-me").on("click", function() {

    //Add animate class to the div to activate animation

    $("#animated-div").addClass("animate");

  });

  // Remove animation on double click

  $("#animate-me").on("dblclick", function() {

    $("#animated-div").removeClass("animate");

  });

  //Change inner html to say Hello World

  $("#change-html").on("click", function() {

    //$("#animated-div").html("<h1>Hello World</h1>");

    let userName = $("#name-input").val();

    $("#animated-div").html(`<h1>Hello ${userName}!</h1>`);
  });
  
});
