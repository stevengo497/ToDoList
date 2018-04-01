// Create input box 
// "submit" box with text (Add) - create function
// numbered list appears under (stacked on top of each other)

$(document).ready(function(event) {

$('#TodoForm').submit(function(event) {
	event.preventDefault();

$('#orderedList').append("<li>" + ($('#inputBox').val()))

$('#inputBox').val(" "); // this clears the input box
})
// $('button').click(function() {
// 	$('li').strikeout();

})

// Possibly do a strike out w/ css.$('li')

// $('#orderedList').append("<li>" + ($('#inputBox').val()) + ("<button>")) adds a button