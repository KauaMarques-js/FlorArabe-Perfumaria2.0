import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12 md:py-24">
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="max-w-md text-center space-y-8">
          <div className="space-y-2">
            <h1 className="font-heading text-5xl md:text-6xl text-gold font-light">
              404
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl text-text-primary">
              Página não encontrada
            </h2>
            <p className="text-text-secondary text-sm tracking-wide">
              Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-text-secondary text-sm">
              Sugestões:
            </p>
            <ul className="text-text-secondary text-sm space-y-2">
              <li>✓ Verifique a URL digitada</li>
              <li>✓ Navegue pelo catálogo de produtos</li>
              <li>✓ Consulte nosso atendimento via WhatsApp</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link
              href="/"
              className="flex-1 bg-gold text-white font-medium py-2.5 rounded-lg hover:bg-gold/90 transition-colors duration-200"
            >
              Voltar Home
            </Link>
            <Link
              href="/produtos"
              className="flex-1 bg-surface border border-border text-text-primary font-medium py-2.5 rounded-lg hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Página não encontrada | Flor Árabe Perfumaria",
  description: "A página que você procura não foi encontrada.",
};
