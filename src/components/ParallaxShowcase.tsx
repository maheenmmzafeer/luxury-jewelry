"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ParallaxShowcase() {
  const container = useRef<HTMLElement>(null);
  const fastRef = useRef<HTMLDivElement>(null);
  const slowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      
      if (!isMobile) {
        gsap.to(fastRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(slowRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative min-h-[120vh] w-full flex items-center bg-[var(--color-onyx-950)] py-24 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div ref={fastRef} className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200"
            alt="Craftsmanship"
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        <div ref={slowRef} className="flex flex-col justify-center max-w-lg">
          <span className="text-[var(--color-gold-400)] uppercase tracking-[0.2em] text-sm mb-4 block">
            The Craftsmanship
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-snug">
            Forged in <span className="gold-gradient italic">Lahore</span>
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
            Every piece is a testament to the master artisans of Pakistan. We source only the finest uncut diamonds and pure gold, transforming them into majestic Naulakhas and Jhumkas that carry the weight of legacy.
          </p>
          <button className="self-start px-8 py-3 border border-[var(--color-gold-500)] text-[var(--color-gold-400)] uppercase tracking-wider text-sm hover:bg-[var(--color-gold-500)] hover:text-black transition-colors duration-300">
            Our Heritage
          </button>
        </div>
      </div>
    </section>
  );
}
