<div id="search-content" ng-app="parkSearch">

	<button role="button" id="legend-modal-close"><i class="fa fa-times"></i></button>

	<div ng-controller="SearchController">
	
		<div id="left">

			<div id="search-map"></div>

		</div>

		<div id="right">

			<input type="text" placeholder="Find a park or neighbourhood" ng-model="search" />

			<div ng-show="search"></div>

		</div>

	</div>

</div>