import ProductCard, { Product } from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-serif text-2xl text-text md:text-3xl">Featured</h2>
        <a href="/catalog" className="text-sm text-text-muted hover:text-primary">
          View all →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
