import React from 'react';
import GoadsTechBanner from './GoadsTechBanner';
import { SmartLedIcon, RoadshowIcon, AiCameraIcon } from './icons/Icons';

export default function LeftHero() {
  return (
    <GoadsTechBanner className="hidden lg:flex flex-col justify-center p-12 xl:p-14 min-h-screen text-[#0f172a] border-r border-[#e2e8f0]">
      <div className="relative z-10 flex flex-col justify-center max-w-[560px] my-auto">
        {/* Nội dung chính Hero Body */}
        <div>
          <h1 className="text-3xl xl:text-4xl 2xl:text-[42px] font-extrabold leading-[1.25] tracking-tight mb-5 text-[#0f172a]">
            Hệ thống Quản trị &<br />
            Điều hành Chiến dịch <span className="text-[#ff6400]">GOADS Portal</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#475569] max-w-[500px] mb-8 font-normal">
            Tiên phong giải pháp quảng cáo ngoài trời kỹ thuật số (OOH &amp; DOOH):
            Màn hình LED thông minh trên xe máy, Đội xe diễu hành Roadshow &amp; xe 4 bánh, ứng dụng công nghệ AI Camera đo lường lượt tiếp cận và tối ưu hóa chiến dịch thời gian thực.
          </p>

          {/* Key Operations Badges (Các khối nghiệp vụ công nghệ dạng thẻ Card nổi bật trên nền sáng) */}
          <div className="flex flex-col gap-3.5">
            {/* Block 1: Màn hình LED xe máy */}
            <div className="flex items-center gap-4 bg-white/85 hover:bg-white border border-[#e2eaf4] hover:border-[#ff6400]/40 p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:translate-x-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[490px]">
              <div className="w-11 h-11 rounded-xl bg-[#ff6400] flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(255,100,0,0.25)]">
                <SmartLedIcon size={22} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0f172a] mb-0.5">Màn Hình LED Thông Minh Trên Xe Máy</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">Tiếp cận trực diện tầm nhìn người đi đường tại các nút giao thông &amp; tuyến phố đông đúc</p>
              </div>
            </div>

            {/* Block 2: Roadshow & Xe 4 bánh */}
            <div className="flex items-center gap-4 bg-white/85 hover:bg-white border border-[#e2eaf4] hover:border-[#ff6400]/40 p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:translate-x-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[490px]">
              <div className="w-11 h-11 rounded-xl bg-[#ff6400] flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(255,100,0,0.25)]">
                <RoadshowIcon size={22} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0f172a] mb-0.5">Đội Xe Diễu Hành Roadshow &amp; Xe 4 Bánh</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">Phủ sóng nhận diện thương hiệu quy mô lớn với đoàn xe diễu hành và Mobile Billboard</p>
              </div>
            </div>

            {/* Block 3: AI Camera & Dashboard */}
            <div className="flex items-center gap-4 bg-white/85 hover:bg-white border border-[#e2eaf4] hover:border-[#ff6400]/40 p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:translate-x-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[490px]">
              <div className="w-11 h-11 rounded-xl bg-[#ff6400] flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(255,100,0,0.25)]">
                <AiCameraIcon size={22} className="text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0f172a] mb-0.5">AI Camera &amp; Dashboard Đo Lường Lượt Tiếp Cận</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">Tự động đo lường số người tiếp cận, phân tích lưu lượng và định vị GPS hành trình</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoadsTechBanner>
  );
}
