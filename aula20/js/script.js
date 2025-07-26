function meuEscopo () {
    const form = document.querySelector('.form')

    form.onsubmit = function (evento) {
        evento.preventDefaul() // previne oque acontece por padrao
        alert(1)
        console.log('Enviado')
    };
}

meuEscopo()