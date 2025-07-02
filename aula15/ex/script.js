const numero = Number(prompt("Digite um número: "));
const NumeroTitulo = document.querySelector("#numero-titulo");
const Texto = document.getElementById("texto");

NumeroTitulo.innerHTML = numero;
Texto.innerHTML = `<p>Seu número - 2 é ${numero - 2}.</p>`
