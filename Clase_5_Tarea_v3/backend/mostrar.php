<?php

$host = "b1lxl6ljc6lggisxgu9f-mysql.services.clever-cloud.com";
$user = "uihby132ced47t5t";
$pass = "Cx27UTxK8lBp9Xp7DagI";
$base = "b1lxl6ljc6lggisxgu9f";

$mostrar=$_POST["m"];

$correo = isset($_POST["correo"]) ? $_POST["correo"] : NULL;
$clave = isset($_POST["clave"]) ? $_POST["clave"] : NULL;


switch($mostrar)
{
    case "Mostrar":
        $con = @mysqli_connect($host, $user, $pass, $base);       
        $sql = "SELECT tu.`ID`, `CORREO`, `CLAVE`, `NOMBRE`, `PERFIL`, tp.DESCRIPCION FROM `usuarios` tu"
                ." inner join perfiles tp on tp.ID=tu.PERFIL"
                ." WHERE 1";
        $rs = $con->query($sql);

        while ($row = $rs->fetch_object())
        {
            $idAux= $row->ID;
            $correoAux= $row->CORREO;
            $claveAux= $row->CLAVE;
            $nombreAux=$row->NOMBRE;
            $PerfilAux=$row->PERFIL;
            $DescripcionAux=$row->DESCRIPCION;

            echo $idAux."-".$correoAux."-".$claveAux."-".$nombreAux."-".$PerfilAux."-".$DescripcionAux."<br>";
        
        }
        mysqli_close($con);
        break;

    case "Login":

        $validar=false;

        $con = @mysqli_connect($host, $user, $pass, $base);       
        $sql = "SELECT tu.`ID`, `CORREO`, `CLAVE`, `NOMBRE`, `PERFIL`, tp.DESCRIPCION FROM `usuarios` tu"
            ." inner join perfiles tp on tp.ID=tu.PERFIL"
            ." WHERE 1";
        $rs = $con->query($sql);

        while ($row = $rs->fetch_object())
        {
            $correoAux= $row->CORREO;
            $claveAux= $row->CLAVE;
            if($correoAux==$correo && $claveAux==$clave)
            {
                $nombre=$row->NOMBRE;
                $descripcion=$row->DESCRIPCION;
                $validar=true;
                break;
            }
        
        }
        if($validar)
        {
            echo "Datos <br>";
            echo "Nombre: ".$nombre." Perfil: ".$descripcion;
        }
        else
        {
            echo "Ese usuario no existe";
        }

        mysqli_close($con);
        break;
  
}
