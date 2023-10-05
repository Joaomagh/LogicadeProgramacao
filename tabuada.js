function mostrarTabuada(){
    alert ("mostrar tabuada.")
}

mostrarTabuada()
var output = document.querySelector("#output");
var mensagem = "";
output.innerHTML = mensagem;

let numero = parseInt (prompt("digite um numero que quer a tabuada."));
let i = 1; //indice

while (i <= 100 ) {
document.write (numero + " x " + i + " = " + (numero * i) + "<br>"); //usado apenas para o exercicio 
i = i + 1;
} 
document.write ("loop fechado.");