// src/app/(storefront)/product/[slug]/page.tsx
import { notFound } from "next/navigation"; // (PageProps import not required for A)
import ProductDetails, { PDPProduct } from "@/app/(storefront)/components/ProductDetails";
import { bySlug } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>; // <- params is a Promise in Next 15 builds
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = bySlug(slug);
  if (!product) notFound();

  const pdp: PDPProduct = {
    id: product.id,
    slug: product.slug,
    title: product.title,
    price: product.price,
    images: product.gallery,
    description: product.description,
    bullets: product.bullets,
  };

  return <ProductDetails product={pdp} />;
}
