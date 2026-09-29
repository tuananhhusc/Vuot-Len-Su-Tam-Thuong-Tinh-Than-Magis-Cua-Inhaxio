'use client';

import { useState, useEffect, useCallback } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  // Scan for headings on mount
  useEffect(() => {
    const article = document.querySelector('[data-article]');
    if (!article) return;

    const elements = article.querySelectorAll('h2[id], h3[id]');
    const items: TocItem[] = Array.from(elements).map((el) => {
      const clone = el.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('a, .citation-link, [data-toc-ignore]').forEach((node) => node.remove());
      const cleanText = (clone.textContent || '').replace(/#\s*$/, '').trim();
      return {
        id: el.id,
        text: cleanText,
        level: el.tagName === 'H2' ? 2 : 3,
      };
    });
    setHeadings(items);
  }, []);

  // IntersectionObserver for active heading tracking
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Body scroll locking and Escape key handler for mobile drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      setIsOpen(false);
    }
  }, []);

  if (headings.length === 0) return null;

  const renderList = (isMobile = false) => (
    <ul className="space-y-1">
      {headings.map((heading) => (
        <li key={heading.id}>
          <button
            onClick={() => scrollTo(heading.id)}
            className={`toc-link w-full text-left rounded transition-colors ${
              heading.level === 3 ? 'toc-link-h3' : ''
            } ${activeId === heading.id ? 'active' : ''} ${
              isMobile ? 'py-2 px-3 text-[0.92rem] leading-snug' : ''
            }`}
          >
            {heading.text}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar - sticky fixed position */}
      <aside className="hidden lg:block print:hidden self-start sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4 pb-8 z-20">
        <nav aria-label="Mục lục bài viết">
          <h2 className="font-heading text-xs tracking-[0.25em] uppercase text-burgundy dark:text-gold mb-4 px-3 font-semibold">
            Mục Lục Bài Viết
          </h2>
          {renderList(false)}
        </nav>
      </aside>

      {/* Mobile floating pill button (Bottom-Left, ergonomics friendly) */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 left-4 sm:left-6 z-40 px-3.5 py-2.5 rounded-full bg-burgundy/95 dark:bg-[#161D27]/95 border border-gold/40 text-gold shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 print:hidden focus:outline-none focus:ring-2 focus:ring-gold/50"
        aria-label="Mở mục lục bài viết"
      >
        <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        <span className="font-heading text-xs tracking-wider uppercase text-parchment-100 dark:text-gold font-medium">
          Mục Lục
        </span>
      </button>

      {/* Mobile drawer with slide-in animation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 print:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/40 dark:bg-black/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative w-[85%] max-w-sm h-full bg-parchment-50 dark:bg-[#0F141C] shadow-2xl p-6 overflow-y-auto border-l border-parchment-300 dark:border-slate-800/80 z-10 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-parchment-300/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-gold rounded-full" />
                  <h2 className="font-heading text-sm tracking-[0.15em] uppercase text-burgundy dark:text-gold font-semibold">
                    Mục Lục Bài Viết
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-parchment-200 dark:hover:bg-slate-800 text-ink-lighter dark:text-slate-400 transition-colors focus:outline-none"
                  aria-label="Đóng mục lục"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav aria-label="Mục lục bài viết di động">
                {renderList(true)}
              </nav>
            </div>

            {/* Drawer footer info */}
            <div className="pt-6 mt-6 border-t border-parchment-300/60 dark:border-slate-800 text-center">
              <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-gold/80 dark:text-gold/60">
                Ad Majorem Dei Gloriam
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
