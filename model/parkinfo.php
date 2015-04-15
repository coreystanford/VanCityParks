<?php
class ParkInfo {

	public $park_id, $name, $lat, $lon, $status, $neighbourhood, $neighbourhoodURL, $parkFacilities, $specialFeatures, $washrooms;

	public function __construct($park_id, $name, $lat, $lon, $status, $neighbourhood, $neighbourhoodURL, $parkFacilities, $specialFeatures, $washrooms){
		$this->park_id = $park_id;
		$this->name = $name;
		$this->lat = $lat;
		$this->lon = $lon;
		$this->status = $status;
		$this->neighbourhood = $neighbourhood;
		$this->neighbourhoodURL = $neighbourhoodURL;
		$this->parkFacilities = $parkFacilities;
		$this->specialFeatures = $specialFeatures;
		$this->washrooms = $washrooms;
	}

}