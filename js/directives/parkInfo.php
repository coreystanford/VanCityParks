<div id="marker-title">
		
	<h1 class="title">{{ info.name }}</h1>

	<h3><a href="{{ info.neighbourhoodURL }}" class="neighbourhood" target="_blank">{{ info.neighbourhood }}</a></h3>

	<div id="start">
		<input type='text' name='start-location' id='start-location' placeholder='Starting Location'>
		<button role=button id='start-btn'><i class='fa fa-search'></i></button>
	</div>

</div>

<div id="marker-map-canvas"></div>

<div id="marker-modal-content">

	<button role="button" ng-click="closePark()" id="modal-close"><i class="fa fa-times"></i></button>

	<div class="map-info">

		<div id="map-options">
			<span rel="DRIVING"><i class="fa fa-car"></i></span>
		    <span rel="WALKING"><i class="fa fa-street-view"></i></span>
		    <span rel="BICYCLING"><i class="fa fa-bicycle"></i></span>
		    <span rel="TRANSIT"><i class="fa fa-bus"></i></span>
		</div>

		<div id="duration">{{ duration }}</div>

	</div>

	<div class="info">

			<h3>Facilities</h3>
			<div class="facilities" ng-repeat="facility in facilities">
					<h4>{{ facility }}</h4>
			</div>

			<h3>Special Features</h3>
			<div class="special">
					<h4 ng-repeat="special in specialFeatures">{{ special }}</h4>
			</div>

			<h3>Washrooms</h3>
			<div class="washroom" ng-repeat="washroom in washrooms">
				<h4>Location: {{ washroom.location }}</h4>
				<h4>Summer Hours: {{ washroom.sum_hours }}</h4>
				<h4>Winter Hours: {{ washroom.wint_hours }}</h4>
				<h4>Notes: {{ washroom.notes }}</h4>
			</div>

	</div>

</div><!-- end modal-content -->