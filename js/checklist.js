// $.getJSON( "../../data.json", function(data) {
  // var kitchenitems = [];
  // var livingitems = [];
  // var nurseryitems = [];
  // var outdooritems = [];
  // var garageitems = [];
  // var bathitems = [];

//ERRORS - Checklists is not defined
// boxstate is not defined
// undefined is not a function (index.html:41)
  	loadData();

function loadData() {
	var savedData = localStorage.getItem("CHECKLISTS");
	if (savedData){
		CHECKLISTS = JSON.parse(savedData);
	}
	else {
		CHECKLISTS = INIT_CHECKLISTS;
		saveData();
	}
}

function saveData () {
	// save data to local storage
	localStorage.setItem("CHECKLISTS",JSON.stringify(CHECKLISTS));
}

 console.log(CHECKLISTS);

  var loadItemsAtIndex = function(itemIndex) {
  	var itemList = CHECKLISTS[itemIndex-1].items;
  	$.each(itemList, function( idx, item ) {
  		//console.log(idx, item);
  		//console.log(itemIndex);
  	 	//boxstate = parseInt(item.completed); //stores whether the checkbox is empty, ✓ or x
  		var checkboxdiv = "<div class='pull-right checkbox' id= '"+ item.id + "'>" + "<div class='check'><img class='checkmark marks' src='../../images/green-checkmark.png'></div>" + "<div class='x'><img class='xmark marks' src='../../images/x-mark.png'></div>" + "</div>"
  		var itemElement = $("<li class='todo-table table-view-cell' id='"  + CHECKLISTS[0].housearea +"-"+ idx + "'>" + "<span class='description'>" + item.description + "</span>" + checkboxdiv + "</li>") ;
	    $( ".table-view").append(itemElement);
	});

	for(var i=0; i<itemList.length; i++){
		if (itemList[i].completed == 0){
			var div = $("#"+itemList[i].id);
			div.find('.check').hide();
			div.find('.xmark').hide();
			div.parent().css("background-color", "#ffdab9");

		}
		if (itemList[i].completed == 1){
			var div = $("#"+itemList[i].id);
			div.find('.xmark').hide();
			div.parent().css("background-color", "#595959");
		}
		if (itemList[i].completed == 2){
			var div = $("#"+itemList[i].id);
			div.find('.check').hide();
			div.parent().css("background-color", "#595959");
		}
	}



	$('.checkbox').click(function() {

		var itemID = $(this).attr('id');
		var item = null;
		for(var i=0; i<itemList.length; i++){
			if (itemList[i].id === itemID){
				item = itemList[i];
			}
		}

		
		item.completed = parseInt(item.completed);
		if (item.completed  === 0) {
			console.log("checkbox was clicked. ✓");
			$(this).find(".check").show();
			$(this).find(".xmark").hide();
			$(this).parent().css("background-color", "#595959");
			item.completed = item.completed+1;
			saveData();
			return;
		}
		if (item.completed === 1) {
			console.log("checkbox was clicked. x");
			$(this).find(".check").hide();
			$(this).find(".xmark").show();
			item.completed = item.completed+1;
			saveData();
			return;
		}
		if (item.completed === 2) {
			console.log("checkbox cleared");
			$(this).find(".check").hide();
			$(this).find(".xmark").hide();
			item.completed = 0;
			$(this).parent().css("background-color", "#ffdab9");
			saveData();
			return;
		}
	});
}