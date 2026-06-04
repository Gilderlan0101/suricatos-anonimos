// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // ========== DADOS MOCK (notícias realistas) ==========
    const noticias = {
        ultimas: [
            { id: 1, categoria: "Política", titulo: "Governo anuncia nova faixa de isenção do IR para 2026", resumo: "Medida beneficiará milhões de brasileiros com renda até R$ 3.000 mensais.", data: "Hoje, 10h32", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=IR+2026", link: "#" },
            { id: 2, categoria: "Tecnologia", titulo: "Startup chilena revoluciona armazenamento de energia renovável", resumo: "Solução inovadora promete reduzir custos em 40% para usinas solares.", data: "Ontem, 18h15", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Energia+Chile", link: "#" },
            { id: 3, categoria: "Mundo", titulo: "Acordo comercial entre Mercosul e União Europeia é ratificado", resumo: "Blocos assinam tratado que deve movimentar bilhões em negócios.", data: "Ontem, 09h45", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Mercosul+UE", link: "#" },
            { id: 4, categoria: "Imigração", titulo: "Novo visto para nômades digitais é aprovado no Chile", resumo: "Regulamentação atrai trabalhadores remotos com alta qualificação.", data: "13/02, 14h20", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Visto+Digital", link: "#" }
        ],
        chile: [
            { id: 5, categoria: "Chile", titulo: "Desfile militar em Santiago celebra 200 anos do exército nacional", resumo: "Tradicional evento reúne milhares nas ruas da capital.", data: "Hoje, 11h00", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Chile+Fiestas", link: "#" },
            { id: 6, categoria: "Economia", titulo: "Inflação no Chile registra queda pelo terceiro mês consecutivo", resumo: "BC chileno comemora indicador abaixo das projeções de mercado.", data: "12/02, 08h22", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Inflacion+Chile", link: "#" },
            { id: 7, categoria: "Chile", titulo: "Atacama recebe novo observatório astronômico mais avançado do mundo", resumo: "Tecnologia de ponta reforça posição do país na pesquisa espacial.", data: "11/02, 16h45", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Atacama+Stars", link: "#" }
        ],
        brasil: [
            { id: 8, categoria: "Brasil", titulo: "Comissão aprova reforma tributária com foco em simplificação", resumo: "Novo texto unifica impostos sobre consumo e tramita na câmara.", data: "Hoje, 09h10", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Reforma+Tributária", link: "#" },
            { id: 9, categoria: "Imigração", titulo: "Brasil amplia acolhida a venezuelanos e haitianos", resumo: "Operação abrigo chega a 5 mil novas vagas na região Norte.", data: "Ontem, 21h30", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Imigração+Brasil", link: "#" },
            { id: 10, categoria: "Economia", titulo: "Dólar cai a R$ 5,60 com expectativa de investimentos estrangeiros", resumo: "Bolsas sobem e analistas melhoram previsões para o PIB.", data: "13/02, 12h05", imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Câmbio", link: "#" }
        ]
    };

    // Mais Lidas estática
    const maisLidas = [
        "Crise política no Chile: entenda os impactos na região",
        "Governo brasileiro anuncia pacote de concessões em portos",
        "Inteligência artificial já substitui rotinas no setor bancário",
        "Imigração: novas regras para residência no Cone Sul",
        "A economia circular e o futuro do agronegócio no Brasil"
    ];

    // Função para criar card HTML
    function criarCard(noticia) {
        return `
            <article class="card">
                <img class="card-img" src="${noticia.imagem}" alt="${noticia.titulo}" loading="lazy">
                <div class="card-content">
                    <span class="card-category">${noticia.categoria}</span>
                    <h3 class="card-title">${noticia.titulo}</h3>
                    <p class="card-summary">${noticia.resumo.substring(0, 100)}${noticia.resumo.length > 100 ? '...' : ''}</p>
                    <div class="card-date">📅 ${noticia.data}</div>
                </div>
            </article>
        `;
    }

    function renderizarGrid(containerId, arrayNoticias) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = arrayNoticias.map(noticia => criarCard(noticia)).join('');
        }
    }

    // Renderizar Últimas, Chile e Brasil
    renderizarGrid('ultimasNoticiasGrid', noticias.ultimas);
    renderizarGrid('chileNoticiasGrid', noticias.chile);
    renderizarGrid('brasilNoticiasGrid', noticias.brasil);

    // Preencher mais lidas no sidebar
    const maisLidasList = document.getElementById('maisLidasList');
    if (maisLidasList) {
        maisLidasList.innerHTML = maisLidas.map(item => `<li><a href="#">📌 ${item}</a></li>`).join('');
    }

    // Menu Mobile Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
        // Fechar menu ao clicar em link
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // Newsletter (simulação de inscrição)
    const newsletterForm = document.getElementById('newsletterForm');
    const feedbackSpan = document.getElementById('formFeedback');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput.value.trim();
            if (email && email.includes('@') && email.includes('.')) {
                feedbackSpan.textContent = '✅ Inscrição confirmada! Você receberá nossas atualizações.';
                feedbackSpan.style.color = '#008A2E';
                emailInput.value = '';
                setTimeout(() => { feedbackSpan.textContent = ''; }, 4000);
            } else {
                feedbackSpan.textContent = '⚠️ Por favor, insira um e-mail válido.';
                feedbackSpan.style.color = '#B33';
                setTimeout(() => { feedbackSpan.textContent = ''; }, 3000);
            }
        });
    }

    // Efeito smooth para links internos (caso exista)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#" && targetId !== "#") {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    targetElem.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
