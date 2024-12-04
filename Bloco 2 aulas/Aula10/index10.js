//  ? :
const pontuacaoUsuario1 = 1000;
//                         Condição           Se é verdadeiro :  Se é falso
const nivelUsuario1 = pontuacaoUsuario1 >= 1000 ? 'Usuário VIP' : 'Usuário normal';


const corUsuario = null;
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario1, corPadrao);



const pontuacaoUsuario = 1000;
// Mesma função de cima, só que na e cima é mais curta
if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário normal');
}