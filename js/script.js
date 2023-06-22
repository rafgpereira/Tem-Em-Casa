const ingredientesPossiveis = ['abóbora', 'açúcar', 'azeitona', 'aveia', 'amendoim', 'amido de milho', 'arroz', 'azeite', 'bacon', 'banana', 'batata', 'batata palha', 'brócolis', 'cachaça', 'canela', 'camarão', 'canjica', 'cenoura', 'chocolate', 'cogumelo', 'couve-flor', 'creme de leite', 'extrato de tomate', 'farinha de rosca', 'farinha de trigo', 'fermento', 'frango', 'fubá', 'gengibre', 'laranja', 'leite', 'leite condensado', 'leite de coco', 'leite em pó', 'limão', 'macarrão', 'maçã', 'mandioca', 'mamão', 'manteiga', 'margarina', 'milho', 'molho de tomate', 'morango', 'mostarda', 'óleo', 'ovo', 'pêssego', 'pimentão', 'presunto', 'queijo', 'requeijão', 'salmão', 'salsicha', 'shoyu', 'tomate', 'uva', 'vinho']

const datalist = document.querySelector("#ingredientes")//pega o datalist

for (let i = 0; i < ingredientesPossiveis.length; i++) {
    const opcao = document.createElement("option")//cria elemento option
    opcao.value = ingredientesPossiveis[i]//coloca o ingrediente no el. option
    datalist.appendChild(opcao)//coloca o el. option no datalist
}

const ingredientesSelecionados = []
const input = document.querySelector("#campo-entrada") //pega o campo de entrada
const botaoAdicionar = document.querySelector("#botao-adicionar")//pega o botao adicionar

input.addEventListener("keydown", function (event) { //chama a função adicionarIngrediente quando apertar enter
    if (event.key === "Enter") {
        adicionarIngrediente();
    }
});

botaoAdicionar.addEventListener("click", function () { // chama função adicionarIngrediente quando clicar no botão
    adicionarIngrediente();
});

function adicionarIngrediente() { //função que adiciona os ingredientes no vetor e chama a função para adiconar na tela
    const ingrediente = input.value.trim().toLowerCase(); //pega o valor do input para a var ingrediente em minusculo
    if (ingrediente !== "" && !ingredientesSelecionados.includes(ingrediente) && ingredientesPossiveis.includes(ingrediente)) {//analisa se o input esta vazio, se o ingrediente ja foi adicionado e se o ingrediente é possivel
        ingredientesSelecionados.push(ingrediente);//coloca o ingrediente no vetor
        adicionarIngredienteNaTela(ingrediente);//chama uma função para adicionar o ingrediente na tela, com parametro ingrediente
    }
    input.value = "";//limpa o input
}

function adicionarIngredienteNaTela(ingrediente) { //função que adiciona o ingrediente na tela, com o parametro ingrediente
    const listaIngredientes = document.getElementById("lista-ingredientes");//pega a lista onde vão ser adicionados
    const itemLista = document.createElement("li");//cria um elemento da lista

    const span = document.createElement("span");//cria um campo para inserir o ingrediente na lista
    span.textContent = ingrediente;//insere o ingrediente no campo

    const botaoRemover = document.createElement("button");//cria o botão remover
    botaoRemover.textContent = "X";//adiciona o X ao botão
    botaoRemover.addEventListener("click", function () {//chama a função removerIngrediente quando o botão remover for pressionado
        removerIngrediente(ingrediente, itemLista); //função com parâmetro ingrediente e item lista
    });

    itemLista.appendChild(span);//adiciona o span ao itemLista
    itemLista.appendChild(botaoRemover);//adiciona o botao remover ao item lista
    listaIngredientes.appendChild(itemLista);//adiciona o botão e o span à lista de ingredientes
}

function removerIngrediente(ingrediente, itemLista) { //função que remove o ingrediente
    const index = ingredientesSelecionados.indexOf(ingrediente);//pega a posição do ingrediente no vetor
    if (index !== -1) {
        ingredientesSelecionados.splice(index, 1); //remove o ingrediente do vetor
    }
    itemLista.remove();//remove o itemLista (elemento com span e botao)
}

const botaoRequerer = document.querySelector("#botao-requerer")//pega o botao requerer


botaoRequerer.addEventListener("click", function () { //adiciona a função de requerer os ingredientes listados ao clicar no botão
    if (ingredientesSelecionados.length != 0) {
        requererIngredientes();
    }

});

function requererIngredientes() { //funçao que transforma os ingedientes digitados em json para fazer o requerimento
    const ingredientesJSON = JSON.stringify(ingredientesSelecionados);
    console.log(ingredientesJSON);

}
