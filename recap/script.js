function salvar()
{
    localStorage.setItem("dias", JSON.stringify(dias))
}


if(localStorage.getItem("dias") == null)
{
    salvar();
}
else{
    dias = JSON.parse(localStorage.getItem("dias"));
}

let date = new Date()
let data = date.getDate() +"/"+ date.getMonth();

function geraDiasVazios (dias)
{
    for(let i=0; i<30; i++)
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