<?php

function getParks() {

    $base_url = 'ftp://webftp.vancouver.ca/opendata/xml/parks_facilities.xml';
    $curl = curl_init($base_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $xml_data = curl_exec($curl);
    curl_close($curl);

    return simplexml_load_string($xml_data);
}

function getParkStatus() {

    $base_url = 'ftp://webftp.vancouver.ca/opendata/json/weekendplayfieldstatus.json';
    $curl = curl_init($base_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $json_data = curl_exec($curl);
    curl_close($curl);

    return json_decode($json_data);
}

function getCustom() {

    $base_url = 'localhost/VanCityParks/json/custom-parks.json';
    $curl = curl_init($base_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $json_data = curl_exec($curl);
    curl_close($curl);

    $data = json_decode($json_data);
    return $data;
}

function getCustomParkInfo($id) {

    $base_url = 'localhost/VanCityParks/json/custom-park-info.json';
    $curl = curl_init($base_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $json_data = curl_exec($curl);
    curl_close($curl);

    $data = json_decode($json_data);
    
    foreach ($data as $park) {
        if($park->park_id == $id){

            return $park;
        }
    }

    return false;
}

function getSearchResults($query) {

    $base_url = 'localhost/VanCityParks/json/custom-park-info.json';
    $curl = curl_init($base_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $json_data = curl_exec($curl);
    curl_close($curl);

    $data = json_decode($json_data);
    
    $results = [];
    foreach ($data as $park) {
        if(stristr($park->name, $query)){
            array_push($results, $park);
        } else if(stristr($park->neighbourhood, $query)) {
            array_push($results, $park);
        }
    }

    return $results;
}

$result =  getSearchResults("Cottage");

foreach ($result as $key) {
    echo $key->name;
    echo "</br></br>";
}

function getFountains() {

    $base_url = 'ftp://webftp.vancouver.ca/OpenData/json/drinking_fountains.json';
    $curl = curl_init($base_url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $json_data = curl_exec($curl);
    curl_close($curl);

    $data = json_decode($json_data);
    return $data->features;
}