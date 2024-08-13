//  nome Da Funçao, valor da funçao (Parametro, variavel)
function saudacao(nome) {
    console.log (`Bom dia ${nome}!`);
}
saudacao('Luiz'); // Dados da funçao e não está sauvo na memoria, só é salvo se tivar variavel
saudacao('Maria');
saudacao('Felipe');

function saudacao1(nome1) {
    console.log(`Bom dia ${nome1}`);
}
const variavel1 = saudacao1('Luiz');
console.log(variavel1);


function saudacao2(nome2) {
return `Bom dia ${nome2}`
}
const variavel2 = saudacao2('Luiz');
console.log(variavel2);


function soma(x, y) { // faz a soma
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));
const resultado = soma(2, 2); // Usou a mesma constante, mas isso não tem nada haver como que está dentro da funçao
console.log(resultado);


function soma1(x = 1, y = 1) {
    const resultado1 = x + y;
    return resultado1;
}
const resultado1 = soma1 ();
console.log(resultado1);


function soma2(x = 1, y = 1) {
    const resultado2 = x + y;
    return resultado2;
}
const resultado2 = soma2 (4, 2); // Prevalesse sempre esses valores e x e y
console.log(resultado2);


const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


const raiz1 = n1 => n1 ** 0.5; // Simplificando o código a função
console.log(raiz1(9));
console.log(raiz1(16));
console.log(raiz1(25));