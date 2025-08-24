"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

type State = {
  items: CartItem[];
  count: number; // total quantity
  subtotal: number; // price * qty
};

type Actions = {
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  clear: () => void;
};

const totUp = (items: CartItem[]) => {
  const count = items.reduce((a, b) => a + b.qty, 0);
  const subtotal = items.reduce((a, b) => a + b.qty * b.price, 0);
  return { count, subtotal };
};

export const useCartStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      items: [],
      count: 0,
      subtotal: 0,

      add: (item, qty = 1) => {
        const items = [...get().items];
        const idx = items.findIndex((i) => i.id === item.id);
        if (idx > -1) {
          items[idx] = { ...items[idx], qty: items[idx].qty + qty };
        } else {
          items.push({ ...item, qty });
        }
        set({ items, ...totUp(items) });
      },

      remove: (id) => {
        const items = get().items.filter((i) => i.id !== id);
        set({ items, ...totUp(items) });
      },

      setQty: (id, qty) => {
        const items = get()
          .items.map((i) => (i.id === id ? { ...i, qty } : i))
          .filter((i) => i.qty > 0);
        set({ items, ...totUp(items) });
      },
      inc: (id: string) => {
        const it = get().items.find((i) => i.id === id);
        if (!it) return;
        get().setQty(id, it.qty + 1);
      },
      dec: (id: string) => {
        const it = get().items.find((i) => i.id === id);
        if (!it) return;
        // clamp to >= 1 (UI will prevent 0 via disabled minus)
        const next = Math.max(1, it.qty - 1);
        get().setQty(id, next);
      },
      clear: () => set({ items: [], count: 0, subtotal: 0 }),
    }),
    { name: "ecomo-cart" } // localStorage key
  )
);
