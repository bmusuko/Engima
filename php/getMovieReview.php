<?php

// Connecting to database engi_cinema
require_once("config.php");

if ($_GET) {
    //Get movie ID
    $movieID = $_GET["id"];

    $query = "SELECT username, userRating, userReview, profilePicture 
    FROM review JOIN users USING (userID) JOIN schedule USING (scheduleID) 
    WHERE (review.movieID = :movieID) AND userReview IS NOT NULL";
    $stmt = $db->prepare($query);

    $params = array(
        ":movieID" => $movieID
    );

    $stmt->execute($params);

    $data = $stmt->fetchall();

    echo json_encode($data,128);
}
?>