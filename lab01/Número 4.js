let A = 0;
let B = 1;
let C = 0;

N=100;

for(let i = 1; i <= N; i++)
{
    C=A+B;
    B=A;
    A=C;
    console.log(A);
}