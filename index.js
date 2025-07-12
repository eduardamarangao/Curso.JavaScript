function GetDataCard(NumCartao) {
  // Cria um objeto simples (struct) para armazenar os dados
  let cardinfo = {
    issuer: NumCartao.slice(0, 6), // primeiros 6 dígitos
    industry: NumCartao[0], // primeiro dígito
    checksum: NumCartao[NumCartao.length - 1], // último dígito
    account: NumCartao.slice(6, 15), // dígitos do 7 ao 15
  };
  return cardinfo;
}

let NumCartao = "1234123412341234";
// const CartaoExtraido = GetDataCard(NumCartao);
// console.log(CartaoExtraido);

function ValidateCard(NumCartao) {

  for (let cont = 0; cont <= 15; cont++) {
    if (cont % 2 == 0) {
      console.log(NumCartao[cont] * 2);
    }
  }
}        

ValidateCard(NumCartao);
