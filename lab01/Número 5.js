let NP = function (N){
    for(let divi = 2; divi < N; divi++)
    {
        if (N % divi === 0){
            return false;
        }
    }
    return true;
}

function show(L){
    for(let N = 2; N <= L; N++){
        if (NP(N)) console.log(N);
    }
}

show(1000);