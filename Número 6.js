function celsius()
{
    let A = document.getElementById("N1").value;
    let R = document.getElementById("R");

    R = ((A - 32)/9)*5

    document.getElementById("R").value = R.toFixed(1);
}