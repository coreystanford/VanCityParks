<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>VanCityParks</title>
	    <link rel="stylesheet" type="text/css" href="./css/style.css">
	    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
	    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
	    <script src="./js/marker-modal.js"></script>
	    <script src="./js/map.js"></script>
	</head>
		
	<body>   

		<header>
			
			<h2 id="menu" rel="off"><span id="logoblue">VanCity</span><span id="logogreen">Parks</span> <i class="fa fa-bars"></i></h2>

			<a href="#" id="search"><span>Search <i class="fa fa-search"></i></span></a>

		</header>

		<nav id="off-canvas">

			<div id="options">
				<a href="#" class="selected" rel="on" id="green"><span>Open</span></a>
				<a href="#" class="selected" rel="on" id="amber"><span>User Discretion</span></a>
				<a href="#" class="selected" rel="on" id="red"><span>Closed</span></a>
			</div>

			<div id="water">
				<a href="#" id="fountains" rel="off"><span>Water Fountains</span></a>
			</div>

			<div id="legend">
				<a href="#" rel="off"><span>Legend</span></a>
			</div>
			<div id="legend-modal"></div>
		</nav>

		<div id="wrapper">

			<div id="map-canvas"></div>

			<footer>
				
				<p>&copy;<?php echo date('Y'); ?> VanCityParks | All Rights Reserved</p>

			</footer>

		</div>

		<div id="marker-modal"></div>


		<script src="./js/legend-modal.js"></script>
		<script src="./js/legend-init.js"></script>
		
	</body>

</html>