//código do carro
var yCarros = [74.5, 175, 270, 378, 470, 570];
var xCarros = [1700, 1700, 1700, 1700, 1700, 1700];
var velocidadeXCarros = [9, 7, 14, 5, 10, 6];
var comprimentoCarro = 100;
var alturaCarro = 70;
//mostra os carros
function mostraCarros() {
    for (let i = 0; i < imagemCarros.length; i ++) {
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }

}
//código carros 
function movimentaCarros() {
    for (let i = 0; i < imagemCarros.length; i ++) {
    xCarros[i] -= velocidadeXCarros[i];
    }
}
function voltaPosiçãoInicial() {
    let posiçãoASerLançado = [-350, -450, -1000, -100, -400, -250];
    for (let i = 0; i < imagemCarros.length; i ++) {
        if (xCarros[i] < posiçãoASerLançado[i]) {
            xCarros[i] = 1500;
        }
    }
}