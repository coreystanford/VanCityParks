$(document).ready(function() {

	// add click event for all projects in the feed
	$('header').on('click', '#search', function (e) {
		// don't go to the href
    	e.preventDefault();
    	// instead, open the modal window
    	searchModal.open();
    });

});