var larguraDaTela = innerWidth;
var alturaDaTela = innerHeight;

function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
}
function draw() {
    background(imagemDaEstrada);
    mostraCarros();
    mostraAtor();
    movimentaCarros();
    voltaPosiçãoInicial();
    movimentaAtor();
    verificaColisao();
    incluiPontos();
}