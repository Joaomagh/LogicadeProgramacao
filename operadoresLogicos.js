let nota1 = prompt ("Digite a primeira nota: ");
let nota2 = prompt ("Digite a segunda nota: ");
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);

mediaAv1 = ((nota1 + nota2) / 2);

if (nota1 > 0 && nota2 > 0 && mediaAv1 >= 5) {
    alert ("A media da av1 é " + mediaAv1 + "!!!  Parabéns você PASSOU.")
} else {
    alert ("A media da av1 é " + mediaAv1 + "!! Você REPROVOU.")
}