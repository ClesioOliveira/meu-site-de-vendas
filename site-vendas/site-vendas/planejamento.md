# Planejamento do Site de Vendas

## Paleta de Cores
- **Cor Principal 1:** Preto (#000000)
- **Cor Principal 2:** Laranja (#FF6B00)
- **Cor Complementar 1:** Branco (#FFFFFF)
- **Cor Complementar 2:** Cinza Claro (#F5F5F5)
- **Cor de Destaque:** Laranja Vibrante (#FF4500) para botões de ação

## Estrutura do Site

### Layout Geral
- Cabeçalho fixo com logo e menu de navegação
- Rodapé com informações de contato e links importantes
- Botão de WhatsApp fixo no canto inferior direito em todas as páginas
- Design responsivo com breakpoints para:
  - Desktop (acima de 1024px)
  - Tablet (768px - 1024px)
  - Mobile (abaixo de 768px)

### Seções

#### 1. Home
- Banner principal com slider de ofertas/produtos em destaque
- Seção de produtos mais vendidos
- Seção de ofertas especiais
- Seção de depoimentos de clientes
- Call-to-action para a seção de produtos

#### 2. Produtos
- Filtros de categorias
- Grid de produtos com:
  - Imagem
  - Nome
  - Preço
  - Botão "Comprar"
- Paginação ou carregamento infinito
- Opção de visualização rápida do produto

#### 3. Como Comprar
- Processo passo a passo com ícones
- Perguntas frequentes
- Informações sobre formas de pagamento
- Informações sobre entrega

#### 4. Fale Conosco
- Formulário de contato
- Informações de contato (telefone, email)
- Mapa de localização (se aplicável)
- Links para redes sociais

### Elementos Especiais
- **Botão de WhatsApp:** Fixo no canto inferior direito, com mensagem pré-definida
- **Ofertas Especiais:** Banner com contagem regressiva para criar urgência
- **Depoimentos:** Carrossel com foto, nome e comentário do cliente

## Wireframes Conceituais

### Header
```
+------------------------------------------+
| LOGO          HOME  PRODUTOS  COMO COMPRAR  FALE CONOSCO |
+------------------------------------------+
```

### Home
```
+------------------------------------------+
|                                          |
|           BANNER PRINCIPAL               |
|                                          |
+------------------------------------------+
|                                          |
|           PRODUTOS DESTAQUE              |
|                                          |
|  +-------+  +-------+  +-------+         |
|  |PRODUTO|  |PRODUTO|  |PRODUTO|         |
|  |       |  |       |  |       |         |
|  +-------+  +-------+  +-------+         |
|                                          |
+------------------------------------------+
|                                          |
|           OFERTAS ESPECIAIS              |
|                                          |
+------------------------------------------+
|                                          |
|           DEPOIMENTOS                    |
|                                          |
+------------------------------------------+
```

### Produtos
```
+------------------------------------------+
|                                          |
|  FILTROS                                 |
|                                          |
|  +-------+  +-------+  +-------+         |
|  |PRODUTO|  |PRODUTO|  |PRODUTO|         |
|  |       |  |       |  |       |         |
|  +-------+  +-------+  +-------+         |
|                                          |
|  +-------+  +-------+  +-------+         |
|  |PRODUTO|  |PRODUTO|  |PRODUTO|         |
|  |       |  |       |  |       |         |
|  +-------+  +-------+  +-------+         |
|                                          |
+------------------------------------------+
```

### Como Comprar
```
+------------------------------------------+
|                                          |
|  PASSO 1    PASSO 2    PASSO 3    PASSO 4|
|                                          |
+------------------------------------------+
|                                          |
|           PERGUNTAS FREQUENTES           |
|                                          |
+------------------------------------------+
```

### Fale Conosco
```
+------------------------------------------+
|                                          |
|  FORMULÁRIO           INFORMAÇÕES        |
|  DE CONTATO           DE CONTATO         |
|                                          |
+------------------------------------------+
```

### Botão WhatsApp
```
                                  +-----+
                                  | WA  |
                                  +-----+
```

## Funcionalidades JavaScript
1. Slider/carrossel para banners e depoimentos
2. Filtro de produtos
3. Botão de WhatsApp com mensagem personalizada
4. Menu responsivo para dispositivos móveis
5. Animações de scroll para melhor experiência do usuário
6. Contador regressivo para ofertas especiais

## Responsividade
- Layout fluido com Grid e Flexbox
- Imagens responsivas
- Menu hambúrguer em dispositivos móveis
- Reorganização de elementos para melhor visualização em telas pequenas

