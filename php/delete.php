<?php

require_once "connection.php";

$conn = connect('columbario');

if(!empty($_POST)){
    
    $id = $_POST["id"];
    
 
}

$stm = $conn->prepare("DELETE FROM columbario WHERE id = $id");

$stm->execute();

if($stm->rowCount()==1){
    echo "ok";
}else{
    echo "ERROR";
}