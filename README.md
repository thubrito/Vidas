# V.I.D.A.S — Site institucional

Site estático (HTML, CSS e JS puros — sem build, sem dependências de Node/npm)
do projeto social V.I.D.A.S. Basta abrir `index.html` no navegador ou subir a
pasta inteira em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel,
cPanel, etc).

## Estrutura de pastas

```
vidas-v2/
├── index.html            Início
├── sobre.html             Sobre (história, significado, equipe, gráficos, depoimentos)
├── fotos.html              Galeria de fotos
├── doe.html                 Doação (PIX + métodos de pagamento)
├── transparencia.html        Transparência (para onde vai o dinheiro, resultados)
├── parcerias.html             Parcerias com empresas
├── questoes.html               Perguntas frequentes
├── contato.html                  Contato (formulário envia para o WhatsApp)
├── css/
│   └── style.css           Todo o design do site (cores, tipografia, componentes)
├── js/
│   ├── script.js            Tema claro/escuro, menu mobile, link ativo no menu
│   └── pages.js               FAQ, galeria, copiar PIX, formulário → WhatsApp
└── assets/                      Imagens e ícone do site
```

Cada página HTML repete o mesmo cabeçalho e rodapé (sem sistema de templates,
então qualquer alteração no menu ou rodapé precisa ser copiada manualmente em
todas as páginas).

## Como personalizar

### Cores e fontes
Tudo fica em `css/style.css`, no topo, dentro de `:root` (tema claro) e
`html.dark` (tema escuro). Trocando essas variáveis, o site inteiro atualiza:

```css
--primary: #ff6b4a;   /* cor principal (botões, destaques) */
--secondary: #ffc53d;  /* cor secundária (amarelo) */
--accent: #129e94;      /* cor de apoio (verde-água) */
--grape: #8b6fe0;         /* cor de apoio extra (roxo) */
```

As fontes (Baloo 2 para títulos, Nunito Sans para texto) são carregadas via
Google Fonts na primeira linha do `style.css`.

### Chave PIX e WhatsApp
Aparecem em `doe.html` (card do PIX) e em `js/pages.js` (número do WhatsApp
usado no formulário de contato e no botão de copiar PIX). Search por
`11982002485` para achar todos os pontos.

### Links de redes sociais
O Instagram aparece no rodapé de todas as páginas e na página `contato.html`.

## ⚠️ Conteúdo de exemplo — revisar antes de publicar

Como o site foi montado antes de termos as respostas reais do briefing,
alguns números, histórias e textos são **placeholders**. Eles aparecem no
código com a classe `note-example` (geralmente um texto pequeno em itálico
começando com `*`). Veja onde estão:

| Página | O que revisar |
|---|---|
| Todas as páginas (rodapé) | "CNPJ a inserir" — colocar o CNPJ real ou remover a linha |
| `index.html` | Estatísticas de impacto (150+, 32, 5 anos...) e 2 depoimentos |
| `sobre.html` | Linha do tempo (2022 → hoje), números da equipe (8 voluntários, 3 parceiros) e 3 depoimentos |
| `transparencia.html` | Percentuais do gráfico "para onde vai sua doação" e estatísticas de "resultados até hoje" |

Para achar rapidamente tudo isso no código, procure por `note-example` ou por
`*` no início de frases.

## Funcionalidades já prontas

- **Tema claro/escuro** com memória da preferência (`localStorage`) e respeito
  à preferência do sistema operacional.
- **Menu responsivo** (hambúrguer no mobile, navegação completa no desktop).
- **Acordeões** nas Perguntas Frequentes e na Galeria de Fotos.
- **Copiar chave PIX** com um clique (mostra um aviso confirmando a cópia).
- **Formulário de contato** que monta a mensagem e abre o WhatsApp do número
  cadastrado — não envia e-mail, não depende de servidor/backend.

## Compatibilidade

O site usa `color-mix()` em um único lugar (fundo do selo "eyebrow"), com um
valor de respaldo (fallback) definido antes — em navegadores muito antigos
ele aparece sem o tom de transparência, mas nada quebra. Todo o restante
funciona em qualquer navegador moderno (Chrome, Firefox, Safari, Edge).
