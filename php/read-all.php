<?php

require_once "connection.php";

$conn = connect('columbario');

$stm = $conn->prepare("SELECT * FROM columbario" );

$stm->execute();

$result = $stm->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);


