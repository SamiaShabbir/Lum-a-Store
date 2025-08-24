"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const sp = useSearchParams();
  const order = sp.get("order");

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h1 className="font-serif text-3xl text-text">Thank you! 🎉</h1>
      <p className="mt-3 text-text">
        Your order {order ? <span className="font-medium">#{order}</span> : null} has been placed.
      </p>
      <p className="mt-1 text-text-muted">You’ll get a confirmation email (demo).</p>

      <div className="mt-8">
        <Link href="/catalog" className="rounded-full bg-primary px-5 py-3 text-white hover:opacity-90">
          Continue shopping
        </Link>
      </div>
    </main>
  );
}
