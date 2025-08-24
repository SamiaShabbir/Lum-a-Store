// /src/app/page.tsx (your Home)
import Hero from "./(storefront)/components/Hero";
import CategoryTiles from "./(storefront)/components/CategoryTiles";
import ProductGrid from "./(storefront)/components/ProductGrid";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryTiles />
      <ProductGrid
        products={PRODUCTS.slice(0, 8).map((p) => ({
                id: p.id,
                slug: p.slug,
                title: p.title,
                price: p.price,
                image: p.image,
                badge: p.badge,
              }))}
      />
    </>
  );
}
