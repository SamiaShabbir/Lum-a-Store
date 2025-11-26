// // src/app/about/page.tsx
// "use client";

// import Image from "next/image";

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen mx-auto max-w-7xl px-4 py-12 md:py-16 text-light">
//       <section className="text-center mb-12">
//         <h1 className="font-serif text-3xl md:text-4xl text-light">
//           About Luméa
//         </h1>
//         <p className="mt-4 max-w-2xl mx-auto text-muted-light ">
//           At Luméa, we believe that beauty should be effortless, gentle, 
//           and grounded in nature. Our mission is to craft clean skincare 
//           essentials that elevate your everyday ritual — because glowing 
//           skin is the foundation of confidence.
//         </p>
//       </section>

//       {/* Two-column layout */}
//       <section className="grid gap-10 md:grid-cols-2 items-center">
//         <div className="relative h-80 w-full rounded-2xl overflow-hidden card">
//           <Image
//             src="/about.jpg" // 👉 replace with your own image in /public
//             alt="Luméa skincare"
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold text-light">Our Philosophy</h2>
//           <p className="mt-4 text-muted-light leading-relaxed">
//             Luméa products are dermatologist-tested, vegan, and free of added 
//             fragrance. We focus on thoughtful actives, lightweight textures, 
//             and formulas designed for sensitive skin — so you can glow with 
//             confidence every day.
//           </p>
//           <ul className="mt-5 space-y-3 text-light">
//             <li>🌱 Clean, cruelty-free ingredients</li>
//             <li>🧪 Backed by dermatology science</li>
//             <li>🌍 Sustainable packaging choices</li>
//           </ul>
//         </div>
//       </section>

//       {/* Mission block */}
//       <section className="mt-16 text-center">
//         <h2 className="text-2xl font-semibold text-light">Our Mission</h2>
//         <p className="mt-4 max-w-3xl mx-auto text-muted-light leading-relaxed">
//           To empower individuals with gentle yet effective skincare. 
//           We’re here to simplify routines, celebrate natural beauty, 
//           and leave the world a little better — bottle by bottle.
//         </p>
//       </section>
//     </main>
//   );
// }
// src/app/about/page.tsx
"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen mx-auto max-w-7xl px-4 py-12 md:py-16 text-light">
      {/* Hero Section with Animated Background */}
      <section className="about-hero about-section text-center mb-12 pb-8">
        <h1 className="about-title font-serif text-3xl md:text-4xl text-light mb-6">
          About Luméa
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-light leading-relaxed text-base md:text-lg">
          At Luméa, we believe that beauty should be effortless, gentle, 
          and grounded in nature. Our mission is to craft clean skincare 
          essentials that elevate your everyday ritual — because glowing 
          skin is the foundation of confidence.
        </p>
      </section>

      {/* Two-column layout with enhanced cards */}
      <section className="about-section grid gap-10 md:grid-cols-2 items-center mb-16">
        <div className="about-card-image relative h-80 w-full rounded-2xl overflow-hidden card">
          <Image
            src="/about.jpg" // 👉 replace with your own image in /public
            alt="Luméa skincare"
            fill
            className="object-cover"
          />
        </div>
        <div className="about-philosophy-card">
          <h2 className="about-subtitle text-2xl font-semibold text-light">
            Our Philosophy
          </h2>
          <p className="mt-6 text-muted-light leading-relaxed">
            Luméa products are dermatologist-tested, vegan, and free of added 
            fragrance. We focus on thoughtful actives, lightweight textures, 
            and formulas designed for sensitive skin — so you can glow with 
            confidence every day.
          </p>
          <ul className="mt-6 space-y-3 text-light">
            <li className="about-list-item">
              <span className="text-2xl">🌱</span>
              <span>Clean, cruelty-free ingredients</span>
            </li>
            <li className="about-list-item">
              <span className="text-2xl">🧪</span>
              <span>Backed by dermatology science</span>
            </li>
            <li className="about-list-item">
              <span className="text-2xl">🌍</span>
              <span>Sustainable packaging choices</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Mission block with gradient card */}
      <section className="about-section mt-16">
        <div className="about-mission-card max-w-4xl mx-auto text-center">
          <h2 className="about-subtitle text-2xl font-semibold text-light inline-block">
            Our Mission
          </h2>
          <p className="mt-6 text-muted-light leading-relaxed text-base md:text-lg">
            To empower individuals with gentle yet effective skincare. 
            We're here to simplify routines, celebrate natural beauty, 
            and leave the world a little better — bottle by bottle.
          </p>
        </div>
      </section>
    </main>
  );
}