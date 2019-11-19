<?php

$cookieName = "user";

if (empty($_COOKIE[$cookieName])) {
	header("Location: http://ec2-34-203-205-203.compute-1.amazonaws.com/engima/login.html");
}
else {
	header("Location: http://ec2-34-203-205-203.compute-1.amazonaws.com/engima/homepage.html");
}