<?php

// Connecting to database engi_cinema
require_once("config.php");

$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query1 = "SELECT userID FROM users WHERE (token = :token)";
$stmt1 = $db->prepare($query1);

$params1 = array(
    ":token" => $cookieValue
);

$stmt1->execute($params1);

$userID = $stmt1->fetch(PDO::FETCH_ASSOC)["userID"];

$scheduleID = $_GET["scheduleID"];
$seatNo = $_GET["seatNo"];

$query2 = "INSERT INTO seat (scheduleID, seatNo)
VALUES (:scheduleID, :seatNo)";
$stmt2 = $db->prepare($query2);

$params2 = array(
    ":scheduleID" => $scheduleID,
    ":seatNo" => $seatNo
);

$stmt2->execute($params2);

$query3 = "UPDATE schedule SET seat=seat - 1 WHERE (scheduleID = :scheduleID)";
$stmt3 = $db->prepare($query3);

$params3 = array(
    ":scheduleID" => $scheduleID
);

$status = $stmt3->execute($params3);

if ($status) {
    echo 200;
    exit();
} else {
    echo 400;
    exit();
}
?>