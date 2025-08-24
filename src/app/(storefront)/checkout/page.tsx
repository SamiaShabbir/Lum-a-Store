"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { formatCurrency } from "@/lib/format";
import { useToast } from "@/app/(storefront)/components/Toaster";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  remember: boolean;
};

const STORAGE_KEY = "ecomo-checkout";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, count, clear } = useCartStore();
  const { push } = useToast();

  // simple shipping + tax math (same as cart)
  const shipping = useMemo(() => (subtotal >= 50 || subtotal === 0 ? 0 : 4.99), [subtotal]);
  const tax = useMemo(() => Math.round(subtotal * 0.08 * 100) / 100, [subtotal]);
  const total = useMemo(() => subtotal + shipping + tax, [subtotal, shipping, tax]);

  // redirect if cart empty
  useEffect(() => {
    if (count === 0) router.replace("/cart");
  }, [count, router]);

  const [form, setForm] = useState<Form>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      remember: true,
    };
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const onChange =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const val = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
      setForm((f) => ({ ...f, [key]: val }));
    };

  function validate(f: Form) {
    const err: Record<string, string> = {};
    if (!f.firstName.trim()) err.firstName = "Required";
    if (!f.lastName.trim()) err.lastName = "Required";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = "Enter a valid email";
    if (!/^[\d+\-\s()]{7,}$/.test(f.phone)) err.phone = "Enter a valid phone";
    if (!f.address1.trim()) err.address1 = "Required";
    if (!f.city.trim()) err.city = "Required";
    if (!f.state.trim()) err.state = "Required";
    if (!f.zip.trim()) err.zip = "Required";
    if (!f.country.trim()) err.country = "Required";
    return err;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = validate(form);
    setErrors(err);
    if (Object.keys(err).length) return;

    // optionally remember
    if (form.remember) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }

    // simulate order
    const orderId = "EC" + Math.random().toString(36).slice(2, 8).toUpperCase();
    clear();
    push({ title: "Order placed", desc: `${form.firstName}, thanks for your purchase!` });
    router.push(`/success?order=${orderId}`);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <h1 className="font-serif text-2xl md:text-3xl">Checkout</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
        {/* Form column */}
        <form className="card-soft p-6 no-transform" onSubmit={handleSubmit} noValidate>
          <h2 className="text-lg font-semibold text-main">Shipping details</h2>

          <div className="form-grid mt-4">
            <div>
              <label className="label-soft">First name</label>
              <input className="input-soft" value={form.firstName} onChange={onChange("firstName")} />
              {errors.firstName && <p className="error-soft">{errors.firstName}</p>}
            </div>

            <div>
              <label className="label-soft">Last name</label>
              <input className="input-soft" value={form.lastName} onChange={onChange("lastName")} />
              {errors.lastName && <p className="error-soft">{errors.lastName}</p>}
            </div>

            <div>
              <label className="label-soft">Email</label>
              <input className="input-soft" type="email" value={form.email} onChange={onChange("email")} />
              {errors.email && <p className="error-soft">{errors.email}</p>}
            </div>

            <div>
              <label className="label-soft">Phone</label>
              <input className="input-soft" value={form.phone} onChange={onChange("phone")} />
              {errors.phone && <p className="error-soft">{errors.phone}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="label-soft">Address</label>
              <input className="input-soft" value={form.address1} onChange={onChange("address1")} />
              {errors.address1 && <p className="error-soft">{errors.address1}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="label-soft">Address 2 (optional)</label>
              <input className="input-soft" value={form.address2} onChange={onChange("address2")} />
            </div>

            <div>
              <label className="label-soft">City</label>
              <input className="input-soft" value={form.city} onChange={onChange("city")} />
              {errors.city && <p className="error-soft">{errors.city}</p>}
            </div>

            <div>
              <label className="label-soft">State/Province</label>
              <input className="input-soft" value={form.state} onChange={onChange("state")} />
              {errors.state && <p className="error-soft">{errors.state}</p>}
            </div>

            <div>
              <label className="label-soft">ZIP / Postal code</label>
              <input className="input-soft" value={form.zip} onChange={onChange("zip")} />
              {errors.zip && <p className="error-soft">{errors.zip}</p>}
            </div>

            <div>
              <label className="label-soft">Country</label>
              <select className="input-soft" value={form.country} onChange={onChange("country")}>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Other</option>
              </select>
              {errors.country && <p className="error-soft">{errors.country}</p>}
            </div>
          </div>

          <label className="mt-4 inline-flex items-center gap-2">
            <input type="checkbox" checked={form.remember} onChange={onChange("remember")} />
            <span className="text-sm link-soft">Save my details on this device</span>
          </label>

          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="btn-primary">Place order</button>
            <Link href="/cart" className="link-soft">Back to cart</Link>
          </div>
        </form>

        {/* Summary column */}
        <aside className="card-soft p-6 h-max">
          <h2 className="text-lg font-semibold text-main">Order summary</h2>

          <div className="mt-3 flex items-center justify-between text-sm text-main">
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

          <div className="mt-4" style={{ borderTop: `1px solid var(--card-ring)` }}>
            <div className="flex items-center justify-between text-base font-medium text-main pt-4">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          <p className="mt-3 text-xs text-muted">Free shipping over $50 • 30‑day returns</p>
        </aside>
      </div>
    </main>
  );
}
