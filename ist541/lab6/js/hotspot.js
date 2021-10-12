// JavaScript Document

$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Maple Leaf") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, but maple trees give us sweet maple syrup!");
      }

      if ($(this).attr("id") == "Oak Leaf") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, oak trees produce acorns! ("Acorn," 2021)");
      }

      if ($(this).attr("id") == "Birch Leaf") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, birch trees don't produce acorns.");
      }

      if ($(this).attr("id") == "Ash Leaf") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, ash trees don't produce acorns.");
      }
  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");

   });
}); //end main jQuery function
