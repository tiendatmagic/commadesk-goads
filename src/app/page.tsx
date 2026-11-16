import React from 'react';
import LoginForm from '@/components/LoginForm';
import Antigravity from '@/components/ui/Antigravity';
import { BikeLedIcon, RoadshowIcon, AiDashboardIcon } from '@/components/icons/Icons';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#FFFCF4] text-[#001C4C] overflow-x-hidden flex items-center justify-center">
      {/* 1. LỚP HIỆU ỨNG ANTIGRAVITY PHỦ TOÀN MÀN HÌNH (ẨN TRÊN MOBILE ĐỂ TỐI ƯU HIỆU NĂNG & CHỐNG LAG) */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Antigravity
          count={70}
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
          maxDevicePixelRatio={1.1}
        />
      </div>

      {/* 2. LỚP HIỆU ỨNG HÀO QUANG ÁNH SÁNG CAM GOADS TIÊU ĐIỂM (FOCAL AMBIENT GLOWS - TỰ NHIÊN, BỎ 4 GÓC CŨ) */}
      <div
        className="fixed inset-0 pointer-events-none z-1 transform-gpu"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle 700px at 78% 46%, rgba(255, 100, 0, 0.30) 0%, rgba(255, 122, 26, 0.15) 40%, transparent 72%),
            radial-gradient(circle 460px at 84% 18%, rgba(255, 100, 0, 0.22) 0%, rgba(255, 130, 40, 0.08) 45%, transparent 70%),
            radial-gradient(circle 620px at 20% 36%, rgba(255, 100, 0, 0.18) 0%, rgba(255, 145, 77, 0.08) 35%, transparent 68%),
            radial-gradient(circle 520px at 50% 0%, rgba(255, 122, 26, 0.14) 0%, rgba(255, 160, 92, 0.05) 40%, transparent 70%)
          `,
          boxShadow: 'inset 0 0 100px rgba(255, 100, 0, 0.04)'
        }}
      />

      {/* 3. BỐ CỤC 2 CỘT CÂN ĐỐI 50/50: CỘT TRÁI (GIỚI THIỆU DỊCH VỤ) & CỘT PHẢI (CARD FORM ĐĂNG NHẬP) */}
      <div className="relative z-10 w-full min-h-screen grid grid-cols-1 min-[1200px]:grid-cols-2 items-center">
        {/* CỘT TRÁI: Nội dung giới thiệu giải pháp quảng cáo ngoài trời chuẩn GOADS.VN */}
        <div className="hidden min-[1200px]:flex flex-col justify-center items-end px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 my-auto">
          <div className="w-full max-w-[560px]">
            {/* Tagline thương hiệu chính thức từ goads.vn (Kính Mờ Trong Suốt) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 backdrop-blur-[6px] border border-white/85 shadow-[0_2px_8px_rgba(255,100,0,0.08)] text-[#FF6400] text-xs font-bold uppercase tracking-wider mb-4">
              Phủ Rộng Hiệu Quả • Lan Tỏa Thông Điệp
            </div>

            <h1 className="text-3xl xl:text-4xl 2xl:text-[42px] font-extrabold leading-[1.25] tracking-tight mb-4 text-[#001C4C]">
              Quảng Cáo Ngoài Trời Độc Đáo<br />
              <span className="text-[#FF6400]">Màn Hình LED Trên Xe Máy</span>
            </h1>
            <p className="text-[15px] leading-relaxed text-[#001C4C]/80 mb-6 font-normal">
              Khẳng định giá trị thương hiệu và gắn kết mạnh mẽ với khách hàng mục tiêu thông qua công nghệ quảng cáo ngoài trời 4.0. GOADS xuất hiện như cầu nối linh hoạt, đưa thông điệp của bạn thành tâm điểm bật sáng giữa dòng xe đô thị và phủ sóng mọi hành trình.
            </p>

            {/* Khối Giải Pháp Dịch Vụ Gọn Gàng Thống Nhất (Kính Mờ Chuẩn Glassmorphism - Opacity 0.6 & Blur 6px) */}
            <div className="w-full rounded-2xl bg-white/60 backdrop-blur-[6px] border border-white/85 shadow-[0_8px_32px_rgba(0,28,76,0.04),_inset_0_1px_2px_rgba(255,255,255,0.95)] p-2.5 my-2">
              <div className="flex flex-col gap-1">
                {/* Mục 1: LEDBike — Khoảng cách margin trên dưới 4px, text hiển thị trọn vẹn, không animation giật lag */}
                <div className="flex items-center justify-between gap-3 p-2.5 sm:px-3 rounded-xl hover:bg-white/40">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF6400] to-[#E65A00] flex items-center justify-center shrink-0 shadow-xs">
                      <BikeLedIcon size={18} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-bold text-[#001C4C] leading-snug">
                        LEDBike — Màn Hình LED Trên Xe Máy
                      </h4>
                      <p className="text-xs text-[#001C4C]/75 leading-normal">
                        Tiếp cận trực diện người đi đường tại các nút giao thông &amp; tuyến phố đô thị đông đúc
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#FFF4EB]/90 border border-[#FFD9BD] text-[#FF6400] text-[11px] font-bold">
                    70M+ Xe Máy
                  </span>
                </div>

                {/* Đường phân cách siêu mỏng tinh tế với margin trên dưới 4px */}
                <div className="h-px bg-[#001C4C]/[0.06] mx-2 my-1" />

                {/* Mục 2: LEDShow & LEDCar — Khoảng cách margin trên dưới 4px, text hiển thị trọn vẹn */}
                <div className="flex items-center justify-between gap-3 p-2.5 sm:px-3 rounded-xl hover:bg-white/40">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF6400] to-[#E65A00] flex items-center justify-center shrink-0 shadow-xs">
                      <RoadshowIcon size={18} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-bold text-[#001C4C] leading-snug">
                        LEDShow &amp; LEDCar — Đội Xe Diễu Hành
                      </h4>
                      <p className="text-xs text-[#001C4C]/75 leading-normal">
                        Quảng cáo OOH trên phương tiện 4 bánh &amp; đoàn xe Roadshow diện rộng
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#FFF4EB]/90 border border-[#FFD9BD] text-[#FF6400] text-[11px] font-bold">
                    Mobile Billboard
                  </span>
                </div>

                {/* Đường phân cách siêu mỏng tinh tế với margin trên dưới 4px */}
                <div className="h-px bg-[#001C4C]/[0.06] mx-2 my-1" />

                {/* Mục 3: Dashboard & AI Đo lường — Khoảng cách margin trên dưới 4px, text hiển thị trọn vẹn */}
                <div className="flex items-center justify-between gap-3 p-2.5 sm:px-3 rounded-xl hover:bg-white/40">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF6400] to-[#E65A00] flex items-center justify-center shrink-0 shadow-xs">
                      <AiDashboardIcon size={18} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] font-bold text-[#001C4C] leading-snug">
                        Hệ Thống Quản Lý Chiến Dịch &amp; Đo Lường AI
                      </h4>
                      <p className="text-xs text-[#001C4C]/75 leading-normal">
                        Tiện lợi theo dõi, phân tích số người tiếp cận và tối ưu hóa hiệu suất chiến dịch real-time
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#FFF4EB]/90 border border-[#FFD9BD] text-[#FF6400] text-[11px] font-bold">
                    AI &amp; Big Data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: Form Đăng Nhập Dạng Card Nổi Đổ Bóng Sang Trọng Cân Đối */}
        <div className="flex items-center justify-center min-[1200px]:justify-start px-4 py-8 sm:px-8 md:px-12 min-[1200px]:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
