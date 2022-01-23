const calcular = document.getElementById('calcular');
function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura).toFixed(1));
        let classe = '';

        if(valorIMC < 18.5){
            classe = 'abaixo do peso.';
        }else if (valorIMC < 25){
            classe = 'com peso ideal!';
        }else if(valorIMC < 30){
            classe = 'levemente acima do peso.';
        }else if(valorIMC < 35){
            classe = 'com obesidade grau I.';
        }else if(valorIMC < 40){
            classe = 'com obesidade grau II.';
        }else {
            classe = 'com obesidade grau III. Cuidado!';
        }

        resultado.textContent =  ` ${nome} seu IMC e ${valorIMC} e voce esta ${classe} ` ;
    }else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);