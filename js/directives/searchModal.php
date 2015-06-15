<div id="search-content">

	<div ng-controller="SearchController">
	
		<div id="search-container" ng-style="searchStyle">

			<div id="left">

				<div id="search-map"></div>

			</div>

			<div id="right">

				<input type="text" placeholder="Parks, neighbourhoods, activities" ng-model="search" />

				<div id="results-container">

					<div id="results" ng-repeat="result in results">
						<search-result></search-result>
					</div>

				</div>

			</div>

		</div>

		<park-info id="info-slide" ng-style="infoStyle"></park-info>

	</div>

</div>