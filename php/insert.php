<?php

require_once "connection.php";

$conn = connect('columbario');

if(!empty($_POST)){
    $difunto = $_POST["Difunto"];
    $nicho = $_POST["Nicho"];
    $responsable = $_POST["Responsable"];
    $celular = $_POST["NumeroCelular"];

    $otroCelular = $_POST["OtroCelular"];
    $fechaFallecimiento = $_POST["FechaFallecimiento"];
    $acta = $_POST["Acta"];
    $fechaIngreso = $_POST["FechaIngreso"];
    $mensaje=$_POST["Mensaje"];
    $cedulaResponsable = $_POST["CedulaResponsable"]; 
     $pago = $_POST["UltimoPago"];
 
}
 $stm = $conn->prepare("INSERT INTO columbario VALUES( NULL,'$nicho','$difunto','$fechaFallecimiento','$acta',' $fechaIngreso','$responsable','$cedulaResponsable','$celular','$otroCelular','$mensaje' ,'$pago' )" );  

 /*  $stm = $conn->prepare("INSERT INTO columbario VALUES('$difunto', NULL,'$nicho','$responsable','$celular')" );  */ 

$stm->execute();

if($stm->rowCount()==1){
    echo "ok";
}else{
    echo "ERROR";
}