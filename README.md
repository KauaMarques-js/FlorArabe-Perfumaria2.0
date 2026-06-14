# 🌺 Flor Árabe Perfumaria

Este é o repositório oficial da **Flor Árabe Perfumaria**, um catálogo digital focado na conversão direta via WhatsApp, projetado com uma experiência visual de altíssimo luxo.

## 📌 Visão Geral do Projeto

O projeto não é um e-commerce tradicional (não possui carrinho de compras, checkout ou banco de dados próprio na fase atual). Ele opera como um **Catálogo Estático / Landing Page Premium** de alta performance. 

O foco absoluto é **UI/UX de Luxo** (Design Premium, Dark Mode sofisticado) e **Conversão (CRO)**. O usuário escolhe o produto e é imediatamente redirecionado ao WhatsApp com uma mensagem pré-formatada.

## 🏗️ Arquitetura e Stack

A arquitetura foi pensada para ser *frontend-first*, veloz e com baixo custo de manutenção:
- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS (com variáveis customizadas para temas de luxo)
- **Data Layer**: Dados estáticos centralizados em `src/data/products.ts` (sem backend)
- **Integração Externa**: Click-to-Chat do WhatsApp

## 💎 A Transformação Premium (O que foi construído)

Ao longo do desenvolvimento, o projeto evoluiu para um padrão de marcas de luxo através de várias implementações técnicas:
1. **Design System de Alto Padrão**: 
   - Tema *Dark Mode* reestruturado com foco num dourado "Ouro Envelhecido" (`#B89B62`), reduzindo o cansaço visual.
   - Microinterações responsivas baseadas em curvas de bezier luxuosas (`cubic-bezier`).
   - Imagens de produtos recebem ajustes finos no modo noturno para não "estourar" o brilho.
2. **Experiência do Usuário (UX) & Conversão (CRO)**:
   - Os cards de produto possuem tags de **Família Olfativa** e **Gênero** para reduzir a barreira de compra de perfumes pela internet.
   - A hierarquia visual foca sempre: 1. A Promessa (Headline) -> 2. O Preço -> 3. Contato via WhatsApp.
3. **Clean Code e SOLID**:
   - Componentização rigorosa dividida em `product/`, `home/`, `layout/` e `shared/`.
   - Tipos de dados centralizados (`Product` em `src/types/product.ts`).

## 🚀 Como Começar (Ambiente de Desenvolvimento)

Para rodar este projeto em sua máquina local, certifique-se de ter o Node.js instalado.

1. **Clone o repositório** e acesse a pasta do projeto.
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
4. **Abra no navegador**:
   Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura de Pastas Principal

- `/src/app` -> Páginas do Next.js (Home, Produtos, Contato).
- `/src/components` -> Componentes de UI modulares.
- `/src/data` -> O "Banco de Dados" atual (arquivo `products.ts`).
- `/src/styles` -> Estilos globais e tokens de cores (`globals.css`).
- `/DOCS` -> Documentação detalhada original (Regras de Negócio, Casos de Uso).

## 🛡️ Licença

Este é um software de código fechado. **Nenhuma cópia, modificação ou distribuição é permitida**. Consulte o arquivo `LICENSE` na raiz do projeto para obter detalhes.

---

## 👨‍💻 Autor

Desenvolvido e arquitetado por **Kauã Marques Almeida**  
🔗 GitHub: [@KauaMarques-js](https://github.com/KauaMarques-js)
