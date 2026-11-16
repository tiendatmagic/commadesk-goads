import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trung Tâm Điều Hành Chiến Dịch & Màn Hình LED Di Động | GOADS',
  description:
    'Trung tâm điều hành và giám sát thời gian thực hệ sinh thái truyền thông GOADS Media Technology. Quản lý mạng lưới màn hình LED trên xe máy, đội xe diễu hành Roadshow & Mobile Billboard 4 bánh, đo lường lượt người tiếp cận và định vị GPS chiến dịch 24/7.',
  openGraph: {
    title: 'Trung Tâm Điều Hành Chiến Dịch & Màn Hình LED | GOADS',
    description:
      'Giám sát thời gian thực các trạm LED xe máy di động, đội xe Roadshow, lưu lượng tiếp cận và tình trạng phát sóng chiến dịch quảng cáo.',
    url: 'https://www.goads.vn/dashboard',
    siteName: 'GOADS OFFICIAL SITE',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'GOADS Operations Dashboard Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trung Tâm Điều Hành Chiến Dịch & Màn Hình LED | GOADS',
    description:
      'Giám sát thời gian thực màn hình LED trên xe máy, đoàn xe diễu hành và phân tích số người tiếp cận.',
    images: ['./og-image.png'],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
