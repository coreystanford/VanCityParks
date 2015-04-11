<?php

header("Content-Type: application/json");

include 'functions.php';
include 'park.php';

$facilities = getParks();
$parkStatus = getParkStatus();

$parks = array();

foreach($facilities as $facility){

	$park_id = (string)$facility['ID'];
	$name = (string)$facility->Name;
	$coordinates= explode(",", (string)$facility->GoogleMapDest);
	$lat = $coordinates[0];
	$lon = $coordinates[1];
	$status = "";

	foreach($parkStatus as $stat){
		if($facility['ID'] == $stat->park_id){
			$status= $stat->weekend_status;
		}
	}

	$park = new Park($park_id, $name, $lat, $lon, $status);
	$parks[] = $park;
}

echo json_encode($parks);