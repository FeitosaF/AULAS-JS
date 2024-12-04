//   Inicializando, condicionando e incrementando
for (let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`);
}

//                          Incrementando
for (let i1 = 400; i1 <= 410; i1++){
    console.log(`Linha ${i1}`);
}

//                           Pulando de 10 em 10
for (let i2 = 400; i2 <= 500; i2 += 10){
    console.log(`Linha ${i2}`);
}

// Començamdo do negativo
for (let i3 = -10; i3 <= 10; i3++){
    console.log(`Linha ${i3}`);
}

//                       Decrementando
for (i4 = 500; i4 >= 495; i4--){
    console.log(`Linha ${i4}`);
}

// Estrutura ternária
for (let i5 = 0; i5 <= 10; i5++){
    const par = i5 % 2 === 0? 'par' : 'Ímpar'
    console.log(i5, par);
}

// Com array, length é o maior índice
const frutas = ['Maçã', 'Pêra', 'Uva', 'Manga', 'Goiaba'];
for (let i6 = 0; i6 < frutas.length; i6++){
    console.log(`Índice ${i6}`, frutas[i6]);
}