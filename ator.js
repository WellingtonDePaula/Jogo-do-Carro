//código do ator
var velocidadeXYDoAtor = 5;
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
        if(podeSeMoverY()) {
        yAtor += velocidadeXYDoAtor;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        if(podeSeMoverX1()) {
        xAtor += velocidadeXYDoAtor;
        }
    }
    if (keyIsDown(LEFT_ARROW)) {
        if(podeSeMoverX2()) {
        xAtor -= velocidadeXYDoAtor;
        }
    }
}
function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20);
        if (colisao){
        mortes++; voltaAtorParaPosicaoInicial(); somColidiu.play();
        }
    }
}
function voltaAtorParaPosicaoInicial(y, x) {
    yAtor = 660;
    xAtor = larguraDaTela/2;
    }
function podeSeMoverY() {
    return yAtor <= 664;
}
function podeSeMoverX1() {
    return xAtor <= larguraDaTela - 50;
}
function podeSeMoverX2() {
    return xAtor >= 0;
}
function incluiPontos() {
    if (yAtor <= -30) {
        xAtor, yAtor = larguraDaTela/2, voltaAtorParaPosicaoInicial(); meusPontos ++; somPonto.play();
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