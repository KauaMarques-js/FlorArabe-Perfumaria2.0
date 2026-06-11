"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

type HeroCarouselProps = {
  products: Product[];
};

export default function HeroCarousel({ products }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [badgeAnimate, setBadgeAnimate] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  }, [products.length]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diffX > swipeThreshold) {
      nextSlide();
    } else if (diffX < -swipeThreshold) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Restart badge entrance animation on slide change without remounting the DOM node
  useEffect(() => {
    setBadgeAnimate(false);
    const raf = requestAnimationFrame(() => setBadgeAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, [currentIndex]);

  return (
    <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] group flex flex-col items-center">
      {/* Slider Container */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-full overflow-hidden rounded-2xl bg-surface border border-border/30 p-4 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-gold/10 transition-shadow duration-500"
      >
        {products.map((product, index) => {
          const isActive = index === currentIndex;
          return (
            <Link
              key={product.id}
              href={`/produtos/${product.id}`}
              className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 scale-95 translate-x-4 pointer-events-none"
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                priority={index === 0}
              />
            </Link>
          );
        })}

        {/* Floating Product Info Badge */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-surface-elevated/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-border/40 shadow-sm hover:bg-surface-elevated flex items-center gap-3 z-10 transition-colors duration-300${
            badgeAnimate ? " carousel-badge-enter" : ""
          }`}
        >
          <Link
            href={`/produtos/${products[currentIndex].id}`}
            className="flex items-center gap-2"
          >
            <span className="text-xs font-semibold tracking-wide text-text-primary whitespace-nowrap">
              {products[currentIndex].name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            <span className="text-xs font-medium text-gold font-sans whitespace-nowrap">
              {formatPrice(products[currentIndex].price)}
            </span>
          </Link>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-elevated/75 backdrop-blur-sm border border-border/20 flex items-center justify-center text-text-secondary hover:text-gold hover:bg-surface-elevated hover:scale-110 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
          aria-label="Produto anterior"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-elevated/75 backdrop-blur-sm border border-border/20 flex items-center justify-center text-text-secondary hover:text-gold hover:bg-surface-elevated hover:scale-110 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
          aria-label="Próximo produto"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots indicators */}
      <div className="flex gap-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={index === currentIndex ? { boxShadow: "0 0 8px var(--color-gold)" } : {}}
            className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentIndex
                ? "bg-gold w-6"
                : "bg-border/60 hover:bg-gold/40"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
