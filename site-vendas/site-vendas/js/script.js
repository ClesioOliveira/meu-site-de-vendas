/**
 * SITE DE VENDAS RESPONSIVO
 * 
 * Autor: Manus
 * Descrição: Funcionalidades JavaScript para o site de vendas responsivo
 */

// Espera o DOM ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== VARIÁVEIS GLOBAIS =====
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const backToTopButton = document.getElementById('back-to-top');
    
    // ===== FUNÇÕES =====
    
    /**
     * Inicializa todas as funcionalidades do site
     */
    function initApp() {
        setupMobileMenu();
        setupScrollEvents();
        setupSlider();
        setupTestimonials();
        setupProductFilters();
        setupAccordion();
        setupCountdown();
        setupContactForm();
        createSlideIndicators();
        createTestimonialIndicators();
    }
    
    /**
     * Configura o menu mobile
     */
    function setupMobileMenu() {
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                
                // Alterna a aparência do ícone do menu hambúrguer
                const hamburger = this.querySelector('.hamburger');
                if (navMenu.classList.contains('active')) {
                    hamburger.style.backgroundColor = 'transparent';
                    hamburger.style.transform = 'rotate(45deg)';
                    hamburger.style.transition = '0.3s ease';
                    
                    // Adiciona estilos para os pseudo-elementos
                    document.documentElement.style.setProperty('--hamburger-before', 'rotate(90deg)');
                    document.documentElement.style.setProperty('--hamburger-after', 'rotate(0)');
                } else {
                    hamburger.style.backgroundColor = '';
                    hamburger.style.transform = '';
                    
                    // Remove os estilos dos pseudo-elementos
                    document.documentElement.style.setProperty('--hamburger-before', '');
                    document.documentElement.style.setProperty('--hamburger-after', '');
                }
            });
            
            // Fecha o menu ao clicar em um link
            const menuLinks = document.querySelectorAll('.nav-menu .menu a');
            menuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    menuToggle.querySelector('.hamburger').style.backgroundColor = '';
                    menuToggle.querySelector('.hamburger').style.transform = '';
                });
            });
        }
    }
    
    /**
     * Configura eventos de scroll
     */
    function setupScrollEvents() {
        // Altera o estilo do cabeçalho ao rolar a página
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                if (backToTopButton) {
                    backToTopButton.classList.add('show');
                }
            } else {
                header.classList.remove('scrolled');
                if (backToTopButton) {
                    backToTopButton.classList.remove('show');
                }
            }
        });
        
        // Botão de voltar ao topo
        if (backToTopButton) {
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Rolagem suave para links de âncora
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Configura o slider de banners
     */
    function setupSlider() {
        const slides = document.querySelectorAll('.banner-slider .slide');
        const prevSlide = document.querySelector('.prev-slide');
        const nextSlide = document.querySelector('.next-slide');
        let currentSlide = 0;
        let slideInterval;
        
        // Função para mostrar um slide específico
        function showSlide(index) {
            // Remove a classe active de todos os slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Atualiza os indicadores
            const indicators = document.querySelectorAll('.slide-indicators .indicator');
            if (indicators.length > 0) {
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                indicators[index].classList.add('active');
            }
            
            // Adiciona a classe active ao slide atual
            slides[index].classList.add('active');
            currentSlide = index;
        }
        
        // Função para avançar para o próximo slide
        function nextSlideFunc() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Função para voltar para o slide anterior
        function prevSlideFunc() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Adiciona eventos de clique aos botões de navegação
        if (prevSlide && nextSlide && slides.length > 0) {
            prevSlide.addEventListener('click', function() {
                prevSlideFunc();
                resetSlideInterval();
            });
            
            nextSlide.addEventListener('click', function() {
                nextSlideFunc();
                resetSlideInterval();
            });
            
            // Inicia o slider automático
            startSlideInterval();
        }
        
        // Função para iniciar o intervalo do slider
        function startSlideInterval() {
            slideInterval = setInterval(nextSlideFunc, 5000);
        }
        
        // Função para resetar o intervalo do slider
        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }
        
        // Cria indicadores para o slider
        function createSlideIndicators() {
            const slideIndicators = document.querySelector('.slide-indicators');
            if (slideIndicators && slides.length > 0) {
                for (let i = 0; i < slides.length; i++) {
                    const indicator = document.createElement('div');
                    indicator.classList.add('indicator');
                    if (i === 0) {
                        indicator.classList.add('active');
                    }
                    
                    // Adiciona evento de clique ao indicador
                    indicator.addEventListener('click', function() {
                        showSlide(i);
                        resetSlideInterval();
                    });
                    
                    slideIndicators.appendChild(indicator);
                }
            }
        }
    }
    
    /**
     * Configura o slider de depoimentos
     */
    function setupTestimonials() {
        const testimonials = document.querySelectorAll('.testimonial-item');
        const prevTestimonial = document.querySelector('.prev-testimonial');
        const nextTestimonial = document.querySelector('.next-testimonial');
        let currentTestimonial = 0;
        
        // Função para mostrar um depoimento específico
        function showTestimonial(index) {
            // Remove a classe active de todos os depoimentos
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            // Atualiza os indicadores
            const indicators = document.querySelectorAll('.testimonial-indicators .indicator');
            if (indicators.length > 0) {
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                indicators[index].classList.add('active');
            }
            
            // Adiciona a classe active ao depoimento atual
            testimonials[index].classList.add('active');
            currentTestimonial = index;
        }
        
        // Função para avançar para o próximo depoimento
        function nextTestimonialFunc() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }
        
        // Função para voltar para o depoimento anterior
        function prevTestimonialFunc() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        }
        
        // Adiciona eventos de clique aos botões de navegação
        if (prevTestimonial && nextTestimonial && testimonials.length > 0) {
            prevTestimonial.addEventListener('click', prevTestimonialFunc);
            nextTestimonial.addEventListener('click', nextTestimonialFunc);
        }
        
        // Cria indicadores para os depoimentos
        function createTestimonialIndicators() {
            const testimonialIndicators = document.querySelector('.testimonial-indicators');
            if (testimonialIndicators && testimonials.length > 0) {
                for (let i = 0; i < testimonials.length; i++) {
                    const indicator = document.createElement('div');
                    indicator.classList.add('indicator');
                    if (i === 0) {
                        indicator.classList.add('active');
                    }
                    
                    // Adiciona evento de clique ao indicador
                    indicator.addEventListener('click', function() {
                        showTestimonial(i);
                    });
                    
                    testimonialIndicators.appendChild(indicator);
                }
            }
        }
    }
    
    /**
     * Configura os filtros de produtos
     */
    function setupProductFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');
        const sortSelect = document.getElementById('sort-select');
        
        // Filtro por categoria
        if (filterButtons.length > 0) {
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove a classe active de todos os botões
                    filterButtons.forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Adiciona a classe active ao botão clicado
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    // Filtra os produtos
                    productCards.forEach(card => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        }
        
        // Ordenação de produtos
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                const sortValue = this.value;
                const productsGrid = document.querySelector('.products-grid');
                
                if (!productsGrid) return;
                
                // Converte NodeList para Array para poder ordenar
                const productsArray = Array.from(productCards);
                
                // Ordena os produtos com base no valor selecionado
                switch (sortValue) {
                    case 'preco-menor':
                        productsArray.sort((a, b) => {
                            const priceA = parseFloat(a.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
                            const priceB = parseFloat(b.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
                            return priceA - priceB;
                        });
                        break;
                    case 'preco-maior':
                        productsArray.sort((a, b) => {
                            const priceA = parseFloat(a.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
                            const priceB = parseFloat(b.querySelector('.price').textContent.replace('R$ ', '').replace(',', '.'));
                            return priceB - priceA;
                        });
                        break;
                    case 'avaliacao':
                        productsArray.sort((a, b) => {
                            const ratingA = parseFloat(a.querySelector('.product-rating span').textContent.replace('(', '').replace(')', ''));
                            const ratingB = parseFloat(b.querySelector('.product-rating span').textContent.replace('(', '').replace(')', ''));
                            return ratingB - ratingA;
                        });
                        break;
                    default:
                        // Relevância (ordem original)
                        productsArray.sort((a, b) => {
                            return Array.from(productCards).indexOf(a) - Array.from(productCards).indexOf(b);
                        });
                }
                
                // Remove todos os produtos do grid
                while (productsGrid.firstChild) {
                    productsGrid.removeChild(productsGrid.firstChild);
                }
                
                // Adiciona os produtos ordenados de volta ao grid
                productsArray.forEach(product => {
                    productsGrid.appendChild(product);
                });
            });
        }
    }
    
    /**
     * Configura o acordeão de perguntas frequentes
     */
    function setupAccordion() {
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        if (accordionItems.length > 0) {
            accordionItems.forEach(item => {
                const header = item.querySelector('.accordion-header');
                
                header.addEventListener('click', function() {
                    // Fecha todos os outros itens
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Alterna o estado do item atual
                    item.classList.toggle('active');
                });
            });
        }
    }
    
    /**
     * Configura o contador regressivo para ofertas especiais
     */
    function setupCountdown() {
        const countdownElement = document.querySelector('.countdown');
        
        if (countdownElement) {
            const endDate = new Date(countdownElement.getAttribute('data-end')).getTime();
            
            // Atualiza o contador a cada segundo
            const countdownInterval = setInterval(function() {
                const now = new Date().getTime();
                const distance = endDate - now;
                
                // Calcula dias, horas, minutos e segundos restantes
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Atualiza os elementos HTML
                countdownElement.querySelector('.days').textContent = days.toString().padStart(2, '0');
                countdownElement.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
                countdownElement.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
                countdownElement.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
                
                // Se o contador chegou a zero, limpa o intervalo
                if (distance < 0) {
                    clearInterval(countdownInterval);
                    countdownElement.innerHTML = '<p>Oferta encerrada!</p>';
                }
            }, 1000);
        }
    }
    
    /**
     * Configura o formulário de contato
     */
    function setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validação básica do formulário
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (!name || !email || !subject || !message) {
                    alert('Por favor, preencha todos os campos obrigatórios.');
                    return;
                }
                
                // Simulação de envio do formulário
                alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                contactForm.reset();
            });
        }
    }
    
    /**
     * Cria indicadores para o slider de banners
     */
    function createSlideIndicators() {
        const slides = document.querySelectorAll('.banner-slider .slide');
        const slideIndicators = document.querySelector('.slide-indicators');
        
        if (slideIndicators && slides.length > 0) {
            for (let i = 0; i < slides.length; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (i === 0) {
                    indicator.classList.add('active');
                }
                
                // Adiciona evento de clique ao indicador
                indicator.addEventListener('click', function() {
                    // Remove a classe active de todos os slides
                    slides.forEach(slide => {
                        slide.classList.remove('active');
                    });
                    
                    // Remove a classe active de todos os indicadores
                    const indicators = document.querySelectorAll('.slide-indicators .indicator');
                    indicators.forEach(ind => {
                        ind.classList.remove('active');
                    });
                    
                    // Adiciona a classe active ao slide e indicador atual
                    slides[i].classList.add('active');
                    this.classList.add('active');
                });
                
                slideIndicators.appendChild(indicator);
            }
        }
    }
    
    /**
     * Cria indicadores para o slider de depoimentos
     */
    function createTestimonialIndicators() {
        const testimonials = document.querySelectorAll('.testimonial-item');
        const testimonialIndicators = document.querySelector('.testimonial-indicators');
        
        if (testimonialIndicators && testimonials.length > 0) {
            for (let i = 0; i < testimonials.length; i++) {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (i === 0) {
                    indicator.classList.add('active');
                }
                
                // Adiciona evento de clique ao indicador
                indicator.addEventListener('click', function() {
                    // Remove a classe active de todos os depoimentos
                    testimonials.forEach(testimonial => {
                        testimonial.classList.remove('active');
                    });
                    
                    // Remove a classe active de todos os indicadores
                    const indicators = document.querySelectorAll('.testimonial-indicators .indicator');
                    indicators.forEach(ind => {
                        ind.classList.remove('active');
                    });
                    
                    // Adiciona a classe active ao depoimento e indicador atual
                    testimonials[i].classList.add('active');
                    this.classList.add('active');
                });
                
                testimonialIndicators.appendChild(indicator);
            }
        }
    }
    
    // Inicializa a aplicação
    initApp();
});

