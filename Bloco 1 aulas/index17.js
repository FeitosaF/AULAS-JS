let varA = 'A'; //Ser o valor de B
let varB = 'B'; //Ser o valor de C
let varC = 'C'; //Ser o valor de A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

//[varA, varB, varC] = [varB, varC, varA] isso é outra maneira de resolver o problema.

console.log(varA, varB, varC);
