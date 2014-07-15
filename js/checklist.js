// $.getJSON( "../../data.json", function(data) {
  // var kitchenitems = [];
  // var livingitems = [];
  // var nurseryitems = [];
  // var outdooritems = [];
  // var garageitems = [];
  // var bathitems = [];

  console.log(CHECKLISTS);

  var loadItemsAtIndex = function(itemIndex) {
  	$.each(CHECKLISTS[itemIndex-1].items, function( idx, item ) {
  		console.log(idx, item);
  		console.log(itemIndex);
  		var checkboxdiv = "<div class='pull-right checkbox'>" + "<div class='check'><img class='checkmark marks' src='../../images/green-checkmark.png'></div>" + "<div class='x'><img class='xmark marks' src='../../images/x-mark.png'></div>" + "</div>"
  		var itemElement = $("<li class='todo-table table-view-cell' id='"  + CHECKLISTS[0].housearea +"-"+ idx + "'>" + "<span class='description'>" + item.description + "</span>" + checkboxdiv + "</li>") ;
	    //items.push( item);
	    $( ".table-view").append(itemElement);
	});


	var boxstate = 0; //stores whether the checkbox is empty, ✓ or x
	$(".check").hide();
	$(".xmark").hide();
	$('.checkbox').click(function() {
		if (boxstate === 0) {
			console.log("checkbox was clicked. ✓");
			$(this).find(".check").show();
			$(this).find(".xmark").hide();
			$(this).parent().css("background-color", "#595959");
			boxstate++;
			return;
		}
		if (boxstate === 1) {
			console.log("checkbox was clicked. x");
			$(this).find(".check").hide();
			$(this).find(".xmark").show();
			boxstate++;
			return;
		}
		if (boxstate === 2) {
			console.log("checkbox cleared");
			$(this).find(".check").hide();
			$(this).find(".xmark").hide();
			boxstate = 0;
			$(this).parent().css("background-color", "#ffdab9");
			return;
		}
	});
};