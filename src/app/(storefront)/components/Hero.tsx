import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        {/* Copy */}
        <div>
          <h1 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">
            Radiance, made gentle.
          </h1>
          <p className="mt-4 max-w-prose text-base text-text-muted sm:text-lg">
            Thoughtful formulas with skin‑friendly actives. Clean textures, soft finishes,
            and results you can feel—without the fuss.
          </p>

          {/* Key points */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted">
            <li className="inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Sensitive‑skin friendly
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              No added fragrance
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Cruelty‑free
            </li>
          </ul>
        </div>

        {/* Visual */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-base-border md:aspect-[5/6]">
          {/* Use a local placeholder to avoid remote image config.
             Put a file at /public/placeholder/hero.jpg (1200x1600 suggested). */}
          <Image
            src="/best-night-creams-2025-space-nk.jpg"
            alt="Ecomo Beauty hero"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
          {/* Soft vignette to keep text readable if you place image behind copy later */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
