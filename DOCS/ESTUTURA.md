🧾 Flor Árabe Perfumaria — System Design (Catalog Site)
📌 Tipo de sistema

Catálogo de produtos estático/dinâmico leve com conversão via WhatsApp

⚙️ Stack Tecnológica
🖥️ Frontend (Core)
Next.js (App Router)
SSR leve para SEO
Rotas simples de catálogo
Estrutura escalável
React
Componentização de UI
TypeScript
Tipagem de produtos e componentes
🎨 Estilização
Tailwind CSS
UI rápida e responsiva
Mobile-first design
Baixo custo de manutenção
📦 Dados
products.ts (data layer inicial)
Fonte única de produtos
Estrutura estática no início
Sem backend
📲 Integração externa
WhatsApp Click-to-Chat
Geração de links dinâmicos por produto
Sem API backend
🖼️ Imagens
Inicial:
/public/images
Evolução possível:
Cloudinary (CDN otimizado)
🚀 Deploy
Vercel
deploy automático com GitHub
otimização nativa para Next.js
🧱 Arquitetura do Sistema
🧩 Arquitetura geral
Client (Browser)
      ↓
Next.js App (Frontend)
      ↓
Static Data Layer (products.ts)
      ↓
WhatsApp Redirect (external)
📌 Características da arquitetura
Sem backend
Sem autenticação
Sem banco de dados
Sem API server

👉 arquitetura frontend-first + static data

📁 Estrutura de pastas
flor-arabe-perfumaria/
│
├── public/
│   ├── images/
│   │   └── products/
│   └── assets/
│
├── src/
│
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                  # Home
│   │   │
│   │   ├── produtos/
│   │   │   ├── page.tsx              # Lista de produtos
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Produto individual
│   │   │
│   │   ├── sobre/
│   │   │   └── page.tsx
│   │   │
│   │   └── contato/
│   │       └── page.tsx
│
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductGrid.tsx
│   │   │
│   │   └── shared/
│   │       └── WhatsAppButton.tsx
│
│   ├── data/
│   │   └── products.ts               # Fonte única de dados
│
│   ├── lib/
│   │   └── whatsapp.ts               # geração de links WhatsApp
│
│   ├── types/
│   │   └── product.ts                # tipagem de produtos
│
│   ├── styles/
│   │   └── globals.css
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
🧠 Camadas do sistema
1. Presentation Layer (UI)
Next.js pages
Components reutilizáveis
Tailwind UI
2. Data Layer (simples)
products.ts
Array de objetos Product
3. Business Logic Layer (leve)
geração de link WhatsApp
formatação de dados do produto
4. Integration Layer
WhatsApp (externo)
📦 Modelo de dados (conceitual)
Product:
- id
- name
- price
- image
- description (opcional)
🔁 Fluxo do sistema
Usuário entra no site
        ↓
Vê catálogo (products.ts)
        ↓
Seleciona produto
        ↓
Clica em "WhatsApp"
        ↓
Abre conversa com mensagem pronta
        ↓
Venda acontece no WhatsApp
🚫 Fora do escopo (decisão arquitetural)
backend server
login/auth
banco de dados externo (fase inicial)
sistema de pagamento
carrinho de compras
painel admin
📈 Escalabilidade futura (não implementado agora)

Arquitetura permite evolução para:

Supabase (DB real)
CMS (Sanity / Strapi)
painel admin
filtros avançados
busca
categorias
🧾 Resumo técnico

Sistema frontend-first baseado em Next.js com dados estáticos centralizados em products.ts, otimizado para performance, simplicidade e conversão via WhatsApp.