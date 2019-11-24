<?php

// Connecting to database engi_cinema
require_once("config.php");

// Variables
$directory = "../assets/profilePicture/";
$cookieName = "user";

if ($_POST) {

	$cookieName = "user";
	$cookieValue = $_COOKIE[$cookieName];

	$query = "SELECT userID FROM users WHERE (token = :token)";
	$stmt1 = $db->prepare($query);

	$params1 = array(
		":token" => $cookieValue
	);

	$stmt1->execute($params1);

	$uID = $stmt1->fetch(PDO::FETCH_ASSOC);
	
	$method = $_GET['method'];
	$id_schedule = $_GET['id_schedule'];
	$rating = filter_input(INPUT_POST, 'rating-star', FILTER_SANITIZE_STRING);
	$review = filter_input(INPUT_POST, 'review-input', FILTER_SANITIZE_STRING);
	if($method == 'edit'){
		// Preparing updateQuery
		$updateQuery = "UPDATE review SET userRating = :userRating, userReview = :userReview WHERE (scheduleID = :scheduleID) AND (userID = :userID)";
		print($updateQuery);

	} else if($method == 'add'){
		$query = "SELECT movieID FROM `schedule` WHERE (scheduleID = ".$id_schedule.")";
        $stmt = $db->prepare($query);
        $stmt->execute();
		$scheduleinfo = $stmt->fetch(PDO::FETCH_ASSOC);
		$updateQuery = "INSERT INTO review(`scheduleID`, `userID`, `movieID`, `userRating`, `userReview`) VALUES (:scheduleID,:userID,".$scheduleinfo['movieID'].",:userRating,:userReview)";
	} else{
		echo 'invalid method';
		exit();
	}
	$stmt = $db->prepare($updateQuery);

	// Bind updateQuery parameters
	$params = array(
		":userRating" => $rating,
		":userReview" => $review,
		":scheduleID" => $id_schedule,
		":userID"	  => $uID['userID']
	);

	// Execute updateQuery
	$updated = $stmt->execute($params);
	// Go to transactions page
	if ($updated) {
		echo 200;
		exit();
	}
	else {
		echo 201;
		exit();
	}
}
