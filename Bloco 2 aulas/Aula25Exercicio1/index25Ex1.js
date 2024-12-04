// Escreva uma função que recebe 2 numeros 
// Retorne o maior deles

function max1(x, y){
    if (x > y){
        return x;
    } else{
        return y;
    }
}
console.log(max1(10, 20));


function max(x, y){
    return x > y ? x : y;
}
console.log(max(10, 20));


const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 20));