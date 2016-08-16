
$("#pizzaForm").hide();
$("#coffeeForm").hide();
$("#bagelForm").hide();


$("#pizzaPic").on("click", function(){
	$("#bagelPic").fadeOut(300);
	$("#coffeePic").fadeOut(300);
	$("#pizzaForm").fadeIn(1000);
	$(this).removeClass('col-1-3');
	$(this).addClass('center-me', {duration: 4000});
});


$("#coffeePic").on("click", function(){
	$("#pizzaPic").fadeOut(300);
	$("#bagelPic").fadeOut(300);
	$("#coffeeForm").fadeIn(300);
	$(this).removeClass('col-1-3');
	$(this).addClass('center-me');
});

$("#bagelPic").on("click", function(){
	$("#pizzaPic").fadeOut(300);
	$("#coffeePic").fadeOut(300);
	$("#bagelForm").fadeIn(300);
	$(this).removeClass('col-1-3');
	$(this).addClass('center-me');
});
