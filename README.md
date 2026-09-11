# 💍 Vinicius & Ana Luiza — Landing Page de Casamento

<div align="center">

  ![Data do Casamento](https://img.shields.io/badge/Data-19%20de%20Setembro%20de%202026-00674F?style=for-the-badge)
  ![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)
  ![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=for-the-badge)

  <p align="center">
    <i>"Portanto, o que Deus uniu, ninguém o separe." — Marcos 10:9</i>
  </p>
  <p align="center">
    Uma landing page desenvolvida com amor, sofisticação e atenção a cada detalhe para celebrar o casamento de <strong>Vinicius & Ana Luiza</strong>, reunindo informações essenciais para os convidados, lista de presentes e confirmação de presença.
  </p>

</div>

---

## 📖 Visão Geral

Este é um projeto pessoal criado para compartilhar a contagem regressiva, a história do casal, a galeria de momentos inesquecíveis, os detalhes da cerimônia e recepção, além de disponibilizar canais diretos para confirmação de presença (RSVP) e presentes através de Pix e WhatsApp.

O design adota uma linha editorial romântica e minimalista, combinando tipografia elegante (*Cormorant Garamond* e *Jost*), paleta sofisticada com tons terrosos e sálvia, suporte a tema escuro/claro e interações fluidas pensadas tanto para desktop quanto para mobile.

---

## ✨ Funcionalidades Principais

- ⏳ **Contagem Regressiva em Tempo Real**: Timer dinâmico exibindo dias, horas, minutos e segundos até o início da cerimônia (19/09/2026 às 16:00).
- 🌗 **Tema Claro & Escuro (Light / Dark Mode)**:
  - Alternância intuitiva com botão animado no menu de navegação.
  - Detecção automática da preferência do sistema operacional (`prefers-color-scheme`).
  - Persistência da escolha no navegador com `localStorage`.
- 🎁 **Lista de Presentes Interativa com Pix**:
  - Catálogo de presentes em cotas e itens simbólicos com imagens e valores.
  - Modal com detalhes do presente e botão de **cópia rápida da chave Pix** para a área de transferência (`navigator.clipboard`).
  - Opção para presentes personalizados ou parcelamento diretamente via WhatsApp.
- 💬 **Confirmação de Presença (RSVP)**:
  - Integração direta com WhatsApp através de mensagem pré-formatada.
- 📸 **Galeria de Fotos com Lightbox**:
  - Visualização em grade responsiva.
  - Lightbox interativo com foco acessível, fechamento por tecla <kbd>Esc</kbd> e clique no fundo.
- 📍 **Localização & Mapa**:
  - Informações completas do local (**Villarejo Eventos** — Aparecida de Goiânia, GO).
  - Mapa interativo incorporado (Google Maps) e botão direto para traçar rota no aplicativo.
- 🌸 **Experiência Visual & Acessibilidade**:
  - Animação sutil de pétalas flutuantes na seção principal (*Hero*).
  - Efeito de parallax suave na imagem de destaque.
  - Cursor customizado dinâmico para mouses/desktops.
  - Animações de entrada ao rolar a página (*Scroll Reveal* via `IntersectionObserver`), com tratamento de *stagger* otimizado para dispositivos móveis.
  - Respeito integral à preferência de acessibilidade `prefers-reduced-motion`.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando **tecnologias puras (Vanilla Web)**, garantindo altíssimo desempenho, carregamento instantâneo e zero complexidade de build ou dependências:

- **HTML5**: Estrutura semântica e acessível.
- **CSS3 Moderno**:
  - Variáveis CSS (*Custom Properties*) para gerenciamento de temas.
  - Layout flexível com *Flexbox* e *CSS Grid*.
  - Transições e animações fluidas via aceleração por hardware.
- **JavaScript (ES6+)**:
  - Manipulação de DOM limpa e modular.
  - `IntersectionObserver` para animações sob demanda.
  - `Clipboard API` para facilidade na cópia da chave Pix.
- **Google Fonts**: Fontes *Cormorant Garamond* (serifada clássica) e *Jost* (geométrica contemporânea).

---

## 📁 Estrutura de Arquivos

```text
casamento/
├── assets/                  # Imagens do casal, local, presentes e favicon
│   ├── acalmar-tpm-casamento.jpeg
│   ├── favicon-casamento.png
│   ├── foto-casal.jpeg
│   ├── galeria-01.jpeg ... galeria-04.jpeg
│   ├── lua-de-mel.png
│   ├── presentes-para-casa.png
│   ├── spa-casal-casamento.png
│   ├── todo-presente.png
│   ├── viagem-chile.png
│   └── villarejo.jpeg
├── css/
│   └── style.css            # Estilos globais, temas light/dark e responsividade
├── src/
│   └── script.js            # Lógica JS (countdown, modal pix, tema, lightbox)
├── index.html               # Estrutura principal da landing page
└── README.md                # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Por ser um projeto web estático, não é necessária a instalação de dependências externas (`npm`, `yarn`, etc.).

### Opção 1: Abrir diretamente no navegador
Basta dar dois cliques no arquivo [`index.html`](file:///home/vinicius-araujo/dev/casamento/index.html) ou abri-lo com o navegador de sua preferência.

### Opção 2: Com a extensão Live Server (VS Code)
1. Abra a pasta do projeto no **VS Code**.
2. Clique com o botão direito no [`index.html`](file:///home/vinicius-araujo/dev/casamento/index.html).
3. Selecione **"Open with Live Server"**.

### Opção 3: Usando Python
Se você possui Python instalado:

```bash
# Na raiz do projeto:
python3 -m http.server 8000
```
Em seguida, acesse no navegador: `http://localhost:8000`.

---

## 🌐 Publicação / Deploy

O projeto está hospedado e em produção na **[Vercel](https://vercel.com/)**. Também pode ser facilmente hospedado em outras plataformas estáticas como **[GitHub Pages](https://pages.github.com/)**, **[Netlify](https://www.netlify.com/)** ou **[Cloudflare Pages](https://pages.cloudflare.com/)**.

---

## 👨‍💻 Autor

Desenvolvido por **Vinicius Morais Araújo** para o dia mais especial de sua vida ao lado de **Ana Luiza**.

<div align="center">
  <sub>Feito com muito ❤️ para 19 de Setembro de 2026.</sub>
</div>
