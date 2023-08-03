

function calcularIMC() {
  var pesoInput = document.getElementById("peso");
  var alturaInput = document.getElementById("altura");
  var resultadoDiv = document.getElementById("resultado");

  var peso = parseFloat(pesoInput.value);
  var altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || isNaN(altura)) {
      resultadoDiv.innerText = "Por favor, insira valores válidos para peso e altura.";
      resultadoDiv.style.backgroundColor = "#ff0000"; // Background vermelho para indicar o erro
      resultadoDiv.style.color = "#ffffff"; // Texto em branco para melhor legibilidade no background vermelho
      resultadoDiv.style.visibility = "visible"; // Visibilidade para mostrar o erro =
      // Define o campo com background vermelho quando ocorre erro
      pesoInput.style.backgroundColor = "#ff0000";
      alturaInput.style.backgroundColor = "#ff0000";
      return;
  }

  // Remove o background vermelho e redefine a cor do texto se os valores estiverem corretos
  resultadoDiv.innerText = "";
  resultadoDiv.style.backgroundColor = "";
  resultadoDiv.style.color = "";

  // Remove a classe "error" para que o campo volte a ter o background verde
  pesoInput.style.backgroundColor = "";
  alturaInput.style.backgroundColor = "";

  var imc = peso / (altura * altura);
  var classificacao = "";

  if (imc < 18.5) {
      classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
  } else {
      classificacao = "Obesidade";
  }

  resultadoDiv.innerText = "Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao;
}
