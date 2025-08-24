// /src/app/(storefront)/success/page.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessInner() {
  const sp = useSearchParams();
  const orderId = sp.get("order") ?? "—";

  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-serif text-3xl md:text-4xl">Thank you!</h1>
      <p className="mt-3 text-[color:var(--foreground)]/80">
        Your order has been placed successfully.
      </p>

      <div className="mt-6 card-soft p-5">
        <div className="text-sm">Order ID</div>
        <div className="mt-1 text-xl font-medium">{orderId}</div>
      </div>

      <div className="mt-8">
        <Link href="/catalog" className="btn-primary inline-flex">Continue shopping</Link>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-3xl px-4 py-14">
          <div className="card-soft p-5">Loading…</div>
        </main>
      }
    >
      <SuccessInner />
    </Suspense>
  );
}
