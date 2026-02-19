
const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

function mostratResultado(mensagem){
    textoResultado.textContent = mensagem
}


function calcularIMC(){
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    // Validação
    if (isNan(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mostrarResultado('Por favor, insira valores válidos.');
        return;
    }

    // Cálculo
    const imc = peso / (altura*altura);
    let classificao = '';

    // Classificação
    if (imc < 18.5) {
        classificao = 'Abaixo do peso'; 
    } else if (imc >=18.5 && imc < 25) {
        classificao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        classificao = 'Sobrepeso';
    } else {
        classificao = 'Obesidade';
    }

    // Template String
    mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);

};

function limparCampos(){

}