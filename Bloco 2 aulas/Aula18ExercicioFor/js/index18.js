const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container1 = document.querySelector('.container1'); // Selecionou a tag
const div = document.createElement('div'); // Criou um elemento

for (let i = 0; i < elementos.length; i++){
  let {tag, texto} = elementos[i] ; // Variavel das tags e textos
  let tagCriada = document.createElement(tag); // Variavel das tags
  tagCriada.innerHTML = texto; // Adicionando os textos nas tags mostrando no projeto
 
  // tagCriada.innertext = texto; Poderia ser assim

  // let tagCriada = document.createTextNode(texto);
  // tagCriada.appendChild(textoCriado);

  div.appendChild(tagCriada); // Adicionando todas as tags em uma div
}
container1.appendChild(div);