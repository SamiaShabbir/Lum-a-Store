"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cart";
import { useToast } from "./Toaster";

export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  badge?: "New" | "Sale" | "Bestseller";
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const add = useCartStore((s) => s.add);
  const { push } = useToast();

  return (
    <div
      className="group rounded-3xl ring-1 ring-base-border overflow-hidden transition-shadow hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />

          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs text-text backdrop-blur ring-1 ring-base-border product-slu">
              {product.badge}
            </span>
          )}

          {/* Hover ATC */}
          <div className="pointer-events-none absolute inset-x-3 bottom-3">
            <div
              className={`pointer-events-auto transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                className="w-full rounded-full bg-[#6A0066] px-4 py-2 text-sm font-medium hover:opacity-90"
                aria-label={`Add ${product.title} to cart`}
                onClick={(e) => {
                  e.preventDefault(); // don’t navigate
                  add(
                    {
                      id: product.id,
                      slug: product.slug,
                      title: product.title,
                      price: product.price,
                      image: product.image,
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
        </div>

        <div className="p-4">
          <h3 className="line-clamp-1 text-sm text-text">{product.title}</h3>
          <p className="mt-1 text-[15px] font-medium text-text">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}
