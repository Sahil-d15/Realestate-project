"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { Residence } from "@/data/residences";
import { GOOGLE_FORM_URL } from "@/data/project";

interface Props {
  residence: Residence | null;
  onClose: () => void;
}

export default function ResidenceModal({ residence, onClose }: Props) {
  const [activeFloor, setActiveFloor] = useState<"ground" | "first">("ground");
  const closeRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (residence) {
      document.body.classList.add("modal-open");
      setActiveFloor("ground");
      setTimeout(() => closeRef.current?.focus(), 50);
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [residence]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (!residence || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    modalRef.current.addEventListener("keydown", trap);
    return () => modalRef.current?.removeEventListener("keydown", trap);
  }, [residence]);

  return (
    <AnimatePresence>
      {residence && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1c1c1c]/80 backdrop-blur-sm"
            style={{ zIndex: 60 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${residence.name} details`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-0 bottom-0 md:inset-6 md:top-6 bg-[#f8f5f0] overflow-y-auto max-h-[94vh] md:max-h-none rounded-t-3xl md:rounded-xl"
            style={{ zIndex: 70 }}
          >
            {/* Close button */}
            <button
              ref={closeRef}
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-10 h-10 bg-[#1c1c1c]/8 hover:bg-[#1c1c1c]/16 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close residence details"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] h-full">
              {/* Left — floor plan */}
              <div className="bg-white p-6 md:p-10 flex flex-col">
                {/* Floor tabs */}
                <div className="flex gap-1.5 mb-6">
                  {(["ground", "first"] as const).map((floor) => (
                    <button
                      key={floor}
                      onClick={() => setActiveFloor(floor)}
                      className={`flex-1 py-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-200 rounded-sm ${
                        activeFloor === floor
                          ? "bg-[#1c1c1c] text-white shadow-sm"
                          : "bg-[#f8f5f0] text-[#8c7b6e] hover:bg-[#e2dcd4]"
                      }`}
                    >
                      {floor === "ground" ? "Ground Floor" : "First Floor"}
                    </button>
                  ))}
                </div>

                {/* Plan image */}
                <div className="relative flex-1 min-h-[300px] md:min-h-[420px] bg-[#fafaf8] rounded-sm border border-[#e2dcd4]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFloor}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="absolute inset-0 p-4"
                    >
                      <Image
                        src={activeFloor === "ground" ? residence.groundPlan : residence.firstPlan}
                        alt={`${residence.name} ${activeFloor} floor plan`}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right — details */}
              <div className="p-8 md:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#e2dcd4]">
                <div>
                  {/* Residence number — DM Serif Display, large & clear */}
                  <div className="mb-6">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-[#7a8c72] mb-2">
                      Residence
                    </p>
                    <div className="flex items-end gap-3">
                      <span className="font-display text-7xl md:text-8xl leading-none text-[#1c1c1c]">
                        {residence.number}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#e2dcd4] mb-6" />

                  <p className="text-[#8c7b6e] leading-relaxed mb-8 text-sm">
                    {residence.description}
                  </p>

                  {/* Area stats — Inter tabular nums */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-white border border-[#e2dcd4] rounded-sm p-4">
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9b89a] mb-2">
                        Plot Area
                      </div>
                      <div className="font-num text-2xl font-bold text-[#1c1c1c] leading-none mb-1">
                        {residence.plotAreaSqFt}
                      </div>
                      <div className="font-num text-[11px] text-[#8c7b6e]">SQ.FT</div>
                      {residence.plotAreaSqM && (
                        <div className="font-num text-[11px] text-[#c9b89a] mt-0.5">
                          {residence.plotAreaSqM} SQ.MTS
                        </div>
                      )}
                    </div>
                    <div className="bg-white border border-[#e2dcd4] rounded-sm p-4">
                      <div className="text-[10px] tracking-[0.2em] uppercase text-[#c9b89a] mb-2">
                        Total Built-up
                      </div>
                      <div className="font-num text-2xl font-bold text-[#1c1c1c] leading-none mb-1">
                        {residence.builtUpAreaSqFt}
                      </div>
                      <div className="font-num text-[11px] text-[#8c7b6e]">SQ.FT</div>
                      <div className="font-num text-[11px] text-[#c9b89a] mt-0.5">
                        {residence.builtUpAreaSqM} SQ.MTS
                      </div>
                    </div>
                  </div>

                  {/* Key details */}
                  <div className="space-y-0 border-t border-[#e2dcd4]">
                    {[
                      { label: "Floors", value: "Ground + First" },
                      { label: "Type", value: "Independent Residence" },
                      { label: "Location", value: "Karwar, 581301" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center py-3 border-b border-[#e2dcd4]">
                        <span className="text-xs tracking-wide text-[#8c7b6e]">{label}</span>
                        <span className="text-xs font-medium text-[#1c1c1c]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#1c1c1c] text-white text-[11px] tracking-[0.25em] uppercase hover:bg-[#7a8c72] transition-colors duration-300 group rounded-sm"
                  >
                    Enquire About This Residence
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
