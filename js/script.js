import {recipes, ingredientesPossiveis} from './recipes.js'

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
    }else{
      const semIngrediente = document.querySelector("#sem-ingrediente")
      semIngrediente.showModal()
      const botaoSemIngrediente = document.querySelector("#close-sem-ingrediente")
      botaoSemIngrediente.addEventListener("click", function(){
        semIngrediente.close()
      })
    }

});

function requererIngredientes() {
    const receitasEncontradas = buscarReceitas(ingredientesSelecionados);
    if (receitasEncontradas.length > 0) {
      exibirReceitas(receitasEncontradas);
    } else {
        const erro = document.querySelector("#erro")
        erro.showModal()
        const botaoPopupErro = document.querySelector("#close-erro")//pega o botão ok do dialog no html
        botaoPopupErro.addEventListener("click", function () {
            erro.close()//analisa o clique para fechar o popup
        })
        
    }
  }
  
  function buscarReceitas(ingredientes) {
    const receitasEncontradas = [];
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      const ingredientesReceita = recipe.ingredients;
      const hasAllIngredients = ingredientes.every(ingrediente =>
        ingredientesReceita.includes(ingrediente)
      );
      
      if (hasAllIngredients) {
        receitasEncontradas.push(recipe);
      }
    }
    return receitasEncontradas;
  }
  const listaReceitas = document.querySelector("#lista-receitas")
  function exibirReceitas(receitas) {

    listaReceitas.innerHTML = "";
    for (let i = 0; i < receitas.length; i++) {
      const receita = receitas[i];
      const itemReceita = document.createElement("li");
      const linkReceita = document.createElement("a");
      linkReceita.href = receita.link;
      linkReceita.target = "_blank"//abre em nova guia
      const imagem = document.createElement("img");
      imagem.src = receita.image;
      const titulo = document.createElement("h3");
      titulo.textContent = receita.title;
      const tempoPreparo = document.createElement("p");
      tempoPreparo.textContent = "Preparo: " + receita.preparationTime + "utos";
      const dificuldade = document.createElement("p");
      dificuldade.textContent = "Dificuldade: " + receita.difficulty;
      linkReceita.appendChild(imagem);
      itemReceita.appendChild(linkReceita);
      itemReceita.appendChild(titulo);
      itemReceita.appendChild(tempoPreparo);
      itemReceita.appendChild(dificuldade);
      listaReceitas.appendChild(itemReceita);
    }
  }
  


const acesso = localStorage.getItem("acesso")//pega chave no localstorage
if (!acesso) {
    setTimeout(function () {//temporiza o surgimento do popup
        const popup = document.querySelector("#hello")//pega o elemento dialog no html
        

        popup.showModal()//mostra o popup
        const botaoPopup = document.querySelector("#close-hello")//pega o botão ok do dialog no html
        botaoPopup.addEventListener("click", function () {
            popup.close()//analisa o clique para fechar o popup
            localStorage.setItem("acesso", true)
        })
    }, 2000);//tempo em milisegundos
}





