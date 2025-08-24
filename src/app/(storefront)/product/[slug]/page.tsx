// /src/app/(storefront)/product/[slug]/page.tsx
import ProductDetails, {
  type PDPProduct,
} from "../../components/ProductDetails";
import { bySlug } from "@/data/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = bySlug(params.slug);
  if (!p) return notFound();

  const product: PDPProduct = {
    id: p.id,
    slug: p.slug,
    title: p.title,
    price: p.price,
    images: p.gallery.length ? p.gallery : [p.image],
    description: p.description,
    bullets: p.bullets,
  };

  return <ProductDetails product={product} />;
}
