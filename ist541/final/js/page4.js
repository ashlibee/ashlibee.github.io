// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Near Step 2") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, that would place the image near the step it corresponds to, step 2.");
      }

      if ($(this).attr("id") == "paragraph text") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, that doesn't move the image closer to the step it corresponds to, step 2.");
      }

      if ($(this).attr("id") == "Steps 4-5") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, this would place the image with steps it doesn't correspond to. ");
      }
 
  $("#feedback").css("backgroundColor","yellow");

   });
}); //end main jQuery function
// JavaScript Document