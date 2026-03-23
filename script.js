// Banco de perguntas por categoria de energia
const perguntas = {
  solar: [
    {
      texto: "Qual é o principal componente de um painel fotovoltaico?",
      opcoes: ["Silício", "Cobre", "Alumínio", "Ferro"],
      correta: 0
    },
    {
      texto: "O que os painéis fotovoltaicos convertem em eletricidade?",
      opcoes: ["Calor", "Luz solar", "Vento", "Água"],
      correta: 1
    },
    {
      texto: "Qual país é líder mundial em capacidade instalada de energia solar?",
      opcoes: ["EUA", "Alemanha", "China", "Japão"],
      correta: 2
    },
    {
      texto: "O que é o efeito fotovoltaico?",
      opcoes: [
        "Transformação de calor em eletricidade",
        "Geração de corrente elétrica pela luz",
        "Conversão de vento em energia",
        "Produção de hidrogênio"
      ],
      correta: 1
    },
    {
      texto: "Quanto tempo aproximado um painel solar leva para compensar a energia gasta na sua fabricação?",
      opcoes: ["6 meses", "1 ano", "2-3 anos", "5 anos"],
      correta: 2
    }
  ],
  eolica: [
    {
      texto: "Qual é o nome das estruturas que capturam a energia do vento?",
      opcoes: ["Turbinas", "Aerogeradores", "Geradores eólicos", "Todas anteriores"],
      correta: 3
    },
    {
      texto: "A energia eólica é considerada renovável porque:",
      opcoes: [
        "É muito barulhenta",
        "O vento é um recurso natural inesgotável",
        "Custa caro",
        "É poluente"
      ],
      correta: 1
    },
    {
      texto: "Qual país é pioneiro na utilização de energia eólica?",
      opcoes: ["Brasil", "Dinamarca", "China", "EUA"],
      correta: 1
    },
    {
      texto: "As turbinas eólicas começam a gerar energia quando o vento atinge quantos km/h?",
      opcoes: ["5 km/h", "15 km/h", "25 km/h", "40 km/h"],
      correta: 2
    },
    {
      texto: "Oque acontece com a energia gerada pelas turbinas quando o vento está muito forte?",
      opcoes: [
        "Continua aumentando",
        "É descartada",
        "As turbinas são travadas para evitar danos",
        "Gera sobrecarga"
      ],
      correta: 2
    }
  ],
  hidrica: [
    {
      texto: "Qual é a principal fonte de energia elétrica no Brasil?",
      opcoes: ["Solar", "Eólica", "Hidrelétrica", "Termelétrica"],
      correta: 2
    },
    {
      texto: "As hidrelétricas usam a energia de quê para gerar eletricidade?",
      opcoes: ["Vento", "Água em movimento", "Sol", "Biomassa"],
      correta: 1
    },
    {
      texto: "Oque é uma usina hidrelétrica a fio d'água?",
      opcoes: [
        "Usina sem água",
        "Usina que não possui reservatório",
        "Usina subterrânea",
        "Usina movida a diesel"
      ],
      correta: 1
    },
    {
      texto: "Qual é a maior hidrelétrica do mundo?",
      opcoes: ["Itaipu", "Three Gorges", "Belo Monte", "Tucuruí"],
      correta: 1
    },
    {
      texto: "Além de gerar energia, as hidrelétricas também servem para:",
      opcoes: [
        "Controlar enchentes",
        "Navegação",
        "Ambas as alternativas",
        "Nenhuma das alternativas"
      ],
      correta: 2
    }
  ],
  biomassa: [
    {
      texto: "Oque é biomassa?",
      opcoes: [
        "Um tipo de plástico",
        "Matéria orgânica que pode ser convertida em energia",
        "Um animal extinto",
        "Um mineral"
      ],
      correta: 1
    },
    {
      texto: "Qual é um exemplo de fonte de biomassa?",
      opcoes: ["Resíduos agrícolas", "Papel", "Plástico", "Vidro"],
      correta: 0
    },
    {
      texto: "Oque é biogas?",
      opcoes: [
        "Gás natural",
        "Gás produzido pela decomposição de matéria orgânica",
        "Gás industrial",
        "Gás radioativo"
      ],
      correta: 1
    },
    {
      texto: "O Brasil é pioneiro na produção de:",
      opcoes: ["Biogás", "Biocombustíveis", "Carvão vegetal", "Etanol de milho"],
      correta: 1
    },
    {
      texto: "A energia de biomassa é considerada neutra em carbono porque:",
      opcoes: [
        "Não produz poluentes",
        "O CO2 liberado é absorvido pelas plantas",
        "É muito limpa",
        "Não existe biomassa no Brasil"
      ],
      correta: 1
    }
  ],
  piezoeletrica: [
    {
      texto: "Oque é energia piezoelétrica?",
      opcoes: [
        "Energia do sol",
        "Energia gerada pela pressão mecânica",
        "Energia do vento",
        "Energia nuclear"
      ],
      correta: 1
    },
    {
      texto: "Qual material é mais conhecido por propriedades piezoelétricas?",
      opcoes: ["Madeira", "Cristal de quartzo", "Plástico", "Vidro"],
      correta: 1
    },
    {
      texto: "Onde a energia piezoelétrica pode ser aplicada?",
      opcoes: [
        "Apenas em indústrias",
        "Em pisos de estações de metrô, botões, sensores",
        "Em usinas nucleares",
        "Em fazendas solares"
      ],
      correta: 1
    },
    {
      texto: "Qual país já utiliza pisos piezoelétricos em estações de trem?",
      opcoes: ["Brasil", "Japão", "Alemanha", "Todos anteriores"],
      correta: 3
    },
    {
      texto: "A energia piezoelétrica é uma fonte:",
      opcoes: ["Não renovável", "Renovável e limpa", "Poluente", "Ineficiente"],
      correta: 1
    }
  ]
};

