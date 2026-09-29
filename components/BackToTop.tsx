"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 sm:right-6 p-3 rounded-full bg-burgundy/95 text-parchment-100 dark:bg-gold dark:text-[#0F141C] shadow-xl hover:bg-burgundy hover:scale-110 dark:hover:bg-[#F3D377] active:scale-95 transition-all duration-300 z-40 print:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy dark:focus:ring-gold"
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
    >
      <ArrowUp size={24} />
    </button>
  );
}
