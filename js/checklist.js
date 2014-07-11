// $.getJSON( "../../data.json", function(data) {
  // var kitchenitems = [];
  // var livingitems = [];
  // var nurseryitems = [];
  // var outdooritems = [];
  // var garageitems = [];
  // var bathitems = [];

  console.log(CHECKLISTS);

  $.each(CHECKLISTS[0].items, function( idx, item ) {
  	console.log(idx, item);
  	var checkboxdiv = "<div class='pull-right checkbox'>" + "<div class='check'><img class='checkmark mark' src='../../images/green-checkmark.png'></div>" + "<div class='x'><img class='xmark mark' src='../../images/x-mark.png'></div>" + "</div>"
  	var itemElement = $("<li class='table-view-cell' id='"  + CHECKLISTS[0].housearea +"-"+ idx + "'>" + item.description + checkboxdiv + "</li>") ;
    //items.push( item);
  	$( ".table-view").append(itemElement);
  });




var boxstate = 0; //stores whether the checkbox is empty, ✓ or x
	$(".check").hide();
	$(".xmark").hide();
$('.checkbox').click(function() {
	if (boxstate === 0) {
	console.log("checkbox was clicked. ✓");
	$(".check").show();
	$(".xmark").hide();
	boxstate++;
	return;
	}
	if (boxstate === 1) {
	console.log("checkbox was clicked. x");
	$(".check").hide();
	$(".xmark").show();
	boxstate++;
	return;
	}
	if (boxstate === 2) {
	console.log("checkbox cleared");
	$(".check").hide();
	$(".xmark").hide();
	boxstate = 0;
	return;
	}
});

/*
$(this).parent();
$(this).find(".")

$(this).css("background", "#595959");
//color:#7f7f7f
*/