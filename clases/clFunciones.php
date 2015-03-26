<?php
include('clUsuario.php');

$usuario = new clUsuario();
echo $usuario->fnGetDatosUsuario('mvaladez','123456');