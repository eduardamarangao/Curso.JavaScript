let numero = prompt("Digite um número: ");
numero = Number(numero);
const NumeroTitulo = document.querySelector("#numero-titulo");
const Texto = document.getElementById("texto");

NumeroTitulo.innerHTML = numero;
Texto.innerHTML = `<p>Seu número - 2 é ${numero - 2}.</p>`
