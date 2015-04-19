<?php 

include './model/functions.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$id = $request->id;

print_r(getJsonParkInfo($id));