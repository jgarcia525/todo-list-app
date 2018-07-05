// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  // if li is gray
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
  	// grabing new todo text from input
  	var input = $(this).val();
  	$(this).val("");
  	// create a new li and dd to ul
  	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + input +  "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text'").fadeToggle();
});