/* Quiz da página Introdução */
const perguntas = [
  {
    q: "O que é piezoeletricidade?",
    alt: [
      "Energia gerada pelo vento",
      "Capacidade de certos materiais gerarem eletricidade ao sofrerem pressão",
      "Energia obtida pela queima de combustíveis",
      "Energia liberada pelo calor do sol",
    ],
    correta: 1,
  },
  {
    q: "Quem descobriu o efeito piezoelétrico?",
    alt: [
      "Thomas Edison",
      "Albert Einstein",
      "Os irmãos Pierre e Jacques Curie",
      "Nikola Tesla",
    ],
    correta: 2,
  },
  {
    q: "Em que ano a piezoeletricidade foi descoberta?",
    alt: ["1750", "1820", "1880", "1920"],
    correta: 2,
  },
  {
    q: "Como o efeito piezoelétrico funciona basicamente?",
    alt: [
      "O material esquenta e libera energia",
      "Pressão mecânica gera cargas elétricas no material",
      "A luz solar é convertida em eletricidade",
      "O vento gira uma turbina interna",
    ],
    correta: 1,
  },
  {
    q: "Qual destes é um material piezoelétrico?",
    alt: ["Ferro", "Cobre", "Quartzo", "Alumínio"],
    correta: 2,
  },
];

let indice = 0;
let pontuacao = 0;

const elPergunta = document.getElementById("pergunta");
const elAlternativas = document.getElementById("alternativas");
const elProxima = document.getElementById("proxima");
const elResultado = document.getElementById("resultado");
const elReiniciar = document.getElementById("reiniciar");

function mostrarPergunta() {
  const p = perguntas[indice];
  elPergunta.textContent = `${indice + 1}. ${p.q}`;
  elAlternativas.innerHTML = "";
  elProxima.style.display = "none";

  p.alt.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.className = "alternativa";
    btn.textContent = texto;
    btn.onclick = () => responder(btn, i);
    elAlternativas.appendChild(btn);
  });
}

function responder(botao, escolhida) {
  const correta = perguntas[indice].correta;
  const botoes = elAlternativas.querySelectorAll("button");
  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === correta) b.classList.add("correta");
  });
  if (escolhida === correta) pontuacao++;
  else botao.classList.add("errada");
  elProxima.style.display = "inline-block";
  elProxima.textContent =
    indice === perguntas.length - 1 ? "Ver resultado" : "Próxima";
}

elProxima.onclick = () => {
  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    elPergunta.textContent = "";
    elAlternativas.innerHTML = "";
    elProxima.style.display = "none";
    elResultado.textContent = `🎉 Você acertou ${pontuacao} de ${perguntas.length}!`;
    elReiniciar.style.display = "inline-block";
  }
};

elReiniciar.onclick = () => {
  indice = 0;
  pontuacao = 0;
  elResultado.textContent = "";
  elReiniciar.style.display = "none";
  mostrarPergunta();
};

mostrarPergunta();
