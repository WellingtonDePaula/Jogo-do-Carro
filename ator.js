//código do ator
var velocidadeXYDoAtor = 3;
var yAtor = 660;
var xAtor = larguraDaTela/2;
var colisao = false;
var meusPontos = 0;
var mortes = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 45, 45);
}
function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= velocidadeXYDoAtor;
      }
    if (keyIsDown(DOWN_ARROW)) {
        yAtor += velocidadeXYDoAtor;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xAtor += velocidadeXYDoAtor;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xAtor -= velocidadeXYDoAtor;
    }
    //Impede que o ator saia para baixo da tela
    if (yAtor >= 672) {
        yAtor -= velocidadeXYDoAtor;
    }
}
function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20);
        if (colisao){
        mortes++; voltaAtorParaPosicaoInicial();
        }
    }
}
function voltaAtorParaPosicaoInicial() {
    yAtor = 660;
    xAtor = larguraDaTela/2;
    }
function incluiPontos() {
    if (yAtor <= -30) {
        xAtor, yAtor = larguraDaTela/2, 660; meusPontos ++;
    }
    stroke(255);
    textAlign(CENTER);
    textSize(30);
    fill(color(255,140,0));
    rect(larguraDaTela/5+92.5, 18, 70, 30);
    rect(989, 18, 70, 30);
    fill(255);
    text(meusPontos, larguraDaTela/5, 20, 255)
    text(mortes, 897, 20, 255)
    console.log(larguraDaTela/5)
}