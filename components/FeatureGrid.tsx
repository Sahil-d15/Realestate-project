"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Droplets,
  Shield,
  ChefHat,
  Square,
  Building2,
  Sun,
  Car,
  TreePine,
  Zap,
  Sofa,
} from "lucide-react";
import { features } from "@/data/project";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={18} strokeWidth={1.5} />,
  Droplets: <Droplets size={18} strokeWidth={1.5} />,
  Shield: <Shield size={18} strokeWidth={1.5} />,
  ChefHat: <ChefHat size={18} strokeWidth={1.5} />,
  Square: <Square size={18} strokeWidth={1.5} />,
  Building2: <Building2 size={18} strokeWidth={1.5} />,
  Sun: <Sun size={18} strokeWidth={1.5} />,
  Car: <Car size={18} strokeWidth={1.5} />,
  TreePine: <TreePine size={18} strokeWidth={1.5} />,
  Zap: <Zap size={18} strokeWidth={1.5} />,
  Sofa: <Sofa size={18} strokeWidth={1.5} />,
};

export default function FeatureGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-36 bg-[#1c1c1c]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.35em] uppercase text-[#7a8c72] mb-4"
            >
              What Makes These Homes Different
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light text-white leading-tight max-w-xl"
            >
              Designed around
              <br />
              <span className="italic text-[#c9b89a]">the way you live.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8c7b6e] text-sm max-w-xs leading-relaxed"
          >
            Eleven qualities that set each residence apart from a conventional property.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#282828]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.04 * i }}
              className="group bg-[#1c1c1c] p-7 hover:bg-[#212121] transition-colors duration-300 cursor-default flex flex-col gap-4"
            >
              {/* Icon + number row */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-sm bg-[#7a8c72]/15 flex items-center justify-center text-[#7a8c72] group-hover:bg-[#7a8c72]/25 transition-colors duration-300">
                  {iconMap[feature.icon]}
                </div>
                <span className="font-num text-2xl font-bold text-[#2e2e2e] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h3 className="text-white font-medium text-sm mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b6b] text-[13px] leading-relaxed group-hover:text-[#8c7b6e] transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
