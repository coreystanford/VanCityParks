app.factory('search', ['$http', function($http) {

	var doSearch = function(query, url){
		return $http.post( url, { query: query } );
	}

	return {
		doSearchRequest: function(query){return doSearch(query, 'search.php'); },
	};

}]);