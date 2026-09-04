"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { GOOGLE_FORM_URL } from "@/data/project";

export default function MobileEnquiryCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 bg-[#1c1c1c] text-white text-sm tracking-widest uppercase hover:bg-[#7a8c72] transition-colors duration-300"
      >
        Enquire Now
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
