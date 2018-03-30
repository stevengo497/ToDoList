// Create input box - DONE
// "submit" box with text (Add) - create function
// numbered list appears under (stacked on top of each other)
//*******
// $('#TodoForm').on("submit", function(event) {
// 	event.preventDefault();

$(document).ready(function(event) {

$('#TodoForm').submit(function(event) {
	event.preventDefault();

$('#orderedList').append("<li>" + ($('#inputBox').val()))
})
});