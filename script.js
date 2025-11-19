document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o evento de clique ao botão do quiz
    const quizButton = document.querySelector('button[onclick="verificarRespostas()"]');
    if (quizButton) {
        quizButton.addEventListener('click', verificarRespostas);
    }
    
    const cardsAula = document.querySelectorAll('.card-aula');
    cardsAula.forEach(card => {
        const button = card.querySelector('.btn-card');    
    // Se o botão for marcado como download, não abre modal
    if (button.hasAttribute("data-no-modal")) return;
        button.addEventListener('click', function () {
            const aulaId = card.getAttribute('data-aula');
            abrirModalAula(aulaId);
        });
    });
    
    const modal = document.getElementById('modal-aula');
    const fecharModal = document.querySelector('.fechar-modal');
    if (fecharModal) {
        fecharModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Função para abrir modal com conteúdo da aula
function abrirModalAula(aulaId) {
    const modal = document.getElementById('modal-aula');
    const conteudoAula = document.getElementById('conteudo-aula');
    
    const secaoAula = document.getElementById(aulaId);
    
    if (secaoAula) {
        const conteudoClone = secaoAula.cloneNode(true);
        
        conteudoClone.classList.remove('aula-detalhada');
        
        conteudoAula.innerHTML = '';
        conteudoAula.appendChild(conteudoClone);
        
        modal.style.display = 'block';
    }
}

// Função para verificar as respostas do quiz
function verificarRespostas() {
    const respostasCorretas = {
        pergunta1: "b",
        pergunta2: "b",
        pergunta3: "b",
        pergunta4: "b",
        pergunta5: "b",
        pergunta6: "b"
    };
    
    let pontuacao = 0;
    const totalPerguntas = 6;
    
    for (let i = 1; i <= totalPerguntas; i++) {
        const pergunta = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (pergunta && pergunta.value === respostasCorretas[`pergunta${i}`]) {
            pontuacao++;
        }
    }
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h3>Você acertou ${pontuacao} de ${totalPerguntas} perguntas!</h3>`;
    
    if (pontuacao === totalPerguntas) {
        resultadoDiv.innerHTML += '<p>Parabéns! Você acertou todas!</p>';
    } else if (pontuacao >= 1) {
        resultadoDiv.innerHTML += '<p>Bom trabalho! Continue estudando!</p>';
    } else {
        resultadoDiv.innerHTML += '<p>Não desanime! Revise o material e tente novamente.</p>';
    }
}
