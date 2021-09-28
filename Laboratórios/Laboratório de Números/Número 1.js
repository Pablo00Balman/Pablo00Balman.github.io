function soma()
 {
    let A = document.getElementById("N1").value;
    let B = document.getElementById("N2").value;
    let R = document.getElementById("R");

    R = parseFloat(A) + parseFloat(B);

    document.getElementById("R").value = R;
    console.log(R);

}

