
// Função mostra a hora parada
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Função que mostra o intervalo de tempo da hora
// passando de segundos em segundos 
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

// Funções para parar o intervalo da hora 
setTimeout(function(){
   clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá mundo');
}, 5000);