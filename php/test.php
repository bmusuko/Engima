<?php

// Connecting to database engi_cinema
require_once("config.php");

$now_playing = json_decode(file_get_contents("https://api.themoviedb.org/3/movie/now_playing?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&page=1"),true);
$query = 'SELECT DISTINCT movieID FROM `schedule` WHERE scheduleDate > now()'
 
$stmt = $db->prepare($query);

// Bind GetSeatInfo parameters
$params = array(
    ":movieID" => $movieID,
    ":scheduleDate" => $scheduleDate,
    ":scheduleTime" => $scheduleTime
);

//Execute Get Seat Info Query
$stmt->execute($params);

$result = $stmt->fetchAll();

echo json_encode($result, JSON_INVALID_UTF8_IGNORE);

?>