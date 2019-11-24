<?php

// Connecting to database engi_cinema
require_once("config.php");

$scheduleID = $_GET["scheduleID"];

// Get Seat Info
$query = "SELECT movieID, scheduleDate, scheduleTime FROM schedule WHERE
(scheduleID = :scheduleID)";

$stmt = $db->prepare($query);

// Bind GetSeatInfo parameters
$params = array(
    ":scheduleID" => $scheduleID
);

//Execute Get Seat Info Query
$stmt->execute($params);

$result = $stmt->fetchAll();

echo json_encode($result, JSON_INVALID_UTF8_IGNORE);

?>