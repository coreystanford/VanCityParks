app.factory('moreInfo', ['$http', function($http) {

	var getPark = function(id, url){
		console.log(id);

		return $http.post( url, { id: id } );
	}

	return {
		getParkRequest: function(id){return getPark(id, 'moreInfo.php'); },
	};

}]);