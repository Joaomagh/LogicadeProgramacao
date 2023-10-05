let nota1 = prompt ("Digite a primeira nota: ");
let nota2 = prompt ("Digite a segunda nota: ");
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);

mediaAv1 = ((nota1 + nota2) / 2);

if (mediaAv1 >= 4) {
    alert ("A media da av1 é " + mediaAv1 + "!!!  Parabéns você pode fazer a av3")
} else {
    alert ("A media da av1 é " + mediaAv1 + "!! Você Não pode fazer a av3")
}


