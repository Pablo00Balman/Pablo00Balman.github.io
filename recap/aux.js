function salvar()
{
    localStorage.setItem("dias", JSON.stringify(dias))
}

function geraDiasVazios (dias)
{
    for(let i=0; i<80; i++)
    {
        let dia = new Object();
        
        dia.id = dias.length + 1;
        dia.titulo = null;
        dia.conteudo = null;
        if(dias[dias.length-1].dia != 31)
        {
            dia.dia = dias[dias.length-1].dia +1
            dia.mes = dias[dias.length-1].mes;
        }
        else{
            dia.dia = 1;
            dia.mes = dias[dias.length-1].mes +1;
        }
        dia.bom = 1;
            
        dias.push(dia);
    }
    console.log(dias);  
    salvar();
}

function adicionaSegunda (dias)
{
    let feiras = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"]
    let aux = 0;

    for(let i=0; i<dias.length; i++)
    {
        dias[i].feira = feiras[aux];
        if(aux == 6)
        {
            aux == -1;
        }
        aux++;

        salvar();
    }
}