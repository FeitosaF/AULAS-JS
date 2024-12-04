// Selecionar as coisas - Input, butom e ul
const inputTarefas = document.getElementById('inputTarefas');
const addTarefas = document.getElementById('addTarefas');
const lista = document.getElementById('lista');

function criaLi(){ // Função para só criar um li
  const li = document.createElement('li');
  return li;
}

inputTarefas.addEventListener('keypress', function(e){ // Função para quando apertar enter a tarefa é exibida
if (e.keyCode === 13){ // Código do da tecla Enter
  if (!inputTarefas.value) return; 
  criaTarefa(inputTarefas.value);
}
})

function limpaInput(){ //Função para limpar o input e digitar uma nova tarefa
  inputTarefas.value = ''; // Valor Vazio
  inputTarefas.focus(); // Foco no cursor no input ao clicar
}

function criaBotaoApagar(li){ // Função para criar um botão apagar, vai apagar as li
  li.innerText += ' '; // Só um espaço do li e o botão
  const botaoApagar = document.createElement('button'); // Criando o botão
  botaoApagar.innerHTML = 'Apagar'; // Nome do botão é Apagar
  botaoApagar.setAttribute('class', 'apagar'); // Criou um atributo classe com o nome apagar no botão Apagar
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Criou um atributo title com o nome Apagar esta tarefa no botão Apagar para quando passar o muser exibir a menssagem
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
const li = criaLi(); // Uma nova variavel li para pegar a função criaLi
li.innerText = textoInput; // Exibir no site 
lista.appendChild(li);
limpaInput();
criaBotaoApagar(li);
}

// Evento para capturar o botão - buttom
addTarefas.addEventListener('click', function(){
  if (!inputTarefas.value) return; // Para não retornar nada e em branco
  criaTarefa(inputTarefas.value); // Função para pegar o valor do input
})

document.addEventListener('click', function(e){
  const el = e.target; // Elemento sendo clicado

  if (el.classList.contains('apagar')){
    el.parentElement.remove(); // Remover o pai do elemento ao ser clicado
    salvarTarefas();
  }
})

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li'); // Selecionar todas as tarefas do li
  const listaDeTarefas = []; // Tarefas em uma array quando digitar e enviar

  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Tirar o Apagar e colocar em branco e resultado, trim remove o espaço
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();













































/*document.addEventListener('DOMContentLoaded', () => {
  const inputTarefas = document.getElementById('inputTarefas');
  const addTarefas = document.getElementById('addTarefas');
  const lista = document.getElementById('lista');

  // Função para carregar tarefas do Local Storage
  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => {
      addTask(task.text, task.completed);
    });
  };

  // Função para salvar tarefas no Local Storage
  const saveTasks = () => {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach((li) => {
      tasks.push({
        text: li.querySelector('span').textContent,
        completed: li.classList.contains('completed'),
      });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Função para adicionar tarefa
  const addTask = (taskText, completed = false) => {
    const li = document.createElement('li');

    // Texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
      saveTasks(); // Salvar mudanças no Local Storage
    });

    // Botão para remover tarefa
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remover';
    deleteBtn.addEventListener('click', () => {
      li.remove(); // Remove a tarefa específica
      saveTasks(); // Atualiza o Local Storage
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    if (completed) {
      li.classList.add('completed');
    }

    lista.appendChild(li);
    saveTasks(); // Salvar tarefa ao adicioná-la
  };

  // Evento para adicionar tarefa ao clicar no botão
  addTarefas.addEventListener('click', () => {
    const taskText = inputTarefas.value.trim();
    if (taskText) {
      addTask(taskText);
      inputTarefas.value = ''; // Limpa o campo de input
    }
  });

  // Permitir adicionar tarefa pressionando Enter
  inputTarefas.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTarefas.click();
    }
  });

  // Carregar tarefas ao iniciar
  loadTasks();
});
*/
  