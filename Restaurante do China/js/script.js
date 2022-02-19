/*
    importando os módulos que serão usados no projeto
    por questão de simplificação, transformei os módulos em classes,
    que são mais simples de atualizar
*/
import Categories from './categories.js';
import Items from './items.js';
import Pedido from './pedido.js';
import IndexView from './view/indexView.js';

/*
 * neste ponto, estou criando os objetos
 * que serão usados ao longo do código
 * 
 * percebam que a view recebe um parâmetro (#main-content, no caso)
 * uso esse parâmetro para definir uma propriedade na view para não
 * ter que fazer referência ao html lá.
 */
let items = new Items();
let categories = new Categories();
let pedido = new Pedido();
let view = new IndexView("#main-content");

let mainContent = document.querySelector("#main-content");

window.onload = () => {    
    view.loadMain();
    pedido.readFromStorage();
}

/**
 * Declaração dos eventos previstos na área principal
 */
mainContent.addEventListener('click', (event) => {
    /* 
      programando o evento de clique no card de menu categoria
    */
    if(event.target.matches("#menu-tile")) {
        //carregar todas as categorias
        loadMenuCategories();
    }
    
    /* 
      programando o evento de detalhamento de uma categoria
      deverá apresentar todos os pratos da categoria
    */
    if (event.target.matches("img.categoria")) {  
        let categoria = event.target.classList[0];
        if (categoria) {
            loadMenuItems(categoria);
        }
    }

    /**
     * programando o evento de escolha de um prato
     */

     if(event.target.matches("button.pedir"))
     { 

         let selectedItem = items.getItem(event.target.id); 
         
         let div =document.getElementById("card"+selectedItem.code)
         
        let vetorQnt = localStorage.getItem("qnt");
        vetorQnt = vetorQnt.split(",");
        let aux = [event.target.id, 1]
            
        vetorQnt.push(aux);

        localStorage.setItem("qnt",vetorQnt);


         div.innerHTML = `<div id=card${selectedItem.code} class="menu-item-tile col-md-6">
         <div class="row">
             <div class="col-sm-5">
                 <div class="menu-item-photo">
                     <div class="menu-item">${selectedItem.code}</div>
                     <img class="img-responsive" src="${selectedItem.photo}" alt="Item" width="250" height="150">
                 </div>
                 <div>
                     <span> </span> ${selectedItem.price} 
                     <span></span>
                 </div>
             <div style="background-color:white; width:64px; display:flex;">
                 <button id="${selectedItem.code}" class="mais" style="color:black;">+</button><output id="qnt${selectedItem.code}" style="margin:5px; padding:5px; color:black;">1</output><button id="${selectedItem.code}" class="menos" style="color:black;">-</button>
             </div>
             </div>
             <div class="menu-item-description col-sm-7">
                 <h3 class="menu-item-title">${selectedItem.name}</h3>
                 <p class="menu-item-details">${selectedItem.details}</p>
             </div>
 
         </div>
         <hr class="visible-xs">
     </div>`;
 
        pedido.addProduto(selectedItem);
        view.listPedido(pedido);
  
     }

    if(event.target.matches("button.mais"))
    { 
        let qnt =document.getElementById("qnt"+event.target.id);
        qnt.innerHTML = parseInt(qnt.innerHTML) + 1;
        pedido.addQnt(event.target.id, parseInt(qnt.innerHTML))

        //---------------------------

        let vetorQnt = localStorage.getItem("qnt");
        vetorQnt = vetorQnt.split(",");

        for(let i=1; i<vetorQnt.length; i=i+2)
        {
            if(vetorQnt[i] == event.target.id)
            {
                vetorQnt[i+1] = parseInt(qnt.innerHTML);
                break;
            }
        }

        localStorage.setItem("qnt", vetorQnt);

        view.listPedido(pedido);
    }

    if(event.target.matches("button.menos"))
    {
        event.target.id 
        let qnt =document.getElementById("qnt"+event.target.id);
        if(parseInt(qnt.innerHTML) == 1)
        {
            qnt.innerHTML = 1;    
        }
        else{
            qnt.innerHTML = parseInt(qnt.innerHTML) - 1;
        }
        pedido.addQnt(event.target.id, parseInt(qnt.innerHTML))

        //---------------------------

        let vetorQnt = localStorage.getItem("qnt"); 
        vetorQnt = vetorQnt.split(",");

        for(let i=1; i<vetorQnt.length; i=i+2)
        {
            console.log("Entrou no FOR")
            if(vetorQnt[i] == event.target.id)
            {
                vetorQnt[i+1] = parseInt(qnt.innerHTML);
                break;
            }
        }
        localStorage.setItem("qnt", vetorQnt);

        view.listPedido(pedido);
    }



/**
 * >>>>>>>>>> 
 * 1 ATIVIDADE - Programar a funcionalidade Remover Item
 ***  a. escolha ou crie um evento para remover um item do pedido
*/

    if(event.target.matches("button.carrinho"))
    {
        let carrinho = document.getElementById("carrinho");
        if(carrinho.style.display === "block")
        {
            carrinho.style.display = "none";
        }
        else{
            carrinho.style.display = "block";
        }
    }

 
    if(event.target.matches("button.remove"))
    {
        //i. identifique o item a ser removido
        let selectedItem = items.getItem(event.target.id); 
        //ii. chame o método de remoção no objeto pedido
        pedido.removeProduto(selectedItem);
        //iii. atualize a view
        view.listPedido(pedido);

    }   
    
})

/*
 * Funções auxiliares
 */
function loadMenuCategories(){
    //pegar a lista de categorias no modelo
    let catList = categories.list(); //não passo parâmetro, logo lista todos
    //função da view para construir o "cabeçalho" da categorias de menu
    // e detalhar as categorias
    view.createCategories(catList);
}

function loadMenuItems(shortName){
    //atualizar o pedido a partir do storage
    pedido.readFromStorage();

    //ir no modelo de categorias para pegar o objeto 
    //correspondente ao código da categoria
    let selectedCat = categories.list(shortName);
    //ir no modeloo items para pegar todos os pratos 
    // correspondentes à categoria selecionada
    let selectedDishes = items.list(selectedCat.short_name);
    // criar a tela da categoria selecionada, com
    // todos os pratos da categoria
    view.createDishes(selectedCat, selectedDishes, pedido);
    
}

/*
ATIVIDADE 2
Organize seu CSS para que a apresentação do pedido fique mais interessante
Use sua criatividade!
- Tópicos importantes:
  >> aprimorar os elementos HTML que são renderizados no pedido
  a partir da view
  >> criar regras CSS para exibir/ocultar o pedido
  >> criar uma moldura para pedido que acompanhe todas as telas
  >> detalhar o preço e a quantidade de cada item pedido
*/