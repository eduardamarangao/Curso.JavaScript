const { set } = require("mongoose");

// Capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    console.log('Evento prevenido')
    setResultado('Olá mundo!')
});


function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = msg;
}