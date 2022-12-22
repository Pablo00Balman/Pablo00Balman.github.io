let questions = [["1. Na ecologia, os níveis de organização existentes são:", "Quatro, sendo eles: organismo, populações, ecossistemas e biosfera.", "Cinco, sendo eles: organismo, populações, comunidades, ecossistemas e biosfera.", "Três, sendo eles: organismo, ecossistemas e biosfera.", "Cinco, sendo eles: indivíduo, organismo, comunidades, ecossistemas e biosfera", 2],
["2. Em ecologia, um habitat é definido como:", "O conjunto de seres vivos que cercam determinada espécie.", "O modo de vida de determinado organismo.", "O ambiente em que uma determinada espécie vive.", "As relações ecológicas exercidas por uma espécie em seu meio.", 3],
["3. A ecologia tem duas subdivisões, sendo elas:", "Autoecologia, que estuda apenas uma espécie ou um indivíduo. Sinecologia, que estuda grupos de organismos.", "Autoecologia, que estuda grupos de organismos. Sinecologia, que estuda apenas uma espécie ou um indivíduo.", "Autosuficiência, que estuda apenas uma espécie ou um indivíduo. Citologia, estuda grupos de organismos.", "A ecologia não tem subdivisões. Ela é única.", 1],
["(ENEM 2013) As algas marinhas podem ser utilizadas para reduzir a contaminação por metais pesados em ambientes aquáticos. Elas podem funcionar como uma “esponja biológica”, absorvendo esses poluentes. Dentro das células dessas algas, esses metais são imobilizados no vacúolo por mecanismos bioquímicos. \n\n Nesse processo, as algas atuam como agentes que promovem a:", "biodigestão.", "eutrofização.", " desnitrificação.", "biorremediação.", 4],
["(ENEM 2015) Na natureza a matéria é constantemente transformada por meio dos ciclos biogeoquímicos. Além do ciclo da água, existem os ciclos do carbono, do enxofre, do fósforo, do nitrogênio e do oxigênio. \n\n O elemento que está presente em todos os ciclos nomeados é o: ", "fósforo.", "enxofre ", " carbono.", "oxigênio.", 4]

]


var Q = 0;

var acertos = 0;

exibe(Q);

function exibe (N) {

    if(Q == questions.length)
    {
        document.querySelector("#content").innerHTML = 

        `<h1>Você acertou ${acertos} de ${questions.length} questões</h1>
        <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/12/preservacao-ambiental.jpg" alt="">`
    }  

    if(N == 3)
    {
        document.getElementById("pergunta").style.height = "230px";
    }

    document.getElementById("r1").style = "";
    document.getElementById("r2").style = "";
    document.getElementById("r3").style = "";
    document.getElementById("r4").style = "";
    document.getElementById("p").innerHTML = "";


    document.getElementById("pergunta").innerText = questions[N][0]
    document.getElementById("r1").innerText = questions[N][1]
    document.getElementById("r2").innerText = questions[N][2]
    document.getElementById("r3").innerText = questions[N][3]
    document.getElementById("r4").innerText = questions[N][4]
}



function confere (N) {
    if(N == questions[Q][5])
    {
        document.getElementById("r"+ N).style.backgroundColor = "green";
        document.getElementById("r"+ N).style.color = "white";

        acertos++;
    }
    else{
        document.getElementById("r"+ questions[Q][5]).style.backgroundColor = "green";
        document.getElementById("r"+ questions[Q][5]).style.color = "white";

        document.getElementById("r"+ N).style.backgroundColor = "red";
        document.getElementById("r"+ N).style.color = "white";
    }

     Q++

        document.getElementById("p").innerHTML = `
        
            <button onclick="exibe(`+ Q +`)">Próximo</button>
        `
   
}
