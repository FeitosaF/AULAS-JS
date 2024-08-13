// São indexadas por elementos
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
console.log(alunos[0]); // Mostrando
console.log(alunos[2]);

alunos[0] = 'Eduardo'; // inserindo
alunos[3] = 'Luiza';
console.log(alunos);

alunos[alunos.length] = 'Carlos'; // Adiciona no fim
alunos[alunos.length] = 'Fábio';
console.log(alunos);

alunos.push('Laura'); // Adiciona no fim
alunos.push('Fernando');
console.log(alunos);

alunos.unshift('Feitosa'); // Adiciona no começo
alunos.unshift('Filho');
console.log(alunos);

const alunos1 = ['Luiz', 'Maria','João'];
const removido = alunos1.pop(); // Remove o ultimo elemento do arrays
console.log(removido);
console.log(alunos1);

const alunos2 = ['Luiz', 'Maria','João'];
const removido1 = alunos2.shift(); // Remove o primeiro elemento do arrays
console.log(removido1);
console.log(alunos2);

const alunos3 = ['Luiz', 'Maria','João'];
delete alunos3[1]; // Deleta o elemento e fica um elemento vazio
console.log(alunos3[1]);

const alunos4 = ['Luiz', 'Maria','João'];
alunos4.push('Luiza'); 
alunos4.push('Eduardo');
console.log(alunos4.slice(0,3));
console.log(alunos4[50]);