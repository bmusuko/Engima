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

$get = file_get_contents("http://localhost:3000/getTransaksi/".$uID['userID']);
$transactions = json_decode($get,true);
$response = array();
if($transactions['status'] == true){
    $transactions = json_decode($transactions['data'],true);
    foreach($transactions as $val){
        $query = "SELECT * FROM `schedule` WHERE (scheduleID = ".$val['id_schedule'].")";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $scheduleinfo = $stmt->fetch(PDO::FETCH_ASSOC);
        $movieID = $scheduleinfo['movieID'];
        $filminfo = file_get_contents('https://api.themoviedb.org/3/movie/'.$movieID.'?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US');
        $filminfo = json_decode($filminfo,true);
        $querycheckReview = "SELECT * FROM `review` WHERE (scheduleID = ".$val['id_schedule']." AND (userID = ".$uID['userID']."))";
        $stmt = $db->prepare($querycheckReview);
        $stmt->execute();
        $reviewinfo = $stmt->fetch(PDO::FETCH_ASSOC);
        $userReview =  $reviewinfo['userReview'];
        $isUserReview = false;
        if ($userReview){
            $isUserReview = true;
        }
        array_push($response,array(
            'poster_path' => $filminfo['poster_path'],
            'title' => $filminfo['title'],
            'scheduleID' => $scheduleinfo['scheduleID'],
            'scheduleDate' => $scheduleinfo['scheduleDate'],
            'scheduleTime' => $scheduleinfo['scheduleTime'],
            'status' => $val['status'],
            'userReview' => $isUserReview
        ));
    }
    echo json_encode($response, 128);
} else{
    print_r(false);
}

?>