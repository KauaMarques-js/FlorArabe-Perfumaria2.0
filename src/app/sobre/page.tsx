import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Flor Árabe Perfumaria",
  description:
    "Conheça a Flor Árabe Perfumaria. Perfumes árabes originais com atendimento personalizado em Cuiabá e região.",
};

export default function SobrePage() {
  return (
    <section className="max-w-[720px] mx-auto px-6 py-16 md:py-24 fade-in fade-delay-1">
      <div className="text-center mb-14 space-y-3">
        <h1 className="font-heading text-3xl md:text-4xl text-text-primary">
          Nossa Essência
        </h1>
        <div className="gold-line max-w-24 mx-auto mt-4 fade-in fade-delay-2" />
      </div>

      <div className="space-y-8 text-text-secondary leading-relaxed">
        <p className="fade-in fade-delay-2">
          A <span className="text-text-primary font-medium">Flor Árabe Perfumaria</span> nasceu
          da paixão por fragrâncias que contam histórias. Acreditamos que um
          perfume vai além do aroma — é uma extensão da sua personalidade, uma
          marca invisível que permanece na memória de quem cruza o seu caminho.
        </p>

        <p className="fade-in fade-delay-3">
          Trabalhamos exclusivamente com perfumes árabes originais, selecionados
          com cuidado por sua qualidade, fixação e singularidade. Cada
          fragrância do nosso catálogo foi escolhida para oferecer uma
          experiência olfativa única — sofisticada, autêntica e memorável.
        </p>

        <p className="fade-in fade-delay-4">
          Nosso compromisso é simples: oferecer produtos genuínos com
          atendimento personalizado. Cada cliente recebe atenção individual para
          encontrar a fragrância perfeita para o seu estilo e ocasião.
        </p>

        <div className="gold-line max-w-16 mx-auto my-12 fade-in fade-delay-3" />

        <div className="text-center space-y-6">
          <h2 className="font-heading text-2xl text-text-primary fade-in fade-delay-3">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
            <div className="space-y-2 fade-in fade-delay-3">
              <h3 className="font-heading text-base text-text-primary">
                Autenticidade
              </h3>
              <p className="text-sm">
                Apenas perfumes originais com procedência garantida.
              </p>
            </div>

            <div className="space-y-2 fade-in fade-delay-4">
              <h3 className="font-heading text-base text-text-primary">
                Exclusividade
              </h3>
              <p className="text-sm">
                Fragrâncias selecionadas que você não encontra em qualquer lugar.
              </p>
            </div>

            <div className="space-y-2 fade-in fade-delay-4">
              <h3 className="font-heading text-base text-text-primary">
                Proximidade
              </h3>
              <p className="text-sm">
                Atendimento humano e personalizado, sempre via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
