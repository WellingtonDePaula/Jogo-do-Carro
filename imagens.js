//imagens e sons do jogo
var imagemDaEstrada;
var imagemDoAtor;
var imagemDoCarro1;
var imagemDoCarro2;
var imagemDoCarro3;
//sons do jogo
var somDaTrilha;
var somColidiu;
var somPonto;

function preload() {
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemDoCarro1 = loadImage("imagens/carro-1.png");
    imagemDoCarro2 = loadImage("imagens/carro-2.png");
    imagemDoCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3];

    somDaTrilha = loadSound("sons/trilha.mp3");
    somColidiu = loadSound("sons/colidiu.mp3");
    somPonto = loadSound("sons/pontos.wav");
}

