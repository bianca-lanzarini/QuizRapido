const questao1 = [
    "1. Qual a capital da Índia?",  // Pergunta
    "a) Mumbai",                    // Alternativa a
    "b) Calcutá",                   // Alternativa b
    "c) Nova Délhi",                // Alternativa c
    "d) Chennai",                   // Alternativa d
    "e) Bangalore",                 // Alternativa e
    "c) Nova Délhi"                 // Alternativa Correta
];
const questao2 = [
    "2. Qual estado abaixo não é banhado pelo mar?",
    "a) Espírito Santo",
    "b) Pernambuco",
    "c) Goiás",
    "d) Alagoas",
    "e) Bahia",
    "c) Goiás"
];
const questao3 = [
    "3. Qual é o maior rio do Brasil em extensão?",
    "a) Tocantins",
    "b) Paraná",
    "c) São Francisco",
    "d) Madeira",
    "e) Amazonas",
    "e) Amazonas"
];
const questao4 = [
    "4. Em qual continente se localiza a Nova Zelândia?",
    "a) Europa",
    "b) Oceania",
    "c) América",
    "d) África",
    "e) Ásia",
    "b) Oceania"
];
const questao5 = [
    "5. Quais os países que não fazem fronteira com o Brasil?",
    "a) Chile",
    "b) Argentina",
    "c) Peru",
    "d) Colômbia",
    "e) Bolívia",
    "a) Chile"
];

let pergunta = document.querySelector('.pergunta');
let alternativaA = document.querySelector('#altern1');
let alternativaB = document.querySelector('#altern2');
let alternativaC = document.querySelector('#altern3');
let alternativaD = document.querySelector('#altern4');
let alternativaE = document.querySelector('#altern5');
let respostasCertas = 0;
let questaoAtual;

questaoAtual = questao1;
preencherPergunta(questao1);

function preencherPergunta(questao){
    pergunta.innerHTML = questao[0];
    alternativaA.innerHTML = questao[1];
    alternativaB.innerHTML = questao[2];
    alternativaC.innerHTML = questao[3];
    alternativaD.innerHTML = questao[4];
    alternativaE.innerHTML = questao[5];
};

function mostrarResultado(){
    let opcaoes = document.querySelector('.opcoes');
    opcaoes.style.display = 'none';
    pergunta.innerHTML = `Número de acertos: ${respostasCertas}`;
}

function escolheProximaQuestao(alternEscolhida, alternativaCerta){
    alternEscolhida.classList.remove('alternativaCorreta');
    alternEscolhida.classList.remove('alternativaErrada');

    if (alternEscolhida !== alternativaCerta) {
        alternativaCerta.classList.remove('alternativaCorreta');
    }
    if (questaoAtual[0].includes('1')) {
        questaoAtual = questao2;
        preencherPergunta(questao2);
    } 
    else if (questaoAtual[0].includes('2')) {
        questaoAtual = questao3;
        preencherPergunta(questao3);
    }
    else if (questaoAtual[0].includes('3')) {
        questaoAtual = questao4;
        preencherPergunta(questao4);
    }
    else if (questaoAtual[0].includes('4')) {
        questaoAtual = questao5;
        preencherPergunta(questao5);
    }
    else if (questaoAtual[0].includes('5')) {
        mostrarResultado();
    }
};

function marcarAltCorreta(indice){
    let alternativaCerta;
    switch (indice) {
        case 1:
            alternativaA.classList.add('alternativaCorreta');
            alternativaCerta = alternativaA;
            break;
        case 2:
            alternativaB.classList.add('alternativaCorreta');
            alternativaCerta = alternativaB;
            break;
        case 3:
            alternativaC.classList.add('alternativaCorreta');
            alternativaCerta = alternativaC;
            break;
        case 4:
            alternativaD.classList.add('alternativaCorreta');
            alternativaCerta = alternativaD;
            break;
        case 5:
            alternativaE.classList.add('alternativaCorreta');
            alternativaCerta = alternativaE;
            break;
        }
        return alternativaCerta;
};

function validaAlternativaEscolhida(alternativa){
    let alternCerta = alternativa;
    let i = 0;
    let alt = "";
    if (alternativa.innerHTML === questaoAtual[6]) {
        respostasCertas += 1;
        alternativa.classList.add('alternativaCorreta');
    }
    else {
        alternativa.classList.add('alternativaErrada');
        while (alt !== questaoAtual[6]) {
            alt = questaoAtual[i];
            i += 1;
        }
        alternCerta = marcarAltCorreta(i-1);
    }
    setTimeout(escolheProximaQuestao, 2000, alternativa, alternCerta);    
}

alternativaA.addEventListener('click', function () {
    validaAlternativaEscolhida(alternativaA);
});

alternativaB.addEventListener('click', function () {
    validaAlternativaEscolhida(alternativaB);
});

alternativaC.addEventListener('click', function () {
    validaAlternativaEscolhida(alternativaC);
});

alternativaD.addEventListener('click', function () {
    validaAlternativaEscolhida(alternativaD);
});

alternativaE.addEventListener('click', function () {
    validaAlternativaEscolhida(alternativaE);
});