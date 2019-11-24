<?php

// Connecting to database engi_cinema
require_once("config.php");
$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query = "SELECT userID FROM users WHERE (token = :token)";
$stmt1 = $db->prepare($query);

$params1 = array(
    ":token" => $cookieValue
);

$stmt1->execute($params1);

$uID = $stmt1->fetch(PDO::FETCH_ASSOC);

//Get Transcation ID
$scheduleID = $_GET["id"];

$query = "DELETE FROM review WHERE  (scheduleID = :scheduleID) AND (userID = ".$uID['userID'].")";
// echo $query;

$stmt = $db->prepare($query);

$params = array(
    ":scheduleID" => $scheduleID
);

$status = $stmt->execute($params);
if($status){
    echo '200';
} else{
    echo '201';
}
?>