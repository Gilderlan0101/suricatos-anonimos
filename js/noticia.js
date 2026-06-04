// js/noticia.js
// Funcionalidades comuns para páginas de notícia

document.addEventListener('DOMContentLoaded', () => {
    
    // ========== MENU MOBILE ==========
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
        
        const navLinks = navList.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
    
    // ========== BOTÕES DE COMPARTILHAMENTO ==========
    const shareButtons = document.querySelectorAll('.share-btn');
    const currentUrl = encodeURIComponent(window.location.href);
    const currentTitle = encodeURIComponent(document.title);
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let shareUrl = '';
            
            if (btn.classList.contains('share-twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?text=${currentTitle}&url=${currentUrl}`;
            } else if (btn.classList.contains('share-facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
            } else if (btn.classList.contains('share-whatsapp')) {
                shareUrl = `https://wa.me/?text=${currentTitle}%20${currentUrl}`;
            } else if (btn.classList.contains('share-linkedin')) {
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
    
    // ========== BOTÃO COPIAR LINK ==========
    const copyButton = document.querySelector('.share-copy');
    if (copyButton) {
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(window.location.href);
                const originalText = copyButton.textContent;
                copyButton.textContent = '✅ Copiado!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            } catch (err) {
                console.error('Erro ao copiar:', err);
                alert('Pressione Ctrl+C para copiar o link');
            }
        });
    }
    
    // ========== TEMPO DE LEITURA ==========
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        const text = articleContent.innerText;
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 palavras por minuto
        const readingTimeSpan = document.getElementById('readingTime');
        if (readingTimeSpan) {
            readingTimeSpan.textContent = `${readingTime} min de leitura`;
        }
    }
    
    // ========== DESTAQUE DO MENU ATIVO ==========
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-list a');
    navItems.forEach(item => {
        if (item.getAttribute('href') === 'index.html' && currentPath.includes('noticia')) {
            return;
        }
        if (item.getAttribute('href') === currentPath.split('/').pop()) {
            item.style.borderBottomColor = '#000';
            item.style.fontWeight = '600';
        }
    });
});
