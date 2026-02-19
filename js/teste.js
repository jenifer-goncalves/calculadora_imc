// const peso = parseFloat(document.getElementById('weight').value);
// const altura = parseFloat(document.getElementById('height').value);
// const resultado = document.getElementById('resultText');

let peso = 60;
let altura = 1.62;
const imc = peso / (altura*altura);
// let classificao;

function calcularIMC(){
    // Calcular IMC
    console.log(`Este é o valor do IMC calculado: ${imc.toFixed(2)}.`);
    classificarIMC();

};

function classificarIMC(){
    if (imc < 18.5) {
        classificao = 'Abaixo do peso'; 
    } else if (imc >=18.5 && imc < 25) {
        classificao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        classificao = 'Sobrepeso';
    } else {
        classificao = ('Obesidade');
    }


}

function limparCampos(){

}

