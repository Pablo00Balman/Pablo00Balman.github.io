function IMC()
{
    let nome = document.getElementById("A").value;
    let peso = document.getElementById("B").value;
    let altura = document.getElementById("C").value;
    
    let R = peso/ (altura*altura);
    let txt = "";

    if(R> 40)
    {
        txt = nome+", você está com obesidade mórbida :( . - IMC = "+R.toFixed(1);
    }
    else if(R<39.9 && R>=35)
    {
        txt = nome+", você está com Obesidade Grau II. - IMC = "+R.toFixed(1);    
    }
    else if(R<34.9 && R>=30)
    {
        txt = nome+", você está com Obesidade Grau I. - IMC = "+R.toFixed(1);
    }
    else if(R< 29.9 && R>=25)
    {
        txt = nome+", você está com sobrepeso.  - IMC = "+R.toFixed(1);
    }
    else if(R<24.9 && R>=18.5)
    {
        txt = nome+", você está com seu peso normal. - IMC = "+R.toFixed(1);    
    }
    else if(R>18.5)
    {
        txt = nome+", você está abaixo do peso. - IMC = "+R.toFixed(1);
    }
    else{
        txt = "ERRO, favor, recarregue o site tente novamente."; 
    }
       
    document.getElementById("resultado").value = txt;

}