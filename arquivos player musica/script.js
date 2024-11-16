const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const proximaMusica = document.getElementById("proximo");
const anteriorMusica = document.getElementById("anterior");
const nomeMusica = document.getElementById("Musica");
const proximaImagem = document.getElementById("proximafoto");

const numeroCapitulos = 6;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}
function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
}
function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
}

function trocarNomeMusica() {
  nomeMusica.innerText = "Musica " + capituloAtual;
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }

  audioCapitulo.src = "./musicas/faixas/" + capituloAtual + ".mp3";
  proximaImagem.src = "./images/" + capituloAtual + ".jpg";
  tocarFaixa();
  taTocando = 1;
  trocarNomeMusica();
}
function anteriorFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "./musicas/faixas/" + capituloAtual + ".mp3";
  proximaImagem.src = "./images/" + capituloAtual + ".jpg";

  tocarFaixa();
  taTocando = 1;
  trocarNomeMusica();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
proximaMusica.addEventListener("click", proximaFaixa);
anteriorMusica.addEventListener("click", anteriorFaixa);
