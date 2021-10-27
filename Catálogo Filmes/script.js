window.onload = function () {


    let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
        {
            let info = JSON.parse(this.responseText);
            carregaPagina(info);
        }
    }
    xhttp.open("GET", url)
    xhttp.send();
}


function carregaPagina (info){
    
    let body = document.getElementsByTagName("body")[0];

    let aux = 1;

    for(let i=0; i<info.length; i++)
    {
        let div = document.createElement("div");

        //-------------------------------------------

        if(aux == 4)
        {
            aux = 1;
        }

        if(aux == 1)
        {
            div.classList.add("conteudo1");
        }
        else{
            if(aux == 2){
                div.classList.add("conteudo2");
            }
            else{
                if(aux == 3)
                {
                    div.classList.add("conteudo3");
                }
            }
        }
        

        // Imagem----------------------------------------------------

        let foto = document.createElement("img");
        foto.classList.add("foto");
        foto.src = info[i].figura;
        div.appendChild(foto);

        // Título-----------------------------------------------------
        let titulo = document.createElement("h3");
        let textoTitulo = document.createTextNode(info[i].titulo);
        titulo.appendChild(textoTitulo);
        div.appendChild(titulo);

        // Descrição-----------------------------------------------------
        let resumo = document.createElement("p");
        resumo.classList.add("descricao");
        let textoResumo = document.createTextNode(info[i].resumo);
        resumo.appendChild(textoResumo);
        div.appendChild(resumo);


        //Classificação-----------------------------------------------------

        let divClassificacao = document.createElement("div");
        divClassificacao.classList.add("classificacao");
        let classificacao = document.createElement("p");
        let textoClassificacao = document.createTextNode(info[i].classificacao);

        parseInt(info[i].classificacao);
        if(info[i].classificacao >= 18)
        {
            divClassificacao.style.backgroundColor = "red";
        }
        else{
            if(info[i].classificacao >=14)
            {
                divClassificacao.style.backgroundColor = "rgb(218, 121, 4)";
            }
            else{
                divClassificacao.style.backgroundColor = "green";
                textoClassificacao = document.createTextNode("Livre");
            }
        }
        classificacao.appendChild(textoClassificacao);
        divClassificacao.appendChild(classificacao);
        div.appendChild(divClassificacao);

        //-----------------------------------------------------
        let generos = document.createElement("p");
        for(let j = 0; j < info[i].generos.length; j++)
        {
            if(j == info[i].generos.length-1)
            {
                let textoGeneros = document.createTextNode(info[i].generos[j]+ ".");
                generos.appendChild(textoGeneros);
            }
            else{
                let textoGeneros = document.createTextNode(info[i].generos[j]+  ", ");
                generos.appendChild(textoGeneros);
            }
            
        }
        div.appendChild(generos)

        //-----------------------------------------------------
        let semelhantes = document.createElement("p");
        for(let j = 0; j < info[i].titulosSemelhantes.length; j++)
        {
            let id = info[i].titulosSemelhantes[j]

            if(j == info[i].titulosSemelhantes.length-1)
            {
                let textoSemelhantes = document.createTextNode(info[id-1].titulo);
                semelhantes.appendChild(textoSemelhantes);
            }
            else{
                let textoSemelhantes = document.createTextNode(info[id-1].titulo + " | ");
                semelhantes.appendChild(textoSemelhantes);
            }

        }
        div.appendChild(semelhantes)

        //-----------------------------------------------------

        let elenco = document.createElement("p");
        for(let j = 0; j < info[i].elenco.length; j++)
        {
            if(j == info[i].elenco.length-1)
            {
                let textoElenco = document.createTextNode(info[i].elenco[j] + ". ");
                elenco.appendChild(textoElenco);
            }
            else{
                let textoElenco = document.createTextNode(info[i].elenco[j] + ", ");
                elenco.appendChild(textoElenco);
            }
        }
        div.appendChild(elenco)

        //-----------------------------------------------

        let hr = document.createElement("hr");
        div.appendChild(hr);

        //-----------------------------------------------

        let opinioes = document.createElement("div");

        for(let j=0; j < info[i].opinioes.length; j++)
        {
            let rating = document.createElement("img");

            rating.src = "cinco.png";

            switch (info[i].opinioes[j].rating){
                case 4:
                    rating.src = "quatro.png";
                    break;
                case 3:
                    rating.src = "tres.png";
                    break;
                case 2:
                    rating.src = "dois.png";
                    break;
                case 1:
                    rating.src = "um.png";
                    break;
            }

            opinioes.appendChild(rating);

            let descricao = document.createElement("p");
            let textoDescricao = document.createTextNode(info[i].opinioes[j].descricao);
            descricao.appendChild(textoDescricao);
            opinioes.appendChild(descricao);
        }
        div.appendChild(opinioes);
        
        body.appendChild(div);   
        
        let br = document.createElement("br")
        br.classList.add("br");

        if(aux == 3){
                body.appendChild(br);
        }

        aux= aux+1;
    }
}