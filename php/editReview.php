<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_POST) {
    // Get input data
	$scheduleID = filter_input(INPUT_POST, 'schedule-id', FILTER_SANITIZE_STRING);

	// Preparing getUserReview
    $getUserReview = "SELECT * FROM review WHERE
    (scheduleID = :schedulenID)";

    $stmt = $db->prepare($getUserReview);

	// Bind getUserReview parameters
    $params = array(
        ":scheduleID" => $scheduleID
    );

	// Execute getUserReview
    $stmt->execute($params);

    $review = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($review, 128);
}

?>