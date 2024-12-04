//            01234... Índices
const nome = 'Luiz Otávio';
for (let valor of nome){ // Resultado dos índeces
    console.log(valor); // For of
}


const nomes = ['Luiz', 'Otávio', 'Henrique'];


for (let valor of nomes){ // Resultado dos índeces
    console.log(valor); // For of
}

console.log('#####');

for (let i = 0; i < nomes.length; i++){ // For classico
    console.log(nomes[i]);
}

console.log('#####');

for (let i in nomes){ // For in
    console.log(nomes[i]);
}

console.log('#####');

nomes.forEach(function(valor, indice, array){ // ForEach
    console.log(valor, indice, array);
})

console.log('#####');

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
