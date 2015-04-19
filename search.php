<?php 

include './model/functions.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$query = $request->query;

print_r(getSearchResults($query));