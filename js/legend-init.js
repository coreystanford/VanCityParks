$(document).ready(function() {

	// add click event for all projects in the feed
	$('#off-canvas').on('click', '#legend a', function (e) {
		// don't go to the href
    	e.preventDefault();
    	// instead, open the modal window
    	modal.open();
    });

});