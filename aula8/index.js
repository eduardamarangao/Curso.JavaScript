/* eduarda amorim tem 15 anos, pesa 63 kg
tem 1.64 de altura e seu IMC é de 23.423557406305775
eduarda nasceu em 2010. 
*/
const nome = 'eduarda';
const sobrenome = 'amorim';
const idade = 15;
const peso = 63;
const alturaEmM = 1.64; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;


// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);