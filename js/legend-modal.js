var modal = (function () {

    return {

        // Open modal window

        open: function () {

            // Send AJAX Request

            $.ajax({
                url: "legend-modal.php",
                success:function(response){

                    // Add the response from the server to the HTML
                    $('#legend-modal').empty().append(response);
                    $('#legend-modal').css({
                        display: 'block'
                    });

                    // On click of #modal-close, execute close function
                    $('#off-canvas').on('click', '#legend-modal-close', function (e) {
                        e.preventDefault();
                        modal.close();
                    });

                    // ESC key - close the modal window on keydown
                    $(document).on( 'keydown', function ( e ) {
                        if ( e.keyCode === 27 ) {
                            e.preventDefault();
                            modal.close();
                        }
                    });

                }
                
            });

        },

        // Close modal window

        close: function () {

            // Remove content from the inner tag
            $('#modal-content').remove();
            // Change CSS back to initial state of hidden
            $('#legend-modal').css('display', 'none');

        }

    };

}());