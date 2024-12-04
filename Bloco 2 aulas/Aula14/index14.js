var nome = 'Luiz';
var nome = 'Miranda';
console.log(nome); // Pode redeclarar variavel

// let nome1 = 'Feitosa';
// let nome1 = 'Filho';
// console.log(nome1); Dá erro, não pode redeclarar variavel

// Com relação a let:
// Primero vai buscar as variaveis let dentro do bloco, na ordem do ultimo bloco feito até o escopo global
// Presta atenção que em uma função de let está apagada sem está selecionada
// Se o consolo.log estiver fora da função irá ter o resultado do escopo global(fora da função)
const verdadeira = true
let nome2 = 'Luiz'; // Criando variavel
var nome3 = 'Luiz'

if (verdadeira) {
    let nome2 = 'Otávio'; //  Criando variavel

if (verdadeira) {
    let nome2 = 'Outra coisa'; // Criando variavel
    console.log(nome2, nome3 );
}    
}



// Com Relação a var:
// Está no escopo global, no var vai ter o resultado sempre da ultima variavel redeclarada

const verdadeira1 = true
let nome4 = 'Luiz'; // Criando variavel
var nome5 = 'Luiz' // Criando variavel

if (verdadeira) {
    let nome4 = 'Otávio'; //  Criando variavel
    var nome5 = 'Rogério'; // Redeclarando variavel

if (verdadeira) {
    var nome5 = 'Ronaldo'; // Redeclarando variavel
    let nome4 = 'Outra coisa';
    console.log(nome4, nome5 );
}    
}
console.log(nome4, nome5) // Resultado let fora da função e var da ultima redeclaração


function falaOi() {
    var sobrenome = "Miranda";
    console.log(sobrenome);
}
falaOi();

// function falaOi1() {
   // var sobrenome1 = "Miranda";
// }
// console.log(sobrenome1); Dá erro, var está dentro a função  
// falaOi();

var sobrenome2 = "Miranda";
function falaOi2() {
    console.log(sobrenome2); // Pode, var fora da função, pega resposta nos vizinhos proximos
}
falaOi();