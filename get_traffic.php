<?php
require 'config.php';

$days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
$traffic_data = array_fill_keys($days_of_week, 0); // Mặc định mỗi ngày có 0 lượt truy cập

$sql = "SELECT day_of_week, COUNT(*) as visits FROM traffic_log GROUP BY day_of_week";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    $traffic_data[$row['day_of_week']] = (int)$row['visits'];
}

$conn->close();
echo json_encode($traffic_data);
?>
