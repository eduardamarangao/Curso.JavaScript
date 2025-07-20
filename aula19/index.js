/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol)

Referência (mutável) - Array, object, function
*/

let a = [1,2,3] // os dois apontam para o mesmo lugar na memória
let b = a
console.log(a,b)

a.push(4)
console.log(a,b)