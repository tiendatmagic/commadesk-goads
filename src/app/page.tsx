import React from 'react';
import LoginForm from '@/components/LoginForm';
import GoadsShowcase from '@/components/GoadsShowcase';
import Antigravity from '@/components/ui/Antigravity';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#FFFCF4] text-[#001C4C] overflow-x-hidden flex items-center justify-center">
      {/* 1. LỚP HIỆU ỨNG ANTIGRAVITY PHỦ TOÀN MÀN HÌNH (Tối ưu hóa độ phân giải cao cho 2K & 4K) */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Antigravity
          count={80}
          particleShape="capsule"
          capsuleHeightRatio={0.52}
          particleSize={1.15}
          colors={['#ff5500', '#ff6400', '#ff7a1a', '#ff9436']}
          lightMode={true}
          opacity={0.88}
          ambient={0.85}
          depthFactor={0.28}
          waveSpeed={0.25}
          waveAmplitude={0.55}
          interactive={true}
          autoAnimate={true}
          intro={false}
          clickBurst={false}
          maxDevicePixelRatio={1.5}
        />
      </div>

      {/* 2. LỚP HIỆU ỨNG HÀO QUANG ÁNH SÁNG CAM GOADS TIÊU ĐIỂM (Tự động mở rộng bán kính clamp linh hoạt cho 2K/4K) */}
      <div
        className="fixed inset-0 pointer-events-none z-1 transform-gpu"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle clamp(650px, 45vw, 1300px) at 76% 48%, rgba(255, 100, 0, 0.28) 0%, rgba(255, 122, 26, 0.14) 40%, transparent 72%),
            radial-gradient(circle clamp(420px, 30vw, 900px) at 82% 16%, rgba(255, 100, 0, 0.20) 0%, rgba(255, 130, 40, 0.08) 45%, transparent 70%),
            radial-gradient(circle clamp(580px, 40vw, 1200px) at 24% 38%, rgba(255, 100, 0, 0.17) 0%, rgba(255, 145, 77, 0.08) 35%, transparent 68%),
            radial-gradient(circle clamp(480px, 35vw, 1000px) at 50% 0%, rgba(255, 122, 26, 0.13) 0%, rgba(255, 160, 92, 0.05) 40%, transparent 70%)
          `,
          boxShadow: 'inset 0 0 100px rgba(255, 100, 0, 0.04)'
        }}
      />

      {/* 3. BỐ CỤC 2 CỘT CÂN ĐỐI 50/50: Có wrapper co giãn cân đối tỷ lệ vàng trên màn hình Full HD, 2K & 4K */}
      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 min-[1200px]:grid-cols-2 items-center max-w-[1600px] 3xl:max-w-[1920px] 4xl:max-w-[2400px] 5xl:max-w-[2800px] mx-auto">
        {/* CỘT TRÁI: Showcase Hình Ảnh Chiến Dịch & Dịch Vụ Thực Tế Từ goads.vn */}
        <div className="hidden min-[1200px]:flex flex-col justify-center items-end px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-28 py-10 my-auto">
          <GoadsShowcase />
        </div>

        {/* CỘT PHẢI: Form Đăng Nhập Dạng Card Nổi Đổ Bóng Sang Trọng Cân Đối */}
        <div className="flex items-center justify-center min-[1200px]:justify-start px-4 py-8 sm:px-8 md:px-12 min-[1200px]:px-8 lg:px-12 xl:px-16 2xl:px-20 3xl:px-24 4xl:px-28">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
