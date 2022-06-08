
const calcular = document.getElementById('calcular');


calcular.addEventListener('click', (event) => {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('result');

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let nivel = ''
    if (valorIMC < 18.5) {
        nivel = 'abaixo do peso'
    }else if(valorIMC < 25){
        nivel = 'com peso ideal'
    }else if(valorIMC < 30){
        nivel ='levemente acima do peso'
    }else if(valorIMC < 35){
        nivel ='com obesidade grau 1'
    }else if (valorIMC < 40){
        nivel = 'com obesidade grau 2'
    }else {
        nivel = 'com obesidade grau 3. Vai morre!!!'
    }
    
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${nivel}`;

})