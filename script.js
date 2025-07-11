let questao1 = [
    "1. Qual a capital da Índia?",  // Pergunta
    "a) Mumbai",                    // Alternativa a
    "b) Calcutá",                   // Alternativa b
    "c) Nova Délhi",                // Alternativa c
    "d) Chennai",                   // Alternativa d
    "e) Bangalore",                 // Alternativa e
    "c) Nova Délhi"                 // Alternativa Correta
];
let questao2 = [
    "2. Qual estado abaixo não é banhado pelo mar?",
    "a) Espírito Santo",
    "b) Pernambuco",
    "c) Goiás",
    "d) Alagoas",
    "e) Bahia",
    "c) Goiás"
];
let questao3 = [
    "3. Qual é o maior rio do Brasil em extensão?",
    "a) Tocantins",
    "b) Paraná",
    "c) São Francisco",
    "d) Madeira",
    "e) Amazonas",
    "e) Amazonas"
];
let questao4 = [
    "4. Em qual continente se localiza a Nova Zelândia?",
    "a) Europa",
    "b) Oceania",
    "c) América",
    "d) África",
    "e) Ásia",
    "b) Oceania"
];
let questao5 = [
    "5. Quais os países que não fazem fronteira com o Brasil?",
    "a) Chile",
    "b) Argentina",
    "c) Peru",
    "d) Colômbia",
    "e) Bolívia",
    "a) Chile"
];

let botao = document.querySelector('#botaoResponder');
let pergunta = document.querySelector('.pergunta');
let alternativaA = document.querySelector('#altern1');
let alternativaB = document.querySelector('#altern2');
let alternativaC = document.querySelector('#altern3');
let alternativaD = document.querySelector('#altern4');
let alternativaE = document.querySelector('#altern5');

preenherPergunta(questao1);

botao.addEventListener("click", respondeu);

function preenherPergunta(questao){
    pergunta.innerHTML = questao[0];
    alternativaA.innerHTML = questao[1];
    alternativaB.innerHTML = questao[2];
    alternativaC.innerHTML = questao[3];
    alternativaD.innerHTML = questao[4];
    alternativaE.innerHTML = questao[5];
};

function respondeu()
{
    console.log("clicou");
    let alternSelecionada = document.querySelector('input[name="opcao"]:checked');

}