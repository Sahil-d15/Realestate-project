"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { src: "/images/pages/page-01.jpg", caption: "Matoshree Gurukul — Cover" },
  { src: "/images/pages/page-02.jpg", caption: "Residence Overview" },
  { src: "/images/pages/page-04.jpg", caption: "Residence 01 — Ground Floor Plan" },
  { src: "/images/pages/page-05.jpg", caption: "Residence 01 — First Floor Plan" },
  { src: "/images/pages/page-06.jpg", caption: "Residence 02 — Ground Floor Plan" },
  { src: "/images/pages/page-07.jpg", caption: "Residence 02 — First Floor Plan" },
  { src: "/images/pages/page-08.jpg", caption: "Residence 03 — Ground Floor Plan" },
  { src: "/images/pages/page-09.jpg", caption: "Residence 03 — First Floor Plan" },
  { src: "/images/pages/page-10.jpg", caption: "Residence 04 — Ground Floor Plan" },
  { src: "/images/pages/page-11.jpg", caption: "Residence 04 — First Floor Plan" },
  { src: "/images/pages/page-12.jpg", caption: "Residence 05 — Ground Floor Plan" },
  { src: "/images/pages/page-13.jpg", caption: "Residence 05 — First Floor Plan" },
  { src: "/images/pages/page-03.jpg", caption: "Location Map" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.classList.add("modal-open");
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.classList.remove("modal-open");
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      setLightboxIndex((lightboxIndex + dir + galleryItems.length) % galleryItems.length);
    },
    [lightboxIndex]
  );

  // Keyboard navigation
  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    },
    [closeLightbox, navigate]
  );

  return (
    <>
      <section ref={ref} className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-[#7a8c72] mb-4"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light text-[#1c1c1c]"
            >
              Plans &{" "}
              <span className="italic text-[#8c7b6e]">Visualisations</span>
            </motion.h2>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.04 * i }}
                onClick={() => openLightbox(i)}
                className="group break-inside-avoid block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a8c72]"
                aria-label={`View ${item.caption}`}
              >
                <div className="img-zoom relative overflow-hidden bg-[#f8f5f0] border border-[#e2dcd4]">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#1c1c1c]/0 group-hover:bg-[#1c1c1c]/20 transition-all duration-400" />
                  </div>
                  <div className="p-3 border-t border-[#e2dcd4]">
                    <p className="text-xs tracking-wide text-[#8c7b6e]">{item.caption}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#1c1c1c]/95 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={galleryItems[lightboxIndex]?.caption}
            onKeyDown={onKey}
            tabIndex={-1}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
              autoFocus
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 md:left-8 z-10 p-3 text-white/70 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl max-h-[85vh] mx-16"
              >
                <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                  <Image
                    src={galleryItems[lightboxIndex].src}
                    alt={galleryItems[lightboxIndex].caption}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </div>
                <p className="text-center text-white/60 text-xs tracking-wide mt-4">
                  {galleryItems[lightboxIndex].caption}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={() => navigate(1)}
              className="absolute right-4 md:right-8 z-10 p-3 text-white/70 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
              {lightboxIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
