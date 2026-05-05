"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Star } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Reveal animation on load
      gsap.fromTo(
        ".reveal-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out" }
      );

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-[var(--color-onyx-950)]">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=2000"
          alt="Magical Luxury Jewelry Background"
          className="w-full h-[130%] object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-onyx-950)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold-500)_0%,_transparent_60%)] mix-blend-screen opacity-20" />
      </div>

      {/* Magical Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 text-[var(--color-gold-400)] magical-sparkle w-6 h-6 opacity-60" />
        <Star className="absolute top-1/3 right-1/4 text-[var(--color-gold-300)] magical-sparkle-delayed w-4 h-4 opacity-50" />
        <Sparkles className="absolute bottom-1/3 right-1/3 text-[var(--color-gold-500)] magical-sparkle-fast w-8 h-8 opacity-40" />
        <Star className="absolute bottom-1/4 left-1/3 text-[var(--color-gold-400)] magical-sparkle w-5 h-5 opacity-70" />
      </div>

      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center px-4">
        <span className="reveal-text text-[var(--color-gold-400)] uppercase tracking-[0.4em] text-xs mb-6 font-medium drop-shadow-[0_0_10px_rgba(252,232,166,0.8)]">
          AURA
        </span>
        <h1 className="reveal-text text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-tight drop-shadow-2xl">
          The Golden <br />
          <span className="gold-gradient italic pr-4 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">Jewelry Store</span>
        </h1>
        <p className="reveal-text mt-8 max-w-md text-gray-300 text-lg font-light leading-relaxed">
          Ethereal ancestral pieces imbued with magical radiance. Discover true Pakistani jewelry that connects you to royal heritage.
        </p>
      </div>
    </section>
  );
}
