app.controller('SearchController', ['$scope', '$timeout', 'search', 'moreInfo', function($scope, $timeout, search, moreInfo) {

	var windowWidth = window.innerWidth;

	$scope.parkInfo = false;
	$scope.infoStyle = { "left": windowWidth,
						 "right": -windowWidth };

	$scope.openPark = function(id){

		moreInfo.getParkRequest(id).success(function(data){
			$scope.park = data;

            var latlon = new google.maps.LatLng(data.lat, data.lon);
            var mapOptions = {
            	zoom: 17,
            	center: latlon
            }
            map = new google.maps.Map(document.getElementById('info-map-canvas'), mapOptions);

			console.log(data);
		});

		$scope.parkInfo = true;
		$scope.infoStyle = { "left": 0 ,
						 "right": 0 };
		$scope.searchStyle = { "left": -windowWidth +"px",
						 "right": windowWidth +"px"};
	}

	$scope.closePark = function(){
		$scope.parkInfo = false;
		$scope.infoStyle = { "left": windowWidth +"px",
						 "right": -windowWidth +"px"};
		$scope.searchStyle = { "left": 0 ,
						 "right": 0 };
	}

	var map = document.getElementById("search-map");
    var markers = [];
    
	// map config
    var mapOptions = {
	    zoom: 12,
	    center: new google.maps.LatLng(49.2569684,-123.1239135)
	};

    mainMap = new google.maps.Map(map, mapOptions);

  	var timeout;
	$scope.$watch('search', function(query){

		if(query){

			if(timeout){
				$timeout.cancel(timeout);
			}

			timeout = $timeout(function(){

				search.doSearchRequest(query).success(function(data){

					$scope.results = data;

					// clear markers
					for (var i = 0; i < markers.length; i++ ) {
					    markers[i].setMap(null);
					}
					markers = [];

					var greenIcon = "images/green.png";
				    var redIcon = "images/red.png";
				    var amberIcon = "images/amber.png";

					angular.forEach(data, function(data){
						//console.log(this);
						var pos = new google.maps.LatLng(data.lat, data.lon);
						if(data.status == "Closed"){
		                    var newMarker = new google.maps.Marker({
		                        position: pos,
		                        map: mainMap,
		                        icon: redIcon,
		                        title: data.name
		                    });
		                    newMarker.set("id", data.park_id);
		                    markers.push(newMarker);
		                    google.maps.event.addListener(newMarker, 'click', function() {
		                        $scope.openPark(newMarker.id);
		                    });
		                } else if(data.status == "User discretion"){
		                    var newMarker = new google.maps.Marker({
		                        position: pos,
		                        map: mainMap,
		                        icon: amberIcon,
		                        title: data.name
		                    });
		                    newMarker.set("id", data.park_id);
		                    markers.push(newMarker);
		                    google.maps.event.addListener(newMarker, 'click', function() {
		                        $scope.openPark(newMarker.id);
		                    });
		                } else {
		                    var newMarker = new google.maps.Marker({
		                        position: pos,
		                        map: mainMap,
		                        icon: greenIcon,
		                        title: data.name
		                    });
		                    newMarker.set("id", data.park_id);
		                    markers.push(newMarker);
		                    google.maps.event.addListener(newMarker, 'click', function() {
		                        $scope.openPark(newMarker.id);
		                    });
		                }
		                
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

}]);