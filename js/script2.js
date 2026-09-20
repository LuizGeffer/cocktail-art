/* DRINKS */
const drinksTrack = document.querySelector("#drinksTrack");
const drinkCards = document.querySelectorAll(".drink-card");

const botaoAnterior = document.querySelector("#drinkAnterior");
const botaoProximo = document.querySelector("#drinkProximo");

const numeroAtual = document.querySelector("#drinkNumero");
const progresso = document.querySelector("#drinkProgresso");
const totalDrinks = document.querySelector("#drinkTotal");

let drinkAtual = 0;

const quantidadeDrinks = drinkCards.length;


// ===============================
// ATUALIZAR CARROSSEL
// ===============================

function atualizarCarrossel() {

    const card = drinkCards[0];

    const larguraCard = card.offsetWidth;

    const estilo = getComputedStyle(drinksTrack);

    const gap = parseFloat(estilo.gap) || 0;

    const deslocamento = drinkAtual * (larguraCard + gap);

    drinksTrack.style.transform =
        `translateX(-${deslocamento}px)`;


    // Número atual

    numeroAtual.textContent =
        String(drinkAtual + 1).padStart(2, "0");


    // Total

    totalDrinks.textContent =
        String(quantidadeDrinks).padStart(2, "0");


    // Barra de progresso

    const progressoAtual =
        ((drinkAtual + 1) / quantidadeDrinks) * 100;

    progresso.style.width =
        `${progressoAtual}%`;
}


// ===============================
// PRÓXIMO
// ===============================

function proximoDrink() {

    drinkAtual++;

    /*
    Com 3 cards aparecendo,
    quando chegar ao último,
    volta para o primeiro.
    */

    if (window.innerWidth > 768) {

        if (drinkAtual > quantidadeDrinks - 3) {
            drinkAtual = 0;
        }

    } else {

        if (drinkAtual >= quantidadeDrinks) {
            drinkAtual = 0;
        }

    }

    atualizarCarrossel();
}


// ===============================
// ANTERIOR
// ===============================

function drinkAnterior() {

    if (window.innerWidth > 768) {

        drinkAtual--;

        if (drinkAtual < 0) {
            drinkAtual = quantidadeDrinks - 3;
        }

    } else {

        drinkAtual--;

        if (drinkAtual < 0) {
            drinkAtual = quantidadeDrinks - 1;
        }

    }

    atualizarCarrossel();
}


// ===============================
// BOTÕES
// ===============================

botaoProximo.addEventListener(
    "click",
    proximoDrink
);

botaoAnterior.addEventListener(
    "click",
    drinkAnterior
);


// ===============================
// ROTAÇÃO AUTOMÁTICA
// ===============================

let intervalo = setInterval(
    proximoDrink,
    4000
);


// ===============================
// PAUSAR AO PASSAR O MOUSE
// ===============================

const drinksSlider =
    document.querySelector(".drinks-slider");

drinksSlider.addEventListener(
    "mouseenter",
    () => {
        clearInterval(intervalo);
    }
);

drinksSlider.addEventListener(
    "mouseleave",
    () => {

        intervalo = setInterval(
            proximoDrink,
            4000
        );

    }
);


// ===============================
// REDIMENSIONAMENTO
// ===============================

window.addEventListener(
    "resize",
    atualizarCarrossel
);


// ===============================
// INICIAR
// ===============================

atualizarCarrossel();



const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const servico = document.querySelector("#servico").value;
    const mensagem = document.querySelector("#mensagem").value.trim();

    // COLOQUE AQUI O NÚMERO DA COCKTAIL ART
    const numeroWhatsApp = "554195471553";

    if (!nome || !email || !servico || !mensagem) {
        return;
    }

    const texto = `
Olá! Vim pelo site da Cocktail Art e gostaria de conversar sobre um projeto.

*DADOS DO CLIENTE*

Nome: ${nome}
E-mail: ${email}

*SERVIÇO DE INTERESSE*

${servico}

*PROJETO / MENSAGEM*

${mensagem}

Gostaria de saber mais detalhes e conversar sobre a possibilidade de realizar este projeto.
`;

    const mensagemWhatsApp = encodeURIComponent(texto);

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`;

    window.open(url, "_blank");

});
