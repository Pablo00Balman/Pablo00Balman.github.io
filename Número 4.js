function hipotenusa()
 {
    let A = document.getElementById("N1").value;
    let B = document.getElementById("N2").value;
    let R = document.getElementById("R");

    R = Math.pow(Math.pow(parseFloat(A),2) + Math.pow(parseFloat(B),2),2);

    document.getElementById("R").value = R.toFixed(5);
    console.log(R);

}

