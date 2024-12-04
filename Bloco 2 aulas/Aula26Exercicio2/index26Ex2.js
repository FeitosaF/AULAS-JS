// Escreva uma funçao chamada ePaisagem que
// Recebe dois argumentos, largura e altura
// De uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

function ePaisagem (largura, altura){
    return largura > altura ? true : false;
}
console.log(ePaisagem (1080, 1920));


function ePaisagem1 (largura, altura){
    return largura > altura;
}
console.log(ePaisagem1 (1920, 1080));


const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(1920, 1920));