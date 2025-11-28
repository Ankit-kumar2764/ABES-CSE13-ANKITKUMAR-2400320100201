function add() {
    let value1 = Number(document.getElementById("n1").value);
    let value2 = Number(document.getElementById("n2").value);
    let sum = value1 + value2;
    document.getElementById("result").innerHTML = "Sum: " +sum;
}
function makeRed() {
    document.getElementById("result").style.color = "red";
}
function sayhallo() {
    alert("Hallo Ankit Kumar!");
}
function textlength() {
    let text = document.getElementById("result").innerHTML;
    alert("Text Length: " + text.length);
}
function Reversetext() {
    let text = document.getElementById("result").innerHTML;
    let reversedText = text.split("").reverse().join("");
    document.getElementById("result").innerHTML = reversedText;
}