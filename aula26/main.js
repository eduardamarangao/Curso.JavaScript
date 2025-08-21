// Capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    console.log('Evento prevenido')
});
