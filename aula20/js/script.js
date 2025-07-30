function meuEscopo () {
    const form = document.querySelector('.form')

    /*
    form.onsubmit = function (evento) {
        evento.preventDefaul() // previne oque acontece por padrao
        alert(1)
        console.log('Enviado')
    };
    */
    let cont = 1
    function recebeEventoForm (evento) {
        evento.preventDefault()
        console.log(`Form não foi enviado ${cont}`)
        cont++
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()