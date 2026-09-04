"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { specifications } from "@/data/project";

export default function Specifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="amenities" ref={ref} className="py-24 md:py-36 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Header */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-[#7a8c72] mb-4"
            >
              Specifications
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light text-[#1c1c1c] leading-tight"
            >
              Built to a
              <br />
              <span className="italic text-[#8c7b6e]">considered standard.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#8c7b6e] mt-6 leading-relaxed"
            >
              From structure to surface, each material and fitting is chosen for
              quality, durability and everyday ease.
            </motion.p>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-0"
          >
            {specifications.map((spec, i) => (
              <div key={spec.category} className="border-t border-[#e2dcd4]">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                  aria-expanded={openIndex === i}
                  aria-controls={`spec-panel-${i}`}
                >
                  <span className="text-sm font-medium tracking-wide text-[#1c1c1c] group-hover:text-[#7a8c72] transition-colors">
                    {spec.category}
                  </span>
                  <span className="text-[#8c7b6e] flex-shrink-0 ml-4">
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`spec-panel-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-6 space-y-2.5">
                        {spec.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-[#8c7b6e]">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c9b89a] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="border-t border-[#e2dcd4]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
