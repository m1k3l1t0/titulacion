<?php
class conexion{
	function Conectarse(){
            $Url = "localhost";
			$Usuario = "root";
			$Contrasena = "vertrigo";
			$NombreDB = "db_titulacion";

            
            if (!($link = mysql_connect($Url, $Usuario ,$Contrasena)))	{
                echo "Error en la cadena de conexion.";
      		exit();
            }

            if (!mysql_select_db($NombreDB, $link))	{
	      	echo "Error en la base de datos.";
    	  	exit();
            }
            return $link;
     }
	 
	 function Consulta($strQuery){
		$conexion = $this->Conectarse();
	 	$resultadoQuery = mysql_query($strQuery, $conexion);
		mysql_close($conexion);
		return $resultadoQuery;
	 }
}

?>