<?php

// Connecting to database engi_cinema
require_once("config.php");

$cookieName = "user";
$cookieValue = $_COOKIE[$cookieName];

$query = "SELECT userID FROM users WHERE (token = :token)";
$stmt = $db->prepare($query);

$params = array(
    ":token" => $cookieValue
);

$stmt->execute($params);

$uID = $stmt->fetch(PDO::FETCH_ASSOC);
$uID  = $uID["userID"];

$query2 = "SELECT bank_account FROM users WHERE (userID = :userID)";
$stmt2 = $db->prepare($query2);

$params = array(
    ":userID" => $uID
);

$stmt2->execute($params);

$account = $stmt2->fetch(PDO::FETCH_ASSOC);
echo $account["bank_account"];
?>