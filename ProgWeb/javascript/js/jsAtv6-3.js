const numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanos = ['M', ' CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
document.getElementById("numeros").innerHTML = numeros;

function converter(){
    var txtnum = document.getElementById("txtnumero").value;
    var num = parseInt(txtnum);
    let index = numeros.indexOf(num);

    if (index == -1){
        alert("O número não é válido");
    } else {
        document.getElementById("lblromano").innerHTML = `Número ${num} em romano: ${romanos[index]}`;
    }
}