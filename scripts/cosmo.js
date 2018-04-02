'use strict';

/*Using JQuery*/

$(document).ready(function() {

    // get the names from alt tag in the grid list of images and display it to the label

    $("#grid-small li figure img").hover(
	function() {
	    var names = $(this).attr("alt");
	    $("#category-label span").text(names);
//	    $("#category-label span").fadeOut(1000);
//	    $("#category-label span").fadeIn(1000);
	},
	function() {
	    $("#category-label span").text(" ");
	});
});
