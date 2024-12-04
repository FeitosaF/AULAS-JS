const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana){ //variavel que quer trabalhar
    case 0: //Opções da variavel
        diaSemanaTexto = 'Domingo'; //Resultado em texto
        break; // Se for certa para por aqui, se não segue para outra condiçao
    case 1:
         diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
         diaSemanaTexto = 'Quarta';
        break;
     case 4:
         diaSemanaTexto = 'Quinta';
        break;
    case 5:
         diaSemanaTexto = 'Sexta';
        break;  
     case 6:
            diaSemanaTexto = 'Sabado';
        break; 
    default: // É tipo o else, a ultima condição
        diaSemanaTexto = '';
        break ; // Não é obrigado colocar                
}


const data1 = new Date('1987-04-20 00:00:00');
const diaSemana1 = data1.getDay();
const diaSemanaTexto1 = getDiaSemanaTexto(diaSemana1);

function getDiaSemanaTexto(diaSemana1){
    let diaSemanaTexto1;

    switch (diaSemana1){ 
        case 0: 
            diaSemanaTexto1 = 'Domingo'; 
            return diaSemanaTexto1;
        case 1:
             diaSemanaTexto1 = 'Segunda';
             return diaSemanaTexto1;
        case 2:
            diaSemanaTexto1 = 'Terça';
            return diaSemanaTexto1;
        case 3:
             diaSemanaTexto1 = 'Quarta';
             return diaSemanaTexto1;
         case 4:
             diaSemanaTexto1 = 'Quinta';
             return diaSemanaTexto1;
        case 5:
             diaSemanaTexto1 = 'Sexta';
             return diaSemanaTexto1;  
         case 6:
                diaSemanaTexto1 = 'Sabado';
                return diaSemanaTexto1;
        default: 
            diaSemanaTexto1 = '';
            return diaSemanaTexto1;
    }
}

/*
if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
}else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
}else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
}else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
}else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
}else if (diaSemana === 6){
    diaSemanaTexto = 'Sabado';
}else{
    diaSemanaTexto = '';
}
*/
console.log(diaSemana, diaSemanaTexto);
console.log(diaSemana1, diaSemanaTexto1);