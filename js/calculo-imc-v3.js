
const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR

function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}



// FUNÇÃO PRINCIPAL

function calcularIMC() {

  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  // Validação
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    mostrarResultado('Por favor, insira valores válidos.');
    return;
  }

  // Cálculo
  const imc = peso / (altura * altura);
  let classificacao = '';
  classificacao = classificarIMC(imc)

   // Template String
   mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
  

};

function classificarIMC(imc){

 

    if (imc < 18.5) return 'Abaixo do peso'; 
      if (imc < 25) return 'Peso normal';
        if (imc < 30) return 'Sobrepeso';
           return 'Obesidade';
        

}


// LIMPAR CAMPOS

function limparCampos() {
  formulario.reset();
  inputPeso.focus();
  mostrarResultado('Preencha os campos e clique em "Calcular".');
}