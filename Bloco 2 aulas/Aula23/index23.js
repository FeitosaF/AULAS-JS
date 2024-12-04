function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random (min, max);
console.log(rand !== 10); // Resultado se é false ou true

while (rand !== 10){ // Faz o laço de repetição até parar no 10
    rand = random(min, max);
    console.log(rand);
}

console.log('######');

do{
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);