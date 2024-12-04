function relogio(){ // Função de todo o relogio
function criaHoraDosSegundos(segundos){ // Função dos segundos
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{ // Chama o Date para dizer só a hora
        hour12: false, // Significa que a hora é correspondente a 24 horas e não 12 horas
        timeZone: 'UTC' // ou GMT
    })
}


const relogio = document.querySelector('.relogio'); // Selecionando as class das tags
const iniciar = document.querySelector('.iniciar'); // Não precisa na função de um  addEventListener
const pausar = document.querySelector('.pausar'); // Não precisa na função de um  addEventListener
const zerar = document.querySelector('.zerar'); // Não precisa na função de um  addEventListener
let segundos = 0;
let timer;

function iniciaRelogio(){ // Função que inicia os segundos
     timer = setInterval(function(){ // Intervalo de tempo em segundos
        segundos++; // Um em um segundo
        relogio.innerHTML = criaHoraDosSegundos(segundos); // Segundos dentro da hora(relogio)
    }, 1000);
}

// Um addEventListener para todos os botões
document.addEventListener('click', function(e){
    const el = e.target; // Função quando clica em alguns dos botões

    if (el.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0; // Volta do 0 
    }
    if (el.classList.contains('iniciar')){
        relogio.classList.remove('pausado'); // Quando iniciar remover esta classe
        clearInterval(timer); // Para o timer
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')){
        clearInterval(timer); // Parar o intervalo dos segundos
        relogio.classList.add('pausado'); // Quando pausar adiciona esta classe
    }
})
}
relogio();

/*
iniciar.addEventListener('click', function(event){ // Evento do botão ao clicar
    relogio.classList.remove('pausado'); 
    clearInterval(timer); 
    iniciaRelogio();
});
pausar.addEventListener('click', function(event){ // Evento do botão ao clicar
    clearInterval(timer); 
    relogio.classList.add('pausado'); 
});
zerar.addEventListener('click', function(event){ // Evento do botão ao clicar
   clearInterval(timer);
   relogio.innerHTML = '00:00:00';
   segundos = 0; // Volta do 0
});
*/