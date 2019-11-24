<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_GET) {

    $cookieName = "user";
    $cookieValue = $_COOKIE[$cookieName];

    $query = "SELECT userID FROM users WHERE (token = :token)";
    $stmt1 = $db->prepare($query);

    $params1 = array(
        ":token" => $cookieValue
    );

    $stmt1->execute($params1);

    $uID = $stmt1->fetch(PDO::FETCH_ASSOC);

    // Get input data
	// $scheduleID = filter_input(INPUT_POST, 'schedule-id', FILTER_SANITIZE_STRING);
    $scheduleID = $_GET['id_schedule'];
	// Preparing getUserReview
    $getUserReview = "SELECT * FROM review WHERE
    (scheduleID = :scheduleID) AND (userID = :userID)";

    $stmt = $db->prepare($getUserReview);

	// Bind getUserReview parameters
    $params = array(
        ":scheduleID" => $scheduleID,
        ":userID"     => $uID['userID']
    );

	// Execute getUserReview
    $stmt->execute($params);

    $review = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($review, 128);
}

?>