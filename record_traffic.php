<?php
session_start();
date_default_timezone_set('Asia/Ho_Chi_Minh');
require 'config.php'; // Kết nối CSDL từ file config

$session_id = session_id();
$day_of_week = date('l'); // Lấy thứ (Monday, Tuesday,...)

$sql = "INSERT INTO traffic_log (session_id, day_of_week) VALUES (?, ?)
        ON DUPLICATE KEY UPDATE day_of_week = VALUES(day_of_week)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $session_id, $day_of_week);
$stmt->execute();
$stmt->close();
$conn->close();
?>
