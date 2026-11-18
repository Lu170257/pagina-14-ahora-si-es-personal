const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const respuesta = document.getElementById("respuesta");

    if (nombre === "" || correo === "" || mensaje === "") {
        respuesta.textContent = "Completá todos los campos.";
        return;
    }

    respuesta.textContent =
        "¡Gracias, " + nombre + "! Tu formulario fue validado correctamente.";

    formulario.reset();
});