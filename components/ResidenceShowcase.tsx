"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { residences } from "@/data/residences";
import ResidenceModal from "./ResidenceModal";
import type { Residence } from "@/data/residences";

export default function ResidenceShowcase() {
  const [selected, setSelected] = useState<Residence | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="residences" ref={ref} className="py-24 md:py-36 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.3em] uppercase text-[#7a8c72] mb-4"
              >
                The Collection
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl font-light text-[#1c1c1c] leading-tight"
              >
                Five Independent
                <br />
                <span className="italic text-[#8c7b6e]">Residences</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#8c7b6e] max-w-sm text-sm leading-relaxed"
            >
              Each with its own plot, compound wall, dedicated parking and private
              outdoor space. Click a residence to explore its floor plans.
            </motion.p>
          </div>

          {/* Residence grid */}
          <div className="space-y-6">
            {residences.map((res, i) => (
              <motion.button
                key={res.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                onClick={() => setSelected(res)}
                className="group w-full text-left bg-white border border-[#e2dcd4] hover:border-[#7a8c72] hover:shadow-lg transition-all duration-400 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a8c72]"
                aria-label={`View ${res.name} — plot ${res.plotAreaSqFt} sq.ft`}
              >
                <div className={`grid grid-cols-1 md:grid-cols-2`}>
                  {/* Image */}
                  <div className={`img-zoom aspect-[4/3] md:aspect-auto md:h-80 relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={res.groundPlan}
                      alt={`${res.name} ground floor plan`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    {/* Residence number overlay on image */}
                    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2.5 flex items-baseline gap-2">
                      <span className="font-display text-2xl text-[#1c1c1c] leading-none">{res.number}</span>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#8c7b6e]">Residence</span>
                    </div>
                    <div className="absolute inset-0 bg-[#1c1c1c]/5 group-hover:bg-transparent transition-all duration-500" />
                  </div>

                  {/* Info */}
                  <div className={`p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[280px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div>
                      {/* Top row */}
                      <div className="flex items-start justify-between mb-5">
                        <h3 className="font-display text-3xl text-[#1c1c1c]">{res.name}</h3>
                        <div className="w-9 h-9 border border-[#e2dcd4] flex items-center justify-center transition-all duration-300 group-hover:border-[#1c1c1c] group-hover:bg-[#1c1c1c] flex-shrink-0">
                          <ArrowRight
                            size={15}
                            className="text-[#8c7b6e] group-hover:text-white transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <p className="text-[#8c7b6e] text-sm leading-relaxed mb-8">
                        {res.description}
                      </p>
                    </div>

                    {/* Stats — clean tabular numbers */}
                    <div>
                      <div className="grid grid-cols-2 gap-4 border-t border-[#e2dcd4] pt-6 mb-6">
                        <div className="bg-[#f8f5f0] px-4 py-3">
                          <div className="font-num text-xl font-semibold text-[#1c1c1c] mb-0.5">
                            {res.plotAreaSqFt}
                          </div>
                          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8c7b6e]">
                            SQ.FT
                          </div>
                          <div className="text-[10px] tracking-[0.15em] uppercase text-[#c9b89a] mt-1">
                            Plot Area
                          </div>
                        </div>
                        <div className="bg-[#f8f5f0] px-4 py-3">
                          <div className="font-num text-xl font-semibold text-[#1c1c1c] mb-0.5">
                            {res.builtUpAreaSqFt}
                          </div>
                          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8c7b6e]">
                            SQ.FT
                          </div>
                          <div className="text-[10px] tracking-[0.15em] uppercase text-[#c9b89a] mt-1">
                            Total Built-up
                          </div>
                        </div>
                      </div>

                      <span className="text-xs tracking-widest uppercase text-[#7a8c72] group-hover:text-[#1c1c1c] transition-colors duration-300 flex items-center gap-2">
                        Explore Floor Plans
                        <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ResidenceModal residence={selected} onClose={() => setSelected(null)} />
    </>
  );
}
