export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-parchment-300 dark:border-slate-800 bg-gradient-to-b from-parchment-100 to-parchment-200 dark:from-slate-900 dark:to-slate-950 print:hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 dark:via-gold/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Cross ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold/40 dark:bg-gold/20" />
          <svg className="w-4 h-4 text-gold/60 dark:text-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L12 22M2 12L22 12" />
          </svg>
          <div className="h-px w-12 bg-gold/40 dark:bg-gold/20" />
        </div>

        {/* IHS seal */}
        <div className="font-heading text-2xl text-gold/30 dark:text-gold/20 tracking-[0.3em] mb-4">
          IHS
        </div>

        {/* Copyright */}
        <p className="text-sm text-ink-lighter dark:text-slate-500 leading-relaxed mb-2">
          © {new Date().getFullYear()}, Báo cáo Nghiên cứu về Tinh thần Magis của Inhaxiô
        </p>
        <p className="text-sm text-ink-lighter dark:text-slate-500 leading-relaxed mb-6">
          Biên soạn phục vụ nghiên cứu học thuật và suy niệm tâm linh.
        </p>

        {/* AMDG */}
        <p className="font-heading text-xs tracking-[0.4em] uppercase text-burgundy/60 dark:text-gold/50">
          Ad Majorem Dei Gloriam
        </p>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/30 dark:bg-gold/20" />
          <div className="w-1 h-1 rotate-45 bg-gold/20 dark:bg-gold/10" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/30 dark:bg-gold/20" />
        </div>
      </div>
    </footer>
  );
}
