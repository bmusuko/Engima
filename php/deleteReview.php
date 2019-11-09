<?php

// Connecting to database engi_cinema
require_once("config.php");

//Get Transcation ID
$scheduleID = $_GET["id"];

$query = "UPDATE review SET userRating = NULL, userReview = NULL WHERE (scheduleID = :scheduleID)";

$stmt = $db->prepare($query);

$params = array(
    ":scheduleID" => $scheduleID
);

$status = $stmt->execute($params);

?>