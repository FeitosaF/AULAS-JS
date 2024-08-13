const comp = 5 > 2;
console.log(comp);

const comp1 = 10 >= 11;
console.log(comp1);

const comp2 = 10 < 11;
console.log(comp2);

const comp3 = 10 <= 11;
console.log(comp3);

const num1 = 10; // number
const num2 = '10'; //String
const comp4 = num1 == num2; // O resultado fez uma dedução, não é recomendado. O certo é transformar tudo em numero.
console.log(comp4);
const comp5 = num1 === num2; // Retornou o valor e o tipo, se é uma strimg, number...
console.log(comp5);

const num3 = 10;
const num4 = '10';
const comp6 = num3 != num4; //São diferentes.  O resultado fez uma dedução, não é recomendado. O certo é transformar tudo em numero.
console.log(comp6);
const comp7 = num3 !== num4;  // Retornou o valor e o tipo, se é uma strimg, number...
console.log(comp7);