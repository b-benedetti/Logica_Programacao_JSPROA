var num1 = parseInt(prompt("Digite um valor"));
var num2 = parseInt(prompt("Digite um segundo valor"));
var num3 = parseInt(prompt("Digite um terceiro valor"));
if (num3 > num2 & num2 > num1) {
    alert("A soma dos dois maiores valores é de: " + (num3 + num2));
} else if (num2 > num3 & num3 > num1) {
    alert("A soma dos dois maiores valores é de: " + (num2 + num3));
} else if (num3 > num1 & num1 > num2) {
    alert("A soma dos dois maiores valores é de: " + (num3 + num1));
} else if (num2 > num1 & num1 > num3) {
    alert("A soma dos dois maiores valores é de: " + (num2 + num1));
} else if (num1 > num3 & num3 > num2) {
    alert("A soma dos dois maiores valores é de: " + (num1 + num3));
} else {
    alert("A soma dos dois maiores valores é de: " + (num1 + num2))
}