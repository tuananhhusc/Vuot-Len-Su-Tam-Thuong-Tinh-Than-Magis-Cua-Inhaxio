import HeroSection from '@/components/HeroSection';
import TableOfContents from '@/components/TableOfContents';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { getArticleContent } from '@/content/article';

export default function Home() {
  const articleContent = getArticleContent();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: 'Vượt Lên Sự Tầm Thường: Tinh Thần Magis Của Inhaxiô',
    alternativeHeadline: 'Năng Động Biến Đổi Toàn Diện, Một Báo Cáo Nghiên Cứu Chuyên Sâu',
    description:
      'Nghiên cứu chuyên sâu về tinh thần Magis trong linh đạo Inhaxiô: nguồn gốc lịch sử, nền tảng thần học trong Linh Thao, mô hình giáo dục IPP, nghệ thuật lãnh đạo anh hùng và dấu ấn tại Việt Nam.',
    inLanguage: 'vi-VN',
    datePublished: '2026-03-25',
    dateModified: '2026-03-29',
    author: {
      '@type': 'Organization',
      name: 'Linh Đạo Inhaxiô & Dòng Tên',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Báo Cáo Nghiên Cứu Học Thuật',
    },
    about: [
      { '@type': 'Thing', name: 'Magis' },
      { '@type': 'Thing', name: 'Linh Đạo Inhaxiô' },
      { '@type': 'Thing', name: 'Dòng Tên' },
      { '@type': 'Thing', name: 'AMDG' },
    ],
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-parchment-100 dark:bg-[#0F141C] text-ink dark:text-[#E2E8F0] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed top-4 right-4 sm:top-6 sm:right-8 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      
      <main className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="w-full lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr] xl:gap-16 min-w-0">
          {/* Table of Contents - sidebar */}
          <TableOfContents />
          
          {/* Article content */}
          <article className="w-full max-w-full lg:max-w-[780px] mx-auto lg:mx-0 min-w-0">
            <MarkdownRenderer content={articleContent} />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
