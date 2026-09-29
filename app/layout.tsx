import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F9F6F0' },
    { media: '(prefers-color-scheme: dark)', color: '#0F141C' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://magis.vn'),
  title: {
    default: 'Vượt Lên Sự Tầm Thường: Tinh Thần Magis Của Inhaxiô | Báo Cáo Nghiên Cứu',
    template: '%s | Tinh Thần Magis',
  },
  description:
    'Nghiên cứu chuyên sâu về tinh thần Magis trong linh đạo Inhaxiô: nguồn gốc lịch sử, nền tảng thần học trong Linh Thao, mô hình giáo dục IPP, nghệ thuật lãnh đạo anh hùng và dấu ấn tại Việt Nam.',
  keywords: [
    'Magis',
    'Tinh thần Magis',
    'Linh đạo Inhaxiô',
    'Thánh Inhaxiô Loyola',
    'Dòng Tên',
    'AMDG',
    'Ad Majorem Dei Gloriam',
    'Linh Thao',
    'Phân định thần loại',
    'Sư phạm Inhaxiô',
    'Lãnh đạo anh hùng',
    'Alexandre de Rhodes',
    'Công giáo',
    'Ignatian Spirituality',
  ],
  authors: [{ name: 'Linh Đạo Inhaxiô & Dòng Tên' }],
  creator: 'Dòng Tên & Linh Đạo Inhaxiô',
  publisher: 'Báo Cáo Nghiên Cứu Học Thuật',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'article',
    locale: 'vi_VN',
    url: '/',
    siteName: 'Tinh Thần Magis - Báo Cáo Nghiên Cứu',
    title: 'Vượt Lên Sự Tầm Thường: Tinh Thần Magis Của Inhaxiô | Báo Cáo Nghiên Cứu',
    description:
      'Nghiên cứu chuyên sâu về tinh thần Magis trong linh đạo Inhaxiô: hành trình vươn tới vinh quang lớn lao hơn cho Thiên Chúa, từ Linh Thao của Thánh Inhaxiô Loyola đến sứ mạng Dòng Tên.',
    publishedTime: '2026-03-25T00:00:00.000Z',
    authors: ['Linh Đạo Inhaxiô & Dòng Tên'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vượt Lên Sự Tầm Thường: Tinh Thần Magis Của Inhaxiô',
    description:
      'Nghiên cứu chuyên sâu về tinh thần Magis trong linh đạo Inhaxiô: hành trình vươn tới vinh quang lớn lao hơn cho Thiên Chúa.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Providers } from '@/components/Providers';
import ProgressBar from '@/components/ProgressBar';
import BackToTop from '@/components/BackToTop';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="font-body bg-parchment-100 text-ink dark:bg-[#0F141C] dark:text-[#E2E8F0] transition-colors duration-300">
        <Providers>
          <ProgressBar />
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
