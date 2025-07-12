function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('luiz', 'otávio', 25)
console.log(pessoa1)
