var markerModal = (function () {

    return {

        // Open modal window

        open: function (marker, clientPos) {

            // Send AJAX Request

            $.ajax({
                type: "POST",
                url: "marker-modal.php",
                data: {id: marker.id},
                success:function(response){

                    // Add the response from the server to the HTML
                    $('#marker-modal').empty().append(response);
                    $('#marker-modal').css({
                        display: 'block'
                    });

                    if(clientPos){

                        directions.initialize(marker, clientPos);

                    } else {

                        var latlon = new google.maps.LatLng(marker.position.k, marker.position.D);
                        var mapOptions = {
                          zoom: 17,
                          center: latlon
                        }
                        map = new google.maps.Map(document.getElementById('marker-map-canvas'), mapOptions);
                        
                    }

                    $('#map-options span:eq(0)').addClass('active');

                    $('#map-options span').each(function(){
                        $(this).on('click', function(){
                            transitMode = $(this).attr('rel');
                            $('#map-options span').removeClass('active');
                            $(this).addClass('active');
                            directions.initialize(marker, clientPos, transitMode);
                        });
                    });

                    // On click of #modal-close, execute close function
                    $('body').on('click', '#modal-close', function (e) {
                        e.preventDefault();
                        $('#marker-modal-content').remove();
                        // Change CSS back to initial state of hidden
                        $('#marker-modal').css('display', 'none');
                    });

                    // ESC key - close the modal window on keydown
                    $(document).on( 'keydown', function ( e ) {
                        if ( e.keyCode === 27 ) {
                            e.preventDefault();
                            $('#marker-modal-content').remove();
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
            $('#marker-modal-content').remove();
            // Change CSS back to initial state of hidden
            $('#marker-modal').css('display', 'none');

        }

    };

}());