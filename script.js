var larguraDaTela = innerWidth;
var alturaDaTela = innerHeight;

function setup() {
    createCanvas(larguraDaTela, alturaDaTela);
    somDaTrilha.loop();
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