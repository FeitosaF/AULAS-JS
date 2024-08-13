function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []; // Quem vai enviar é a função em baixo, por isso que está vazio

    function recebeEventoForm (evento) { //É tipo um espião, para exibir o que está selecionado no objeto
    evento.preventDefault(); // O evento é só pra previne o que pode acontecer por padrão(não envia o formulario)

    const nome = form.querySelector('.nome');//Seletores HTML que está dentro do form
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

}
form.addEventListener('submit', recebeEventoForm); //Adiciona um escutador de eventos no formulário. O evento é enviar o formulário
    };

meuEscopo(); // Função sendo execultada