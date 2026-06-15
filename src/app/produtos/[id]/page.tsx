import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { getProductPromotion, getPromotionSummary } from "@/lib/promotion";
import PromotionPrice from "@/components/promotion/PromotionPrice";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ProductGallery from "@/components/product/ProductGallery";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return { 
      title: "Produto não encontrado | Flor Árabe Perfumaria",
      description: "O produto solicitado não foi encontrado."
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://florarabe.com.br";
  const productUrl = `${baseUrl}/produtos/${product.id}`;
  
  // Short description for social media (max 155 chars)
  const shortDescription = product.description
    ? product.description.split('\n')[0].substring(0, 155)
    : `${product.name} — perfume árabe original. ${formatPrice(product.price)}`;

  return {
    title: `${product.name} | Flor Árabe Perfumaria`,
    description: shortDescription,
    keywords: [product.name, "perfume árabe", "fragrância", "perfume original"],
    
    // Open Graph for social media sharing
    openGraph: {
      type: "article",
      url: productUrl,
      title: `${product.name} | Flor Árabe Perfumaria`,
      description: shortDescription,
      images: [
        {
          url: `${baseUrl}${product.image}`,
          width: 1200,
          height: 1500,
          alt: product.name,
        },
      ],
      siteName: "Flor Árabe Perfumaria",
    },

    // Twitter Card for Twitter sharing
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Flor Árabe Perfumaria`,
      description: shortDescription,
      images: [`${baseUrl}${product.image}`],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const promotion = getProductPromotion(product);
  const summary = getPromotionSummary(product, promotion);

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
      {/* Breadcrumb */}
      <nav className="mb-10" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-text-secondary tracking-wide">
          <li>
            <Link
              href="/"
              className="hover:text-gold transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="text-border">/</span>
          </li>
          <li>
            <Link
              href="/produtos"
              className="hover:text-gold transition-colors duration-200"
            >
              Produtos
            </Link>
          </li>
          <li aria-hidden="true">
            <span className="text-border">/</span>
          </li>
          <li className="text-text-primary">{product.name}</li>
        </ol>
      </nav>

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Image / Gallery */}
        {product.images && product.images.length > 0 ? (
          <ProductGallery images={product.images} alt={product.name} />
        ) : (
          <div className="product-image-wrapper aspect-[3/4] relative rounded-2xl overflow-hidden bg-surface border border-border/30">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`${
                product.image.includes("tabela") ? "object-contain p-4" : "object-cover"
              }`}
              priority
            />
          </div>
        )}

        {/* Info */}
        <div className="space-y-8 md:py-8">
          <div className="space-y-4">
            <h1 className="font-heading text-3xl md:text-4xl text-text-primary leading-tight">
              {product.name}
            </h1>

            <div className="gold-line max-w-16" />

            {summary ? (
              <PromotionPrice promotion={summary} />
            ) : (
              <p className="text-gold text-2xl font-medium">
                {formatPrice(product.price)}
              </p>
            )}
          </div>

          {product.description && (
            <div className="text-text-secondary leading-relaxed text-base whitespace-pre-wrap">
              {product.description}
            </div>
          )}

          <WhatsAppButton
            productName={product.name}
            variant="primary"
            className="w-full sm:w-auto"
          />

          {/* Trust signals */}
          <div className="pt-6 border-t border-border space-y-3">
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Produto original com garantia
            </div>
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a4 4 0 0 0-8 0v2" />
              </svg>
              Pronta entrega
            </div>
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Entrega em Cuiabá e região
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
