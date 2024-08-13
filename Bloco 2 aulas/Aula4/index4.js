const expressao = true && true && false && true // Tem uma expressáo falsa
console.log(expressao);

const usuario1 = 'Luiz';
const senha1 = '123456';
const vaiLogar1 = usuario1 === 'Luiz' && senha1 === '123456'; // Todas são verdadeiras
console.log(vaiLogar1);

const usuario = 'Luiz';
const senha = '123456';
const vaiLogar = usuario === 'Luiz' || senha === '12345'; // Uma das expressãoes é verdadeira (Luiz)
console.log(vaiLogar);

console.log(!true); // Inverte o valor
console.log(!!true); // Retorna o valor
