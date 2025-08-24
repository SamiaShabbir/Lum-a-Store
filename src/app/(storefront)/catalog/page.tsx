// /src/app/(storefront)/catalog/page.tsx
import Link from "next/link";
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

type SearchParams = { cat?: string };

export default async function CatalogPage({
  searchParams,
}: {
  // Next.js 15: searchParams is a Promise in RSC
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const raw = (sp.cat ?? "all").toLowerCase();

  const valid = new Set<Category>([
    "cleansers",
    "serums",
    "moisturizers",
    "sunscreen",
    "body",
    "hair",
    "tools",
  ]);

  const cat: Category | "all" = valid.has(raw as Category)
    ? (raw as Category)
    : "all";

  const items =
    cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <h1 className="font-serif text-2xl text-text md:text-3xl">
          {LABELS[cat]}
        </h1>

        {/* simple pill filters */}
        <div className="hidden gap-2 sm:flex">
          {(
            ["all", "cleansers", "serums", "moisturizers", "sunscreen", "body", "hair", "tools"] as const
          ).map((k) => {
            const active = cat === k || (k === "all" && cat === "all");
            const href = k === "all" ? "/catalog" : `/catalog?cat=${k}`;
            return (
              <Link
                key={k}
                href={href}
                className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                  active
                    ? "bg-[#9ECAD6] text-white ring-black "
                    : "bg-[#EEEEEE] text-black text-text ring-base-border hover:bg-secondary/60"
                }`}
              >
                {LABELS[k]}
              </Link>
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
