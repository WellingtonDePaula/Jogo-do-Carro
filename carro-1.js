//variáveis do carro
var velocidadeXCarro1 = 10;
var xCarro1 = 1600;
var yCarro1 = 74.5
//códigos do carro
function mostraCarro1() {
    image(imagemDoCarro, xCarro1, yCarro1, 100, 70);
}
function movimentaCarro1() {
    xCarro1 -= velocidadeXCarro1;
    if (xCarro1 < -500) {
        xCarro1 = 1500;
    }
}