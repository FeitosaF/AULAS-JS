const form = document.querySelector ('#formulario'); //Selecionando o formulario

form.addEventListener('submit', function (e) {
e.preventDefault(); // Criando o evento de não enviar o fomulario

const inputPeso = e.target.querySelector('#peso'); //Selecionando o input
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value); // Selecionando o valor o input
const altura = Number(inputAltura.value);

if (!peso) { // Peso diferente retorna peso invalido e para de execultar as demais funções em baixo do return
    setResultado('Peso inválido', false);
    return;
}
if (!altura) { // Altura diferente retorna altura invalido e para de execultar as demais funções em baixo do return
    setResultado('Altura inválida', false);
    return;
}

const imc = getImc(peso, altura); // Só para conseguir o calculo IMC
const nivelImc = getNivelImc(imc);

const msg = `Seu IMC é ${imc} (${nivelImc})`;

setResultado(msg, true);
})

function getNivelImc (imc) { // Nivel de IMC que a pessoa está
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade gral 1', 'Obesidade gral 2', 'Obesidade gral 3'];

if (imc >= 39.9) return nivel[5]; //Arrays da função getNivelImc
if (imc >= 34.9) return nivel [4];// if pequeno, deminuição da função condicional
if (imc >= 29.9) return nivel [3]; // Condicional de tras para frente por causa do return
if (imc >= 24.9) return nivel [2];
if (imc >= 18.5) return nivel [1];
if (imc < 18.5) return nivel [0];

}

function getImc (peso, altura) { // Função do IMC
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}


function criaP () { // Função que só serve para criar o P de paragrafo
    const p = document.createElement('p'); //Criar um paragrafo no HTML aqui no JS
    return p;
}


function setResultado (msg, isValid) { // Nome da função e o que irá ser exibido
const resultado = document.querySelector('#resultado'); // Selecionando o id resultado
resultado.innerHTML = ''; // Div em branco assim como está no HTML

const p = criaP();

if (isValid) {
    p.classList.add('paragrafo-resultado');
} else {
    p.classList.add('bad');
}

p.innerHTML = msg;
resultado.appendChild(p); // Acresentar um paragrafo
}
