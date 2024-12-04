// O resultado é definido em uma dessas condições. O valor verdadeiro.

const numero = 5; // Um só resultado, um depende do outro

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else {
    console.log('O número NÂO está entre 0 e 5');
}


const numero1 = 10; // Um só resultado, um depende do outro

if (numero1 >= 0 && numero1 <= 5) {
    console.log('O número está entre 0 e 5.');
} else {
    console.log('O número NÂO está entre 0 e 5');
}


const numero2 = 5; // Dois resultados, pois um não depende do outro

if (numero2 >= 0 && numero2 <= 5) {
    console.log('O número está entre 0 e 5.');
} 
    console.log('O número NÂO está entre 0 e 5');


const numero3 = 10; // Um só resultado

if (numero3 >= 0 && numero3 <= 5) {
    console.log('o número está entre 0 e 5.');
} else if (numero3 >= 6 && numero3 <= 8) {
    console.log(') número está entre 6 e 8.');
} else if (numero3 >= 9 && numero3 <= 11) { // Verdadeiro
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 11.');
}


const numero4 = 10; // Analisa o primeiro valor verdadeiro

if (numero4 >= 0 && numero4 <= 5) {
    console.log('o número está entre 0 e 5.');
} else if (numero4 >= 6 && numero4 <= 8) {
    console.log(') número está entre 6 e 8.');
} else if (1 === 1) {
    console.log('LITERAL'); // Verdadeiro, código sem ser padrão
} else if (numero4 >= 9 && numero4 <= 11) { // Verdadeiro
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 11.');
}
console.log('...Aqui vem o resto do código'); // Código separado

if (numero4 <= 10) { // Usando outro if com a mesma constante dá resultado separado
    console.log('O número é menor ou igual a 10.');
}