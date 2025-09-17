document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o evento de clique ao botão
    document.getElementById('verificar-respostas').addEventListener('click', verificarRespostas);
});

// Função para verificar as respostas do quiz
function verificarRespostas() {
    const respostasCorretas = {
        pergunta1: "b",
        pergunta2: "b",
        pergunta3: "b"
    };
    
    let pontuacao = 0;
    const totalPerguntas = 3;
    
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