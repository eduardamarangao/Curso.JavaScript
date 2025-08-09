/*
Operadores lógicos 
&& -> AND -> E (todas as expressões precisam ser verdadeiras pra retornar true)
|| -> OR -> OU
! -> NOT -> NÃO
*/


/*
const expressaoAnd = true && true && true
const expressaoOr = false || true || true
console.log(expressaoOr)
*/

/*
const usuario = 'Luiz'
const senha = '123456'

//                       True               False
const vaiLogar = usuario === 'Luiz' || senha === '12456'
*/


function falaOi () {
    return 'Oi'
}
 
const vaiExecultar = false

vaiExecultar && console.log(falaOi()) 