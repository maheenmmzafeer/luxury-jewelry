"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryItems = [
  {
    id: 1,
    title: "The Peshawari Choker",
    desc: "Sculptural Kundan forms with uncut diamonds for the modern royal.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Lahori Meenakari",
    desc: "Vibrant enamel work meets contemporary Pakistani elegance.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "The Naulakha Set",
    desc: "Precision-set Polki drops cascading in pure 22k gold.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Mughal-e-Azam Jhumar",
    desc: "Rare emeralds and pearls captured in high-polish temple gold.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".gallery-image");
      
      // Simple parallax on the images as they scroll horizontally
      images.forEach((img: any) => {
        gsap.to(img, {
          xPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            containerAnimation: undefined, 
            horizontal: true,
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen bg-[var(--color-onyx-950)] flex flex-col justify-center py-24">
      <div className="absolute top-12 left-12 z-10 md:static md:pl-12 md:mb-8 md:top-0 md:left-0">
        <span className="text-[var(--color-gold-400)] uppercase tracking-[0.2em] text-sm drop-shadow-md">
          Curated Collection
        </span>
        <h2 className="text-4xl font-serif text-white mt-2 drop-shadow-lg">
          The <span className="gold-gradient italic">Signature</span> Series
        </h2>
      </div>

      <div className="flex w-full h-[65vh] overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-12 pr-12 gap-8 items-center">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id} 
            className="gallery-panel w-[85vw] md:w-[45vw] lg:w-[35vw] h-full flex-shrink-0 snap-center relative rounded-sm overflow-hidden group shadow-[0_0_40px_rgba(212,175,55,0.05)] border border-white/5"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image absolute inset-[-15%] w-[130%] h-[130%] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-10 left-10">
                <span className="text-[var(--color-gold-400)] text-sm tracking-widest uppercase block mb-2 opacity-80">
                  Chapter 0{index + 1}
                </span>
                <h3 className="text-3xl font-serif text-white mb-2 drop-shadow-lg">{item.title}</h3>
                <p className="text-gray-300 font-light max-w-[80%]">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
