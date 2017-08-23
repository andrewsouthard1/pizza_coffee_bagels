
$("#pizzaForm").hide();
$("#coffeeForm").hide();
$("#bagelForm").hide();
$("#backLink").hide();

$("#pizzaPic").on("click", function(){
	$("#bagelPic").remove();
	$("#coffeePic").remove();
	$("#coffeeForm").remove();
	$("#bagelForm").remove();
	$(this).removeClass('col-md-4 col-sm-4');
	$("#pizzaForm").fadeIn(1000);
	$("#backLink").fadeIn(1000);
});

$("#coffeePic").on("click", function(){
	$("#pizzaPic").remove();
	$("#bagelPic").remove();
	$("#pizzaForm").remove();
	$("#bagelForm").remove();
	$(this).removeClass('col-md-4 col-sm-4');
	$("#coffeeForm").fadeIn(1000);
	$("#backLink").fadeIn(1000);
});

$("#bagelPic").on("click", function(){
	$("#pizzaPic").remove();
	$("#coffeePic").remove();
	$("#pizzaForm").remove();
	$("#coffeeForm").remove();
	$(this).removeClass('col-md-4 col-sm-4');
	$("#bagelForm").fadeIn(1000);
	$("#backLink").fadeIn(1000);

});
