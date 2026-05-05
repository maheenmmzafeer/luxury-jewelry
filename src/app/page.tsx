import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import HorizontalGallery from "@/components/HorizontalGallery";

export default function Home() {
  return (
    <main className="bg-[#050505] w-full min-h-screen">
      <Hero />
      <ParallaxShowcase />
      <HorizontalGallery />

      {/* Simple Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[var(--color-gold-500)]/20 py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold-500)_0%,_transparent_70%)] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-2xl font-serif text-[var(--color-gold-400)] mb-4 tracking-widest drop-shadow-md">
            THE GOLDEN JEWELRY STORE
          </h2>
          <p className="text-gray-400 text-sm font-light max-w-md mx-auto">
            Where ancestral magic meets wearable art.
          </p>
          <div className="mt-12 text-xs text-[var(--color-gold-600)] uppercase tracking-widest">
            &copy; 2026 The Golden Jewelry Store. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
