<?php

require_once "connection.php";

$conn = connect('columbario');

if(!empty($_POST)){
    
    
    $id = $_POST["id"];
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


 $stm = $conn->prepare("UPDATE columbario SET Difunto = '$difunto', Nicho = '$nicho',  Responsable ='$responsable', NumeroCelular = '$celular', OtroCelular = '$otroCelular',  FechaFallecimiento ='$fechaFallecimiento', Acta = '$acta', Mensaje = '$mensaje',  CedulaResponsable ='$cedulaResponsable', FechaIngreso = '$fechaIngreso', UltimoPago = '$pago' WHERE id = $id"); 
 
/* $stm = $conn->prepare("UPDATE columbario SET Difunto = '$difunto', Nicho = '$nicho',  Responsable ='$responsable', NumeroCelular = '$celular' WHERE id = $id"); */

$stm->execute();

if($stm->rowCount()==1){
    echo "ok";
}else{
    echo "ERROR";
}