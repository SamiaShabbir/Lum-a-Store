import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h1 className="font-serif text-3xl text-text">Checkout cancelled</h1>
      <p className="mt-3 text-text-muted">
        No charges were made. You can resume shopping anytime.
      </p>
      <div className="mt-8">
        <Link href="/cart" className="rounded-full bg-secondary px-5 py-3 ring-1 ring-base-border hover:bg-secondary/80">
          Back to cart
        </Link>
      </div>
    </main>
  );
}
