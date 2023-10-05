let primeiraNota = parseFloat (prompt ("digite sua primeira nota: "));
let segundaNota = parseFloat (prompt ("digite sua segunda nota"));
let media = (primeiraNota + segundaNota) /2;

if (media >= 5) {
    alert("Parabéns você foi APROVADO.");
} else {
    alert("Você foi REPROVADO.");
}