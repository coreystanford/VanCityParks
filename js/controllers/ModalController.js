app.controller('ModalController', ['$scope', '$http', function($scope, $http) {

	$scope.showModal = false;

	$scope.toggleSearch = function(){
		$scope.showModal = !$scope.showModal;
	}

}]);