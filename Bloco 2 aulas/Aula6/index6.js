/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/
const hora = 12;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
console.log ('Boa noite');
} else {
    console.log('Olá');
}


const hora1 = 50;

if (hora1 >= 0 && hora1 <= 11) {
  console.log('Bom dia');
} else if (hora1 >= 12 && hora1 <= 17) {
console.log('Boa tarde');
} else if (hora1 >= 18 && hora1 <= 23) {
console.log ('Boa noite');
} else {
    console.log('Olá');
}


const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}



const tenhoGrana1 = NaN; // Resultado vazio, pois é falso e não tem outra condição além do if

if (tenhoGrana1) {
    console.log('Vou sair de casa agora');
}