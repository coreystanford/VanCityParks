app.controller('SearchController', ['$scope', '$timeout', 'all', 'search', 'moreInfo', function($scope, $timeout, all, search, moreInfo) {

    var markers = [];
    var mapOptions = {
	    zoom: 12,
	    center: new google.maps.LatLng(49.2569684,-123.1239135)
	};
    mainMap = new google.maps.Map(document.getElementById("search-map"), mapOptions);

    var windowWidth = window.innerWidth;

	$scope.parkInfo = false;
	$scope.infoStyle = { "left": windowWidth, "right": -windowWidth };
	$scope.transitMode = 'DRIVING';

	var clientPos = "";
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
	        clientPos = new google.maps.LatLng(position.coords.latitude,
	                                        position.coords.longitude);
	        $scope.client = clientPos;
	    });
	}

    var greenIcon = "images/green.png";
    var redIcon = "images/red.png";
    var amberIcon = "images/amber.png";

    all.doAllRequest().success(function(data){

		$scope.results = data;

	});

  	var timeout;
	$scope.$watch('search', function(query){

		if(query){

			if(timeout){
				$timeout.cancel(timeout);
			}

			timeout = $timeout(function(){

				search.doSearchRequest(query).success(function(data){

					$scope.results = data;

					for (var i = 0; i < markers.length; i++ ) {
					    markers[i].setMap(null);
					}
					markers = [];

					angular.forEach(data, function(data){
						
						var pos = new google.maps.LatLng(data.lat, data.lon);
						var newMarker = new google.maps.Marker({
	                        position: pos,
	                        map: mainMap,
	                        title: data.name
	                    });
	                    newMarker.set("id", data.park_id);

						if(data.status == "Closed"){
							newMarker.set("icon", redIcon);
		                } else if(data.status == "User discretion"){
		                    newMarker.set("icon", amberIcon);
		                } else {
		                    newMarker.set("icon", greenIcon);
		                }

	                    markers.push(newMarker);
	                    google.maps.event.addListener(newMarker, 'click', function() {
	                        $scope.openPark(newMarker.id, "","","");

	                    });
		                
					})

					// Source http://stackoverflow.com/questions/10736653/google-map-api-v3-centre-map-on-markers

					function autoCenter(){
					    var limits = new google.maps.LatLngBounds();
					    $.each(markers, function (index, marker){
					        limits.extend(marker.position);
					    });
					    mainMap.fitBounds(limits);
					}

					autoCenter();

				});

			}, 350);
			
		}

	});

	

	$scope.openPark = function(id, start, transitMode, client){

		moreInfo.getParkRequest(id).success(function(data){
			$scope.park = data;

			if(client){

				if(start == undefined){
					start = client;
					console.log(start);
				}

				ngDirections.initialize(data, start, 'info-map-canvas', transitMode);
				
            } else {
            	var latlon = new google.maps.LatLng(data.lat, data.lon);
	            var mapOptions = {
	            	zoom: 17,
	            	center: latlon
	            }
	            map = new google.maps.Map(document.getElementById('info-map-canvas'), mapOptions);
			}

		});

		$scope.infoStyle = { "left": 0 , "right": 0 };
		$scope.searchStyle = { "left": -windowWidth +"px", "right": windowWidth +"px"};
	}

	$scope.closePark = function(){
		$scope.infoStyle = { "left": windowWidth +"px", "right": -windowWidth +"px"};
		$scope.searchStyle = { "left": 0 , "right": 0 };
	}

	$scope.startLoc = function(lat, lon, start, transitMode, clientPos){
		var data = {
			"lat": lat,
			"lon": lon
		};

		if(start == undefined){
			start = clientPos;
			console.log(start);
		}

		$scope.duration = ngDirections.initialize(data, start, 'info-map-canvas', transitMode);
	}

}]);