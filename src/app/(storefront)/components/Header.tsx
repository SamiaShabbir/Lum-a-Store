"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartCount = useCartStore((s) => s.count);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header sticky top-0 z-50 border-b border-base-border ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <button
              className="header-mobile-menu-btn inline-flex md:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <Link href="/" className="header-logo flex items-center gap-2">
              <div className="header-logo-ring relative h-8 w-8 overflow-hidden rounded-full bg-secondary ring-1 ring-secondary">
                <Image
                  src="/logo.png"
                  alt="Luméa"
                  fill
                  sizes="32px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="font-serif text-lg tracking-wide text-foreground">
                Luméa
              </span>
            </Link>
          </div>

          {/* Center: Main Nav (desktop) */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="header-nav-link text-sm text-foreground"
                >
                  Home
                </Link>
              </li>

              {/* Shop with Mega Menu */}
              <li className="group relative">
                <button
                  className="header-shop-dropdown text-sm text-foreground pr-5"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </button>

                {/* Mega menu panel */}
                <div
                  className="header-mega-menu invisible absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 opacity-0 transition
                             group-hover:visible group-hover:opacity-100"
                  role="menu"
                >
                  <div className="header-mega-menu-panel mt-3 rounded-2xl p-6 shadow-xl">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Col 1 */}
                      <div>
                        <p className="header-mega-category-title">Face</p>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <Link
                              href="/catalog?cat=cleansers"
                              className="header-mega-link"
                            >
                              Cleansers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/catalog?cat=serums"
                              className="header-mega-link"
                            >
                              Serums
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/catalog?cat=moisturizers"
                              className="header-mega-link"
                            >
                              Moisturizers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/catalog?cat=sunscreen"
                              className="header-mega-link"
                            >
                              SPF
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Col 2 */}
                      <div>
                        <p className="header-mega-category-title">
                          Body & Hair
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <Link
                              href="/catalog?cat=body"
                              className="header-mega-link"
                            >
                              Body Care
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/catalog?cat=hair"
                              className="header-mega-link"
                            >
                              Hair Care
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/catalog?cat=tools"
                              className="header-mega-link"
                            >
                              Tools & Accessories
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Col 3: Feature */}
                      <Link
                        href="/product/radiance-serum"
                        className="header-mega-feature-card relative overflow-hidden rounded-xl ring-1 ring-base-border"
                      >
                        <Image
                          src="/serum.jpg"
                          alt="Featured"
                          width={480}
                          height={320}
                          className="h-36 w-full object-cover"
                        />
                        <div className="p-3 bg-white/95 backdrop-blur">
                          <p className="font-medium text-text text-black">
                            Radiance Serum
                          </p>
                          <p className="mt-1 text-sm text-text-muted text-black">
                            Niacinamide + HA • New
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-5 flex items-center justify-between">
                      <Link
                        href="/catalog?tag=new"
                        className="header-mega-bottom-link text-sm"
                      >
                        New Arrivals
                      </Link>
                      <Link
                        href="/catalog?tag=bestsellers"
                        className="header-mega-bottom-link text-sm"
                      >
                        Bestsellers
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/catalog?tag=new"
                  className="header-nav-link text-sm text-foreground"
                >
                  New
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="header-nav-link text-sm text-foreground"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="header-action-icon hidden md:inline-flex" aria-label="Search">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M20 20l-3.2-3.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            
            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="header-action-icon relative inline-flex"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 4h2l2.4 11.4A2 2 0 0 0 9.4 17h7.8a2 2 0 0 0 2-1.6L21 8H6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="20" r="1.5" fill="currentColor" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
              </svg>

              {/* Badge */}
              {mounted && cartCount > 0 && (
                <span
                  className="header-cart-badge absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center 
                 rounded-full bg-red-500 px-1.5 text-xs font-bold text-white shadow-md"
                  aria-live="polite"
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition ${
          mobileOpen ? "visible" : "invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`header-mobile-backdrop absolute inset-0 bg-black/40 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <aside
          className={`header-mobile-drawer ${mobileOpen ? "open" : ""} absolute left-0 top-0 h-full w-80 max-w-[85vw] transform p-5 shadow-2xl transition
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="font-serif text-lg text-foreground">Menu</span>
            <button
              className="header-mobile-close-btn"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="header-mobile-nav-link block"
                >
                  Home
                </Link>
              </li>

              {/* Collapsible Shop */}
              <li>
                <details className="group">
                  <summary className="header-mobile-shop-summary cursor-pointer list-none">
                    <span className="inline-flex items-center justify-between w-full">
                      <span>Shop</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        className="transition group-open:rotate-180"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-2 space-y-1 pl-3 text-sm">
                    <Link
                      href="/catalog?cat=cleansers"
                      onClick={() => setMobileOpen(false)}
                      className="header-mobile-shop-link"
                    >
                      Cleansers
                    </Link>
                    <Link
                      href="/catalog?cat=serums"
                      onClick={() => setMobileOpen(false)}
                      className="header-mobile-shop-link"
                    >
                      Serums
                    </Link>
                    <Link
                      href="/catalog?cat=moisturizers"
                      onClick={() => setMobileOpen(false)}
                      className="header-mobile-shop-link"
                    >
                      Moisturizers
                    </Link>
                    <Link
                      href="/catalog?cat=sunscreen"
                      onClick={() => setMobileOpen(false)}
                      className="header-mobile-shop-link"
                    >
                      SPF
                    </Link>
                    <Link
                      href="/catalog?cat=body"
                      onClick={() => setMobileOpen(false)}
                      className="header-mobile-shop-link"
                    >
                      Body Care
                    </Link>
                    <Link
                      href="/catalog?cat=hair"
                      onClick={() => setMobileOpen(false)}
                      className="header-mobile-shop-link"
                    >
                      Hair Care
                    </Link>
                    <Link
                      href="/catalog?cat=tools"
                      onClick={() => setMobileOpen(false)}
                      className="header-mobile-shop-link"
                    >
                      Tools & Accessories
                    </Link>
                  </div>
                </details>
              </li>

              <li>
                <Link
                  href="/catalog?tag=new"
                  onClick={() => setMobileOpen(false)}
                  className="header-mobile-nav-link block"
                >
                  New
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="header-mobile-nav-link block"
                >
                  About
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  href="/catalog?tag=bestsellers"
                  onClick={() => setMobileOpen(false)}
                  className="header-mobile-cta inline-flex rounded-full px-4 py-2 text-sm hover:opacity-90"
                >
                  Shop Bestsellers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Promo card */}
          <div className="header-mobile-promo mt-8 rounded-xl p-4">
            <p className="font-medium text-foreground">Radiance, made gentle.</p>
            <p className="mt-1 text-sm text-muted-light">
              Discover our new hydrating serum with Niacinamide.
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
