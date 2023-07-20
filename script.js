var larguraDaTela = innerWidth;
var alturaDaTela = innerHeight;

function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
}
function draw() {
    background(imagemDaEstrada);
    mostraCarro1();
    mostraAtor();
    movimentaCarro1();
    movimentaAtor();
}