"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/data/project";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function EnquiryCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-36 md:py-52 bg-[#1c1c1c] relative overflow-hidden"
    >
      {/* Animated background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className="absolute rounded-full border border-white/5"
            initial={{ width: 200, height: 200, opacity: 0 }}
            animate={inView ? {
              width: [200, 600 + n * 200],
              height: [200, 600 + n * 200],
              opacity: [0, 0.4, 0],
            } : {}}
            transition={{
              duration: 4,
              delay: n * 0.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] tracking-[0.4em] uppercase text-[#7a8c72] mb-6"
        >
          Enquire
        </motion.p>

        {/* Heading with word-stagger */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
          >
            Find the residence
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.22, ease }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light italic text-[#c9b89a] leading-tight"
          >
            that feels like home.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white/50 text-base mb-14 max-w-md mx-auto leading-relaxed"
        >
          Explore the residences and request the details directly from the project team.
        </motion.p>

        {/* Pulsing CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55, ease }}
          className="relative inline-block"
        >
          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 border border-white/20"
            animate={inView ? { scale: [1, 1.35], opacity: [0.4, 0] } : {}}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
          />
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-[#1c1c1c] text-[11px] tracking-[0.3em] uppercase overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4">
              Enquire Now
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
            <span className="absolute inset-0 bg-[#7a8c72] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out" />
            <span className="absolute inset-0 bg-[#7a8c72] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out [transition-delay:0ms]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
