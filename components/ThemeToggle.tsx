"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-24 rounded-full border border-parchment-300 bg-parchment-50/80 backdrop-blur animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-parchment-300 dark:border-gold/30 bg-parchment-50/95 dark:bg-[#161D27]/95 backdrop-blur-md shadow-sm hover:shadow-md hover:border-gold dark:hover:border-gold transition-all duration-300 cursor-pointer print:hidden select-none focus:outline-none focus:ring-2 focus:ring-gold/50"
      aria-label={isDark ? "Chuyển sang chế độ sáng (Giao diện Giấy da)" : "Chuyển sang chế độ tối (Giao diện Đêm tĩnh tâm)"}
      title={isDark ? "Nhấn để chuyển sang chế độ Sáng" : "Nhấn để chuyển sang chế độ Tối"}
    >
      {isDark ? (
        <>
          <Sun size={15} className="text-gold transition-transform group-hover:rotate-45 duration-300" />
          <span className="font-heading text-xs tracking-wider uppercase text-gold font-medium">
            Sáng
          </span>
        </>
      ) : (
        <>
          <Moon size={15} className="text-burgundy transition-transform group-hover:-rotate-12 duration-300" />
          <span className="font-heading text-xs tracking-wider uppercase text-burgundy font-medium">
            Tối
          </span>
        </>
      )}
    </button>
  );
}
