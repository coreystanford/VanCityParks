<?php

header("Content-Type: application/json");

include 'functions.php';
include 'park.php';

$fountains = getFountains();

$waters = array();
$water = array();

 foreach ($fountains as $fountain){

	$lat = $fountain->geometry->coordinates[1];
	$lon = $fountain->geometry->coordinates[0];
	$type = $fountain->properties->NAME;

	$water = ['lat' => $lat, 'lon' => $lon, 'type' => $type];

	$waters[] = $water;
}

echo json_encode($waters);