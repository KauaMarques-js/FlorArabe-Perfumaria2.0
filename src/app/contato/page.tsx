import { Metadata } from "next";
import Link from "next/link";
import { generateWhatsAppGeneralLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato | Flor Árabe Perfumaria",
  description:
    "Entre em contato com a Flor Árabe Perfumaria via WhatsApp. Atendimento personalizado em Cuiabá e região.",
};

const CONTACT_CHANNELS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    description: "Seu canal direto para atendimento e pedidos.",
    href: generateWhatsAppGeneralLink(),
    action: "Iniciar conversa",
    external: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Instagram",
    description: `@florarabe.perfumaria 
    | Inspire-se com nossas novidades e coleções`,
    href: `https://instagram.com/florarabe.perfumaria`,
    action: "Seguir no Instagram",
    external: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Entregas em Cuiabá e Região",
    description: "Operação totalmente online, com praticidade e segurança. Não possuímos loja física.",
    href: "",
    action: "Envio Imediato",
    external: false,
  },
  
];

export default function ContatoPage() {
  return (
    <section className="max-w-[600px] mx-auto px-6 py-12 md:py-20 fade-in fade-delay-1">
      <div className="text-center mb-10 space-y-3">
        <h1 className="font-heading text-3xl md:text-4xl text-text-primary">
          Fale Conosco
        </h1>
        <p className="text-text-secondary text-sm md:text-base font-light tracking-wide">
          Descubra a fragrância que combina com sua essência. Nossa equipe está pronta para oferecer um atendimento exclusivo e auxiliar na escolha do perfume perfeito.
        </p>
        <div className="gold-line max-w-16 mx-auto mt-4" />
      </div>

      <div className="space-y-4">
        {CONTACT_CHANNELS.map((channel, idx) => {
          const content = (
            <>
              <div className="text-gold shrink-0 transition-transform duration-300 group-hover:scale-110">{channel.icon}</div>

              <div className="flex-1 min-w-0">
                <h2 className="font-heading text-base md:text-lg text-text-primary group-hover:text-gold transition-colors duration-300">
                  {channel.label}
                </h2>
                <p className="text-xs md:text-sm text-text-secondary font-light">{channel.description}</p>
              </div>

              <span className="hidden sm:inline-flex text-[10px] md:text-xs tracking-widest uppercase text-text-secondary group-hover:text-gold transition-colors duration-300">
                {channel.action}
              </span>
            </>
          );

          const className = `group cursor-pointer flex items-center gap-5 p-5 bg-surface rounded-2xl border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 hover:border-gold/30 fade-in fade-delay-${Math.min(4, idx + 1)}`;

          if (channel.href) {
            return (
              <Link
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className={className}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={channel.label} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
