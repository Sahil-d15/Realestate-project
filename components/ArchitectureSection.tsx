"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const qualities = [
  "Private compound wall for each residence",
  "Individual bore-well water supply",
  "Dedicated car parking with interlock paving",
  "Balconies and verandas for outdoor living",
  "Designed for ample natural light and cross-ventilation",
  "Practical, well-proportioned room layouts",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ArchitectureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#7a8c72] mb-4"
            >
              Design Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-serif text-4xl md:text-5xl font-light text-[#1c1c1c] leading-tight mb-8"
            >
              Designed around
              <br />
              <span className="italic text-[#8c7b6e]">the way you live.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-[#8c7b6e] leading-relaxed text-base mb-10"
            >
              From private outdoor edges to well-planned living spaces, each residence
              is arranged to balance everyday functionality with a sense of openness.
            </motion.p>

            <ul className="space-y-3">
              {qualities.map((q, i) => (
                <motion.li
                  key={q}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.28 + i * 0.07, ease }}
                  className="group flex items-center gap-4 text-sm text-[#8c7b6e] py-2 border-b border-[#f0ede8] hover:border-[#7a8c72] hover:text-[#1c1c1c] transition-all duration-300 cursor-default"
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#c9b89a] flex-shrink-0 group-hover:bg-[#7a8c72] transition-colors duration-300"
                  />
                  {q}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image — clip-path reveal from bottom */}
          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 1.1, delay: 0.15, ease }}
              className="img-zoom aspect-[3/4] relative overflow-hidden"
            >
              <Image
                src="/images/pages/page-04.jpg"
                alt="Residence floor plan — thoughtful room layout"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </motion.div>
            {/* Accent block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#f8f5f0] border border-[#e2dcd4] flex items-center justify-center p-4 shadow-sm"
            >
              <div className="text-center">
                <div className="font-display text-2xl text-[#1c1c1c]">G+1</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#8c7b6e] mt-1">Floors</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
