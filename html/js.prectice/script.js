function add() {
    let value1 = Number(document.getElementById("n1").value);
    let value2 = Number(document.getElementById("n2").value);
    let sum = value1 + value2;
    document.getElementById("result").innerHTML = "Sum: " +sum;
}