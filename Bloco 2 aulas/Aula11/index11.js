const tresHoras = 60 * 60 * 3 * 1000;  // 60 segundos * 60 segundos = 1 hora * 3 = 3 horas * 1000 segundos = 3 horas
const umDia = 60 * 60 * 24 * 1000; // Dá 24 horas = Um dia
const data = new Date (0 + tresHoras + umDia);
console.log(data.toString());

const data1 = new Date (); // Data atual
console.log(data1.toString());

const data2 = new Date(2024, 3, 20, 15, 14, 60, 999); // ano, mes, dia, hora, minutos, segundos, milesimo de segundos 
console.log(data2.toString());

const data3 = new Date('2024-09-19 07:49:50'); // Com string, data mais utilizada
console.log(data3.toString());

const data4 = new Date('2024-09-19 07:49:50');
console.log('Dia', data4.getDate());
console.log('Mês', data4.getMonth() + 1); // Mês começa do 0
console.log('Ano', data4.getFullYear());
console.log('Hora', data4.getHours());
console.log('Min', data4.getMinutes());
console.log('Seg', data4.getSeconds());
console.log('Ms', data4.getMilliseconds());
console.log('Dia, semana', data4.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data4.toString());


function zeroAEsquerda (num) {
return num >= 10? num : `0${num}`;
}

function formataData(data5) {
    const dia = zeroAEsquerda(data5.getDate());
    const mes = zeroAEsquerda(data5.getMonth() + 1);
    const ano = zeroAEsquerda(data5.getFullYear());
    const hora = zeroAEsquerda(data5.getHours());
    const min = zeroAEsquerda(data5.getMinutes());
    const seg = zeroAEsquerda(data5.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);