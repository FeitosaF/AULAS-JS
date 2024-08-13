/*

Aritiméticos:
+ Adição e concatenação(união);
* Multiplicação;
/ Divisão;
- Subtração;
** Potenciação;
% Resto da soma de divisão;

Ordem para soma aritimética: (), **, *, /, %, +, -

Incremento = ++
Decremento = --

*/
const contador = 1;
const contador1 = 2;
const contador2 = 3;
console.log(contador + contador1 * contador2);

let contador3 = 1;
++contador3;
++contador3;       // O ideal é trabalha com essa função ao inves da função de baixo.
++contador3;
console.log(contador3)

let contador4 = 1;
console.log(contador4++);// Incrementa o valor da variavel.
console.log(contador4++);// E aq soma o numero 1 da variavel.
// Diferença entre ++ no inicio e no final.

let contador5 = 1;
console.log(++contador5);// Incrementa o valor da variavel.

let contador6 = 10;
console.log(--contador6); // Decrementa o valor da variavel.

const passo = 2;
let contador7 = 0;
console.log(contador7);
contador7 = contador7 + passo;
console.log(contador7);
contador7 = contador7 + passo;
console.log(contador7);
contador7 = contador7 + passo;
console.log(contador7); 

let contador9 = 2;
contador9 *= 1;
contador9*= 2; // contador9 = contador9 * 2
console.log(contador9);

const num1 = 10;
const num2 = 'Luiz';
console.log(num1 * num2); // soma de uma variavel com numero e a outra com string.

const num3 = 10;
const num4 = parseInt('5.2'); // Converte em numero inteiro
console.log(num3 + num4);
console.log(typeof num4);

const num5 = 10;
const num6 = parseFloat('5.2'); //Deixa com numero com casas decimais
console.log(num5 + num6);

const num7 = 10;
const num8 = Number('5.2'); // Função principal, converte da melhor maneira
console.log(num7 + num8);
