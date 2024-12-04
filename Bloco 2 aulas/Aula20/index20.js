//                0       1       2
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++){ // Incrementando
    console.log(frutas[i]);
}

for (let i in frutas){ // Lendo o indice
    console.log(frutas[i]);
}

for (let i in frutas){ // Lendo o indice
    console.log(i);
}


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa){
console.log(chave, pessoa[chave]);
}