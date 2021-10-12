let lamp = document.getElementById ("lamp");
let aux = false;

function liga(){
    if(aux)
    {
        return;
    }
    lamp.src = "Ligada.jpg";
}

function desliga(){
    if(aux)
    {
        return;
    }
    lamp.src = "Desligada.jpg";
}

function quebra () {
    aux = true;
    lamp.src = "Quebrada.jpg";
    document.getElementById("S").innerHTML = "Ah não, você quebrou. 😑 Recarregue a página para consertar!	"
}

lamp.addEventListener('dblclick', quebra);
lamp.addEventListener("mouseover", liga);
lamp.addEventListener("mouseleave", desliga)



