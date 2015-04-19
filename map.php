<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>VanCityParks</title>
		<!-- Styles and font -->
	    <link rel="stylesheet" type="text/css" href="./css/style.css">
	    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	    <!-- Favicon -->
  		<link rel="shortcut icon" type="image/png" href="./images/green.png">
  		<!-- jQuery -->
	    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
	    <!-- Google Maps Javascript API v3 -->
	    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
	    <!-- AngularJS -->
	    <script src="js/vendor/angular.min.js"></script>
	</head>
		
	<body>   

		<header>
			
			<h2 id="menu" rel="off"><span id="logoblue">VanCity</span><span id="logogreen">Parks</span> <i class="fa fa-bars"></i></h2>

			<a href="#" id="search"><span>Search <i class="fa fa-search"></i></span></a>

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

		</div><!-- end wrapper -->

		<!-- Google Maps Directions -->
		<script src="./js/directions-init.js"></script>

		<!-- Main Map -->
		<script src="./js/map.js"></script>
		<!-- Marker Modal -->
		<script src="./js/marker-modal.js"></script>
		<!-- Legend Modal -->
		<script src="./js/legend-modal.js"></script>
		<script src="./js/legend-init.js"></script>
		<!-- Search Modal -->
		<script src="./js/search-modal.js"></script>
		<script src="./js/search-init.js"></script>

		<!-- Modules -->
	    <script src="./js/app.js"></script>
	    <!-- Controllers -->
	    <script src="./js/controllers/SearchController.js"></script>
	    <!-- Directives -->
	    <script src="js/directives/result.js"></script>
	    <!-- Services -->
	    <script src="./js/services/search.js"></script>	
		
	</body>

</html>