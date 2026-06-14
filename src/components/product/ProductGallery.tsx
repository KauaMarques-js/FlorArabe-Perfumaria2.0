"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="product-image-wrapper aspect-[3/4] relative rounded-2xl overflow-hidden bg-surface border border-border/30 flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Imagem ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`${
            images[currentIndex].includes("tabela") ? "object-contain p-4" : "object-cover"
          } transition-opacity duration-300`}
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                currentIndex === index
                  ? "border-gold scale-100 opacity-100"
                  : "border-transparent hover:border-gold/50 scale-95 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`${alt} - Miniatura ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
