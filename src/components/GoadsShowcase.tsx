'use client';

import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 'vaseline',
    image: '/images/goads-showcase/showcase_vaseline.webp',
    alt: 'Đoàn xe máy màn hình LED GOADS diễu hành thực tế'
  },
  {
    id: 'cellphones',
    image: '/images/goads-showcase/showcase_cellphones.webp',
    alt: 'Màn hình LED GOADS trên đường phố đô thị'
  },
  {
    id: 'roadshow',
    image: '/images/goads-showcase/showcase_roadshow.webp',
    alt: 'Đội xe Roadshow 4 bánh màn hình LED'
  }
];

export default function GoadsShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Tự động chuyển slide sau mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[540px] min-[1400px]:max-w-[620px] min-[1600px]:max-w-[700px] min-[1800px]:max-w-[780px] min-[2100px]:max-w-[860px] min-[2400px]:max-w-[920px] min-[2800px]:max-w-[980px] min-[3200px]:max-w-[1060px] flex flex-col gap-4 min-[1600px]:gap-5 min-[2100px]:gap-6">
      {/* 1. TIÊU ĐỀ & MÔ TẢ (ĐÃ BỎ BADGE PHỦ RỘNG HIỆU QUẢ) */}
      <div>
        <h1 className="text-3xl xl:text-4xl 3xl:text-[44px] 4xl:text-[50px] 5xl:text-[58px] font-extrabold leading-[1.22] tracking-tight mb-2.5 3xl:mb-3.5 text-[#001C4C]">
          Quảng Cáo Ngoài Trời Độc Đáo<br />
          <span className="text-[#FF6400]">Màn Hình LED Trên Xe Máy</span>
        </h1>
        <p className="text-[14px] 3xl:text-base 4xl:text-[17.5px] 5xl:text-[19px] leading-relaxed text-[#001C4C]/80 font-normal">
          Công nghệ quảng cáo OOH/DOOH 4.0 di động đầu tiên tại Việt Nam. Đưa thông điệp của bạn thành tâm điểm bật sáng giữa dòng người đô thị và đo lường hiệu suất real-time.
        </p>
      </div>

      {/* 2. PHOTO SLIDER THỰC TẾ (CHỈ GIỮ BULLET SLIDER, BỎ HẾT TEXT & TAB) */}
      <div className="relative w-full rounded-2xl 4xl:rounded-3xl overflow-hidden bg-white/80 backdrop-blur-[8px] border border-white/90 shadow-[0_12px_36px_rgba(255,100,0,0.12),_inset_0_1px_2px_rgba(255,255,255,0.9)] p-2 3xl:p-2.5 4xl:p-3">
        <div className="relative w-full h-[210px] min-[1400px]:h-[240px] min-[1600px]:h-[270px] min-[1800px]:h-[300px] min-[2100px]:h-[330px] min-[2400px]:h-[360px] min-[2800px]:h-[400px] min-[3200px]:h-[440px] rounded-xl 4xl:rounded-2xl overflow-hidden bg-[#001C4C]/5">
          {SLIDES.map((slide, idx) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === activeSlide ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
              }`}
            />
          ))}

          {/* BULLET SLIDER DOTS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeSlide
                    ? 'w-5 h-2 3xl:w-6 3xl:h-2.5 bg-[#FF6400]'
                    : 'w-2 h-2 3xl:w-2.5 3xl:h-2.5 bg-white/70 hover:bg-white'
                }`}
                aria-label={`Chuyển tới ảnh ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. KHỐI 3 THẺ DỊCH VỤ CỐT LÕI */}
      <div className="w-full rounded-2xl 4xl:rounded-3xl bg-white/70 backdrop-blur-[6px] border border-white/90 shadow-[0_8px_28px_rgba(0,28,76,0.04),_inset_0_1px_2px_rgba(255,255,255,0.95)] p-2 3xl:p-3 4xl:p-3.5">
        <div className="flex flex-col gap-1 3xl:gap-2">
          {/* Mục 1: LEDBike */}
          <div className="flex items-center justify-between gap-3 p-1.5 px-2.5 3xl:p-2 3xl:px-3 rounded-xl hover:bg-white/60 transition-colors">
            <div className="flex items-center gap-2.5 3xl:gap-3.5 min-w-0">
              <div className="relative w-9 h-9 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12 rounded-lg 3xl:rounded-xl overflow-hidden shrink-0 border border-[#FF6400]/25 shadow-xs">
                <img
                  src="/images/goads-showcase/thumb_ledbike.webp"
                  alt="LEDBike xe máy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-[13px] 3xl:text-[15px] 4xl:text-[16.5px] font-bold text-[#001C4C] leading-tight">
                  LEDBike — Màn Hình LED Trên Xe Máy
                </h4>
                <p className="text-[11.5px] 3xl:text-xs 4xl:text-[13.5px] text-[#001C4C]/75 leading-tight truncate mt-0.5">
                  Tiếp cận trực diện tại các nút giao thông &amp; tuyến phố đô thị
                </p>
              </div>
            </div>
            <span className="shrink-0 px-2 py-0.5 3xl:px-2.5 3xl:py-1 rounded-full bg-[#FFF4EB] border border-[#FFD9BD] text-[#FF6400] text-[10.5px] 3xl:text-[11.5px] 4xl:text-xs font-bold">
              70M+ Xe Máy
            </span>
          </div>

          <div className="h-px bg-[#001C4C]/[0.06] mx-2" />

          {/* Mục 2: LEDShow & LEDCar */}
          <div className="flex items-center justify-between gap-3 p-1.5 px-2.5 3xl:p-2 3xl:px-3 rounded-xl hover:bg-white/60 transition-colors">
            <div className="flex items-center gap-2.5 3xl:gap-3.5 min-w-0">
              <div className="relative w-9 h-9 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12 rounded-lg 3xl:rounded-xl overflow-hidden shrink-0 border border-[#FF6400]/25 shadow-xs">
                <img
                  src="/images/goads-showcase/thumb_ledshow.webp"
                  alt="LEDShow Roadshow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-[13px] 3xl:text-[15px] 4xl:text-[16.5px] font-bold text-[#001C4C] leading-tight">
                  LEDShow &amp; LEDCar — Đội Xe Diễu Hành
                </h4>
                <p className="text-[11.5px] 3xl:text-xs 4xl:text-[13.5px] text-[#001C4C]/75 leading-tight truncate mt-0.5">
                  Quảng cáo OOH trên phương tiện 4 bánh &amp; đoàn xe Roadshow
                </p>
              </div>
            </div>
            <span className="shrink-0 px-2 py-0.5 3xl:px-2.5 3xl:py-1 rounded-full bg-[#FFF4EB] border border-[#FFD9BD] text-[#FF6400] text-[10.5px] 3xl:text-[11.5px] 4xl:text-xs font-bold">
              Mobile Billboard
            </span>
          </div>

          <div className="h-px bg-[#001C4C]/[0.06] mx-2" />

          {/* Mục 3: Dashboard & AI */}
          <div className="flex items-center justify-between gap-3 p-1.5 px-2.5 3xl:p-2 3xl:px-3 rounded-xl hover:bg-white/60 transition-colors">
            <div className="flex items-center gap-2.5 3xl:gap-3.5 min-w-0">
              <div className="relative w-9 h-9 3xl:w-11 3xl:h-11 4xl:w-12 4xl:h-12 rounded-lg 3xl:rounded-xl overflow-hidden shrink-0 border border-[#FF6400]/25 shadow-xs">
                <img
                  src="/images/goads-showcase/thumb_ai_fleet.webp"
                  alt="Dashboard AI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-[13px] 3xl:text-[15px] 4xl:text-[16.5px] font-bold text-[#001C4C] leading-tight">
                  Hệ Thống Quản Lý Chiến Dịch &amp; Đo Lường AI
                </h4>
                <p className="text-[11.5px] 3xl:text-xs 4xl:text-[13.5px] text-[#001C4C]/75 leading-tight truncate mt-0.5">
                  Theo dõi số người tiếp cận và tối ưu hóa hiệu suất chiến dịch
                </p>
              </div>
            </div>
            <span className="shrink-0 px-2 py-0.5 3xl:px-2.5 3xl:py-1 rounded-full bg-[#FFF4EB] border border-[#FFD9BD] text-[#FF6400] text-[10.5px] 3xl:text-[11.5px] 4xl:text-xs font-bold">
              AI &amp; Big Data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
