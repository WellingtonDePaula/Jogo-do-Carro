var larguraDaTela = innerWidth;
var alturaDaTela = innerHeight;
var imagemDaEstrada;
var imagemDoAtor;
var imagemDoCarro;
//variáveis do carro
var velocidadeXCarro1 = 10;
var xCarro1 = 1600
//variáveis do ator
var velocidadeXYDoAtor = 3;
var yAtor = 660;
var xAtor = larguraDaTela/2;

function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemDoCarro = loadImage("imagens/carro-1.png");
}

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
function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 45, 45);
}
function mostraCarro1() {
    image(imagemDoCarro, xCarro1, 74.5, 100, 70);
}
function movimentaCarro1() {
    xCarro1 -= velocidadeXCarro1;
    if (xCarro1 < -500) {
        xCarro1 = 1500;
    }
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
console.log(alturaDaTela)