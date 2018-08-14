$(document).ready(function(){
  $("#form1").submit(function(event){
  event.preventDefault();
  var coder = 0;
  var teacher = 0;
  var cook = 0;
  $("input:checkbox[name=events]:checked").each(function() {
  var test = $(this).val();
  if (test === "coder") {
    coder += 1;
  }
  if (test === "teacher") {
    teacher += 1;
  }
  if (test === "cook") {
    cook += 1;
  }
  if (coder > teacher && coder > cook) {
    $("#coder").show();
    $("#teacher").hide();
    $("#cook").hide();

  }
  if (teacher > coder && teacher > cook) {
    $("#teacher").show();
    $("#coder").hide();
    $("#cook").hide();

  }
  if (cook > coder && cook > teacher) {
    $("#cook").show();
    $("#teacher").hide();
    $("#coder").hide();

  }
    });
  });
});
