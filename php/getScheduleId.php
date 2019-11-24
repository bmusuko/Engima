<?php

// Connecting to database engi_cinema
require_once("config.php");

$movieID = $_GET["movie"];
$scheduleDate = $_GET["date"];
$scheduleTime = $_GET["time"];

// Get Seat Info
$query = "SELECT scheduleID FROM schedule  WHERE
(movieID = :movieID) AND (scheduleDate = :scheduleDate) AND 
(scheduleTime = :scheduleTime) LIMIT 1;";

$stmt = $db->prepare($query);

// Bind GetSeatInfo parameters
$params = array(
    ":movieID" => $movieID,
    ":scheduleDate" => $scheduleDate,
    ":scheduleTime" => $scheduleTime
);

//Execute Get Seat Info Query
$stmt->execute($params);

$result = $stmt->fetchall();

echo json_encode($result, JSON_INVALID_UTF8_IGNORE);

?>