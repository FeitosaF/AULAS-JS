try{
    console.log(naoExisto); // Erro
} catch(err){
    console.log('não existo não existe'); // Exibição do erro
    console.log(err); // Erro, não é recomendado exibir o erro para o usuario
}




function soma(x, y){
 if ( typeof x !== 'number' || typeof y !== 'number') {
    // throw('x e y precisão ser números');  Erro digitado
    throw new Error('x e y precisão ser números') // Erro parecido com do JS
 } 
 return x + y; 
}

try{
console.log(soma(1, 2)); // Executou normal, não tem erro
console.log(soma('1', 2)); // Tem erro
}catch(error){
    // console.log(error);  Não é recomendado ixibir este tipo de erro pro usuario final
console.log('Alguma coisa mais amigável pro usuário');
}