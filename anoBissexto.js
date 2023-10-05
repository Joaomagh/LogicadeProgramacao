let ano = 1004;

while (ano <= 2017) {
    if ( !(ano % 100 === 0) || ano % 400 === 0  &&  ano % 4 === 0) {
        document.write( ano + "  é bissexto. <br>");
    } else {
        document.write(ano + " nao é bissexto <br>");
    }
    ano += 4;
    var output = document.querySelector("#output");
}