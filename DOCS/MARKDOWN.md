📄 Flor Árabe Perfumaria — Product Spec (Markdown)
📌 Visão Geral

Este projeto é um site catálogo simples de perfumes árabes, com foco em exibição de produtos e conversão via WhatsApp.

Não é um e-commerce completo.
Não há carrinho, checkout ou pagamentos online.

O objetivo principal é:

Exibir produtos de forma clara e rápida e direcionar o usuário para compra via WhatsApp.

🎯 Objetivo do Produto
Mostrar catálogo de perfumes árabes
Permitir navegação simples por produtos
Exibir informações básicas de cada produto
Direcionar compra via WhatsApp
Ser rápido, leve e mobile-first
👥 Público-alvo
Usuários em geral (sem segmentação rígida)
Forte foco em usuários mobile
Pessoas buscando compra rápida de perfumes
Clientes locais (ex: Cuiabá e região)
🧱 Escopo Funcional
1. Home Page
Header com nome: Flor Árabe Perfumaria
Banner simples de destaque
CTA principal: “Ver produtos”
(Opcional) produtos em destaque
2. Página de Catálogo (Produtos)

Página principal do sistema.

Cada produto deve conter:

Imagem do perfume
Nome
Preço
Botão: “Comprar no WhatsApp”

Comportamento:

Layout em grid responsivo
Foco em navegação rápida
Pouco texto, alta visualização
3. Página de Produto (opcional)
Imagem em destaque
Nome
Preço
Descrição curta (máx. 1–3 linhas)
Botão WhatsApp
4. WhatsApp Integration

Cada produto gera um link dinâmico:

https://wa.me/<numero>?text=Quero o perfume: <nome do produto>

Regras:

Mensagem pré-preenchida
Ação direta (sem etapas intermediárias)
Foco em conversão rápida
📦 Modelo de Dados (Product)
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
};
🧠 Estratégia de Gerenciamento de Produtos
📌 Fonte de dados principal: products.ts

Os produtos serão gerenciados manualmente através de um arquivo estático:

/src/data/products.ts
🧱 Decisão de engenharia
NÃO haverá painel administrativo
NÃO haverá sistema de login
NÃO haverá banco de dados nesta fase
✏️ Como adicionar produtos

Para adicionar um novo produto:

Abrir o arquivo products.ts
Copiar um objeto de produto existente
Alterar:
nome
preço
imagem
descrição (opcional)
Salvar
💡 Justificativa

Essa abordagem foi escolhida porque:

projeto é um catálogo simples
baixa necessidade de atualização em tempo real
máxima simplicidade operacional
menor custo e complexidade técnica
evita overengineering (login, CMS, backend)
🖼️ Requisitos de UI/UX
Design mobile-first
Layout simples e direto
Imagens como elemento principal
Botões grandes e claros
Fluxo curto até WhatsApp
Sem excesso de texto
⚙️ Stack Técnica
Next.js (App Router)
TypeScript
Tailwind CSS
Dados estáticos via products.ts
🚫 Fora de escopo
Login / autenticação
Painel admin
Carrinho de compras
Pagamento online
Backend dedicado
Sistema de estoque
📲 Conversão (WhatsApp)

O WhatsApp é o único canal de conversão.

Fluxo:

Produto → clique → WhatsApp pré-preenchido → venda

📈 Critérios de sucesso
Encontrar produto em poucos segundos
Baixo tempo até clique no WhatsApp
Alta taxa de conversão mobile
Navegação simples e intuitiva
🧾 Resumo arquitetural

Site catálogo estático com produtos definidos em products.ts, focado em performance, simplicidade e conversão via WhatsApp.
📲 Estratégia de WhatsApp (Click-to-Buy)

Cada produto terá um botão que direciona diretamente para o WhatsApp com mensagem pré-preenchida.

💬 Formato da mensagem

A mensagem padrão deve ser:

“Olá! Estou vendo este produto: {nome do produto} e gostaria de mais informações ou quero comprar.”

🔗 Estrutura do link

O link será gerado dinamicamente para cada produto:

https://wa.me/<numero>?text=<mensagem codificada>
🧠 Regra de geração da mensagem

Para cada produto:

Inserir o nome do produto dinamicamente
Garantir que a mensagem esteja URL encoded
Manter linguagem simples e natural
📦 Exemplo prático

Produto:

Nome: Asad Lattafa

Mensagem final no WhatsApp:

Olá! Estou vendo este produto: Asad Lattafa e gostaria de mais informações ou quero comprar.

Link final:

https://wa.me/55659972093?text=Ol%C3%A1!%20Estou%20vendo%20este%20produto:%20Asad%20Lattafa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20ou%20quero%20comprar.
🧱 Implementação no sistema (conceitual)

Cada produto no products.ts pode opcionalmente ter:

whatsappMessage?: string;

Mas o padrão recomendado é:

👉 gerar automaticamente com base no name

🎯 Justificativa de UX

Essa abordagem melhora conversão porque:

elimina digitação manual do usuário
mantém contexto do produto
reduz fricção no WhatsApp
aumenta intenção de compra imediata
🚫 Não fazer
não usar mensagens genéricas sem nome do produto
não deixar WhatsApp sem texto pré-preenchido
não adicionar textos longos ou complexos
🧾 Resumo técnico

Cada produto gera automaticamente um link de WhatsApp com mensagem contextual contendo o nome do produto, mantendo o fluxo simples e direto para conversão.