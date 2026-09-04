"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const facts = [
  { value: "05", label: "Residences", numeric: true, end: 5, prefix: "0" },
  { value: "Independent", label: "Homes", numeric: false },
  { value: "Private", label: "Plots", numeric: false },
  { value: "G + 1", label: "Floors", numeric: false },
  { value: "Karwar", label: "581301", numeric: false },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function AnimatedNumber({ end, prefix = "", duration = 1400 }: { end: number; prefix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const steps = 30;
    const step = end / steps;
    let current = 0;
    const interval = duration / steps;
    ref.current = setInterval(() => {
      current = Math.min(current + step, end);
      setDisplay(Math.round(current));
      if (current >= end && ref.current) clearInterval(ref.current);
    }, interval);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [end, duration]);

  return <>{prefix}{String(display).padStart(prefix ? 1 : 0, "0")}</>;
}

export default function ProjectIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="overview" ref={ref} className="pt-16 pb-24 md:pt-20 md:pb-36 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          {/* Image — clip-path reveal */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={inView ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : {}}
            transition={{ duration: 1.1, ease }}
            className="relative w-full overflow-hidden rounded-sm"
          >
            <Image
              src="/images/hero/overview.png"
              alt="Matoshree Gurukul — independent residences architectural render"
              width={1230}
              height={534}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#7a8c72] mb-4"
            >
              The Project
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42, ease }}
              className="font-serif text-4xl md:text-5xl font-light text-[#1c1c1c] leading-tight mb-8"
            >
              Five homes.
              <br />
              <span className="italic text-[#8c7b6e]">One considered address.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.54, ease }}
              className="text-[#8c7b6e] leading-relaxed text-base mb-5"
            >
              Five thoughtfully planned independent residences, each with its own plot and
              private outdoor space. Matoshree Gurukul brings together practical planning,
              generous proportions, natural light and a calm residential setting in Karwar.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.64, ease }}
              className="text-[#8c7b6e] leading-relaxed text-sm"
            >
              Each residence is independently owned with its own compound wall, dedicated
              parking, and private bore-well — built for the kind of living that values
              space, quiet, and considered design.
            </motion.p>
          </div>
        </div>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="origin-left h-px bg-[#e2dcd4] mb-12"
        />

        {/* Fact row */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 28 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="group text-center md:text-left"
            >
              <div className="font-display text-3xl md:text-4xl text-[#1c1c1c] leading-none mb-2 transition-colors duration-300 group-hover:text-[#7a8c72]">
                {fact.numeric && statsInView
                  ? <AnimatedNumber end={fact.end!} prefix={fact.prefix} />
                  : fact.value}
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#8c7b6e]">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
