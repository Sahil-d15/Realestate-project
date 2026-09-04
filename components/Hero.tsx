"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GOOGLE_FORM_URL } from "@/data/project";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToResidences = () =>
    document.querySelector("#residences")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax background */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero/hero.jpg"
          alt="Matoshree Gurukul — Independent Residences in Karwar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/85 via-[#1c1c1c]/30 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0.15)} className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase mb-5">
            <span className="bg-[#7a8c72] text-white px-3 py-1 font-medium">Karwar, Karnataka</span>
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
              className="font-serif text-5xl md:text-7xl lg:text-[96px] font-light text-white leading-[0.95]"
            >
              Matoshree
              <br />
              <span className="italic">Gurukul</span>
            </motion.h1>
          </div>

          {/* Animated divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="origin-left w-16 h-px bg-[#c9b89a]/60 mb-7"
          />

          <motion.p {...fadeUp(0.85)} className="text-white/75 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
            Independent residences designed for comfortable, modern living in Karwar.
          </motion.p>

          <motion.div {...fadeUp(1.0)} className="flex flex-wrap gap-4">
            <button
              onClick={scrollToResidences}
              className="group relative px-8 py-4 bg-white text-[#1c1c1c] text-[11px] tracking-[0.25em] uppercase overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Residences
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </span>
              <span className="absolute inset-0 bg-[#f8f5f0] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-white/50 text-white text-[11px] tracking-[0.25em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Enquire Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-white/40 text-[9px] tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-1 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
