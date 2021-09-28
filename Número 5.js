function celsius()
 {
    let A = document.getElementById("N1").value;
    let B = document.getElementById("N2").value;
    let R = document.getElementById("R");

    R = parseFloat(A) + (parseFloat(A)*(parseFloat(B)/100));

    document.getElementById("R").value = R;
    console.log(R);

}

