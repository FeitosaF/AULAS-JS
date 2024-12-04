const h2 = document.querySelector('.container1 h2');
const data1 = new Date();

function getDiaSemanaTexto1(diaSemana1){
    const diasSemana1 = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana1[diaSemana1]   
};

function getNomeMes1(numeroMes1){
    const meses1 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
return meses1[numeroMes1];
};

function zeroAEsqueda1(num1){
    return num1 >= 10? num1 : `0${num1}`;
};

function criaData1(data1){
    const diaSemana1 = data1.getDay();
    const numeroMes1 = data1.getMonth();

    const nomeDia1 = getDiaSemanaTexto1(diaSemana1);
    const nomeMes1 = getNomeMes1(numeroMes1);

    return(
        `${nomeDia1}, ${data1.getDate()} de ${nomeMes1} de ${data1.getFullYear()} ${data1.getHours()}:${data1.getMinutes()}` 
    );
};

h2.innerHTML = criaData1(data1);