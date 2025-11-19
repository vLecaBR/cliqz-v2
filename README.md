# CliqZ - Agência Digital B2B

![CliqZ Banner](https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=400&fit=crop)

## 📋 Sobre o Projeto

**CliqZ** é um website completo para uma agência digital B2B com estética tecnológica e profissional. O projeto foi desenvolvido com foco em performance, animações avançadas e experiência do usuário premium, mantendo a seriedade corporativa necessária para o mercado B2B.

## ✨ Características Principais

### Design & UX
- 🎨 Design **mobile-first** totalmente responsivo
- 🌊 **Glassmorphism** e efeitos de backdrop-blur
- ✨ **Mesh gradients** animados no background
- 🎭 **Partículas interativas** que reagem ao movimento do mouse
- 🎯 **Cursor customizado** com efeitos de hover
- 🎬 **Preloader cinematográfico** com órbitas rotativas
- 🌀 **Parallax effects** no hero section
- 🧲 **Cards magnéticos** com efeitos 3D
- 💫 **Micro-interações** em todos os elementos

### Funcionalidades
- 📱 Navegação sticky com backdrop-blur
- 🍔 Menu fullscreen responsivo para mobile
- 📊 Gráficos animados de KPIs com counters
- 🎠 Carrossel de projetos com transições cinematográficas
- 🔍 Sistema de filtros no portfólio
- 📧 Formulário de contato interativo
- 🎯 Animações de scroll reveal
- ⚡ Transições suaves entre seções

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS v4.0** - Framework CSS utility-first
- **Motion (Framer Motion)** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **Recharts** - Biblioteca de gráficos
- **Vite** - Build tool e dev server

## 📁 Estrutura do Projeto

```
/
├── components/
│   ├── About.tsx                # Página Sobre
│   ├── Contact.tsx              # Página Contato
│   ├── CustomCursor.tsx         # Cursor customizado
│   ├── Footer.tsx               # Rodapé
│   ├── Header.tsx               # Navegação principal
│   ├── Home.tsx                 # Página inicial
│   ├── MeshGradient.tsx         # Background animado
│   ├── ParticleField.tsx        # Partículas interativas
│   ├── Portfolio.tsx            # Página de portfólio
│   ├── Preloader.tsx            # Tela de carregamento
│   ├── ProjectDetail.tsx        # Detalhes do projeto
│   └── Services.tsx             # Página de serviços
├── styles/
│   └── globals.css              # Estilos globais e tokens
├── App.tsx                      # Componente principal
└── main.tsx                     # Entry point
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório (se aplicável)
```bash
git clone [url-do-repositorio]
cd cliqz-website
```

2. Instale as dependências
```bash
npm install
```

3. Rode o servidor de desenvolvimento
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 📄 Páginas

### 1. **Home** (`/`)
- Hero section com efeitos parallax e animações 3D
- Stats com counters animados
- Carrossel de projetos em destaque
- Seção de serviços
- CTA principal

### 2. **Serviços** (`/services`)
- 4 categorias de serviços:
  - Marketing Digital
  - Inteligência Artificial
  - Desenvolvimento
  - Design de Produto
- Cards com métricas e KPIs
- Animações de scroll reveal

### 3. **Portfólio** (`/portfolio`)
- Sistema de filtros por categoria
- Grid responsivo de projetos
- Cards com efeitos hover 3D
- Transições suaves

### 4. **Detalhes do Projeto** (`/project/:id`)
- Hero com imagem em destaque
- Visão geral do projeto
- Desafio e Solução
- Galeria de imagens
- Detalhes técnicos (tecnologias e infraestrutura)
- Resultados com gráficos animados
- CTA para contato

### 5. **Sobre** (`/about`)
- Estatísticas da empresa
- Missão e valores
- Certificações e parcerias
- Metodologia de trabalho
- Diferenciais competitivos

### 6. **Contato** (`/contact`)
- Formulário de contato
- Informações de contato
- Integração com redes sociais
- Mapa/localização (mockup)

## 🎨 Paleta de Cores

O projeto utiliza uma paleta corporativa moderna:

- **Primary**: Indigo (#6366f1) → Violet (#8b5cf6) → Purple (#a855f7)
- **Background**: Dark Navy (#0A0E27)
- **Surface**: Slate 900/800 com transparência 
- **Text**: White (#ffffff) e Slate 300-500

## 🧩 Componentes Principais

### CustomCursor
Cursor customizado que segue o mouse com efeitos de expansão em hover.

### MeshGradient
Background animado com gradientes que se movem suavemente.

### ParticleField
Sistema de partículas que reage ao movimento do mouse.

### Preloader
Animação de carregamento cinematográfica com órbitas rotativas.

### Header
Navegação sticky com glassmorphism e menu mobile fullscreen.

## 🎯 Animações

O projeto utiliza **Motion (Framer Motion)** para criar animações fluidas:

- `initial` / `animate` - Animações de entrada
- `whileInView` - Scroll reveal animations
- `whileHover` - Efeitos de hover
- `viewport={{ once: true }}` - Anima apenas uma vez
- `useInView` - Hook para detecção de viewport

### Exemplo de uso:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Conteúdo
</motion.div>
```

## 🎭 Tipografia

- **Fonte Principal**: Plus Jakarta Sans
- **Pesos utilizados**: 400, 600, 700, 800
- **Importação**: Google Fonts via CSS

## 🔧 Customização

### Cores
Edite as cores em `/styles/globals.css`:
```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  /* ... */
}
```

### Conteúdo
- **Projetos**: Edite o objeto `projectsData` em `/components/Portfolio.tsx` e `/components/ProjectDetail.tsx`
- **Serviços**: Edite o array `services` em `/components/Services.tsx`
- **Estatísticas**: Edite `stats` em `/components/Home.tsx` e `/components/About.tsx`

### Animações
Ajuste as configurações de `transition` nos componentes Motion:
- `duration` - Duração da animação
- `delay` - Atraso antes de iniciar
- `ease` - Curva de aceleração

## 📱 Responsividade

Breakpoints Tailwind utilizados:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

## ⚡ Performance

- **Code splitting** automático com Vite
- **Lazy loading** de imagens
- **Animações otimizadas** com GPU acceleration
- **Viewport detection** para animar apenas elementos visíveis
- **Preloader** para melhor percepção de performance

## 🌐 Suporte a Navegadores

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+
