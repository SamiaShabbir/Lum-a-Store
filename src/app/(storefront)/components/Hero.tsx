// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-secondary">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
//         {/* Copy */}
//         <div>
//           <h1 className="font-serif text-4xl leading-tight text-primary sm:text-5xl">
//             Radiance, made gentle.
//           </h1>
//           <p className="mt-4 max-w-prose text-base text-text-muted sm:text-lg">
//             Thoughtful formulas with skin‑friendly actives. Clean textures, soft finishes,
//             and results you can feel—without the fuss.
//           </p>

//           {/* Key points */}
//           <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted">
//             <li className="inline-flex items-center gap-2">
//               <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
//               Sensitive‑skin friendly
//             </li>
//             <li className="inline-flex items-center gap-2">
//               <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
//               No added fragrance
//             </li>
//             <li className="inline-flex items-center gap-2">
//               <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
//               Cruelty‑free
//             </li>
//           </ul>
//         </div>

//         {/* Visual */}
//         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-base-border md:aspect-[5/6]">
//           {/* Use a local placeholder to avoid remote image config.
//              Put a file at /public/placeholder/hero.jpg (1200x1600 suggested). */}
//           <Image
//             src="/best-night-creams-2025-space-nk.jpg"
//             alt="Ecomo Beauty hero"
//             fill
//             sizes="(min-width: 768px) 50vw, 100vw"
//             className="object-cover"
//             priority
//           />
//           {/* Soft vignette to keep text readable if you place image behind copy later */}
//           <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />
//         </div>
//       </div>
//     </section>
//   );
// }
// ./(storefront)/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section relative min-h-[600px] md:min-h-[700px]">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="hero-gradient-orb hero-gradient-orb-1"></div>
        <div className="hero-gradient-orb hero-gradient-orb-2"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Content */}
          <div className="hero-content">
            <h1 className="hero-title font-serif text-4xl md:text-5xl lg:text-6xl text-light font-bold mb-6">
              Glow with
              <br />
              Confidence
            </h1>
            
            <p className="hero-subtitle text-lg md:text-xl text-muted-light leading-relaxed mb-8 max-w-lg">
              Clean, dermatologist-tested skincare essentials designed for your everyday ritual. Because beautiful skin starts with gentle care.
            </p>

            <div className="hero-cta-group">
              <Link href="/catalog" className="hero-cta-primary inline-block">
                Shop Now
              </Link>
              
              <Link href="/about" className="hero-cta-secondary inline-block">
                Learn More
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-light">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <span>Vegan & Cruelty-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧪</span>
                <span>Dermatologist-Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">♻️</span>
                <span>Sustainable Packaging</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl ring-1 ring-base-border md:aspect-[5/6]">
//           {/* Use a local placeholder to avoid remote image config.
//              Put a file at /public/placeholder/hero.jpg (1200x1600 suggested). */}
//           <Image
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
      </div>
    </section>
  );
}