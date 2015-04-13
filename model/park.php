<?php

class Park {

	public $park_id, $name, $lat, $lon, $status;

	public function __construct($park_id, $name, $lat, $lon, $status = null){
		$this->park_id = $park_id;
		$this->name = $name;
		$this->lat = $lat;
		$this->lon = $lon;
		$this->status = $status;
	}

}
