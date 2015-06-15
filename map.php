<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>VanCityParks</title>
		<!-- Styles and font -->
	    <link rel="stylesheet" type="text/css" href="./css/style.css">
	    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
	    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	    <!-- Favicon -->
  		<link rel="shortcut icon" type="image/png" href="./images/green.png">
  		<!-- jQuery -->
	    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
	    <!-- Google Maps Javascript API v3 -->
	    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
	    <!-- AngularJS -->
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
	</head>
		
	<body ng-app="parkSearch">   

		<div ng-controller="ModalController">

			<header>
				
				<h2 id="menu" rel="off"><span id="logoblue">VanCity</span><span id="logogreen">Parks</span> <i class="fa fa-bars"></i></h2>

				<a href="#" id="search" ng-click="toggleSearch()" ng-hide="showModal"><span>Search <i class="fa fa-search"></i></span></a>
				<a href="#" id="search" ng-click="toggleSearch()" ng-show="showModal"><i class="fa fa-times fa-lg"></i></span></a>

			</header><!-- end header -->

			<nav id="off-canvas">

				<div id="options">

					<a href="#" class="selected" rel="on" id="green"><span>Open</span></a>
					<a href="#" class="selected" rel="on" id="amber"><span>User Discretion</span></a>
					<a href="#" class="selected" rel="on" id="red"><span>Closures</span></a>

				</div><!-- end options -->

				<div id="water">

					<a href="#" id="fountains" rel="off"><span>Water Fountains</span></a>

				</div><!-- end water -->

				<div id="legend">

					<a href="#" rel="off"><span>Legend</span></a>

				</div><!-- end legend -->

				<div id="legend-modal"></div><!-- end legend-modal -->
				
			</nav><!-- end off-canvas -->

			<div id="wrapper">

				<div id="map-canvas"></div><!-- end map-canvas -->

				<footer>
					
					<p>&copy;<?php echo date('Y'); ?> VanCityParks | All Rights Reserved</p>

				</footer>

				<div id="marker-modal"></div><!-- end marker-modal -->

				<search-modal id="search-modal" ng-if="showModal"></search-modal><!-- end search-modal -->

			</div><!-- end wrapper -->

		</div>

		<!-- Google Maps Directions -->
		<script src="./js/directions-init.js"></script>
		<script src="./js/ngDirections-init.js"></script>

		<!-- Main Map -->
		<script src="./js/map.js"></script>
		<!-- Marker Modal -->
		<script src="./js/marker-modal.js"></script>
		<!-- Legend Modal -->
		<script src="./js/legend-modal.js"></script>
		<script src="./js/legend-init.js"></script>

		<!-- Modules -->
	    <script src="./js/app.js"></script>
	    <!-- Controllers -->
	    <script src="./js/controllers/SearchController.js"></script>
	    <script src="./js/controllers/ModalController.js"></script>
	    <!-- Directives -->
	    <script src="js/directives/searchModal.js"></script>
	    <script src="js/directives/searchResult.js"></script>
	    <script src="js/directives/parkInfo.js"></script>
	    <!-- Services -->
	    <script src="./js/services/search.js"></script>	
	    <script src="./js/services/moreInfo.js"></script>
	    <script src="./js/services/all.js"></script>		
	</body>

</html>