// /src/app/(storefront)/catalog/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import ProductGrid from "../components/ProductGrid";
import { PRODUCTS, type Category } from "@/data/products";

const LABELS: Record<Category | "all", string> = {                    
  all: "All Products",
  cleansers: "Cleansers",
  serums: "Serums",
  moisturizers: "Moisturizers",
  sunscreen: "SPF",
  body: "Body Care",
  hair: "Hair Care",
  tools: "Tools & Accessories",
};

export default function CatalogPage() {
  const sp = useSearchParams();
  const raw = (sp.get("cat") || "all").toLowerCase();

  // validate the category param
  const cat = (["cleansers","serums","moisturizers","sunscreen","body","hair","tools"].includes(raw)
    ? (raw as Category)
    : "all");

  const items = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <h1 className="font-serif text-2xl text-text md:text-3xl">{LABELS[cat]}</h1>

        {/* simple pill filters */}
        <div className="hidden gap-2 sm:flex">
          {(["all","cleansers","serums","moisturizers","sunscreen","body","hair","tools"] as const).map((k) => {
            const active = cat === k || (k === "all" && cat === "all");
            const href = k === "all" ? "/catalog" : `/catalog?cat=${k}`;
            return (
              <a
                key={k}
                href={href}
                className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                  active
                    ? "bg-[#9ECAD6] text-white ring-black"
                    : "bg-[#WEEEEEE] text-text ring-base-border hover:bg-secondary/60"
                }`}
              >
                {LABELS[k]}
              </a>
            );
          })}
        </div>
      </div>

      <ProductGrid
        products={items.map((p) => ({
          id: p.id,
          slug: p.slug,
          title: p.title,
          price: p.price,
          image: p.image,
          badge: p.badge,
        }))}
      />
    </main>
  );
}
