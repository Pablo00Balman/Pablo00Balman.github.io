function criaDia()
{

}

let date = new Date()
let data = date.getDate() +"/"+ date.getMonth();

if(localStorage.getItem("dias") == null)
{
    salvar();
}
else{
    dias = JSON.parse(localStorage.getItem("dias"));
}

function abrir(id)
{
    id=id-1;

    let page = document.getElementById("calendario");
    page.style.textAlign = "center";

    page.innerHTML = `
        <h2>${dias[id].dia}/${dias[id].mes}</h2>
        <strong><h1> ${dias[id].titulo} </h1></strong>
        <br>
        <textarea id="texto" spellcheck="false" cols="30" rows="5" wrap="hard">${dias[id].conteudo}</textarea>
        <br><br>
        <button class="save" onclick="uptodate(${id})">Salvar!</button>
    
    `;

}

function render ()
{
    console.log(dias);
    let cal = document.getElementById("calendario")
    let aux = 1;
    let posicao = 0;
    for(let i = 0; i<(dias.length); i=i+7)
    {
        let nav = document.createElement("nav");
        let semanaN = document.createElement("p");
        semanaN.innerText = (aux) + "ª semana";
        cal.appendChild(semanaN);
        aux++;

        for(let j = 0; j<7; j++) //Alterar esse parâmetro depois...
        {

            if(dias[posicao].titulo == null)
                dias[posicao].titulo = "";
            if(dias[posicao].conteudo == null)
                dias[posicao].conteudo = "";

            let id = dias[posicao].id;

            let div = `
                <button id="${id}" class="buttons" onclick="abrir(${id})">
                    <p>${dias[posicao].dia}/${dias[posicao].mes}</p> 
                    <b><p>${dias[posicao].titulo}</p></b><br>
                    <p class='desc'>${dias[posicao].conteudo}</p>
                </button>

            `;
            posicao++;   
            nav.innerHTML +=div;
            

            if(posicao+1 == dias.length)
            {
                break;  
            }
        }
        
        cal.appendChild(nav);
        cal.innerHTML += "<br>"

    }
}

function uptodate (id)
{
    let texto = document.getElementById("texto").value;
    console.log("Entrou na função. Texto: "+ texto);

    dias[id].conteudo =  texto;

    salvar();
}



render();
