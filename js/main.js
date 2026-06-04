// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // ========== DADOS DAS NOTÍCIAS (atualizado com notícias reais) ==========
    const noticias = {
        ultimas: [
            { 
                id: 1, 
                categoria: "Chile | Imigração", 
                titulo: "Chile amplia detenção de imigrantes ilegais de 5 para 180 dias em nova investida do governo Kast", 
                resumo: "Governo chileno anuncia reforma legislativa que prorroga prazo de detenção de imigrantes em situação irregular de 5 para 180 dias, em meio a protestos e críticas de direitos humanos.", 
                data: "04/06/2026", 
                imagem: "img/noticias/pexels-daniel-cruz-170431136-13247360.jpg", 
                link: "noticias/chile/luta-contra-imigracao.html" 
            },
            { 
                id: 2, 
                categoria: "Chile | Política", 
                titulo: "Polícia chilena entra em confronto com estudantes que protestam contra presidente", 
                resumo: "Manifestação em Santiago contra cortes fiscais do governo de José Antonio Kast termina em confrontos com a polícia, gás lacrimogêneo e dezenas de detidos.", 
                data: "03/06/2026", 
                imagem: "https://www.swissinfo.ch/content/wp-content/uploads/sites/13/2026/06/2026-06-03T193A153A45Z-91524621.jpg?crop=1px,0px,1023px,682px&w=880&ver=f7a8cf5b", 
                link: "noticias/chile/noticia-chile-protesto.html" 
            },
            { 
                id: 3, 
                categoria: "Economia", 
                titulo: "Acordo comercial entre Mercosul e União Europeia é ratificado após longas negociações", 
                resumo: "Blocos assinam tratado histórico que deve movimentar bilhões em negócios e reduzir tarifas entre os países.", 
                data: "02/06/2026", 
                imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Mercosul+UE", 
                link: "#" 
            },
            { 
                id: 4, 
                categoria: "Tecnologia", 
                titulo: "Startup chilena revoluciona armazenamento de energia renovável com tecnologia inovadora", 
                resumo: "Solução promete reduzir custos em 40% para usinas solares e ampliar capacidade de armazenamento no deserto do Atacama.", 
                data: "01/06/2026", 
                imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Energia+Chile", 
                link: "#" 
            }
        ],
        chile: [
            { 
                id: 5, 
                categoria: "Chile | Imigração", 
                titulo: "Chile amplia detenção de imigrantes ilegais de 5 para 180 dias", 
                resumo: "Governo Kast anuncia medida dura contra imigração irregular, elevando prazo de detenção para 180 dias.", 
                data: "04/06/2026", 
                imagem: "img/noticias/pexels-daniel-cruz-170431136-13247360.jpg", 
                link: "noticias/chile/noticia-imigracao-chile.html" 
            },
            { 
                id: 6, 
                categoria: "Chile | Política", 
                titulo: "Polícia entra em confronto com estudantes em protesto contra cortes fiscais", 
                resumo: "Manifestantes enfrentam gás lacrimogêneo e jatos d'água em Santiago durante ato contra governo Kast.", 
                data: "03/06/2026", 
                imagem: "https://www.swissinfo.ch/content/wp-content/uploads/sites/13/2026/06/2026-06-03T193A153A45Z-91524621.jpg?crop=1px,0px,1023px,682px&w=880&ver=f7a8cf5b", 
                link: "noticias/chile/noticia-chile-protesto.html" 
            },
            { 
                id: 7, 
                categoria: "Chile | Economia", 
                titulo: "Inflação no Chile registra queda pelo terceiro mês consecutivo", 
                resumo: "Banco Central chileno comemora indicador abaixo das projeções de mercado, com alívio no custo de vida.", 
                data: "02/06/2026", 
                imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Inflacion+Chile", 
                link: "#" 
            }
        ],
        brasil: [
            { 
                id: 8, 
                categoria: "Brasil | Economia", 
                titulo: "Comissão aprova reforma tributária com foco em simplificação e justiça fiscal", 
                resumo: "Novo texto unifica impostos sobre consumo e tramita na Câmara dos Deputados com expectativa de votação ainda neste semestre.", 
                data: "03/06/2026", 
                imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Reforma+Tributária", 
                link: "#" 
            },
            { 
                id: 9, 
                categoria: "Brasil | Imigração", 
                titulo: "Brasil amplia acolhida a venezuelanos e haitianos com novas vagas na região Norte", 
                resumo: "Operação abrigo chega a 5 mil novas vagas para imigrantes em situação de vulnerabilidade na fronteira.", 
                data: "01/06/2026", 
                imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Imigração+Brasil", 
                link: "#" 
            },
            { 
                id: 10, 
                categoria: "Brasil | Economia", 
                titulo: "Dólar cai a R$ 5,60 com expectativa de investimentos estrangeiros", 
                resumo: "Bolsas sobem e analistas melhoram previsões para o PIB brasileiro após anúncios do governo.", 
                data: "30/05/2026", 
                imagem: "https://placehold.co/600x400/2d2d2d/FFFFFF?text=Câmbio", 
                link: "#" 
            }
        ]
    };

    // Mais Lidas (atualizado com notícias reais do portal)
    const maisLidas = [
        "Chile amplia detenção de imigrantes ilegais de 5 para 180 dias",
        "Polícia chilena entra em confronto com estudantes em Santiago",
        "Acordo Mercosul-UE é ratificado após anos de negociação",
        "Brasil amplia acolhida a venezuelanos e haitianos",
        "Reforma tributária: comissão aprova texto com simplificação"
    ];

    // Função para criar card HTML
    function criarCard(noticia) {
        return `
            <article class="card">
                <a href="${noticia.link}" style="text-decoration: none; color: inherit;">
                    <img class="card-img" src="${noticia.imagem}" alt="${noticia.titulo}" loading="lazy">
                    <div class="card-content">
                        <span class="card-category">${noticia.categoria}</span>
                        <h3 class="card-title">${noticia.titulo}</h3>
                        <p class="card-summary">${noticia.resumo.substring(0, 100)}${noticia.resumo.length > 100 ? '...' : ''}</p>
                        <div class="card-date">📅 ${noticia.data}</div>
                    </div>
                </a>
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
        maisLidasList.innerHTML = maisLidas.map((item, index) => `<li><a href="#">📌 ${index + 1}. ${item}</a></li>`).join('');
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
