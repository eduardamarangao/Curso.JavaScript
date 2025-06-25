function calcularData() {
  const dataInput = document.getElementById("data").value;
  const diasInput = parseInt(document.getElementById("dias").value);

  if (!dataInput || isNaN(diasInput)) {
    document.getElementById("resultado").innerText =
      "Por favor, insira uma data e um número válido de dias.";
    return;
  }

  const data = new Date(dataInput);
  data.setDate(data.getDate() + diasInput);

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // de 0 a 11
  const ano = data.getFullYear();

  document.getElementById(
    "resultado"
  ).innerText = `Nova data: ${dia}/${mes}/${ano}`;
}
