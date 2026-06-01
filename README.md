# Portifolio-conclusivo
# 💼 Portfólio — Modelo 1 (Terminal)

Portfólio pessoal desenvolvido do zero com **HTML5**, **CSS3** e **JavaScript** puro, sem frameworks ou bibliotecas externas. O visual é inspirado em interfaces de terminal de linha de comando — fundo preto, tipografia monoespaçada e detalhes em neon verde.

---

## 📁 Estrutura do Projeto

```
portfolio_luiz/
│
├── HTML/
│   ├── modelo1-terminal.html   # Página principal do portfólio
│   └── contato.html            # Página de contato
│
├── CSS/
│   ├── modelo1-terminal.css    # Todos os estilos do portfólio
│   └── contato.css             # Estilos da página de contato
│
└── JS/
    ├── modelo1-terminal.js     # Scripts do portfólio
    └── contato.js              # Lógica do formulário de contato
```

> Para funcionar corretamente, as pastas `HTML/`, `CSS/` e `JS/` precisam estar sempre juntas no mesmo diretório raiz. Os arquivos HTML referenciam os demais via caminhos relativos (`../CSS/` e `../JS/`).

---

## 🌐 Seções do Portfólio

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com nome, cargo, foto e botões de ação |
| **Skills** | Cards com as principais tecnologias e barras de progresso |
| **Portfólio** | Projetos desenvolvidos, com destaque para o Agente IA |
| **Contato** | Links para GitHub, LinkedIn e página de contato por e-mail |

---

## 🛠️ Tecnologias Utilizadas

### ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) HTML5

Responsável por toda a estrutura e semântica das páginas.

- Estrutura semântica com `<nav>`, `<section>`, `<footer>`, `<form>`
- Formulário de contato com validação nativa via `required`, `type="email"` e `type="text"`
- Integração com cliente de e-mail nativo via protocolo `mailto:`
- Fontes externas carregadas via `<link>` apontando para o Google Fonts
- Separação de responsabilidades: HTML cuida apenas da estrutura, sem estilo inline

---

### ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) CSS3

Responsável por toda a identidade visual, animações e responsividade.

**Variáveis CSS (Custom Properties)**
Paleta de cores centralizada em `:root` para consistência em todo o projeto:
```css
:root {
  --bg: #0a0a0a;
  --green: #00ff88;
  --cyan: #00d4ff;
  --surface: #111111;
  --muted: #666;
}
```

**Layout**
- `CSS Grid` com `grid-template-columns: 1fr 420px` para o layout de duas colunas do hero
- `Flexbox` para navegação, botões, cards de skills e seção de contato
- `Media queries` para adaptação em telas menores (mobile-first)

**Animações com `@keyframes`**

| Animação | Efeito |
|---|---|
| `orbFloat` | Orbe de glow flutuando no fundo do hero |
| `borderGlow` | Borda neon da foto pulsando em opacidade |
| `blink` | Cursor piscando no efeito de digitação |
| `fillBar` | Barras de progresso das skills preenchendo ao entrar na tela |

**Efeitos Visuais**
- `backdrop-filter: blur(20px)` na navbar para efeito de vidro fosco
- `mix-blend-mode: difference` no cursor customizado para inverter as cores do fundo
- `background-image` com dois `linear-gradient` sobrepostos para criar o grid de pontos do fundo
- `::before` e `::after` nos pseudo-elementos para moldura e sombra da foto sem HTML extra
- `object-fit: cover` + `object-position: top center` para recorte inteligente da foto
- `transition` em todos os elementos interativos para hover suave

---

### ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) JavaScript

Responsável pelas interações, animações dinâmicas e lógica do formulário.

**Cursor Personalizado**
Dois elementos rastreiam o mouse: o ponto principal segue o cursor exatamente, e o trail usa interpolação suave com fator `0.15` para um efeito de atraso fluido:
```js
// Interpolação suave do trail
tx += (mx - tx) * 0.15;
ty += (my - ty) * 0.15;
requestAnimationFrame(animate);
```

**Efeito Typewriter**
Array de palavras com controle de estado (`deleting`) que alterna entre escrever e apagar, com velocidades diferentes para cada direção:
```js
const words = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'IA & Prompts'];
// Escreve em 100ms por caractere, apaga em 60ms
setTimeout(type, deleting ? 60 : 100);
```

**Scroll Reveal**
`IntersectionObserver API` para adicionar a classe `.visible` nos elementos ao entrar na viewport, sem bibliotecas externas:
```js
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
```

**Formulário de Contato** (`contato.js`)
Captura os dados do formulário, constrói dinamicamente o link `mailto:` com `encodeURIComponent` e abre o app de e-mail nativo do usuário:
```js
const body = `Olá, Luiz!\n\nMeu nome é ${name}.\n\n${message}\n\nContato: ${email}`;
const mailtoLink = `mailto:lcbof030866@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.location.href = mailtoLink;
```

---

## 🔗 Dependências Externas

Somente fontes via **Google Fonts**. Nenhum framework, biblioteca JS ou CSS foi utilizado.

| Fonte | Aplicação |
|---|---|
| `JetBrains Mono` | Navbar, labels, tags, cursor path, código |
| `Space Grotesk` | Corpo de texto, descrições, botões |

---

## 🤖 Projeto em Destaque — Agente IA Comark Audi

O projeto principal exibido no portfólio é o **Recepcionista Digital da Comark Audi**, um agente de Inteligência Artificial desenvolvido para atendimento automatizado via WhatsApp na concessionária Comark Audi, localizada na Faria Lima, São Paulo.

**Funcionalidades do agente:**
- Identificação da intenção do cliente em tempo real via palavras-chave e NLP
- Direcionamento automático para os departamentos: Vendas, Revisão ou Visita
- Calendário interativo de agendamento para revisão de veículos
- Campanha promocional com disparo único e condicional por conversa
- Personalidade humanizada com regras de prioridade e bloqueio pós-transferência

**Conceitos e tecnologias aplicados:**

| Conceito | Descrição |
|---|---|
| `Prompt Engineering` | System prompt estruturado com regras, gatilhos e personalidade definida |
| `NLP via palavras-chave` | Mapeamento de intenção por padrões de texto no input do cliente |
| `Lógica Condicional` | Fluxos de decisão com prioridades, exceções e bloqueios |
| `Gestão de Estado` | Controle de variáveis entre turnos, como `campanha_enviada` |
| `WhatsApp API` | Integração com plataforma de mensageria para disparo e recebimento |

---

## 👤 Autor

**Luiz Carlos Batista Oliveira Filho**  
Desenvolvedor Full Stack em formação — São Paulo, SP

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/luiz662)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-carlos-batista-oliveira-filho-822a941b6/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:lcbof030866@gmail.com)

---

> Desenvolvido com 💚 por Luiz Carlos — 2026
