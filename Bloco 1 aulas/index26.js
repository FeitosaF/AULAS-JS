const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
const pessoal2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};
console.log(pessoal.nome);
console.log(pessoal.sobrenome);

console.log(pessoal2.nome);
console.log(pessoal2.idade);


function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa3 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa4 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa5 = criaPessoa('João', 'Moreira', 55);
const pessoa6 = criaPessoa('Junior', 'Lara', 44);
const pessoa7 = criaPessoa('Jean', 'Miranda', 69);
console.log(pessoa3.nome, pessoa4.nome, pessoa6.idade, pessoa5.sobrenome, pessoa7.sobrenome);


const pessoa8 = { //Objeto
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`); //Função e método
    },
    incrementaIdade() {
        this.idade++; //Função e método
    }
};
pessoa8.fala(); //Método
pessoa8.incrementaIdade();//Método
pessoa8.fala();
pessoa8.incrementaIdade();
pessoa8.fala();
pessoa8.incrementaIdade();
pessoa8.fala();
pessoa8.incrementaIdade();