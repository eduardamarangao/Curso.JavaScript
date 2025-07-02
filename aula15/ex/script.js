const numero = Number(prompt("Digite um número: "));
const NumeroTitulo = document.querySelector("#numero-titulo");
const Texto = document.getElementById("texto");

NumeroTitulo.innerHTML = numero;

Texto.innerHTML = ''
Texto.innerHTML += `<p>Seu número - 2 é ${numero - 2}.</p>`
Texto.innerHTML += `<p>Raiz quadrada é ${numero ** 0.5}.</p>`
Texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`
Texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`
Texto.innerHTML += `<p>Arrendodado pra baixo: ${Math.floor(numero)}.</p>`
Texto.innerHTML += `<p>Arrendodado pra cima: ${Math.ceil(numero)}.</p>`
Texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`