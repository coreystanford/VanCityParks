<div id="search-content">

	<div ng-controller="SearchController">
	
		<div id="search-container">

			<div id="left">

				<div id="search-map"></div>

			</div>

			<div id="right">

				<input type="text" placeholder="Find a park or neighbourhood" ng-model="search" />

				<div id="results-container">

					<div id="results" ng-repeat="result in results">
						<search-result info="result"></search-result>
					</div>

				</div>

			</div>

		</div>

		<park-info id="info-slide" info="park" ng-style="infoStyle"></park-info>

	</div>

</div>