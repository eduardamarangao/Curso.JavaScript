const pessoa1 = {
    nome: 'eduarda',
    sobrenome: 'amorim',
    idade: 15,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },
    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()


























// function criaPessoa(nome, sobrenome, idade) {
// return { nome, sobrenome, idade }; // nome: nome
// }

// const pessoa1 = criaPessoa("luiz", "otávio", 25);
// const pessoa2 = criaPessoa("eduarda", "amorim", 15);
// const pessoa3 = criaPessoa("ilza", "alves", 39);
// const pessoa4 = criaPessoa("alisson", "marangão", 43);
// const pessoa5 = criaPessoa("julia", "silva", 67);
// const pessoa6 = criaPessoa("maria", "de jesus", 54);

// console.log(pessoa1.nome, pessoa2.nome);
