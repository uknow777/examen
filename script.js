document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    const form = document.getElementById("form-reserva");
    const mensaje = document.getElementById("mensaje");
    const formulario = document.getElementById("reservar");
    const inputDestino = document.getElementById("destino");

    window.mostrarFormulario = (destino) => {
        inputDestino.value = destino;
        formulario.classList.remove("oculto");
    };

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fecha = document.getElementById("fecha").value;
        const aerolinea = document.getElementById("aerolinea").value;

        if (fecha) {
            mensaje.textContent = `¡Tu viaje a ${inputDestino.value} con ${aerolinea} está reservado para el ${fecha}!`;
        } else {
            mensaje.textContent = "Por favor, selecciona una fecha válida.";
        }
    });
});
