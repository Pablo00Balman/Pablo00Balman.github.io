function primo()
{
    let A = document.getElementById("N1").value;
    let R = document.getElementById("R");

    let aux=0;

    for(let i=1; i<=A; i=i+1)
    {
        if(A%i == 0)
        {
            aux = aux+1;
        }
    }

    if(aux == 2)
    {
        R = "Seu número é primo!";
    }
    else{
        R = "Seu número não é primo!";
    }

    document.getElementById("R").value = R;
}