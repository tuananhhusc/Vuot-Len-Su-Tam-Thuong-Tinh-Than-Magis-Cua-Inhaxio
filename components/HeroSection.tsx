'use client';

export default function HeroSection() {
  return (
    <header className="relative w-full max-w-full overflow-hidden bg-gradient-to-b from-parchment-50 via-parchment-100 to-parchment-100 dark:from-[#0F141C] dark:via-[#161D27] dark:to-[#0F141C] border-b border-parchment-300 dark:border-slate-800/80 print:hidden transition-colors duration-300">
      {/* Sunburst effect */}
      <div className="sunburst absolute inset-0 dark:opacity-25" aria-hidden="true" />
      
      {/* IHS Monogram watermark */}
      <div className="ihs-monogram dark:opacity-10" aria-hidden="true">
        IHS
      </div>
      
      {/* Decorative cross line */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20 dark:opacity-50" aria-hidden="true">
        <div className="w-px h-8 bg-gold" />
        <div className="w-6 h-px bg-gold" />
        <div className="w-px h-8 bg-gold" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 text-center">
        {/* AMDG motto */}
        <p className="font-heading text-xs md:text-sm tracking-[0.35em] uppercase text-gold dark:text-[#E5C158] mb-6">
          Ad Majorem Dei Gloriam
        </p>
        
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gold/60 dark:bg-gold/40" />
          <div className="w-2 h-2 rotate-45 border border-gold/60 dark:border-gold/40" />
          <div className="h-px w-12 bg-gold/60 dark:bg-gold/40" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.2rem] text-burgundy dark:text-[#F3D377] leading-tight tracking-wide mb-4 text-balance drop-shadow-sm">
          Vượt Lên Sự Tầm Thường
        </h1>
        <h2 className="font-heading text-xl md:text-2xl lg:text-3xl text-navy dark:text-[#93C5FD] leading-snug tracking-wide mb-6 text-balance font-semibold">
          Tinh Thần Magis Của Inhaxiô
        </h2>

        {/* Subtitle */}
        <p className="font-body text-base md:text-lg text-ink-light dark:text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed italic mb-8">
          Năng Động Biến Đổi Toàn Diện, Một Báo Cáo Nghiên Cứu Chuyên Sâu
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-burgundy/30 dark:bg-gold/20" />
          <svg className="w-5 h-5 text-burgundy/40 dark:text-gold/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="h-px w-16 bg-burgundy/30 dark:bg-gold/20" />
        </div>

        {/* Meta info */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-lighter dark:text-slate-500">
          <span className="font-heading text-xs tracking-widest uppercase">Báo Cáo Nghiên Cứu</span>
          <span className="hidden md:inline text-gold dark:text-gold/60">✦</span>
          <span>Linh Đạo Inhaxiô &amp; Dòng Tên</span>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 dark:via-gold/20 to-transparent" />
    </header>
  );
}
