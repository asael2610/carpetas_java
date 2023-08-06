

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.boton').addEventListener('click', function() {
    // Obtener los valores de los campos del formulario
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear el mensaje a mostrar en el alert
    const mensajeCompleto =
      `Nombres: ${nombres}\n` +
      `Apellidos: ${apellidos}\n` +
      `Número telefónico: ${telefono}\n` +
      `Correo electrónico: ${email}\n` +
      `Fecha de nacimiento: ${fechaNacimiento}\n` +
      `Mensaje: ${mensaje}`;

    // Mostrar el mensaje en el alert
    alert(mensajeCompleto);
  });
});

