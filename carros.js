//código do carro
var yCarros = [74.5, 175, 378];
var xCarros = [1700, 1700, 1700];
var velocidadeXCarros = [10, 8, 16];
//mostra os carros
function mostraCarros() {
    for (let i = 0; i < imagemCarros.length; i += 1) {
        image(imagemCarros[i], xCarros[i], yCarros[i], 100, 70);
    }
}
//código carros 
function movimentaCarros() {
    for (let i = 0; i < imagemCarros.length; i += 1) {
    xCarros[i] -= velocidadeXCarros[i];
    }
}
function voltaPosiçãoInicial() {
    let posiçãoASerLançado = [-350, -450, -1000];
    for (let i = 0; i < imagemCarros.length; i += 1) {
        if (xCarros[i] < posiçãoASerLançado[i]) {
            xCarros[i] = 1500;
        }
    }
}