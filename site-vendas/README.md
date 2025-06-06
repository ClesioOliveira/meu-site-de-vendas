# Site de Vendas Responsivo

Um site de vendas responsivo desenvolvido com HTML, CSS e JavaScript, com design moderno em preto e laranja, otimizado para dispositivos móveis e com integração de botão para WhatsApp.

## Visão Geral

Este projeto consiste em um site de vendas responsivo que permite aos usuários visualizar produtos, entender o processo de compra e entrar em contato facilmente através do WhatsApp. O design foi desenvolvido com foco na experiência do usuário, utilizando as cores preto e laranja como identidade visual.

## Características

- **Design Responsivo**: Adaptado para todos os tamanhos de tela (desktop, tablet e mobile)
- **Paleta de Cores**: Preto (#000000) e Laranja (#FF6B00) como cores principais
- **Seções Principais**:
  - Home com banner e produtos em destaque
  - Produtos com filtros e ordenação
  - Como Comprar com passo a passo e perguntas frequentes
  - Fale Conosco com formulário e informações de contato
- **Funcionalidades**:
  - Slider de banners
  - Carrossel de depoimentos
  - Filtro de produtos por categoria
  - Ordenação de produtos
  - Contador regressivo para ofertas especiais
  - Botão de WhatsApp fixo
  - Menu responsivo para dispositivos móveis
  - Formulário de contato
  - Botão de voltar ao topo

## Estrutura de Arquivos

```
site-vendas/
├── index.html          # Arquivo HTML principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── img/                # Imagens do site
│   ├── banner1.jpg
│   ├── banner2.jpg
│   ├── produto1.jpg
│   ├── produto2.jpg
│   └── ...
└── README.md           # Documentação do projeto
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica para melhor acessibilidade e SEO
- **CSS3**: Estilos modernos com flexbox e grid para layout responsivo
- **JavaScript**: Interatividade e funcionalidades dinâmicas
- **Font Awesome**: Ícones utilizados no site
- **Google Fonts**: Fonte Poppins para tipografia

## Funcionalidades JavaScript

- **Slider de Banners**: Transição automática e controles manuais
- **Carrossel de Depoimentos**: Navegação entre depoimentos de clientes
- **Menu Mobile**: Toggle para exibir/ocultar menu em dispositivos móveis
- **Filtro de Produtos**: Filtragem por categorias
- **Ordenação de Produtos**: Ordenação por relevância, preço e avaliação
- **Contador Regressivo**: Contagem regressiva para ofertas especiais
- **Acordeão de FAQ**: Expansão/contração de perguntas frequentes
- **Botão Voltar ao Topo**: Aparece ao rolar a página e leva ao topo
- **Validação de Formulário**: Validação básica do formulário de contato

## Personalização

### Alterando as Cores

As cores principais podem ser facilmente alteradas modificando as variáveis CSS no arquivo `style.css`:

```css
:root {
    --color-primary: #FF6B00; /* Laranja */
    --color-secondary: #000000; /* Preto */
    /* Outras variáveis de cor */
}
```

### Adicionando Produtos

Para adicionar novos produtos, basta seguir o padrão HTML existente na seção de produtos:

```html
<div class="product-card" data-category="categoria1">
    <div class="product-image">
        <img src="img/produto.jpg" alt="Nome do Produto">
        <div class="product-tag">Tag</div>
    </div>
    <div class="product-info">
        <h3>Nome do Produto</h3>
        <div class="product-price">
            <span class="price">R$ XX,XX</span>
            <span class="old-price">R$ XX,XX</span>
        </div>
        <div class="product-rating">
            <!-- Estrelas de avaliação -->
            <span>(X.X)</span>
        </div>
        <a href="#" class="btn btn-secondary">Comprar</a>
    </div>
</div>
```

### Alterando o Link do WhatsApp

Para alterar o número do WhatsApp, modifique o atributo `href` do botão de WhatsApp no arquivo `index.html`:

```html
<a href="https://wa.me/SEU_NUMERO_AQUI?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos." class="whatsapp-button" aria-label="Contato via WhatsApp">
```

Substitua `SEU_NUMERO_AQUI` pelo número completo com código do país (ex: 5511123456789).

## Responsividade

O site foi desenvolvido seguindo o conceito de Mobile First, garantindo uma experiência consistente em todos os dispositivos. Os principais breakpoints são:

- **Mobile**: até 576px
- **Tablet**: 577px a 768px
- **Tablet grande**: 769px a 1024px
- **Desktop**: acima de 1024px

## Melhorias Futuras

- Implementação de carrinho de compras funcional
- Sistema de login e cadastro de usuários
- Integração com APIs de pagamento
- Página de detalhes do produto
- Sistema de busca avançada
- Modo escuro/claro

## Autor

Este site foi desenvolvido por Manus.

---

© 2023 Loja Virtual. Todos os direitos reservados.

