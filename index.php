<?php

// ------- Determine Action -------- //

if (isset($_POST['action'])) {
    $action =  $_POST['action'];
} else {
    $action =  'default';
}

switch ($action) {

    case 'default':

        include 'map.php';

    break;

}