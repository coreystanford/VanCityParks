app.directive('parkInfo', function(){
  return {
    restrict: 'E',
    scope: {
    	info: "="
    },
    templateUrl: 'js/directives/parkInfo.php'
  };
});