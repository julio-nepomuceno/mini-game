const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const btnJogar = document.getElementById("btn-jogar");
const btnJogarNovamente = document.getElementById("btn-jogar-novamente");

const jogadaUsuario = document.getElementById("jogada-usuario");
const jogadaComputador = document.getElementById("jogada-pc");
const lista_jogadas = ["✊", "✋", "✌️"];

const secret = document.getElementById("musica");
const btnMsc = document.getElementById("btn-msc");

let cod_usuario = 0;
let opc_usuario = "";

let hist_v = 0,
  hist_e = 0,
  hist_d = 0;

btnMsc.addEventListener("click", () => {
  secret.play();
});

pedra.addEventListener("click", () => {
  cod_usuario = 1;
  opc_usuario = "✊";
  papel.disabled = true;
  tesoura.disabled = true;
  pedra.style.backgroundColor = "#949494";
});

papel.addEventListener("click", () => {
  cod_usuario = 2;
  opc_usuario = "✋";
  tesoura.disabled = true;
  pedra.disabled = true;
  papel.style.backgroundColor = "#949494";
});

tesoura.addEventListener("click", () => {
  cod_usuario = 3;
  opc_usuario = "✌️";
  papel.disabled = true;
  pedra.disabled = true;
  tesoura.style.backgroundColor = "#949494";
});

btnJogar.addEventListener("click", () => {
  const indice_aleatorio = Math.floor(Math.random() * 3) + 1;
  const opcao_pc = lista_jogadas[indice_aleatorio - 1];
  document.querySelector(".container").style.display = "none";
  document.querySelector(".container-result").style.display = "flex";
  analisarJogada(cod_usuario, indice_aleatorio);
  alterar_elementos(opcao_pc);
});

btnJogarNovamente.addEventListener("click", () => {
  document.querySelector(".container-result").style.display = "none";
  document.querySelector(".container").style.display = "flex";
  resetarBotoes();
});

function alterar_elementos(jgd_pc) {
  jogadaUsuario.textContent = `Você: ${opc_usuario}`;
  jogadaComputador.textContent = `PC: ${jgd_pc}`;

  document.getElementById("hist-v").textContent = `V: ${hist_v}`;
  document.getElementById("hist-d").textContent = `D: ${hist_d}`;
  document.getElementById("hist-e").textContent = `E: ${hist_e}`;
}

function resetarBotoes() {
  papel.disabled = false;
  pedra.disabled = false;
  tesoura.disabled = false;

  pedra.style.backgroundColor = "#fff";
  papel.style.backgroundColor = "#fff";
  tesoura.style.backgroundColor = "#fff";
}

function analisarJogada(jgd_usuario, jgd_computador) {
  if (jgd_usuario === jgd_computador) {
    hist_e++;
    document.getElementById("msg-result").textContent =
      "🟡 Empate! Deu a mesma jogada.";
  } else if (
    (jgd_usuario === 1 && jgd_computador === 3) ||
    (jgd_usuario === 2 && jgd_computador === 1) ||
    (jgd_usuario === 3 && jgd_computador === 2)
  ) {
    hist_v++;
    document.getElementById("msg-result").textContent = "🟢 Você venceu!";
  } else {
    hist_d++;
    document.getElementById("msg-result").textContent = "🔴 Você perdeu!";
  }
}
