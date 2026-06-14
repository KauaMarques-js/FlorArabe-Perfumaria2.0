import Link from "next/link";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import HeroCarousel from "@/components/home/HeroCarousel";
import { generateWhatsAppGeneralLink } from "@/lib/whatsapp";

const BENEFITS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Produtos Originais",
    description: "Fragrâncias autênticas com garantia de procedência",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a4 4 0 0 0-8 0v2" />
      </svg>
    ),
    title: "Pronta Entrega",
    description: "Produtos disponíveis para envio imediato",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Atendimento Personalizado",
    description: "Consultoria exclusiva via WhatsApp",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Entrega em Cuiabá e Região",
    description: "Receba no conforto da sua casa",
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 pt-6 pb-16 md:pt-8 md:pb-24 fade-in fade-delay-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-medium text-text-primary leading-[1.1] tracking-tight">
                Perfumes Árabes que Marcam Presença
              </h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-light">
                Fragrâncias exclusivas para quem busca elegância, autenticidade
                e personalidade em cada detalhe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white transition-all duration-300 hover:bg-gold-hover hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                Explorar Coleção
              </Link>
              <Link
                href={generateWhatsAppGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-8 py-3.5 text-sm font-medium tracking-wide text-gold transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultoria VIP
              </Link>
            </div>
          </div>

          {/* Right — Hero Carousel */}
          <div className="order-1 md:order-2 flex justify-center">
            <HeroCarousel products={products} />
          </div>
        </div>
      </section>

      {/* Gold decorative line */}
      <div className="gold-line max-w-xs mx-auto fade-in fade-delay-2" />

      {/* Benefits Section */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 md:py-24 fade-in fade-delay-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center space-y-3 p-6"
            >
              <div className="text-gold">{benefit.icon}</div>
              <h3 className="font-heading text-base text-text-primary">
                {benefit.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gold decorative line */}
      <div className="gold-line max-w-xs mx-auto fade-in fade-delay-3" />

      {/* Featured Products */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 md:py-24 fade-in fade-delay-3">
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
            Nossos Perfumes
          </h2>
          <p className="text-text-secondary text-sm tracking-wide">
            Fragrâncias selecionadas com exclusividade
          </p>
        </div>

        <ProductGrid products={featuredProducts} />

        <div className="text-center mt-14">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-text-secondary hover:text-gold transition-colors duration-200"
          >
            Ver todos os produtos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
