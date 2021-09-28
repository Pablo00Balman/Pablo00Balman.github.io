function media()
 {
    let A = document.getElementById("N1").value;
    let B = document.getElementById("N2").value;
    let C = document.getElementById("N3").value;
    let R = document.getElementById("R");

    R = (parseFloat(A) * 2 + parseFloat(B) * 3 + parseFloat(C) * 5)/10;

    document.getElementById("R").value = R.toFixed(2);
    console.log(R);

}

