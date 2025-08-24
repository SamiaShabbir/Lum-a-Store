"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

type Toast = { id: string; title: string; desc?: string; actionHref?: string; actionLabel?: string };
type Ctx = { push: (t: Omit<Toast, "id">) => void };

const ToastCtx = createContext<Ctx | null>(null);

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider/>");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((t: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).slice(2, 9);
    const toast = { id, ...t };
    setToasts((prev) => [...prev, toast]);
    // auto dismiss after 2.8s
    setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), 2800);
  }, []);

  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <Toaster toasts={toasts} />
    </ToastCtx.Provider>
  );
}

function Toaster({ toasts }: { toasts: Toast[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      className="
        pointer-events-none fixed top-4 right-4 z-[70]
        flex w-full max-w-sm flex-col gap-3
        md:top-6 md:right-6
      "
      aria-live="polite"
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="
            pointer-events-auto card
            border border-[var(--card-ring)]
            bg-[var(--card-bg)]/95 backdrop-blur
            p-4 shadow-[var(--card-shadow)]
            animate-[toast-in_.18s_ease-out]
          "
          role="status"
        >
          <div className="text-sm text-black">
            <span className="font-semibold">{t.title}</span>
            {t.desc ? (
              <span className="text-black"> — {t.desc}</span>
            ) : null}
          </div>

          {t.actionHref ? (
            <a
              href={t.actionHref}
              className="
                mt-3 inline-flex items-center gap-2
                rounded-full px-3 py-1.5 text-xs
                text-white
                bg-[var(--success)]
                hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60
              "
            >
              {t.actionLabel ?? "View"}
            </a>
          ) : null}
        </div>
      ))}
    </div>,
    document.body
  );
}
