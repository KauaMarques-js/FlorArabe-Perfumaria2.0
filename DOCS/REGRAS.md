📄 Flor Árabe Perfumaria — RN, RF, RNF e UC
🧠 1. REGRAS DE NEGÓCIO (RN)
📌 RN01 — Natureza do sistema

O sistema é um catálogo de produtos, não um e-commerce.

Não existe carrinho, pagamento ou checkout.

📌 RN02 — Canal de venda

Toda conversão ocorre exclusivamente via WhatsApp.

Cada produto possui um link direto para WhatsApp
A mensagem deve conter o nome do produto automaticamente
📌 RN03 — Produtos
Produtos são armazenados em um arquivo estático (products.ts)
Cada produto deve conter:
id
nome
preço
imagem
descrição (opcional)
📌 RN04 — Atualização de produtos
Apenas manutenção manual no products.ts
Não existe painel administrativo
Não existe login
📌 RN05 — Navegação
Usuário pode visualizar lista de produtos sem restrições
Não há autenticação ou restrição de acesso
📌 RN06 — Mensagem WhatsApp

Toda mensagem gerada deve seguir o padrão:

"Olá! Estou vendo este produto: {nome} e gostaria de mais informações."

⚙️ 2. REQUISITOS FUNCIONAIS (RF)
🧩 RF01 — Exibição de catálogo

O sistema deve exibir uma lista de produtos na página principal de produtos.

🧩 RF02 — Visualização de produto

O sistema deve permitir visualizar detalhes de um produto individual.

🧩 RF03 — Listagem de produtos

O sistema deve renderizar produtos a partir do arquivo products.ts.

🧩 RF04 — Acesso ao WhatsApp

O sistema deve gerar um link de WhatsApp para cada produto.

🧩 RF05 — Mensagem dinâmica

O sistema deve inserir automaticamente o nome do produto na mensagem enviada ao WhatsApp.

🧩 RF06 — Navegação entre páginas

O sistema deve permitir navegação entre:

Home
Lista de produtos
Página de produto
Contato (opcional)
🧩 RF07 — Responsividade

O sistema deve funcionar em dispositivos mobile e desktop.

🧩 RF08 — Exibição de imagens

O sistema deve exibir imagens dos produtos armazenadas localmente ou em CDN.

🚀 3. REQUISITOS NÃO FUNCIONAIS (RNF)
⚡ RNF01 — Performance
O site deve carregar rapidamente (otimizado para mobile)
Uso de imagens otimizadas
⚡ RNF02 — Escalabilidade
Estrutura preparada para futura migração de products.ts para banco de dados (ex: Supabase)
⚡ RNF03 — Manutenibilidade
Código modularizado em componentes reutilizáveis
Separação clara entre UI, dados e lógica
⚡ RNF04 — Usabilidade
Interface simples e intuitiva
Máximo 2 cliques até WhatsApp
⚡ RNF05 — SEO básico
Páginas indexáveis pelo Google
Estrutura semântica simples
⚡ RNF06 — Disponibilidade
Hospedagem via Vercel com alta disponibilidade
⚡ RNF07 — Segurança
Não há dados sensíveis
Sem autenticação
Sem armazenamento de dados de usuário
⚡ RNF08 — Compatibilidade
Suporte a navegadores modernos
Mobile-first obrigatório
👤 4. CASOS DE USO (UC)
🧑‍💻 UC01 — Visualizar catálogo de produtos

Ator: Usuário

Fluxo principal:

Usuário acessa o site
Visualiza lista de produtos
Navega entre itens

Resultado:

Produtos exibidos corretamente
🧑‍💻 UC02 — Visualizar produto específico

Ator: Usuário

Fluxo:

Usuário clica em um produto
Sistema abre página do produto
Exibe imagem, nome, preço e descrição

Resultado:

Produto detalhado exibido
🧑‍💻 UC03 — Iniciar compra via WhatsApp

Ator: Usuário

Fluxo:

Usuário clica em “Comprar no WhatsApp”
Sistema gera link com mensagem automática
Usuário é redirecionado para WhatsApp

Resultado:

Conversa iniciada com contexto do produto
🧑‍💻 UC04 — Navegar entre páginas

Ator: Usuário

Fluxo:

Usuário acessa menu
Escolhe página (Home / Produtos / Contato)
Sistema renderiza página correspondente
🧑‍💻 UC05 — Manter catálogo (admin técnico)

Ator: Administrador (desenvolvedor)

Fluxo:

Abre products.ts
Adiciona/edita/remove produto
Commit no repositório

Resultado:

Catálogo atualizado no site
🧾 RESUMO ARQUITETURAL DO COMPORTAMENTO

O sistema funciona como um catálogo estático renderizado em Next.js, onde os produtos são definidos em código e a conversão ocorre exclusivamente via WhatsApp, sem backend ou autenticação.

🚀 VISÃO FINAL DO SISTEMA
Simples
Rápido
Sem login
Sem backend
Alta conversão via WhatsApp
Controle manual dos produtos