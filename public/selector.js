
$("#pizzaForm").hide();
$("#coffeeForm").hide();
$("#bagelForm").hide();


$("#pizzaPic").on("click", function(){
	$("#bagelPic").remove();
	$("#coffeePic").remove();
	$("#pizzaForm").fadeIn(1000);
	$("#coffeeForm").remove();
	$("#bagelForm").remove();
	$(this).removeClass('col-md-4 col-sm-4');
	
});


$("#coffeePic").on("click", function(){
	$("#pizzaPic").remove();
	$("#bagelPic").remove();
	$("#coffeeForm").fadeIn(1000);
	$(this).removeClass('col-md-4 col-sm-4');
	$("#pizzaForm").remove();
	$("#bagelForm").remove();
	// $(this).switchClass('col-md-4 col-sm-4 container row', 'text-center', 1000, 'easeInOutQuad')
});

$("#bagelPic").on("click", function(){
	$("#pizzaPic").remove();
	$("#coffeePic").remove();
	$("#bagelForm").fadeIn(1000);
	$(this).removeClass('col-md-4 col-sm-4');
	$("#pizzaForm").remove();
	$("#coffeeForm").remove();

});
