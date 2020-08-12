$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let inputtedName = $("#name").val();
     let inputtedDescription = $("#description").val();
     let inputtedDate = $("#date").val();
     let inputtedStart = $("#start").val();
    let inputtedEnd = $("#end").val();

    if (inputtedName + inputtedDescription + inputtedDate + inputtedStart + inputtedEnd) {
      $(".name").prepend("<li>" + inputtedName + "</li>")
    }
  
    $("#story").show();
  })
})
















