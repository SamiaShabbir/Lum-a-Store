// import Link from "next/link";
// import Image from "next/image";

// const tiles = [
//   {
//     href: "/catalog?cat=cleansers",
//     label: "Cleansers",
//     img: "/cat-cleansers.jpg",
//   },
//   {
//     href: "/catalog?cat=serums",
//     label: "Serums",
//     img: "/Beauty-of-Joseon-glow-deep-serum-in-hands_5000x.jpg",
//   },
//   {
//     href: "/catalog?cat=moisturizers",
//     label: "Moisturizers",
//     img: "/ISOI-Waterfull-Cream.jpg",
//   },
//   {
//     href: "/catalog?cat=sunscreen",
//     label: "SPF",
//     img: "/03_blog_SPF_w19_22_50ceb7.jpg",
//   },
//   {
//     href: "/catalog?cat=body",
//     label: "Body",
//     img: "/JUNE_2020_BLOG_3_IMAGE-800x533.jpg",
//   },
//   {
//     href: "/catalog?cat=hair",
//     label: "Hair",
//     img: "/01-22_-01-1024x704.webp",
//   },
// ];

// export default function CategoryTiles() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
//       <div className="mb-6 flex items-end justify-between">
//         <h2 className="font-serif text-2xl text-text md:text-3xl">Shop by category</h2>
//         <Link href="/catalog" className="text-sm text-text-muted">View all →</Link>
//       </div>

//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
//         {tiles.map((t) => (
//           <Link
//             key={t.label}
//             href={t.href}
//             className={`group relative overflow-hidden rounded-3xl ring-1 ring-base-border`}
//           >
//             {/* image */}
//             <div className="relative aspect-[4/3] w-full">
//               <Image
//                 src={t.img}
//                 alt={t.label}
//                 fill
//                 sizes="(min-width: 640px) 33vw, 50vw"
//                 className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//               />
//             </div>

//             {/* label */}
//             <div className="absolute inset-x-0 bottom-0 p-4">
//               <span className="inline-flex rounded-full px-3 py-1 text-sm text-text backdrop-blur cat-tag">
//                 {t.label}
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import Image from "next/image";

const tiles = [
  {
    href: "/catalog?cat=cleansers",
    label: "Cleansers",
    img: "/cat-cleansers.jpg",
  },
  {
    href: "/catalog?cat=serums",
    label: "Serums",
    img: "/Beauty-of-Joseon-glow-deep-serum-in-hands_5000x.jpg",
  },
  {
    href: "/catalog?cat=moisturizers",
    label: "Moisturizers",
    img: "/ISOI-Waterfull-Cream.jpg",
  },
  {
    href: "/catalog?cat=sunscreen",
    label: "SPF",
    img: "/03_blog_SPF_w19_22_50ceb7.jpg",
  },
  {
    href: "/catalog?cat=body",
    label: "Body",
    img: "/JUNE_2020_BLOG_3_IMAGE-800x533.jpg",
  },
  {
    href: "/catalog?cat=hair",
    label: "Hair",
    img: "/01-22_-01-1024x704.webp",
  },
];

export default function CategoryTiles() {
  return (
    <section className="category-tiles-section mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="category-tiles-header mb-6 flex items-end justify-between">
        <h2 className="category-tiles-title font-serif text-2xl text-text md:text-3xl">
          Shop by category
        </h2>
        <Link href="/catalog" className="category-view-all text-sm text-text-muted">
          View all →
        </Link>
      </div>

      <div className="category-tiles-grid">
        {tiles.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className="category-tile-link"
          >
            {/* image */}
            <div className="category-tile-image-wrapper">
              <Image
                src={t.img}
                alt={t.label}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="category-tile-image object-cover"
              />
            </div>

            {/* label */}
            <div className="category-tile-label-container">
              <span className="category-tile-label">
                {t.label}
              </span>
              <div className="category-tile-arrow">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}