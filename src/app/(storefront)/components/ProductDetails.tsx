"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cart";
import { useToast } from "../components/Toaster";

export type PDPProduct = {
  id: string;
  slug: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  bullets?: string[];
};

export default function ProductDetails({ product }: { product: PDPProduct }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const add = useCartStore((s) => s.add);
  const [mounted, setMounted] = useState(false);
  const { push } = useToast();
  // pick any colors you like (you can swap these later)
  const BULLET_COLORS = [
    "#F6F1E9", // plum
    "#FFD93D", // rose
    "#4F200D", // amber
    "#FF9A00", // emerald
    "#FF0066", // sky
    "#D3DAD9", // violet
    "#E5BEB5", // red
    "#6A0066",
    "#F78D60",
    "#468A9A",
    "#E4004B",
    "#C9CDCF"

  ];

  // deterministic hash → index (no randomness → no hydration mismatch)
  function hashToIndex(input: string, mod: number) {
    let h = 0;
    for (let i = 0; i < input.length; i++)
      h = (h * 31 + input.charCodeAt(i)) | 0;
    return Math.abs(h) % mod;
  }
  useEffect(() => setMounted(true), []);

  // 🔑 Keyboard navigation when lightbox is open
  useEffect(() => {
    if (!lightbox) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActive((prev) =>
          prev === product.images.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "ArrowLeft") {
        setActive((prev) =>
          prev === 0 ? product.images.length - 1 : prev - 1
        );
      } else if (e.key === "Escape") {
        setLightbox(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, product.images.length]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Gallery */}
        <div>
          <div
            className="relative card overflow-hidden aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5] cursor-zoom-in"
            onClick={() => setLightbox(true)}
          >
            <Image
              key={product.images[active]}
              src={product.images[active]}
              alt={`${product.title} image ${active + 1}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-5 gap-3 sm:grid-cols-6">
            {product.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative aspect-square overflow-hidden rounded-xl transition ring-1 ${
                  i === active
                    ? "ring-[#6A0066]"
                    : "ring-[#d7deea] hover:ring-[#6A0066]/50"
                }`}
              >
                <Image
                  fill
                  src={src}
                  alt={`thumb ${i + 1}`}
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:pl-6">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground">
            {product.title}
          </h1>

          <div className="mt-3 text-xl font-medium text-foreground">
            ${product.price.toFixed(2)}
          </div>

          <p className="mt-5 max-w-prose text-[var(--foreground)]/80">
            {product.description}
          </p>

          {product.bullets?.length ? (
            <ul className="mt-5 space-y-2 text-sm">
              {product.bullets.map((b, i) => {
                const color =
                  BULLET_COLORS[
                    hashToIndex(`${product.id}-${b}-${i}`, BULLET_COLORS.length)
                  ];
                return (
                  <li key={b} className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: color }}
                      aria-hidden
                    />
                    <span className="text-[var(--foreground)]/75">{b}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}

          {/* Sticky card CTA (desktop) */}
          <div className="mt-8 hidden md:block">
            <div className="sticky top-24 card p-5">
              <button
                className="btn-primary w-full"
                onClick={() => {
                  add(
                    {
                      id: product.id,
                      slug: product.slug,
                      title: product.title,
                      price: product.price,
                      image: product.images[0],
                    },
                    1
                  );
                  push({
                    title: "Added to cart",
                    desc: product.title,
                    actionHref: "/cart",
                    actionLabel: "View cart",
                  });
                }}
              >
                Add to Cart
              </button>
              <p className="mt-3 text-xs text-[var(--foreground)]/70">
                Free shipping over $50 • 30‑day returns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky ATC */}
      {mounted && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d7deea] bg-[rgba(246,247,251,.92)] px-4 py-3 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <div className="text-sm text-foreground">
              <span className="font-medium">${product.price.toFixed(2)}</span>
              <span className="pl-2 text-[var(--foreground)]/70">/ 30 ml</span>
            </div>
            <button
              className="ml-auto btn-primary px-6 py-2.5 text-sm"
              onClick={() => {
                add(
                  {
                    id: product.id,
                    slug: product.slug,
                    title: product.title,
                    price: product.price,
                    image: product.images[0],
                  },
                  1
                );
                push({
                  title: "Added to cart",
                  desc: product.title,
                  actionHref: "/cart",
                  actionLabel: "View cart",
                });
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setLightbox(false)}
          >
            ×
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 text-white text-4xl"
            onClick={() =>
              setActive((prev) =>
                prev === 0 ? product.images.length - 1 : prev - 1
              )
            }
          >
            ‹
          </button>

          {/* Image */}
          <div className="relative w-[90%] h-[80%]">
            <Image
              src={product.images[active]}
              alt={`preview ${active + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 text-white text-4xl"
            onClick={() =>
              setActive((prev) =>
                prev === product.images.length - 1 ? 0 : prev + 1
              )
            }
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
