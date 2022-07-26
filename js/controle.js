let contador = 0;
let input = document.getElementById('inputTarefas');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefas() {
    //Pegar o valor digitado no input
    let valorInput = input.value;

    //Se não for vazio, nem nulo, nem indefinido
    if ((valorInput !== null) && (valorInput !== "") && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id=${contador} class="item">
        <div onclick="marcarTarefas(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefas(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete"></i>Delete</button>
        </div>`;
        //Adicionar novo item no main
        main.innerHTML += novoItem;

        //Zerar os campos
        input.value = "";
        input.focus();


    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefas(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);


    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function (event) {
    //Se teclou enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})