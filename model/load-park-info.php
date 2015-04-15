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

	$specfeatures = array();
	foreach($facility->Facilities->SpecialFeature as $spec){
		$sf = (string)$spec;
		$specfeatures[] = $sf;
	}

	$washrooms = array();
	foreach($facility->Facilities->Washroom as $wash){
		$loc = ['location' => (string)$wash->Location, 'sum_hours' => (string)$wash->SummerHours, 'wint_hours' => (string)$wash->WinterHours, 'notes' => (string)$wash->Notes];
		$washrooms[] = $loc;
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

	$park = new ParkInfo($park_id, $name, $lat, $lon, $status, $neigh, $neighURL, $pfs, $specfeatures, $washrooms);
	$parks[] = $park;
}

echo json_encode($parks);