import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageFade from "@/components/shared/PageFade";
import PromotionBanner from "@/components/promotion/PromotionBanner";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flor Árabe Perfumaria | Perfumes Árabes Originais",
  description:
    "Perfumes árabes originais com atendimento rápido via WhatsApp. Entrega em Cuiabá e região.",
};

// Inline script to prevent flash of wrong theme (FOUC)
// Runs synchronously before React hydrates to set the correct class
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text-primary">
        <PromotionBanner />
        <Header />
        <main className="flex-1">
          <PageFade className="min-h-screen" delay={60}>
            {children}
          </PageFade>
        </main>
        <Footer />
      </body>
    </html>
  );
}
