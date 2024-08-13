/*
Primitivos (imutáveis) - string, number, boolean, undefinet, null (bigint, simbol) - 
Sã0 valores do nome da variavel cópiados. São independentes.
*/
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; //Cópia da variavel a.
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

/*
Referência (mutável) - array, object, function - Passados por referência. São dependentes.
*/
let a1 = [1, 2, 3];
let b1 = a1;
let c1 = b1;
console.log(a1, b1);
a1.push(4);
console.log(a1,b1);
b1.pop();
console.log(a1, b1);
a1.push('Luiz');
console.log(c1);


let a2 = [1, 2, 3];
let b2 = [...a2];
let c2 = b2;
console.log(a2, b2);
a2.push(4);
console.log(a2,b2);
b2.pop();
console.log(a2, b2);
a2.push('Luiz');
console.log(c2);

const a3 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b3 = {...a3};
a3.nome = 'João';
console.log(a3);
console.log(b3);