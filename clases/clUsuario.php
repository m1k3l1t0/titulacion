<?php
/**
 * Created by PhpStorm.
 * User: Migue
 * Date: 25/03/2015
 * Time: 02:39 PM
 */
include('ConexionDB/conexion.php');

class clUsuario {
    /** Declaracion de variables */
    private $IdUsuario;
    private $strUsuario;
    private $strNombre;
    private $strApellidoPaterno;
    private $strApellidoMaterno;
    private $strContrasenia;

    /** Contructores */

    /** Funciones */

    /** Llamadas a la Base de datos */

    public function fnGetDatosUsuario($strUsuario, $strContrasenia){
        $sqlConect = new conexion();
        $resultado = $sqlConect->Consulta("CALL SP_GetLogin ('". $strUsuario ."', '". $strContrasenia ."')");
        if(mysql_num_rows($resultado) > 0){
            while($fila = mysql_fetch_array($resultado)){
                echo $fila["C_Nombre"]. ' - '. $fila["Id_Usuario"];
            }
        }
        else{
            echo 'Los datos proporcionados no han sido encontrados. ';
        }
    }

} 