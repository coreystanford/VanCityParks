var directions = (function () {

    return {

	    initialize: function (marker, clientPos) {

	    	var markerArray = [];
            // Instantiate a directions service.
            directionsService = new google.maps.DirectionsService();
            console.log(marker.position);
            // Create a map and center it on Manhattan.
            var latlon = new google.maps.LatLng(marker.position.k, marker.position.D);
            var mapOptions = {
              zoom: 17,
              center: latlon
            }
            map = new google.maps.Map(document.getElementById('marker-map-canvas'), mapOptions);
            console.log(map);
            // Create a renderer for directions and bind it to the map.
            var rendererOptions = {
              map: map
            }
            directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)

            // Instantiate an info window to hold step text.
            stepDisplay = new google.maps.InfoWindow();

            calcRoute();

            function calcRoute() {

              // First, remove any existing markers from the map.
              for (var i = 0; i < markerArray.length; i++) {
                markerArray[i].setMap(null);
              }

              // Now, clear the array itself.
              markerArray = [];

              // Retrieve the start and end locations and create
              // a DirectionsRequest using WALKING directions.
              var start = clientPos;
              var end = latlon;
              var request = {
                  origin: start,
                  destination: end,
                  travelMode: google.maps.TravelMode.WALKING
              };

              // Route the directions and pass the response to a
              // function to create markers for each step.
              directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                  var warnings = document.getElementById('warnings_panel');
                  warnings.innerHTML = '<b>' + response.routes[0].warnings + '</b>';
                  directionsDisplay.setDirections(response);
                  showSteps(response);
                  console.log(response);
                  warnings.innerHTML += response.routes[0].legs[0].duration.text;
                }
              });
            }

            function showSteps(directionResult) {
              // For each step, place a marker, and add the text to the marker's
              // info window. Also attach the marker to an array so we
              // can keep track of it and remove it when calculating new
              // routes.
              var myRoute = directionResult.routes[0].legs[0];

              for (var i = 0; i < myRoute.steps.length; i++) {
                var marker = new google.maps.Marker({
                  position: myRoute.steps[i].start_location,
                  map: map
                });
                attachInstructionText(marker, myRoute.steps[i].instructions);
                markerArray[i] = marker;
              }
            }

            function attachInstructionText(marker, text) {
              google.maps.event.addListener(marker, 'click', function() {
                // Open an info window when the marker is clicked on,
                // containing the text of the step.
                stepDisplay.setContent(text);
                stepDisplay.open(map, marker);
              });
            }


		}

	}

}());