const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

   const email = evento.target.querySelector('#email').value;
   const senha = evento.target.querySelector('#senha').value;


    if (!email) {
     resultado('Email inválido', false);
     return   
    }
    if (!senha) {
        resultado('Senha inválida', false);
        return
    }

    const usuarios = [
        { email: 'Jose.jose@gmail.com', senha: '1234' },
        { email: 'Maria.maria@gmail.com', senha: '12345' },
        { email: 'Joao.joao@gmail.com', senha: '123456' }
    ];

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        resultado('Login realizado com sucesso!', true);
        // Redirecionar para outra página ou executar outra ação
    } else {
        resultado('Email ou senha inválidos.', false);
    }

} )

function criaP () { // Função que só serve para criar o P de paragrafo
    const p = document.createElement('p'); //Criar um paragrafo no HTML aqui no JS
    return p;
}


function resultado (mensagem, sucesso) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (sucesso) {
        p.classList.add('sucesso');
    } else {
        p.classList.add('erro');
    }

    p.textContent = mensagem;
    resultado.appendChild(p);


}