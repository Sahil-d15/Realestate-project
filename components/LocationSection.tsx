"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { landmarks } from "@/data/project";

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" ref={ref} className="py-24 md:py-36 bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-[#7a8c72] mb-4"
            >
              Location
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light text-[#1c1c1c] leading-tight mb-6"
            >
              A connected address
              <br />
              <span className="italic text-[#8c7b6e]">in Karwar.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-start gap-3 mb-8"
            >
              <MapPin size={16} className="text-[#7a8c72] mt-0.5 flex-shrink-0" />
              <p className="text-[#8c7b6e] text-sm leading-relaxed">
                "PETER HOUSE" Main Road, Karwar - 581301
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-[#8c7b6e] mb-4">
                Nearby Landmarks
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {landmarks.map((landmark, i) => (
                  <motion.div
                    key={landmark}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-[#8c7b6e] py-1.5 border-b border-[#e2dcd4]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c9b89a] flex-shrink-0" />
                    {landmark}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — map image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="img-zoom overflow-hidden border border-[#e2dcd4]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/location/map.jpg"
                alt="Matoshree Gurukul location map showing nearby landmarks in Karwar"
                fill
                className="object-contain p-2 bg-white"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
