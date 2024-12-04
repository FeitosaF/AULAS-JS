const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana1){
    let diaSemanaTexto1;

    switch (diaSemana1){ 
        case 0: 
            diaSemanaTexto1 = 'Domingo'; 
            return diaSemanaTexto1;
        case 1:
             diaSemanaTexto1 = 'Segunda-feira';
             return diaSemanaTexto1;
        case 2:
            diaSemanaTexto1 = 'Terça-feira';
            return diaSemanaTexto1;
        case 3:
             diaSemanaTexto1 = 'Quarta-feira';
             return diaSemanaTexto1;
         case 4:
             diaSemanaTexto1 = 'Quinta-feira';
             return diaSemanaTexto1;
        case 5:
             diaSemanaTexto1 = 'Sexta-feira';
             return diaSemanaTexto1;  
         case 6:
                diaSemanaTexto1 = 'Sabado';
                return diaSemanaTexto1;
        default: 
            diaSemanaTexto1 = '';
            return diaSemanaTexto1;
    }
}

function getNomeMes(numeroMes){
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
         case 2:
             nomeMes = 'Março';
            return nomeMes;
        case 3:
             nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;        
    
    }
}

function criaData(data){
    const diaSemana1 = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana1);
    const nomeMes = getNomeMes(numeroMes);

    return(
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}` 
    );
}

function zeroAEsqueda(num){
    return num >= 10? num : `0${num}`;
}

h1.innerHTML = criaData(data);


//Outra forma de fazer:
const h2 = document.querySelector('.container1 h2');
const data1 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h2.innerHTML = data1.toLocaleString('pt-BR', opcoes);

//Outra forma de fazer:
const h3 = document.querySelector('.container2 h3')
const data2 = new Date();
h3.innerHTML = data2.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
