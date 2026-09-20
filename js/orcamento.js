/* =========================================================
   COCKTAIL ART
   CONFIGURADOR DE ORÇAMENTO
   PASSO 2 — JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTOS DO HTML
========================================================= */

const opcoesServico = document.querySelectorAll(".opcao-servico");

const etapaServico = document.querySelector("#etapaServico");
const etapaDetalhes = document.querySelector("#etapaDetalhes");
const etapaContato = document.querySelector("#etapaContato");
const etapaResultado = document.querySelector("#etapaResultado");

const perguntasDinamicas = document.querySelector("#perguntasDinamicas");
const tituloDetalhes = document.querySelector("#tituloDetalhes");

const voltarServico = document.querySelector("#voltarServico");
const avancarResultado = document.querySelector("#avancarResultado");

const voltarDetalhes = document.querySelector("#voltarDetalhes");
const gerarOrcamento = document.querySelector("#gerarOrcamento");

const editarOrcamento = document.querySelector("#editarOrcamento");

const clienteNome = document.querySelector("#clienteNome");
const clienteWhatsApp = document.querySelector("#clienteWhatsApp");
const clienteEmail = document.querySelector("#clienteEmail");

const statusOrcamento = document.querySelector("#statusOrcamento");


const resultadoServico = document.querySelector("#resultadoServico");
const resultadoDetalhes = document.querySelector("#resultadoDetalhes");
const resultadoValor = document.querySelector("#resultadoValor");

const solicitarOrcamento = document.querySelector("#solicitarOrcamento");


/* =========================================================
   ESTADO DO CONFIGURADOR
========================================================= */

let servicoSelecionado = "";

let respostas = {};

let valorEstimado = 0;


/* =========================================================
   NOMES DOS SERVIÇOS
========================================================= */

const nomesServicos = {

    openbar: "Open Bar",

    bartender: "Bartender para Evento",

    drinks: "Criação de Drinks",

    carta: "Criação de Carta",

    consultoria: "Consultoria",

    treinamento: "Treinamento",

    workshop: "Workshop / Mentoria"

};


/* =========================================================
   SELEÇÃO DO SERVIÇO
========================================================= */

