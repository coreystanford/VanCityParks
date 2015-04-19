<div id="marker-title">
		
	<h1 class="title">{{ park.name }}</h1>

	<h3><a ng-href="{{ park.neighbourhoodURL }}" class="neighbourhood" target="_blank">{{ park.neighbourhood }}</a></h3>

	<div id="start">
		<input type='text' name='start-location' id='start-location' placeholder='Starting Location'>
		<button role=button id='start-btn'><i class='fa fa-search'></i></button>
	</div>

</div>

<div id="info-map-canvas"></div>

<div id="marker-modal-content">

	<a role="button" ng-click="closePark()" id="info-close"><i class="fa fa-arrow-left"></i></a>

	<div class="map-info">

		<div id="map-options">
			<span rel="DRIVING"><i class="fa fa-car"></i></span>
		    <span rel="WALKING"><i class="fa fa-street-view"></i></span>
		    <span rel="BICYCLING"><i class="fa fa-bicycle"></i></span>
		    <span rel="TRANSIT"><i class="fa fa-bus"></i></span>
		</div>

		<div id="duration">{{ park.duration }}</div>

	</div>

	<div class="info">

			<h3>Facilities</h3>
			<div class="facilities">
					<h4 ng-repeat="facility in park.parkFacilities">{{ facility }}</h4>
			</div>

			<h3>Special Features</h3>
			<div class="special">
					<h4 ng-if="park.specialFeatures" ng-repeat="special in park.specialFeatures">{{ special }}</h4>
			</div>

			<h3>Washrooms</h3>
			<div class="washroom" ng-repeat="washroom in park.washrooms">
				<h4>Location: {{ washroom.location }}</h4>
				<h4>Summer Hours: {{ washroom.sum_hours }}</h4>
				<h4>Winter Hours: {{ washroom.wint_hours }}</h4>
				<h4>Notes: {{ washroom.notes }}</h4>
			</div>

	</div>

</div><!-- end modal-content -->