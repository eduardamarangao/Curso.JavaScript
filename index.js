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

let NumCartao = "1875463392866354"
// const CartaoExtraido = GetDataCard(NumCartao);
// console.log(CartaoExtraido);

function ValidateCard(NumCartao) {
  let soma = 0

  for (let cont = 0; cont <= 15; cont++) {
    if (cont % 2 == 0) {
      let digit = NumCartao[cont] * 2
      if (digit > 9) {
        digit = Math.floor(digit / 10) + (digit % 10)
      }

      soma += digit
    } else {
      soma += parseInt(NumCartao[cont])
    }
  }

  console.log(`Valor da soma: ${soma}`)

  if (soma % 10 == 0) {
    console.log("Cartão Válido!")
  } else {
    console.log("Cartão Inválido!")
  }
}

ValidateCard(NumCartao)
