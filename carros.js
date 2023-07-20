//carro 1
var velocidadeXCarro1 = 10;
var xCarro1 = 1700;
var yCarro1 = 74.5
//carro 2
var velocidadeXCarro2 = 8;
var xCarro2 = 1500;
var yCarro2 = 175;
//carro 3
var velocidadeXCarro3 = 16;
var xCarro3 = 1700;
var yCarro3 = 378;
//mostra os carros
function mostraCarros() {
    image(imagemDoCarro1, xCarro1, yCarro1, 100, 70);
    image(imagemDoCarro2, xCarro2, yCarro2, 100, 70);
    image(imagemDoCarro3, xCarro3, yCarro3, 100, 70);
}
//código carros 
function movimentaCarros() {
    xCarro1 -= velocidadeXCarro1;
    if (xCarro1 < -500) {
        xCarro1 = 1500;
    }
    xCarro2 -= velocidadeXCarro2;
    if (xCarro2 < -400) {
        xCarro2 = 1500;
    }
    xCarro3 -= velocidadeXCarro3;
    if (xCarro3 < -1000) {
        xCarro3 = 1500;
    }
}