// Estado do quiz
let categoriaAtual = 'solar';
let perguntaAtual = 0;
let pontuacao = 0;
let respondida = false;

// Elementos do DOM
const quizProgress = document.getElementById('quiz-progress');
const quizScore = document.getElementById('quiz-score');
const perguntaTexto = document.getElementById('pergunta');
const opcoesContainer = document.getElementById('opcoes');
const feedback = document.getElementById('feedback');
const proxBtn = document.getElementById('prox-btn');
const reiniciarBtn = document.getElementById('reiniciar-btn');
const categorySelect = document.getElementById('category-select');

// Inicializar quiz
function iniciarQuiz(categoria) {
  categoriaAtual = categoria;
  perguntaAtual = 0;
  pontuacao = 0;
  respondida = false;
  
  // Atualizar UI
  if (categorySelect) {
    categorySelect.value = categoria;
  }
  atualizarPontuacao();
  carregarPergunta();
}

// Carregar pergunta atual
function carregarPergunta() {
  const perguntasCategoria = perguntas[categoriaAtual];
  const pergunta = perguntasCategoria[perguntaAtual];
  
  // Atualizar progresso
  quizProgress.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntasCategoria.length}`;
  
  // Atualizar categoria
  const categoriaLabel = document.getElementById('categoria-label');
  if (categoriaLabel) {
    categoriaLabel.textContent = getNomeCategoria(categoriaAtual);
  }
  
  // Mostrar pergunta
  perguntaTexto.textContent = pergunta.texto;
  
  // Limpar opções anteriores
  opcoesContainer.innerHTML = '';
  
  // Criar botões de opção
  pergunta.opcoes.forEach((opcao, indice) => {
    const btn = document.createElement('button');
    btn.textContent = opcao;
    btn.onclick = () => responder(indice);
    opcoesContainer.appendChild(btn);
  });
  
  // Resetar feedback e botão
  feedback.style.display = 'none';
  feedback.className = '';
  proxBtn.style.display = 'none';
  respondida = false;
}

// Responder pergunta
function responder(indice) {
  if (respondida) return;
  respondida = true;
  
  const pergunta = perguntas[categoriaAtual][perguntaAtual];
  const botoes = opcoesContainer.querySelectorAll('button');
  
  // Marcar resposta correta/errada
  if (indice === pergunta.correta) {
    botoes[indice].classList.add('certa');
    pontuacao++;
    feedback.textContent = 'Correto! Muito bem!';
    feedback.className = 'correto';
  } else {
    botoes[indice].classList.add('errada');
    botoes[pergunta.correta].classList.add('certa');
    feedback.textContent = 'Errado! A resposta correta era: ' + pergunta.opcoes[pergunta.correta];
    feedback.className = 'errado';
  }
  
  feedback.style.display = 'block';
  atualizarPontuacao();
  
  // Mostrar botão próxima ou reiniciar
  const perguntasCategoria = perguntas[categoriaAtual];
  if (perguntaAtual < perguntasCategoria.length - 1) {
    proxBtn.textContent = 'Proxima ->';
    proxBtn.onclick = function() {
      perguntaAtual++;
      carregarPergunta();
    };
    proxBtn.style.display = 'inline-block';
  } else {
    // Fim do quiz
    var percentual = Math.round((pontuacao / perguntasCategoria.length) * 100);
    proxBtn.style.display = 'none';
    
    var mensagem = '';
    if (percentual >= 80) {
      mensagem = 'Excelente! Voce domina o assunto!';
    } else if (percentual >= 60) {
      mensagem = 'Bom trabalho! Continue aprendendo!';
    } else {
      mensagem = 'Continue estudando! Voce consegue!';
    }
    
    feedback.textContent += '\n\n' + mensagem + '\n\nVoce acertou ' + pontuacao + ' de ' + perguntasCategoria.length + ' (' + percentual + '%)';
    
    reiniciarBtn.style.display = 'inline-block';
  }
}

// Atualizar pontuação
function atualizarPontuacao() {
  quizScore.textContent = 'Pontuacao: ' + pontuacao;
}

// Reiniciar quiz
function reiniciarQuiz() {
  iniciarQuiz(categoriaAtual);
  reiniciarBtn.style.display = 'none';
}

// Proxima pergunta (funcao chamada pelo botao no HTML)
function proximaPergunta() {
  perguntaAtual++;
  carregarPergunta();
}

// Mudar categoria
function mudarCategoria() {
  if (categorySelect) {
    iniciarQuiz(categorySelect.value);
  }
}

// Obter nome da categoria
function getNomeCategoria(categoria) {
  var nomes = {
    solar: 'Energia Solar',
    eolica: 'Energia Eolica',
    hidrica: 'Energia Hidrica',
    biomassa: 'Biomassa',
    piezoeletrica: 'Energia Piezoeletrica'
  };
  return nomes[categoria] || categoria;
}

// Animações de scroll
function initScrollAnimations() {
  var elementos = document.querySelectorAll('.scroll-animate');
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  elementos.forEach(function(el) { observer.observe(el); });
}

// Smooth scroll para links internos
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  // Iniciar quiz se estiver na página
  if (document.getElementById('quiz-container')) {
    iniciarQuiz('solar');
  }
  
  // Iniciar animações
  initScrollAnimations();
  initSmoothScroll();
});

// Função global para mudar categoria (chamada pelo select)
window.mudarCategoria = mudarCategoria;
window.reiniciarQuiz = reiniciarQuiz;
window.proximaPergunta = proximaPergunta;
