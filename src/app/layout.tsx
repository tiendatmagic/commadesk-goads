import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-roboto',
});

export const viewport: Viewport = {
  themeColor: '#ff6400',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.goads.vn'),
  title: {
    default: 'GOADS — Quảng Cáo Ngoài Trời Độc Đáo | Màn Hình LED Xe Máy & OOH DOOH',
    template: '%s | GOADS Media Technology',
  },
  description:
    'GOADS cung cấp dịch vụ quảng cáo ngoài trời OOH & DOOH trên phương tiện xe máy, màn hình LED thông minh, đội xe diễu hành và xe 4 bánh, ứng dụng công nghệ AI đo lường lượt tiếp cận và tối ưu hóa chiến dịch.',
  keywords: [
    'GOADS',
    'GOADS Media Technology',
    'GOADS Vietnam',
    'Quảng cáo ngoài trời',
    'OOH',
    'DOOH',
    'Màn hình LED trên xe máy',
    'Quảng cáo xe máy',
    'Roadshow',
    'Mobile Billboard',
    'Xe 4 bánh quảng cáo',
    'AI Camera quảng cáo',
    'Đo lường tiếp cận',
    'CommaDesk Custom Login',
    'GOADS.VN',
  ],
  authors: [{ name: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUYỀN THÔNG GOADS' }],
  creator: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUYỀN THÔNG GOADS',
  publisher: 'GOADS Media Technology',
  applicationName: 'GOADS Media Technology',
  category: 'Outdoor Advertising & Media Technology',
  classification: 'Smart OOH & Mobile LED Campaign Management System',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
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
  icons: {
    icon: [
      { url: './favicon.ico', sizes: 'any' },
      { url: './favicon.svg', type: 'image/svg+xml' },
      { url: './favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: './favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: './goads-favicon.png', sizes: '1024x1024', type: 'image/png' },
      { url: './icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: './icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: './favicon.ico',
    apple: [
      { url: './apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: './favicon.svg', color: '#ff6400' },
    ],
  },
  manifest: './site.webmanifest',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Quảng cáo Ngoài Trời Độc Đáo, Màn Hình LED Trên Xe Máy | GOADS',
    description:
      'GOADS cung cấp dịch vụ quảng cáo OOH trên phương tiện xe máy, đội xe diễu hành và xe 4 bánh, mang lại sức hút và lợi thế cạnh tranh tối đa cho đối tác Nhãn hàng.',
    url: 'https://www.goads.vn',
    siteName: 'GOADS OFFICIAL SITE',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'GOADS Media Technology - Outdoor Advertising Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quảng cáo Ngoài Trời Độc Đáo, Màn Hình LED Trên Xe Máy | GOADS',
    description:
      'GOADS cung cấp dịch vụ quảng cáo OOH trên phương tiện xe máy, đội xe diễu hành và xe 4 bánh, tối ưu hóa chiến dịch thời gian thực.',
    images: ['./og-image.png'],
    creator: '@GoadsVietnam',
  },
  other: {
    'apple-mobile-web-app-title': 'GOADS',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={roboto.variable}>
      <head>
        {/* Placeholder script theo đặc tả CommaDesk Custom Login UI Spec */}
        <script src="/__commadesk/login-bridge.js" />
        {/* Thẻ favicon & icon tương đối chuẩn cho gói xuất tĩnh CommaDesk ZIP */}
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="1024x1024" href="./goads-favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="GOADS" />
        <meta name="application-name" content="GOADS Media Technology" />
        <meta name="theme-color" content="#ff6400" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
