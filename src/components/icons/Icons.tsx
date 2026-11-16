import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Biểu tượng Radar & Tín Hiệu Phát Sóng Nhận Diện Thương Hiệu GOADS
 * (Phát sóng thông điệp quảng cáo ngoài trời OOH & DOOH)
 */
export function GoadsIcon({ size = 32, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="50" cy="50" r="46" fill="#ff6400" />
      {/* Vòng cung sóng radar tín hiệu quảng cáo GOADS màu trắng & vàng cam */}
      <circle cx="50" cy="50" r="36" stroke="#ffffff" strokeWidth="4" strokeDasharray="14 8" opacity="0.85" />
      <circle cx="50" cy="50" r="26" stroke="#ffebc2" strokeWidth="4" opacity="0.95" />
      {/* Lõi tâm phát sáng với chữ G hoặc điểm phát LED */}
      <circle cx="50" cy="50" r="14" fill="#ffffff" />
      <path
        d="M54 44H46C43.8 44 42 45.8 42 48V52C42 54.2 43.8 56 46 56H54V50H48"
        stroke="#ff6400"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Component Logo GOADS Đầy Đủ (Hiển thị tệp ảnh nhận diện chính thức)
 */
export function GoadsLogo({
  width = 200,
  height = 70,
  className = '',
  light = false,
  ...props
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
  light?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width, height }}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="./images/goads-logo.png"
        alt="GOADS Media Technology"
        className={`w-full h-full object-contain ${light ? 'brightness-0 invert' : ''}`}
        loading="eager"
      />
    </div>
  );
}

/**
 * Khung Logo GOADS sang trọng cho Header của Form Đăng Nhập
 */
export function GoadsFormLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <div className="relative flex items-center justify-center px-7 py-4 rounded-2xl bg-white border border-[#fed7aa]/60 shadow-[0_4px_20px_rgba(255,100,0,0.08)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(255,100,0,0.15)] hover:border-[#ff6400]/40">
        <GoadsLogo width={180} height={60} />
      </div>
    </div>
  );
}

/* =========================================================================
   Các Biểu Tượng Dịch Vụ & Nghiệp Vụ Công Nghệ GOADS
   ========================================================================= */

/** Màn Hình LED Trên Xe Máy (Smart Mobile LED Screen) */
export function SmartLedIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="3" width="20" height="13" rx="2"></rect>
      <circle cx="6" cy="19" r="2"></circle>
      <circle cx="18" cy="19" r="2"></circle>
      <path d="M8 19h8"></path>
      <path d="M12 16v3"></path>
    </svg>
  );
}

/** LEDBike - Xe máy gắn màn hình LED thông minh chuẩn GOADS */
export function BikeLedIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="5.5" cy="17" r="3"></circle>
      <circle cx="18.5" cy="17" r="3"></circle>
      <path d="M15 6h2.5"></path>
      <path d="M16 6l-3.5 7h-4"></path>
      <path d="M8.5 13l-3 4"></path>
      <path d="M12.5 13l6 4"></path>
      <rect x="3" y="7" width="5.5" height="5" rx="1" fill="currentColor" fillOpacity="0.25"></rect>
      <path d="M4 9h3.5"></path>
      <path d="M4 11h2"></path>
    </svg>
  );
}

/** Đội Xe Roadshow & Xe 4 Bánh Mobile Billboard */
export function RoadshowIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="5" width="13" height="10" rx="1.5"></rect>
      <path d="M15 8h4.5l2.5 3.5v3.5h-2"></path>
      <circle cx="6" cy="18" r="2"></circle>
      <circle cx="17.5" cy="18" r="2"></circle>
      <path d="M8 18h7.5"></path>
      <path d="M2 18h2"></path>
      <line x1="5" y1="9" x2="12" y2="9"></line>
    </svg>
  );
}

/** Hệ Thống Quản Lý Chiến Dịch & Dashboard Đo Lường AI */
export function AiDashboardIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
      <path d="M6 10l3-3 3 3 5-5"></path>
      <circle cx="17" cy="5" r="1" fill="currentColor"></circle>
    </svg>
  );
}

/** Mũi tên điều hướng nhỏ (Chevron Right) */
export function ChevronRightIcon({ size = 16, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

/** AI Camera Nhận Diện & Đo Lường Lượt Tiếp Cận (Audience Analytics) */
export function AiCameraIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
      <path d="M12 9v1"></path>
      <path d="M12 16v1"></path>
      <path d="M9 13h1"></path>
      <path d="M14 13h1"></path>
    </svg>
  );
}

/** Quản Lý Chiến Dịch & Phân Tích Hiệu Suất (Campaign System) */
export function CampaignIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M3 3v18h18"></path>
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
    </svg>
  );
}

/** Định Vị GPS & Bản Đồ Hành Trình (GPS Route Tracker) */
export function GpsTrackIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="2" x2="12" y2="6"></line>
      <line x1="12" y1="18" x2="12" y2="22"></line>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
      <line x1="2" y1="12" x2="6" y2="12"></line>
      <line x1="18" y1="12" x2="22" y2="12"></line>
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
    </svg>
  );
}

/** Activity / Pulse Analytics Icon */
export function ActivityIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
}

/** CPU / Microchip Hardware Icon */
export function CpuIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="15" x2="23" y2="15"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="15" x2="4" y2="15"></line>
    </svg>
  );
}

/* =========================================================================
   Các Biểu Tượng Giao Diện & Form Phổ Biến
   ========================================================================= */

export function UserIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

export function LockIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}

export function EyeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

export function EyeOffIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );
}

export function PhoneIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export function MailIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export function ShieldCheckIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
  );
}

export function AlertCircleIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}

export function CheckCircleIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

export function ClockIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export function RefreshCwIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  );
}

export function LogOutIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  );
}