opcoesServico.forEach(opcao => {

    opcao.addEventListener("click", () => {

        /* remove seleção anterior */

        opcoesServico.forEach(item => {
            item.classList.remove("selecionado");
        });


        /* seleciona atual */

        opcao.classList.add("selecionado");


        /* salva serviço */

        servicoSelecionado = opcao.dataset.servico;


        /* limpa respostas anteriores */

        respostas = {};


        /* cria perguntas */

        criarPerguntas();


        /* altera título */

        tituloDetalhes.textContent =
            `Conte um pouco mais sobre ${nomesServicos[servicoSelecionado]}.`;


        /* muda etapa */

        etapaServico.classList.remove("ativa");

        etapaDetalhes.classList.add("ativa");

        window.scrollTo({
            top: etapaDetalhes.offsetTop - 100,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   CRIAR PERGUNTAS
========================================================= */

function criarPerguntas() {

    perguntasDinamicas.innerHTML = "";


    switch (servicoSelecionado) {

        case "openbar":

            criarPerguntaExperiencia();
            criarPerguntaInsumos();
            criarPerguntaDuracao();
            criarPerguntaConvidados();
            criarPerguntaEvento();
            criarPerguntaDrinks();
            criarPerguntaEstrutura();

            break;


        case "bartender":

            criarPerguntaQuantidadeBartenders();
            criarPerguntaInsumos();
            criarPerguntaNivelInsumos();
            criarPerguntaDuracao();
            criarPerguntaPessoas();
            criarPerguntaEstruturaBartender();
            criarPerguntaEvento();

            break;


        case "drinks":

            criarPerguntaObjetivoDrinks();
            criarPerguntaQuantidadeDrinks();
            criarPerguntaTipoDrinks();
            criarPerguntaInsumos();
            criarPerguntaFichaTecnica();
            criarPerguntaTreinamento();
            criarPerguntaPadronizacao();

            break;


        case "carta":

            criarPerguntaEstabelecimento();
            criarPerguntaQuantidadeCarta();
            criarPerguntaEstiloCarta();
            criarPerguntaItensCarta();
            criarPerguntaTreinamento();
            criarPerguntaNivelEquipe();
            criarPerguntaInsumosTeste();

            break;


        case "consultoria":

            criarPerguntaTipoConsultoria();
            criarPerguntaEstagio();
            criarPerguntaTamanho();
            criarPerguntaMelhorias();
            criarPerguntaFormato();
            criarPerguntaEncontros();

            break;


        case "treinamento":

            criarPerguntaQuemTreinamento();
            criarPerguntaPessoas();
            criarPerguntaNivel();
            criarPerguntaAssuntos();
            criarPerguntaFormato();
            criarPerguntaDuracao();
            criarPerguntaLocal();

            break;


        case "workshop":

            criarPerguntaFormatoWorkshop();
            criarPerguntaTemaWorkshop();
            criarPerguntaParticipantes();
            criarPerguntaFormato();
            criarPerguntaDuracaoWorkshop();
            criarPerguntaMaterial();
            criarPerguntaCertificado();

            break;

    }


    ativarOpcoes();

}


/* =========================================================
   FUNÇÃO BASE PARA CRIAR PERGUNTA
========================================================= */

function criarPergunta(titulo, conteudo) {

    const div = document.createElement("div");

    div.className = "pergunta";

    div.innerHTML = `

        <div class="pergunta-titulo">
            ${titulo}
        </div>

        <div class="pergunta-opcoes">
            ${conteudo}
        </div>

    `;

    perguntasDinamicas.appendChild(div);

}


/* =========================================================
   OPEN BAR
========================================================= */

function criarPerguntaExperiencia() {

    criarPergunta(
        "Qual experiência você procura?",
        `
        ${criarOpcao("experiencia", "essencial", "Open Bar Essencial")}

        ${criarOpcao("experiencia", "premium", "Open Bar Premium")}

        ${criarOpcao("experiencia", "nao_sei", "Ainda não sei")}
        `
    );

}


function criarPerguntaInsumos() {

    criarPergunta(
        "Quem fornecerá os insumos?",
        `
        ${criarOpcao("insumos", "cocktail_art", "Cocktail Art fornece")}

        ${criarOpcao("insumos", "cliente", "Eu forneço")}

        ${criarOpcao("insumos", "parte", "Parte dos insumos será fornecida por mim")}
        `
    );

}


function criarPerguntaDuracao() {

    criarPergunta(
        "Qual será a duração do serviço?",
        `
        ${criarOpcao("duracao", "3", "Até 3 horas")}

        ${criarOpcao("duracao", "4", "4 horas")}

        ${criarOpcao("duracao", "5", "5 horas")}

        ${criarOpcao("duracao", "6", "6 horas")}

        ${criarOpcao("duracao", "7", "7 horas")}

        ${criarOpcao("duracao", "8", "Mais de 7 horas")}
        `
    );

}


function criarPerguntaConvidados() {

    criarPergunta(
        "Quantos convidados participarão?",
        `
        <input
            type="number"
            class="campo-orcamento"
            id="convidados"
            name="convidados"
            min="1"
            placeholder="Ex.: 100"
        >
        `
    );

}


function criarPerguntaEvento() {

    criarPergunta(
        "Qual é o tipo de evento?",
        `
        ${criarOpcao("evento", "casamento", "Casamento")}

        ${criarOpcao("evento", "aniversario", "Aniversário")}

        ${criarOpcao("evento", "formatura", "Formatura")}

        ${criarOpcao("evento", "corporativo", "Corporativo")}

        ${criarOpcao("evento", "particular", "Particular")}

        ${criarOpcao("evento", "confraternizacao", "Confraternização")}

        ${criarOpcao("evento", "outro", "Outro")}
        `
    );

}


function criarPerguntaDrinks() {

    criarPergunta(
        "Que tipo de drinks você deseja?",
        `
        ${criarCheck("drinks_classicos", "Clássicos")}

        ${criarCheck("drinks_autorais", "Autorais")}

        ${criarCheck("drinks_sem_alcool", "Sem álcool")}

        ${criarCheck("drinks_frutas", "Frutas")}

        ${criarCheck("drinks_premium", "Destilados premium")}

        ${criarCheck("drinks_nao_sei", "Não sei")}
        `
    );

}


function criarPerguntaEstrutura() {

    criarPergunta(
        "O que você deseja incluir na estrutura?",
        `
        ${criarCheck("bar", "Bar")}

        ${criarCheck("bartender", "Bartender")}

        ${criarCheck("barback", "Barback")}

        ${criarCheck("utensilios", "Utensílios")}

        ${criarCheck("copos", "Copos")}

        ${criarCheck("gelo", "Gelo")}

        ${criarCheck("frutas", "Frutas e guarnições")}

        ${criarCheck("decoracao", "Decoração")}
        `
    );

}


/* =========================================================
   BARTENDER
========================================================= */

function criarPerguntaQuantidadeBartenders() {

    criarPergunta(
        "Quantos bartenders você precisa?",
        `
        ${criarOpcao("bartenders", "1", "1 bartender")}

        ${criarOpcao("bartenders", "2", "2 bartenders")}

        ${criarOpcao("bartenders", "3", "3 bartenders")}

        ${criarOpcao("bartenders", "recomendacao", "Preciso de recomendação")}
        `
    );

}


function criarPerguntaNivelInsumos() {

    criarPergunta(
        "Qual nível de insumos você deseja?",
        `
        ${criarOpcao("nivel_insumos", "basico", "Básico")}

        ${criarOpcao("nivel_insumos", "premium", "Premium")}
        `
    );

}


function criarPerguntaPessoas() {

    criarPergunta(
        "Quantas pessoas participarão?",
        `
        ${criarOpcao("pessoas", "50", "Até 50")}

        ${criarOpcao("pessoas", "100", "51–100")}

        ${criarOpcao("pessoas", "150", "101–150")}

        ${criarOpcao("pessoas", "250", "151–250")}

        ${criarOpcao("pessoas", "251", "250+")}
        `
    );

}


function criarPerguntaEstruturaBartender() {

    criarPergunta(
        "Qual estrutura você precisa?",
        `
        ${criarOpcao("estrutura", "somente_bartender", "Somente bartender")}

        ${criarOpcao("estrutura", "utensilios", "Bartender + utensílios")}

        ${criarOpcao("estrutura", "bar", "Bartender + bar")}

        ${criarOpcao("estrutura", "completa", "Estrutura completa")}
        `
    );

}


/* =========================================================
   CRIAÇÃO DE DRINKS
========================================================= */

function criarPerguntaObjetivoDrinks() {

    criarPergunta(
        "Qual é o objetivo da criação?",
        `
        ${criarOpcao("objetivo", "um", "1 drink autoral")}

        ${criarOpcao("objetivo", "linha", "Linha de drinks")}

        ${criarOpcao("objetivo", "evento", "Drinks para evento")}

        ${criarOpcao("objetivo", "estabelecimento", "Estabelecimento")}

        ${criarOpcao("objetivo", "marca", "Marca")}
        `
    );

}


function criarPerguntaQuantidadeDrinks() {

    criarPergunta(
        "Quantos drinks serão desenvolvidos?",
        `
        ${criarOpcao("quantidade_drinks", "1", "1")}

        ${criarOpcao("quantidade_drinks", "3", "2–3")}

        ${criarOpcao("quantidade_drinks", "5", "4–5")}

        ${criarOpcao("quantidade_drinks", "10", "6–10")}

        ${criarOpcao("quantidade_drinks", "11", "Mais de 10")}
        `
    );

}


function criarPerguntaTipoDrinks() {

    criarPergunta(
        "Qual estilo você procura?",
        `
        ${criarOpcao("tipo_drinks", "classico", "Clássico reinterpretado")}

        ${criarOpcao("tipo_drinks", "autoral", "Autoral")}

        ${criarOpcao("tipo_drinks", "evento", "Evento")}

        ${criarOpcao("tipo_drinks", "estabelecimento", "Estabelecimento")}

        ${criarOpcao("tipo_drinks", "marca", "Marca")}
        `
    );

}


function criarPerguntaFichaTecnica() {

    criarPergunta(
        "Você precisa de ficha técnica?",
        `
        ${criarOpcao("ficha_tecnica", "sim", "Sim")}

        ${criarOpcao("ficha_tecnica", "nao", "Não")}
        `
    );

}


function criarPerguntaTreinamento() {

    criarPergunta(
        "Você deseja treinamento da equipe?",
        `
        ${criarOpcao("treinamento", "sim", "Sim")}

        ${criarOpcao("treinamento", "nao", "Não")}
        `
    );

}


function criarPerguntaPadronizacao() {

    criarPergunta(
        "Você precisa de padronização?",
        `
        ${criarOpcao("padronizacao", "sim", "Sim")}

        ${criarOpcao("padronizacao", "nao", "Não")}
        `
    );

}


/* =========================================================
   CRIAÇÃO DE CARTA
========================================================= */

function criarPerguntaEstabelecimento() {

    criarPergunta(
        "Qual é o estabelecimento?",
        `
        ${criarOpcao("estabelecimento", "bar", "Bar")}

        ${criarOpcao("estabelecimento", "restaurante", "Restaurante")}

        ${criarOpcao("estabelecimento", "hotel", "Hotel")}

        ${criarOpcao("estabelecimento", "evento", "Evento")}

        ${criarOpcao("estabelecimento", "casa_noturna", "Casa noturna")}

        ${criarOpcao("estabelecimento", "cafe", "Café")}

        ${criarOpcao("estabelecimento", "outro", "Outro")}
        `
    );

}


function criarPerguntaQuantidadeCarta() {

    criarPergunta(
        "Quantos drinks terá a carta?",
        `
        ${criarOpcao("quantidade_carta", "5", "5")}

        ${criarOpcao("quantidade_carta", "10", "10")}

        ${criarOpcao("quantidade_carta", "15", "15")}

        ${criarOpcao("quantidade_carta", "20", "20")}

        ${criarOpcao("quantidade_carta", "25", "25+")}

        ${criarOpcao("quantidade_carta", "nao_sei", "Ainda não sei")}
        `
    );

}


function criarPerguntaEstiloCarta() {

    criarPergunta(
        "Qual será o estilo da carta?",
        `
        ${criarOpcao("estilo_carta", "classica", "Clássica")}

        ${criarOpcao("estilo_carta", "autoral", "Autoral")}

        ${criarOpcao("estilo_carta", "contemporanea", "Contemporânea")}

        ${criarOpcao("estilo_carta", "tropical", "Tropical")}

        ${criarOpcao("estilo_carta", "premium", "Premium")}

        ${criarOpcao("estilo_carta", "sem_alcool", "Sem álcool")}

        ${criarOpcao("estilo_carta", "mista", "Mista")}
        `
    );

}


function criarPerguntaItensCarta() {

    criarPergunta(
        "O que deseja incluir?",
        `
        ${criarCheck("criacao_drinks", "Criação dos drinks")}

        ${criarCheck("ficha_tecnica", "Ficha técnica")}

        ${criarCheck("preparo", "Preparo")}

        ${criarCheck("padronizacao", "Padronização")}

        ${criarCheck("apresentacao", "Apresentação")}

        ${criarCheck("cmv", "CMV")}

        ${criarCheck("precificacao", "Precificação")}

        ${criarCheck("organizacao_carta", "Organização da carta")}

        ${criarCheck("descricao", "Descrição")}
        `
    );

}


function criarPerguntaNivelEquipe() {

    criarPergunta(
        "Qual é o nível da equipe?",
        `
        ${criarOpcao("nivel_equipe", "iniciante", "Iniciante")}

        ${criarOpcao("nivel_equipe", "intermediaria", "Intermediária")}

        ${criarOpcao("nivel_equipe", "experiente", "Experiente")}

        ${criarOpcao("nivel_equipe", "contratada", "Ainda será contratada")}
        `
    );

}


function criarPerguntaInsumosTeste() {

    criarPergunta(
        "Quem fornecerá os insumos para os testes?",
        `
        ${criarOpcao("insumos_teste", "cocktail_art", "Cocktail Art")}

        ${criarOpcao("insumos_teste", "cliente", "Cliente")}

        ${criarOpcao("insumos_teste", "parte", "Parte dos insumos")}
        `
    );

}


/* =========================================================
   CONSULTORIA
========================================================= */

function criarPerguntaTipoConsultoria() {

    criarPergunta(
        "Qual é o objetivo da consultoria?",
        `
        ${criarOpcao("consultoria", "abertura", "Abertura")}

        ${criarOpcao("consultoria", "reestruturacao", "Reestruturação")}

        ${criarOpcao("consultoria", "operacao", "Criação de operação")}

        ${criarOpcao("consultoria", "custos", "Redução de custos")}

        ${criarOpcao("consultoria", "cmv", "CMV")}

        ${criarOpcao("consultoria", "padronizacao", "Padronização")}

        ${criarOpcao("consultoria", "carta", "Carta")}

        ${criarOpcao("consultoria", "treinamento", "Treinamento da equipe")}

        ${criarOpcao("consultoria", "outro", "Outro")}
        `
    );

}


function criarPerguntaEstagio() {

    criarPergunta(
        "Em qual estágio está o negócio?",
        `
        ${criarOpcao("estagio", "abrir", "Ainda vai abrir")}

        ${criarOpcao("estagio", "comecando", "Começando")}

        ${criarOpcao("estagio", "opera", "Já opera")}

        ${criarOpcao("estagio", "reformular", "Quero reformular")}
        `
    );

}


function criarPerguntaTamanho() {

    criarPergunta(
        "Qual é o tamanho da operação?",
        `
        ${criarOpcao("tamanho", "pequena", "Pequena")}

        ${criarOpcao("tamanho", "media", "Média")}

        ${criarOpcao("tamanho", "grande", "Grande")}

        ${criarOpcao("tamanho", "nao_sei", "Não sei")}
        `
    );

}


function criarPerguntaMelhorias() {

    criarPergunta(
        "O que precisa ser melhorado?",
        `
        ${criarCheck("cardapio", "Cardápio")}

        ${criarCheck("drinks", "Drinks")}

        ${criarCheck("cmv", "CMV")}

        ${criarCheck("estoque", "Estoque")}

        ${criarCheck("mise_en_place", "Mise en place")}

        ${criarCheck("fichas", "Fichas técnicas")}

        ${criarCheck("padronizacao", "Padronização")}

        ${criarCheck("equipe", "Equipe")}

        ${criarCheck("atendimento", "Atendimento")}

        ${criarCheck("operacao", "Operação")}

        ${criarCheck("fornecedores", "Fornecedores")}
        `
    );

}


function criarPerguntaFormato() {

    criarPergunta(
        "Qual formato você prefere?",
        `
        ${criarOpcao("formato", "online", "Online")}

        ${criarOpcao("formato", "presencial", "Presencial")}

        ${criarOpcao("formato", "hibrido", "Híbrido")}
        `
    );

}


function criarPerguntaEncontros() {

    criarPergunta(
        "Quantos encontros você imagina?",
        `
        ${criarOpcao("encontros", "1", "1 encontro")}

        ${criarOpcao("encontros", "3", "2–3 encontros")}

        ${criarOpcao("encontros", "5", "4–5 encontros")}

        ${criarOpcao("encontros", "continuo", "Contínuo")}
        `
    );

}


/* =========================================================
   TREINAMENTO
========================================================= */

function criarPerguntaQuemTreinamento() {

    criarPergunta(
        "Quem participará do treinamento?",
        `
        ${criarOpcao("quem_treinamento", "bartenders", "Bartenders")}

        ${criarOpcao("quem_treinamento", "auxiliares", "Auxiliares")}

        ${criarOpcao("quem_treinamento", "garcons", "Garçons")}

        ${criarOpcao("quem_treinamento", "equipe", "Equipe completa")}

        ${criarOpcao("quem_treinamento", "gestores", "Proprietários / gestores")}
        `
    );

}


function criarPerguntaNivel() {

    criarPergunta(
        "Qual é o nível da equipe?",
        `
        ${criarOpcao("nivel", "iniciante", "Iniciante")}

        ${criarOpcao("nivel", "intermediario", "Intermediário")}

        ${criarOpcao("nivel", "avancado", "Avançado")}

        ${criarOpcao("nivel", "misto", "Misto")}
        `
    );

}


function criarPerguntaAssuntos() {

    criarPergunta(
        "Quais assuntos deseja abordar?",
        `
        ${criarCheck("fundamentos", "Fundamentos")}

        ${criarCheck("tecnicas", "Técnicas")}

        ${criarCheck("classicos", "Clássicos")}

        ${criarCheck("autorais", "Autorais")}

        ${criarCheck("atendimento", "Atendimento")}

        ${criarCheck("mise_en_place", "Mise en place")}

        ${criarCheck("padronizacao", "Padronização")}

        ${criarCheck("fichas", "Fichas técnicas")}

        ${criarCheck("cmv", "CMV")}

        ${criarCheck("organizacao", "Organização")}

        ${criarCheck("agilidade", "Agilidade")}
        `
    );

}


function criarPerguntaLocal() {

    criarPergunta(
        "Onde será realizado o treinamento?",
        `
        <input
            type="text"
            class="campo-orcamento"
            id="local"
            name="local"
            placeholder="Cidade / Estado"
        >
        `
    );

}


/* =========================================================
   WORKSHOP / MENTORIA
========================================================= */

function criarPerguntaFormatoWorkshop() {

    criarPergunta(
        "Qual formato você procura?",
        `
        ${criarOpcao("workshop", "workshop", "Workshop")}

        ${criarOpcao("workshop", "individual", "Mentoria individual")}

        ${criarOpcao("workshop", "equipe", "Mentoria para equipe")}

        ${criarOpcao("workshop", "experiencia", "Experiência de coquetelaria")}
        `
    );

}


function criarPerguntaTemaWorkshop() {

    criarPergunta(
        "Qual tema deseja trabalhar?",
        `
        ${criarOpcao("tema", "introducao", "Introdução")}

        ${criarOpcao("tema", "classicos", "Clássicos")}

        ${criarOpcao("tema", "autorais", "Autorais")}

        ${criarOpcao("tema", "tecnicas", "Técnicas")}

        ${criarOpcao("tema", "profissional", "Desenvolvimento profissional")}

        ${criarOpcao("tema", "gestao", "Gestão")}

        ${criarOpcao("tema", "carta", "Carta")}

        ${criarOpcao("tema", "cmv", "CMV")}

        ${criarOpcao("tema", "outro", "Outro")}
        `
    );

}


function criarPerguntaParticipantes() {

    criarPergunta(
        "Quantas pessoas participarão?",
        `
        ${criarOpcao("participantes", "1", "1 pessoa")}

        ${criarOpcao("participantes", "5", "2–5 pessoas")}

        ${criarOpcao("participantes", "10", "6–10 pessoas")}

        ${criarOpcao("participantes", "20", "11–20 pessoas")}

        ${criarOpcao("participantes", "21", "20+ pessoas")}
        `
    );

}


function criarPerguntaDuracaoWorkshop() {

    criarPergunta(
        "Qual será a duração?",
        `
        ${criarOpcao("duracao_workshop", "1", "1 hora")}

        ${criarOpcao("duracao_workshop", "2", "2 horas")}

        ${criarOpcao("duracao_workshop", "3", "3 horas")}

        ${criarOpcao("duracao_workshop", "4", "4 horas")}

        ${criarOpcao("duracao_workshop", "personalizado", "Personalizado")}
        `
    );

}


function criarPerguntaMaterial() {

    criarPergunta(
        "Você deseja material de apoio?",
        `
        ${criarOpcao("material", "sim", "Sim")}

        ${criarOpcao("material", "nao", "Não")}
        `
    );

}


function criarPerguntaCertificado() {

    criarPergunta(
        "Você deseja certificado?",
        `
        ${criarOpcao("certificado", "sim", "Sim")}

        ${criarOpcao("certificado", "nao", "Não")}
        `
    );

}


/* =========================================================
   OPÇÕES RADIO
========================================================= */

function criarOpcao(nome, valor, texto) {

    return `

        <label class="opcao">

            <input
                type="radio"
                name="${nome}"
                value="${valor}"
            >

            <strong>
                ${texto}
            </strong>

        </label>

    `;

}


/* =========================================================
   OPÇÕES CHECKBOX
========================================================= */

function criarCheck(valor, texto) {

    return `

        <label class="opcao-check">

            <input
                type="checkbox"
                name="extras"
                value="${valor}"
            >

            <span>
                ${texto}
            </span>

        </label>

    `;

}


/* =========================================================
   ATIVAR EFEITO VISUAL DAS OPÇÕES
========================================================= */

function ativarOpcoes() {

    const opcoes = perguntasDinamicas.querySelectorAll(
        ".opcao, .opcao-check"
    );


    opcoes.forEach(opcao => {

        const input = opcao.querySelector("input");


        input.addEventListener("change", () => {

            if (input.type === "radio") {

                const grupo = perguntasDinamicas.querySelectorAll(
                    `input[name="${input.name}"]`
                );

                grupo.forEach(item => {

                    item.closest(".opcao")
                        ?.classList.remove("selecionado");

                });

            }


            if (input.checked) {

                opcao.classList.add("selecionado");

            } else {

                opcao.classList.remove("selecionado");

            }

        });

    });

}


/* =========================================================
   COLETAR RESPOSTAS
========================================================= */

function coletarRespostas() {

    respostas = {};


    const inputs = perguntasDinamicas.querySelectorAll(
        "input"
    );


    inputs.forEach(input => {

        if (input.type === "radio") {

            if (input.checked) {

                respostas[input.name] = input.value;

            }

        }


        else if (input.type === "checkbox") {

            if (!respostas.extras) {

                respostas.extras = [];

            }


            if (input.checked) {

                respostas.extras.push(input.value);

            }

        }


        else {

            if (input.value.trim() !== "") {

                respostas[input.name] =
                    input.value.trim();

            }

        }

    });


    return respostas;

}


/* =========================================================
   VALIDAR QUESTIONÁRIO
========================================================= */

function validarQuestionario() {

    const perguntas =
        perguntasDinamicas.querySelectorAll(".pergunta");


    for (const pergunta of perguntas) {

        const radios =
            pergunta.querySelectorAll(
                'input[type="radio"]'
            );


        const checkboxes =
            pergunta.querySelectorAll(
                'input[type="checkbox"]'
            );


        const inputs =
            pergunta.querySelectorAll(
                'input:not([type="radio"]):not([type="checkbox"])'
            );


        /* RADIO */

        if (radios.length > 0) {

            const selecionado =
                pergunta.querySelector(
                    'input[type="radio"]:checked'
                );


            if (!selecionado) {

                alert(
                    "Por favor, responda todas as perguntas antes de continuar."
                );

                pergunta.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                return false;

            }

        }


        /* CHECKBOX */

        if (checkboxes.length > 0) {

            const marcado =
                pergunta.querySelector(
                    'input[type="checkbox"]:checked'
                );


            if (!marcado) {

                alert(
                    "Selecione pelo menos uma opção em cada pergunta."
                );

                pergunta.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                return false;

            }

        }


        /* INPUT */

        if (inputs.length > 0) {

            for (const input of inputs) {

                if (!input.value.trim()) {

                    alert(
                        "Preencha todos os campos antes de continuar."
                    );

                    input.focus();

                    return false;

                }

            }

        }

    }


    return true;

}


/* =========================================================
   QUESTIONÁRIO → CONTATO
========================================================= */
avancarResultado.addEventListener("click", () => {

    coletarRespostas();

    if (!validarQuestionario()) {
        return;
    }

    etapaDetalhes.classList.remove("ativa");
    etapaContato.classList.add("ativa");

});

/* =========================================================
   VOLTAR — DETALHES → SERVIÇO
========================================================= */

voltarServico.addEventListener("click", () => {

    etapaDetalhes.classList.remove("ativa");

    etapaServico.classList.add("ativa");


    window.scrollTo({
        top: etapaServico.offsetTop - 100,
        behavior: "smooth"
    });

});


/* =========================================================
   VOLTAR — CONTATO → DETALHES
========================================================= */

voltarDetalhes.addEventListener("click", () => {

    etapaContato.classList.remove("ativa");

    etapaDetalhes.classList.add("ativa");


    window.scrollTo({
        top: etapaDetalhes.offsetTop - 100,
        behavior: "smooth"
    });

});


/* =========================================================
   GERAR ORÇAMENTO
========================================================= */
gerarOrcamento.addEventListener("click", async () => {

    const nome =
        clienteNome.value.trim();

    const telefone =
        clienteWhatsApp.value.trim();

    const email =
        clienteEmail.value.trim();


    // ========================================
    // VALIDAÇÃO
    // ========================================

    if (!nome) {

        statusOrcamento.textContent =
            "Digite seu nome.";

        clienteNome.focus();

        return;
    }


    if (!telefone) {

        statusOrcamento.textContent =
            "Digite seu WhatsApp.";

        clienteWhatsApp.focus();

        return;
    }


    statusOrcamento.textContent =
        "Calculando sua estimativa...";


    gerarOrcamento.disabled = true;


    try {

        // ========================================
        // ENVIA PARA O NODE.JS
        // ========================================

        const resposta = await fetch(
            "http://localhost:3000/orcamentos",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    nome: nome,

                    telefone: telefone,

                    email: email,

                    servico: servicoSelecionado,

                    respostas: respostas

                })

            }
        );


        const dados =
            await resposta.json();


        // ========================================
        // ERRO DO SERVIDOR
        // ========================================

        if (!resposta.ok || !dados.sucesso) {

            throw new Error(
                dados.mensagem ||
                "Erro ao gerar orçamento."
            );

        }


        // ========================================
        // RECEBE O VALOR CALCULADO PELO NODE
        // ========================================

        valorEstimado =
            Number(dados.valorEstimado);


        // ========================================
        // MOSTRA RESULTADO
        // ========================================

        mostrarResultado(
            valorEstimado
        );


        // ========================================
        // MUDA DE ETAPA
        // ========================================

        etapaContato.classList.remove("ativa");

        etapaResultado.classList.add("ativa");


        // ========================================
        // CRIA LINK DO WHATSAPP
        // ========================================

        criarLinkWhatsApp(
            nome,
            telefone,
            email,
            valorEstimado
        );


    } catch (erro) {

        console.error(
            "Erro ao gerar orçamento:",
            erro
        );


        statusOrcamento.textContent =
            "Não foi possível gerar sua estimativa. Tente novamente.";

    } finally {

        gerarOrcamento.disabled = false;

    }

});


/* =========================================================
   MOSTRAR RESULTADO
========================================================= */
function mostrarResultado(valor) {

    const nomesServicos = {

        openbar: "Open Bar",

        bartender:
            "Bartender para Evento",

        drinks:
            "Criação de Drinks",

        carta:
            "Criação de Carta",

        consultoria:
            "Consultoria",

        treinamento:
            "Treinamento",

        workshop:
            "Workshop / Mentoria"

    };


    resultadoServico.textContent =
        nomesServicos[servicoSelecionado]
        || servicoSelecionado;


    resultadoValor.textContent =
        valor.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );


    resultadoDetalhes.innerHTML = "";


    Object.entries(respostas).forEach(
        ([chave, valorResposta]) => {

            const item =
                document.createElement("span");

            item.className =
                "resultado-item";


            if (Array.isArray(valorResposta)) {

                item.textContent =
                    valorResposta.join(", ");

            } else {

                item.textContent =
                    valorResposta;

            }


            resultadoDetalhes.appendChild(item);

        }
    );

}


/* =========================================================
   ADICIONAR ITEM AO RESULTADO
========================================================= */

function adicionarResultado(
    nome,
    valor
) {

    const item =
        document.createElement("div");


    item.className =
        "resultado-item";


    item.innerHTML = `

        <span>
            ${nome}
        </span>

        <strong>
            ${valor}
        </strong>

    `;


    resultadoDetalhes.appendChild(item);

}


/* =========================================================
   FORMATAR NOMES
========================================================= */

function formatarNomeResposta(nome) {

    const nomes = {

        experiencia: "Experiência",

        insumos: "Insumos",

        duracao: "Duração",

        convidados: "Convidados",

        evento: "Evento",

        extras: "Opções",

        bartenders: "Bartenders",

        nivel_insumos: "Nível dos insumos",

        pessoas: "Pessoas",

        estrutura: "Estrutura",

        objetivo: "Objetivo",

        quantidade_drinks: "Quantidade de drinks",

        tipo_drinks: "Tipo de drinks",

        ficha_tecnica: "Ficha técnica",

        treinamento: "Treinamento",

        padronizacao: "Padronização",

        estabelecimento: "Estabelecimento",

        quantidade_carta: "Quantidade de drinks",

        estilo_carta: "Estilo da carta",

        nivel_equipe: "Nível da equipe",

        insumos_teste: "Insumos para testes",

        consultoria: "Consultoria",

        estagio: "Estágio",

        tamanho: "Tamanho",

        formato: "Formato",

        encontros: "Encontros",

        quem_treinamento: "Participantes",

        nivel: "Nível",

        local: "Local",

        workshop: "Formato",

        tema: "Tema",

        participantes: "Participantes",

        duracao_workshop: "Duração",

        material: "Material",

        certificado: "Certificado"

    };


    return nomes[nome] || nome;

}


/* =========================================================
   FORMATAR MOEDA
========================================================= */

function formatarMoeda(valor) {

    return new Intl.NumberFormat(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(valor);

}


/* =========================================================
   EDITAR ORÇAMENTO
========================================================= */

editarOrcamento.addEventListener(
    "click",
    () => {

        etapaResultado.classList.remove("ativa");

        etapaContato.classList.add("ativa");


        window.scrollTo({
            top: etapaContato.offsetTop - 100,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   WHATSAPP
========================================================= */


/* =========================================================
   PREPARAR WHATSAPP
========================================================= */

function prepararWhatsApp() {

    /*
        IMPORTANTE:

        Trocaremos este número pelo
        WhatsApp real da Cocktail Art
        no próximo passo.
    */

    const numeroWhatsApp =
        "";


    const mensagem =
        criarLinkWhatsApp(
            clienteNome.value.trim(),
            clienteTelefone.value.trim(),
            clienteEmail.value.trim(),
            valorEstimado
        );


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;


    solicitarOrcamento.href = url;

}


/* =========================================================
   ATUALIZAR WHATSAPP QUANDO RESULTADO APARECER
========================================================= */

const observerResultado =
    new MutationObserver(() => {

        if (
            etapaResultado.classList.contains("ativa")
        ) {

            prepararWhatsApp();

        }

    });


observerResultado.observe(
    etapaResultado,
    {
        attributes: true,
        attributeFilter: ["class"]
    }
);
function criarLinkWhatsApp(nome, telefone, email, valor) {

    const numeroWhatsApp = "554195471553"; // TROQUE PELO NÚMERO REAL

    const nomesServicos = {
        openbar: "Open Bar",
        bartender: "Bartender para Evento",
        drinks: "Criação de Drinks",
        carta: "Criação de Carta",
        consultoria: "Consultoria",
        treinamento: "Treinamento",
        workshop: "Workshop / Mentoria"
    };

    const nomesRespostas = {
        experiencia: "Experiência",
        insumos: "Insumos",
        duracao: "Duração",
        convidados: "Convidados",
        evento: "Evento",
        drinks: "Drinks",
        extras: "Extras",
        bartenders: "Bartenders",
        pessoas: "Pessoas",
        estrutura: "Estrutura",
        objetivo: "Objetivo",
        "quantidade-drinks": "Quantidade de drinks",
        estilo: "Estilo",
        ficha: "Ficha técnica",
        treinamento: "Treinamento",
        estabelecimento: "Estabelecimento",
        "quantidade-carta": "Quantidade de drinks",
        "estilo-carta": "Estilo da carta",
        consultoria: "Tipo de consultoria",
        formato: "Formato",
        encontros: "Encontros",
        nivel: "Nível",
        participantes: "Participantes",
        workshop: "Formato",
        material: "Material",
        certificado: "Certificado"
    };

    let mensagem = `Olá! Gostaria de conversar sobre meu orçamento da Cocktail Art.

*DADOS DO CLIENTE*
Nome: ${nome}
WhatsApp: ${telefone}`;

    if (email) {
        mensagem += `\nE-mail: ${email}`;
    }

    mensagem += `

*SERVIÇO*
${nomesServicos[servicoSelecionado] || servicoSelecionado}

*DETALHES DO PROJETO*`;

    Object.entries(respostas).forEach(([chave, valorResposta]) => {

        const nomeResposta =
            nomesRespostas[chave] || chave;

        let valorFormatado;

        if (Array.isArray(valorResposta)) {
            valorFormatado =
                valorResposta.join(", ");
        } else {
            valorFormatado =
                valorResposta;
        }

        mensagem +=
            `\n${nomeResposta}: ${valorFormatado}`;
    });

    mensagem += `

*ESTIMATIVA*
${valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})}

Gostaria de conversar sobre os detalhes e confirmar o orçamento.`;

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    solicitarOrcamento.href = url;
}