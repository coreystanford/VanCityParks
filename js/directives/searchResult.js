app.directive('searchResult', function(){
  return {
    restrict: 'E',
    scope: {
    	info: "="
    },
    templateUrl: 'js/directives/searchResult.php'
  };
});