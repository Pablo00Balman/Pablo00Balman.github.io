function primos (N)
{   
    for (let i=2; i<=N; i++)
        {
        let ehPrimo = true;

        for (let j=2; j < i; j++)
        {
            if(i%j == 0)
            {
                ehPrimo = false;
                break;
            }
        }

        if(ehPrimo)
        {
            console.log(i);
        }
    }
}   