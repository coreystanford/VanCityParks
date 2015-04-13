<?php

header("Content-Type: application/json");

include 'functions.php';
include 'parkinfo.php';

$facilities = getParks();
$parkStatus = getParkStatus();

$parks = array();

foreach($facilities as $facility){

	$park_id = (string)$facility['ID'];
	$name = (string)$facility->Name;
	$neighURL = (string)$facility->Neighbourhood->NeighbourhoodURL;
	$neigh = (string)$facility->Neighbourhood->NeighbourhoodName;

	$pfs = array();
	foreach($facility->Facilities->Facility as $fac){
		$pf = (string)$fac->FacilityCount . " " . (string)$fac->FacilityType;
		$pfs[] = $pf;
	}

	$coordinates= explode(",", (string)$facility->GoogleMapDest);
	$lat = $coordinates[0];
	$lon = $coordinates[1];
	$status = "";

	foreach($parkStatus as $stat){
		if($facility['ID'] == $stat->park_id){
			$status= $stat->weekend_status;
		}
	}

	$park = new ParkInfo($park_id, $name, $lat, $lon, $status, $neigh, $neighURL, $pfs);
	$parks[] = $park;
}

echo json_encode($parks);