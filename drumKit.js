"use strict";

const sons = {
  A: "boom.wav",
  S: "clap.wav",
  D: "hihat.wav",
  F: "kick.wav",
  G: "openhat.wav",
  H: "ride.wav",
  J: "share.wav",
  K: "tink.wav",
  L: "tom.wav",
};
const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

exibir(sons);

const tocarSom = (letra) => {
  const audio = new Audio(`./sounds/${sons[letra]}`);
  audio.play()
};
const ativarDiv = (evento) => {
  const letra = evento.target.id;
  tocarSom(letra);
};

document.getElementById("container").addEventListener("click", ativarDiv);
