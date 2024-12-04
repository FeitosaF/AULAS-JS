const pessoa = {
    nome: 'Luiz', 
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);


const pessoa1 = { 
    sobrenome1: 'Miranda',
    idade1: 30,
    endereco1: {
        rua1: 'Av Brasil',
        numero1: 320
    }
}
const {nome1 = 'Não tem', sobrenome1} = pessoa1;
console.log(nome1, sobrenome1);


const pessoa2 = { 
    sobrenome2: 'Miranda',
    idade2: 30,
    endereco2: {
        rua2: 'Av Brasil',
        numero2: 320
    }
}
const {endereco2: {rua2, numero2}} = pessoa2; // Pega resultados dentro do endereco2
console.log(rua2, numero2);


const pessoa3 = {
    nome3: 'Luiz', 
    sobrenome3: 'Miranda',
    idade3: 30,
    endereco3: {
        rua3: 'Av Brasil',
        numero3: 320
    }
}
const {nome3: teste3, sobrenome3} = pessoa3; // Mudou a variavel para teste3
console.log(teste3, sobrenome3);


