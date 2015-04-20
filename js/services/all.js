app.factory('all', ['$http', function($http) {

	var doAll = function(url){
		return $http.post( url );
	}

	return {
		doAllRequest: function(){return doAll('getAll.php'); },
	};

}]);