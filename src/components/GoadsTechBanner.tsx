import React from 'react';
import { GoadsIcon } from './icons/Icons';

export interface GoadsTechBannerProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Component Nền Hero Công Nghệ Số GOADS
 * Kết hợp Deep Midnight Navy (#001c4c), quầng sáng Neon Orange (#ff6400) & Electric Blue (#0057e1),
 * lưới vi mạch thông minh và sóng tín hiệu phát sóng quảng cáo ngoài trời
 */
export default function GoadsTechBanner({ children, className = '' }: GoadsTechBannerProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e8edf5] ${className}`}
    >
      {/* 1. Lưới Cyber Matrix & Họa tiết công nghệ xám bạc tinh tế trên nền sáng */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(148, 163, 184, 0.28) 1.5px, transparent 0),
            linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
        }}
        aria-hidden="true"
      />

      {/* 2. Dải quầng sáng dịu nhẹ thanh lịch (Soft Frost & Pure Light, né hoàn toàn nền cam/vàng) */}
      <div
        className="absolute -top-32 -left-20 w-[480px] h-[480px] bg-white/80 rounded-full blur-[100px] pointer-events-none z-[1]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* 3. Dải sóng dữ liệu công nghệ xám bạc thanh mảnh */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.25] z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-50,200 C200,350 150,650 500,750 C750,820 850,600 950,850"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M-50,320 C250,450 300,550 550,880 C680,1050 780,720 950,920"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1.2"
        />
      </svg>

      {/* 4. Khối Radar GOADS xoay nhẹ nhàng chìm ở góc dưới (Watermark công nghệ thanh lịch) */}
      <div
        className="absolute -right-24 -bottom-20 w-[460px] h-[460px] opacity-[0.06] pointer-events-none z-[2] animate-slow-spin text-slate-400"
        aria-hidden="true"
      >
        <GoadsIcon size={460} />
      </div>

      {/* 5. Nội dung chính hiển thị bên trên */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
