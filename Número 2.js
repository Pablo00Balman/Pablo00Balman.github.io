function comparador()
{
    let A = document.getElementById("N1").value;
    let B = document.getElementById("N2").value;
    let R = document.getElementById("R");

    if(A>B)
    {
       R = "O primeiro valor é MAIOR do que o segundo.";
    } 
    else{
        if(A<B)
        {
            R = "O primeiro valor é MENOR do que o segundo.";
        }
        else{
            R = "O primeiro valor e o segundo são IGUAIS.";
        }
    }
    document.getElementById("R").value = R;
}