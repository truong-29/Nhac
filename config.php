<?php
$host = "localhost";
$dbname = "ntdhkpro_nhacchill";
$dbuser = "ntdhkpro_nhacchill";
$dbpass = "N9qy9VbNnhNjSvFkTXyB";

$conn = new mysqli($host, $dbuser, $dbpass, $dbname);
if ($conn->connect_error) {
    die("Lỗi kết nối CSDL: " . $conn->connect_error);
}
?>
