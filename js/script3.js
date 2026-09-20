const portfolioItens = document.querySelectorAll(".portfolio-item");

const portfolioModal = document.querySelector("#portfolioModal");

const modalImagem = document.querySelector("#modalImagem");

const modalCategoria = document.querySelector("#modalCategoria");

const modalTitulo = document.querySelector("#modalTitulo");

const modalDescricao = document.querySelector("#modalDescricao");

const modalFechar = document.querySelector("#modalFechar");

const modalAnterior = document.querySelector("#modalAnterior");

const modalProximo = document.querySelector("#modalProximo");

const imagemAtual = document.querySelector("#imagemAtual");

const totalImagens = document.querySelector("#totalImagens");


let imagens = [];

let indice = 0;


// ==========================================
// ABRIR MODAL
// ==========================================
portfolioItens.forEach(item => {

    item.addEventListener("click", () => {

        imagens = item.dataset.imagens.split(",");

        indice = 0;

        modalCategoria.textContent =
            item.dataset.categoria;

        modalTitulo.textContent =
            item.dataset.titulo;

        modalDescricao.textContent =
            item.dataset.descricao;

        atualizarImagem();

        portfolioModal.classList.add("ativo");

        document.body.style.overflow = "hidden";

    });

});


// ==========================================
// ATUALIZAR IMAGEM
// ==========================================

function atualizarImagem() {

    modalImagem.src = imagens[indice];

    imagemAtual.textContent =
        String(indice + 1).padStart(2, "0");

    totalImagens.textContent =
        String(imagens.length).padStart(2, "0");

}
// ==========================================
// PRÓXIMA FOTO
// ==========================================
modalProximo.onclick = function (event) {

    event.stopPropagation();

    console.log("BOTÃO PRÓXIMO CLICADO");
    console.log("Imagens:", imagens);
    console.log("Índice antes:", indice);

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    console.log("Índice depois:", indice);

    atualizarImagem();
};

// ==========================================
// FOTO ANTERIOR
// ==========================================

modalAnterior.onclick = function (event) {

    event.stopPropagation();

    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    atualizarImagem();

};
// ==========================================
// FECHAR
// ==========================================

function fecharModal() {

    portfolioModal.classList.remove("ativo");

    document.body.style.overflow = "";

}


modalFechar.addEventListener(
    "click",
    fecharModal
);


// ==========================================
// CLICAR FORA
// ==========================================

portfolioModal.addEventListener("click", event => {

    if (event.target === portfolioModal) {

        fecharModal();

    }

});


// ==========================================
// TECLA ESC
// ==========================================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        fecharModal();

    }

});