"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function SitePlan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-[#7a8c72] mb-4"
          >
            Site Plan
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-[#1c1c1c] leading-tight"
          >
            Five residences,
            <br />
            <span className="italic text-[#8c7b6e]">one considered layout.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#8c7b6e] mt-4 max-w-lg leading-relaxed"
          >
            The site plan shows the arrangement of all five independent residences,
            road access and individual plot boundaries.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-[#f8f5f0] border border-[#e2dcd4] overflow-hidden"
        >
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <Image
              src="/images/pages/page-02.jpg"
              alt="Matoshree Gurukul site plan showing all five residences"
              fill
              className="object-contain p-4 md:p-8"
              sizes="(max-width: 1280px) 100vw, 1280px"
              loading="lazy"
            />
          </div>

          {/* Residence legend */}
          <div className="border-t border-[#e2dcd4] p-6 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="text-center">
                <div className="font-serif text-lg text-[#1c1c1c]">0{n}</div>
                <div className="text-xs tracking-[0.15em] uppercase text-[#8c7b6e]">Residence</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs text-[#c9b89a] mt-4"
        >
          Site plan is for indicative purposes. Road widths shown: 24'0" and 11'0". Please verify details with the project team.
        </motion.p>
      </div>
    </section>
  );
}
