"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { formatCurrency } from "@/lib/format";
import { useEffect, useState } from "react";
import { useToast } from "@/app/(storefront)/components/Toaster";

export default function CartPage() {
  const router = useRouter();

  // hooks at the top
  const { items, subtotal, count, setQty, remove } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const { push } = useToast();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 4.99;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + shipping + tax;

 const handleCheckout = () => {
  router.push("/checkout");
};

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <h1 className="font-serif text-2xl md:text-3xl text-light">Your Cart</h1>

      {items.length === 0 ? (
        <div className="mt-8 card-soft p-6 text-main">
          Your cart is empty.{" "}
          <Link className="link-soft underline" href="/catalog">
            Continue shopping →
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
          {/* Items */}
          <div className="surface p-4 md:p-5">
            <div className="space-y-4">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center gap-4 card-soft p-4"
                >
                  <div className="thumb h-20 w-20">
                    <Image
                      src={it.image}
                      alt={it.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/product/${it.slug}`}
                      className="truncate font-medium link-soft"
                    >
                      {it.title}
                    </Link>

                    <div className="mt-1 text-sm text-muted">
                      {formatCurrency(it.price)}
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <label className="text-sm text-muted">Qty</label>

                      <div className="qty">
                        <button
                          onClick={() => setQty(it.id, Math.max(1, it.qty - 1))}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{it.qty}</span>
                        <button
                          onClick={() => setQty(it.id, it.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn-remove ml-2"
                        onClick={() => {
                          remove(it.id);
                          push({ title: "Removed from cart", desc: it.title });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="hidden text-right md:block">
                    <div className="font-medium text-main">
                      {formatCurrency(it.price * it.qty)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <aside className="card-soft p-5 h-max">
            <div className="flex items-center justify-between text-sm text-main">
              <span>Items</span>
              <span>{count}</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm text-main">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm text-main">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm text-main">
              <span>Tax (est.)</span>
              <span>{formatCurrency(tax)}</span>
            </div>

            <div
              className="mt-4"
              style={{ borderTop: `1px solid var(--card-ring)` }}
            >
              <div className="flex items-center justify-between text-base font-medium text-main pt-4">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <button
              className="btn-primary w-full mt-5"
              disabled={items.length === 0}
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <p className="mt-3 text-center text-xs text-muted">
              Free shipping over $50 • 30‑day returns
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}
