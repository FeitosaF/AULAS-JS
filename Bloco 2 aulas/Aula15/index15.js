let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras; // Ocorreu a desestruturação
console.log(a, b, c);


// Var indexada    1     2     3     4     5     6     7     8     9
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros; // Pegou os primeiros numeros e o restante
console.log(um, dois, tres);
console.log(resto);


const numeros1 =  [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um1, , três1, , cinco1, , sete1] = numeros1; // Resultado onde deixou espaço para pular numeros
console.log(um1, três1, cinco1);

//                     0        1          2  
//                 0  1  2    0  1  2    0  1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros2[1][2]) // Pegar array 1 e pegar numero 6 q esta na posição 2


const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis3]] = numeros3; //Pegar indice 6
console.log(seis3)


const numeros4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros4;
console.log(lista3[2]);