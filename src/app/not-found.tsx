import React from 'react';
import Link from 'next/link';
import { GoadsLogo, GoadsIcon, PhoneIcon } from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090d16] via-[#0c1220] to-[#060910] text-white flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(255, 100, 0, 0.4) 1.5px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Glow Orbs - Tự động scale trên màn hình lớn 2K/4K */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] 3xl:w-[700px] 3xl:h-[700px] 4xl:w-[900px] 4xl:h-[900px] bg-[#ff6400]/15 rounded-full blur-[120px] 3xl:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] 3xl:w-[650px] 3xl:h-[650px] 4xl:w-[850px] 4xl:h-[850px] bg-[#ff9a00]/10 rounded-full blur-[130px] 3xl:blur-[190px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between max-w-5xl 3xl:max-w-7xl 4xl:max-w-[2000px] w-full mx-auto">
        <Link href="/" className="inline-block transition-transform hover:scale-105">
          <GoadsLogo width={180} height={60} light={true} className="3xl:w-[220px] 3xl:h-[72px] 4xl:w-[260px] 4xl:h-[84px]" />
        </Link>
        <span className="text-xs 3xl:text-sm uppercase tracking-wider text-white/70 bg-white/10 px-3 py-1.5 3xl:px-4 3xl:py-2 rounded-full border border-white/15 backdrop-blur-md">
          Lỗi Điều Hướng 404
        </span>
      </header>

      {/* Body Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-12 3xl:my-16 max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl mx-auto animate-fade-slide-up">
        {/* Khối biểu tượng với hiệu ứng phát sáng */}
        <div className="relative mb-6 3xl:mb-8">
          <div className="w-28 h-28 3xl:w-36 3xl:h-36 4xl:w-44 4xl:h-44 rounded-3xl 4xl:rounded-[32px] bg-white/[0.06] border border-[#ff6400]/40 flex items-center justify-center shadow-[0_0_35px_rgba(255,100,0,0.30)] 4xl:shadow-[0_0_55px_rgba(255,100,0,0.40)] backdrop-blur-md">
            <GoadsIcon size={64} className="drop-shadow-[0_0_12px_rgba(255,100,0,0.8)] 3xl:w-20 3xl:h-20 4xl:w-24 4xl:h-24" />
          </div>
          <span className="absolute -bottom-2 -right-2 bg-[#ff6400] text-white text-[11px] 3xl:text-xs 4xl:text-sm font-bold px-2 py-0.5 3xl:px-2.5 3xl:py-1 rounded-full shadow-md">
            404
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl 3xl:text-5xl 4xl:text-6xl font-extrabold tracking-tight mb-3 3xl:mb-4">
          Không Tìm Thấy Trang Yêu Cầu
        </h1>
        <p className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl text-white/80 leading-relaxed mb-8 3xl:mb-10 max-w-md 3xl:max-w-xl 4xl:max-w-2xl">
          Đường dẫn bạn truy cập có thể đã được đổi vị trí hoặc dịch vụ tạm thời không khả dụng trên hệ thống GOADS.
        </p>

        {/* Nút hành động */}
        <div className="flex flex-wrap items-center justify-center gap-3 3xl:gap-4 w-full">
          <Link href="/" className="no-underline">
            <Button size="lg" className="px-6 3xl:px-8 3xl:py-3.5 3xl:text-base 4xl:text-lg">
              Về Cổng Đăng Nhập
            </Button>
          </Link>
          <Link href="/dashboard" className="no-underline">
            <Button variant="secondary" size="lg" className="px-6 3xl:px-8 3xl:py-3.5 3xl:text-base 4xl:text-lg bg-white/10 border-white/25 text-white hover:bg-white/20 hover:text-white">
              Bảng Điều Hành
            </Button>
          </Link>
        </div>

        {/* Thông tin hỗ trợ kỹ thuật */}
        <div className="mt-10 3xl:mt-14 pt-6 3xl:pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-2 3xl:gap-3 text-xs 3xl:text-sm text-white/70">
          <PhoneIcon size={14} className="text-[#ff7a1a] 3xl:w-4 3xl:h-4" />
          <span>Tổng đài trực ban kỹ thuật chiến dịch:</span>
          <a href="tel:0945318968" className="text-[#ff7a1a] font-bold hover:underline">
            094 531 89 68
          </a>
          <span>•</span>
          <a href="mailto:Info@goads.vn" className="text-white/80 hover:underline">
            Info@goads.vn
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-xs 3xl:text-sm text-white/60">
        © 2023 - 2026 CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUYỀN THÔNG GOADS. All Rights Reserved.
      </footer>
    </div>
  );
}
