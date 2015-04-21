<div id="marker-title">
		
	<h1 class="title">{{ park.name }}</h1>

	<h3><a ng-href="{{ park.neighbourhoodURL }}" class="neighbourhood" target="_blank">{{ park.neighbourhood }}</a></h3>

	<div id="start">
		<input type='text' name='start-location' id='start-location' placeholder='Starting Location' ng-model="startCity">
		<button role=button id='start-btn' ng-click="startLoc(park.lat, park.lon, startCity, transitMode)"><i class='fa fa-search'></i></button>
	</div>

</div>

<div id="info-map-canvas"></div>

<div id="marker-modal-content">

	<a role="button" ng-click="closePark()" id="info-close"><i class="fa fa-arrow-left"></i></a>

	<div class="map-info">

		<div id="map-options">
			<span ng-repeat="transit in transits" ng-click="transitMode = transit.mode; startLoc(park.lat, park.lon, startCity, transitMode, client); selectMode(transit)" ng-class='{ active: transit==selectedMode }'><i class="{{transit.icon}}"></i></span>
		</div>

		<div id="duration"></div>

	</div>

	<div class="info">

			<div ng-show="park.parkFacilities[0]">
				<h3 >Facilities</h3>
				<div class="facilities">
						<h4 ng-repeat="facility in park.parkFacilities">{{ facility }}</h4>
				</div>
			</div>
			
			<div ng-show="park.specialFeatures[0]">
				<h3>Special Features</h3>
				<div class="special">
						<h4 ng-repeat="special in park.specialFeatures">{{ special }}</h4>
				</div>
			</div>

			<div ng-show="park.washrooms[0].location">
				<h3>Washrooms</h3>
				<div class="washroom" ng-repeat="washroom in park.washrooms">
					<h4>Location: {{ washroom.location }}</h4>
					<h4>Summer Hours: {{ washroom.sum_hours }}</h4>
					<h4>Winter Hours: {{ washroom.wint_hours }}</h4>
					<h4>Notes: {{ washroom.notes }}</h4>
				</div>
			</div>

	</div>

</div><!-- end modal-content -->