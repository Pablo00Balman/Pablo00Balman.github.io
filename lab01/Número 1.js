function fatorial(N)
{
    let result = N;
    for (let i=N-1; i>0;i--)
    {
        result *=i;
    }
    return result;
}

console.log(fatorial(12));