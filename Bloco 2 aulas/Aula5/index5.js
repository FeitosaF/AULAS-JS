console.log ('Luiz' && 'Otávio' && 'Maria'); // Retornou Maria
console.log ('Luiz' && '' && 'Maria' ); // Retornou string vazia

function falaOi () {
    return 'Oi';
}
const vaiExecultar = 'Joãozinho'; // É verdadeiro
console.log(vaiExecultar && falaOi()); // Execultou o return veradeiro

function falaOi1 () {
    return 'Oi1';
}
const vaiExecultar1 = false; // Retornou false
console.log(vaiExecultar1 && falaOi1()); 


console.log(0 || false || null || 'Luiz Otávio' || true); // Retornou o primeiro valor verdadeiro

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // Retornou o primero valor verdadeiro

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || c || d || e); // Retornou o ultimo valor falso
