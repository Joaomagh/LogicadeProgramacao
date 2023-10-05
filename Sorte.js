let chuteDoPlayer1 = parseInt (prompt ("digite um numero PLAYER 1"));
let chuteDoPlayer2 = parseInt (prompt ("digite um numero PLAYER 2"));


if (chuteDoPlayer1 == chuteDoPlayer2) {
    sorteador = Math.round (Math.random()); //RETORNA UM NUMERO SORTEADO ENTRE 0 E 0.999
    if (sorteador === 0) {
    alert ("O PLAYER 1 GANHOU.");
    console.log (sorteador);
    } else { 
        alert ("O PLAYER 2 GANHOU.");
        console.log (sorteador); //atua como verificador do sorteio
    }
}