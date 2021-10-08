vetorA=[1,2,3];
vetorB=[2,2,2];
vetorC=[1,2,3,4,5,6];

console.log("QUESTÃO 1\n")
console.log("O código já vem com vetores pré definidos. São eles:")
console.log("vetorA = 1,2,3")
console.log("vetorB = 2,2,2")
console.log("vetorC = 1,2,3,4,5,6")
console.log("----------------------------------------------------------")
console.log("Funções:")
console.log("sum() : Soma todos os elementos do vetor")
console.log("sumOdds() : Soma todos os elementos ímpares do vetor")
console.log("product() : multiplica todos os elementos do vetor")
console.log("----------------------------------------------------------")
console.log("Você também pode criar o seu próprio Array! Basta escrever o nome dele e definir seus elementos com a sintaxe \n'nomeDoVetor = [elemento1,elemento2,....,elementoN]'")

//***********************************************

function sum (vetor)
{
    let A=0;

    for(i=0; i<vetor.length; i++)
    {
        A=A+vetor[i];
    }
    
    return A;
}

//***********************************************

function sumOdds (vetor)
{
    let A=0;

    for(i=0; i<vetor.length; i++)
    {
        if(vetor[i] % 2 != 0)
        {
            A=A+vetor[i];
        }    
    }
    
    return A;
}

//***********************************************

function product (vetor)
{
    let A=1;

    for(i=0; i<vetor.length; i++)
    {
        A = A*vetor[i];
    }

    return A;
}