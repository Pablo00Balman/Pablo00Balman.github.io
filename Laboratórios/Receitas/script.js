window.onload = function () {
    let body = document.getElementsByTagName("body")[0];
    console.log(body);
    for (receita of receitasList) {
        body.appendChild(montaDiv(receita));
    }
    /*
    receitasList.forEach(function (receita){
        console.log(receita);
    })
    */


}

function montaDiv(receita) {

    let divReceita = document.createElement("div");    
    divReceita.classList.add("divReceita");
    
    //Declaração das variáveis e atribuição de seus respectivos valores:
    let receita1 = document.createElement("div");
    receita1.classList.add("receita1");
    
    let titulo = document.createElement("h3");
    let tituloText = document.createTextNode(receita.nome);
    
    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);
    
    let foto = document.createElement("img");
    foto.src = receita.foto;

    //Unir variáveis e mandar para divReceita:
    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);

    receita1.appendChild(titulo);
    receita1.appendChild(descricao);
    receita1.appendChild(foto);

    //------------------------------------------------------------------------------------
    
    let receita2 = document.createElement("div");
    receita2.classList.add("receita2");

    let tituloPreparo = document.createElement("h4");
    let tituloPreparoText = document.createTextNode("Preparo:");
    tituloPreparo.appendChild(tituloPreparoText);
    receita2.appendChild(tituloPreparo);


    //--------------------
    let ol = document.createElement("ol");

    for(let i = 0; i < receita.preparo.length; i++) {
        
        let tituloPreparo = document.createElement("li");
        let tituloPreparoText = document.createTextNode(receita.preparo[i]);
        tituloPreparo.appendChild(tituloPreparoText);
        ol.appendChild(tituloPreparo);
    }    
    
    receita2.appendChild(ol);
    //-----------------------


    let tituloIngredientes = document.createElement("h4");
    let tituloIngredientesText = document.createTextNode("Ingredientes:");
    tituloIngredientes.appendChild(tituloIngredientesText);
    receita2.appendChild(tituloIngredientes);

    //--------------------
    let ul = document.createElement("ul");

    for(let i = 0; i < receita.preparo.length; i++) {
        
        let tituloPreparo = document.createElement("li");
        let tituloPreparoText = document.createTextNode(receita.preparo[i]);
        tituloPreparo.appendChild(tituloPreparoText);
        ul.appendChild(tituloPreparo);
    }    
    
    receita2.appendChild(ul);
    //-----------------------

    divReceita.appendChild(receita1)
    divReceita.appendChild(receita2)
    
    let br = document.createElement("br");
    br.classList.add("br");
    divReceita.appendChild(br);
    

    let hr = document.createElement("hr");
    divReceita.appendChild(hr);

    
    return divReceita;
}
/*
<div class="receita">
        <h3>(receita.nome) </h3>
        <p>(receita.descricao)</p>
        <img src="<<receita.foto>>" alt="receita.foto">
        <h4>receita.preparo (array a ser iterado)</h4>
        <ol>
            <li></li>
        </ol>
        <h4>receita.ingredientes (array que precisa ser iterado)</h4>
        <ul>
            <li>1kg de cebola</li>
        </ul>
    </div>
    */