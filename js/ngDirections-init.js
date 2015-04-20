var ngDirections = (function () {

    return {

	    initialize: function (marker, clientPos, mapTag, transitMode) {

	    	var markerArray = [];

        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService();

        // Create a map and center it on Manhattan.
        var latlon = new google.maps.LatLng(marker.lat, marker.lon);
        
        var mapOptions = {
          zoom: 17,
          center: latlon
        }
        map = new google.maps.Map(document.getElementById(mapTag), mapOptions);

        // Create a renderer for directions and bind it to the map.
        var rendererOptions = {
          map: map
        }
        directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)

        // Instantiate an info window to hold step text.
        stepDisplay = new google.maps.InfoWindow();

        if(!transitMode){
        	transitMode = "DRIVING";
        }

        calcRoute(transitMode);

        function calcRoute(transitMode) {

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
              travelMode: google.maps.TravelMode[transitMode]
          };

          // Route the directions and pass the response to a
          // function to create markers for each step.
          directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              var duration = document.getElementById('duration');
              duration.innerHTML = '<p>' + response.routes[0].legs[0].duration.text + '</p>';
              directionsDisplay.setDirections(response);
            }
          });
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