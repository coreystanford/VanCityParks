app.factory('moreInfo', ['$http', function($http) {

	var doSearch = function(id, url){
		console.log(id);

		return $http.post( url, { id: id } );
	}

	return {
		doSearchRequest: function(id){return doSearch(id, 'moreInfo.php'); },
	};

}]);