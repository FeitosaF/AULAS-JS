const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numeros.length; i++){
// let numero = numeros[i];   
// }

// for (let i in numeros){
//    let numero = numeros[i];
//}


for (let numero of numeros){

    if (numero === 2){
        console.log('Pulei o numero 2');
        continue;
    }

    console.log(numero);

    if (numero === 7){
        console.log('7 encontrado, saindo...');
        break; // Para (quebra) o laço quando encontra a condição desejada
    }
}



console.log('#######');



const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

while (i < numeros1.length){
    let numero1 = numeros1[i];

    if (numero1 === 2){
        console.log('Pulei o numero 2');
        i++
        continue;
    }

    console.log(numero1);

    if (numero1 === 7){
        console.log('7 encontrado, saindo...');
        i++
        break; // Para (quebra) o laço quando encontra a condição desejada
    }
    i++
}


console.log('#####');


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i1 = 0;

do {
    let numero2 = numeros2[i1];

    if (numero2 === 2){
        console.log('Pulei o numero 2');
        i1++
        continue;
    }

    console.log(numero2);

    if (numero2 === 7){
        console.log('7 encontrado, saindo...');
        i1++
        break; // Para (quebra) o laço quando encontra a condição desejada
    }
    i1++
} while (i1 < numeros2.length);