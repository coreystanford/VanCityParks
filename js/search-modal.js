var searchModal = (function () {

    return {

        // Open modal window

        open: function () {

            // Send AJAX Request

            $.ajax({
                url: "search-modal.php",
                success:function(response){

                    // Add the response from the server to the HTML
                    $('#marker-modal').empty().append(response);
                    $('#marker-modal').css({
                        display: 'block'
                    });

                    // On click of #modal-close, execute close function
                    $('body').on('click', '#legend-modal-close', function (e) {
                        e.preventDefault();
                        $('#search-modal-content').remove();
                        // Change CSS back to initial state of hidden
                        $('#marker-modal').css('display', 'none');
                    });

                    // ESC key - close the modal window on keydown
                    $(document).on( 'keydown', function ( e ) {
                        if ( e.keyCode === 27 ) {
                            e.preventDefault();
                            $('#search-modal-content').remove();
                            // Change CSS back to initial state of hidden
                            $('#marker-modal').css('display', 'none');
                        }
                    });

                }
                
            });

        },

        // Close modal window

        close: function () {

            // Remove content from the inner tag
            $('#search-modal-content').remove();
            // Change CSS back to initial state of hidden
            $('#marker-modal').css('display', 'none');

        }

    };

}());