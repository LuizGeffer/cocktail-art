/* =========================
   HEADER
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================
   MENU MOBILE
========================= */

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

const mobileLinks = document.querySelectorAll(".mobile-menu a");


menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});



/* =========================
   SLIDER DE DRINKS
========================= */

const slider = document.getElementById("drinksSlider");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

const dotsContainer = document.getElementById("sliderDots");

const cards = document.querySelectorAll(".drink-card");


let currentSlide = 0;








function scrollToSlide(index) {

    const cardWidth = cards[0].offsetWidth;

    const gap = 25;

    slider.scrollTo({

        left: index * (cardWidth + gap),

        behavior: "smooth"

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    dots[index].classList.add("active");

}



/* Próximo */

nextBtn.addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= cards.length) {

        currentSlide = 0;

    }

    scrollToSlide(currentSlide);

});



/* Anterior */

prevBtn.addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = cards.length - 1;

    }

    scrollToSlide(currentSlide);

});



/* =========================
   SLIDER AUTOMÁTICO
========================= */

let autoSlide = setInterval(() => {

    currentSlide++;

    if (currentSlide >= cards.length) {

        currentSlide = 0;

    }

    scrollToSlide(currentSlide);

}, 5000);



/* Pausar quando o mouse estiver em cima */

slider.addEventListener("mouseenter", () => {

    clearInterval(autoSlide);

});


/* Continuar quando sair */

slider.addEventListener("mouseleave", () => {

    autoSlide = setInterval(() => {

        currentSlide++;

        if (currentSlide >= cards.length) {

            currentSlide = 0;

        }

        scrollToSlide(currentSlide);

    }, 5000);

});



/* =========================
   FORMULÁRIO
========================= */

const form = document.getElementById("contactForm");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    const nome = document.getElementById("nome").value;

    const servico = document.getElementById("servico").value;

    const mensagem = document.getElementById("mensagem").value;


    if (!nome || !servico || !mensagem) {

        alert("Por favor, preencha todos os campos.");

        return;

    }


    alert(
        "Obrigado, " +
        nome +
        "! Sua mensagem foi preparada com sucesso."
    );


    form.reset();

});



/* =========================
   ANIMAÇÃO AO SCROLL
========================= */

const sections = document.querySelectorAll(
    ".section"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(section => {

    section.classList.add("reveal");

    observer.observe(section);

});

const portfolioItems = document.querySelectorAll(".portfolio-item");

const modal = document.querySelector("#portfolioModal");

const modalImagem = document.querySelector("#modalImagem");
const modalCategoria = document.querySelector("#modalCategoria");
const modalTitulo = document.querySelector("#modalTitulo");
const modalDescricao = document.querySelector("#modalDescricao");

const modalFechar = document.querySelector("#modalFechar");

const btnAnterior = document.querySelector(".galeria-anterior");
const btnProxima = document.querySelector(".galeria-proxima");

const imagemAtualTexto = document.querySelector("#imagemAtual");
const totalImagensTexto = document.querySelector("#totalImagens");


let imagensAtuais = [];
let imagemAtual = 0;


/* ATUALIZA A IMAGEM */

function mostrarImagem() {

    modalImagem.src = imagensAtuais[imagemAtual];

    imagemAtualTexto.textContent = imagemAtual + 1;

    totalImagensTexto.textContent = imagensAtuais.length;

}


/* ABRIR MODAL */

portfolioItems.forEach(item => {

    item.addEventListener("click", () => {

        imagensAtuais = item.dataset.imagens.split(",");

        imagemAtual = 0;

        mostrarImagem();

        modalCategoria.textContent = item.dataset.categoria;

        modalTitulo.textContent = item.dataset.titulo;

        modalDescricao.textContent = item.dataset.descricao;

        modal.classList.add("ativo");

        document.body.style.overflow = "hidden";

    });

});


/* PRÓXIMA IMAGEM */

btnProxima.addEventListener("click", () => {

    imagemAtual++;

    if (imagemAtual >= imagensAtuais.length) {
        imagemAtual = 0;
    }

    mostrarImagem();

});


/* IMAGEM ANTERIOR */

btnAnterior.addEventListener("click", () => {

    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagensAtuais.length - 1;
    }

    mostrarImagem();

});


/* FECHAR */

modalFechar.addEventListener("click", () => {

    modal.classList.remove("ativo");

    document.body.style.overflow = "auto";

});


/* CLICAR FORA */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("ativo");

        document.body.style.overflow = "auto";

    }

});


/* ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("ativo");

        document.body.style.overflow = "auto";

    }

});


