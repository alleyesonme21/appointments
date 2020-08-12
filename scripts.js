$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let inputtedName = $("#name").val();
     let inputtedDescription = $("#description").val();
     let inputtedDate = $("#date").val();
     let inputtedStart = $("#start").val();
    let inputtedEnd = $("#end").val();
   
$(".name").prepend("<li>" + inputtedName + "</li>")
 $(".description").prepend("<li>" + inputtedDescription + "</li>")
 $(".date").prepend("<li>" +inputtedDate + "</li>")
 $(".start").prepend("<li>" + inputtedStart + "</li>")
 $(".end").prepend("<li>" + inputtedEnd  + "</li>")
// $(".date").text(inputtedDate)
// $(".start").text(inputtedStart)
// $(".end").text(inputtedEnd)
// $("p. description").hide()

    $("#story").show();
  })
})