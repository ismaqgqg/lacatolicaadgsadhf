<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "bdjejemplo");

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Verificar si los datos están definidos antes de usarlos
$nombre = isset($_POST['nombre']) ? mysqli_real_escape_string($conexion, $_POST['nombre']) : '';
$telefono = isset($_POST['telefono']) ? mysqli_real_escape_string($conexion, $_POST['telefono']) : '';
$correo = isset($_POST['correo']) ? mysqli_real_escape_string($conexion, $_POST['correo']) : '';
$direccion = isset($_POST['direccion']) ? mysqli_real_escape_string($conexion, $_POST['direccion']) : '';
$curso = isset($_POST['curso']) ? mysqli_real_escape_string($conexion, $_POST['curso']) : '';
$turno = isset($_POST['turno']) ? mysqli_real_escape_string($conexion, $_POST['turno']) : '';

// Preparar la consulta SQL
$consulta = "INSERT INTO cliente (nombre, telefono, correo, direccion, curso,turno) VALUES ('$nombre', '$telefono', '$correo', '$direccion', '$curso','$turno')";

// Ejecutar la consulta
$resultado = mysqli_query($conexion, $consulta);

if ($resultado) {
    $mensaje = "¡Formulario enviado con éxito!";
    $enviado = true;
    echo json_encode(array('success' => true, 'message' => $mensaje));
} else {
    echo json_encode(array('success' => false, 'message' => 'Error al ingresar los datos: ' . mysqli_error($conexion)));
}

// Cerrar la conexión
mysqli_close($conexion);
?>
