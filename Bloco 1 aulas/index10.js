const nome = 'José Ricarte';
const sobrenome = 'Feitosa Filho';
const idade = 28;
const peso = 70;
const altura = 1.80;
let imc = peso/(altura*altura);
let anoNacimento = 2024 - idade;

/*console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNacimento, '.');*/

   console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
   console.log(` tem ${altura} de altura e seu IMC é de ${imc}`);
   console.log( nome, 'nasceu em', anoNacimento, '.');
