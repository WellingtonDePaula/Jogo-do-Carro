//código do ator
var velocidadeXYDoAtor = 3;
var yAtor = 660;
var xAtor = larguraDaTela/2;

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