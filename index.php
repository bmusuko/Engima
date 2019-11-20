<?php

$cookieName = "user";

if (empty($_COOKIE[$cookieName])) {
	header("Location: login.html");
}
else {
	header("Location: homepage.html");
}