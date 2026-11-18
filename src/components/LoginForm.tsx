'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  ShieldCheckIcon,
  AlertCircleIcon,
} from './icons/Icons';
import { HotlineBanner } from './ui/HotlineBanner';
import { setupMockBridgeIfNeeded } from '@/utils/mockBridge';
import { CommaDeskLoginState } from '@/types/commadesk';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [emailSpecific, setEmailSpecific] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [currentPanel, setCurrentPanel] = useState<'login' | 'otp' | 'email'>('login');

  const otpInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Tự động kích hoạt mock bridge khi chạy local không có platform CommaDesk
    if (typeof window !== 'undefined' && !window.CommaDeskLogin) {
      setupMockBridgeIfNeeded();
    }

    const waitBridge = (cb: () => void) => {
      if (window.CommaDeskLogin) return cb();
      const interval = setInterval(() => {
        if (window.CommaDeskLogin) {
          clearInterval(interval);
          cb();
        }
      }, 50);
    };

    waitBridge(() => {
      const unsubscribe = window.CommaDeskLogin?.onState((state: CommaDeskLoginState) => {
        if (!state) return;

        if (state.status === 'loading') {
          setIsLoading(true);
          setErrorMsg('');
          return;
        }

        setIsLoading(false);

        if (state.status === 'error') {
          setErrorMsg(state.error || 'Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
          return;
        }

        if (state.status === 'requires_2fa') {
          setErrorMsg('');
          setCurrentPanel('otp');
          setOtp('');
          setTimeout(() => otpInputRef.current?.focus(), 100);
          return;
        }

        if (state.status === 'requires_email') {
          setErrorMsg('');
          setCurrentPanel('email');
          setTimeout(() => emailInputRef.current?.focus(), 100);
          return;
        }

        if (state.status === 'requires_org') {
          setErrorMsg(state.error || 'Không xác định được tổ chức trực thuộc GOADS. Vui lòng liên hệ ban quản trị.');
          setCurrentPanel('login');
          return;
        }

        if (state.status === 'success') {
          setErrorMsg('');
        }
      });

      return () => {
        if (unsubscribe) unsubscribe();
      };
    });
  }, []);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMsg('Vui lòng nhập tài khoản hoặc email công vụ GOADS.');
      return;
    }
    if (!password) {
      setErrorMsg('Vui lòng nhập mật khẩu bảo mật.');
      return;
    }

    setErrorMsg('');
    try {
      await window.CommaDeskLogin?.login({
        username: username.trim(),
        password: password,
        rememberMe: rememberMe,
      });
    } catch {}
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanOtp = otp.trim();
    if (!cleanOtp || cleanOtp.length < 6) {
      setErrorMsg('Vui lòng nhập đủ 6 chữ số mã xác thực OTP.');
      return;
    }

    setErrorMsg('');
    try {
      await window.CommaDeskLogin?.verify2fa({
        code: cleanOtp,
      });
    } catch {}
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = emailSpecific.trim();
    if (!cleanEmail) {
      setErrorMsg('Vui lòng nhập địa chỉ email của bạn.');
      return;
    }

    setErrorMsg('');
    try {
      await window.CommaDeskLogin?.login({
        username: username.trim(),
        password: password,
        emailSpecific: cleanEmail,
        rememberMe: rememberMe,
      });
    } catch {}
  };

  return (
    <div className="relative w-full max-w-[540px] min-[1400px]:max-w-[620px] min-[1600px]:max-w-[700px] min-[1800px]:max-w-[780px] min-[2100px]:max-w-[860px] min-[2400px]:max-w-[920px] min-[2800px]:max-w-[980px] min-[3200px]:max-w-[1060px]">
      {/* Thẻ Card Kính Mờ Chuẩn Glassmorphism (Background Opacity 0.6 & Backdrop Blur 6px - Tự động mở rộng tỷ lệ trên 2K/4K) */}
      <div className="w-full bg-white/60 backdrop-blur-[6px] rounded-3xl min-[1800px]:rounded-[32px] p-7 sm:p-9 min-[1400px]:p-9 min-[1600px]:p-10 min-[1800px]:p-11 min-[2100px]:p-12 min-[2400px]:p-12 shadow-[0_20px_60px_rgba(0,28,76,0.07),_0_10px_32px_rgba(255,100,0,0.14),_inset_0_1px_2px_rgba(255,255,255,0.95)] border border-white/85 transform-gpu">
        {/* 1. Logo Thương Hiệu GOADS Chính Thức */}
      <img
        src="./assets/images/GoadsLogo.png"
        alt="GOADS Media Technology - goads.vn"
        className="mb-5 sm:mb-6 min-[1800px]:mb-7 h-[46px] w-auto sm:h-[54px] min-[1400px]:h-[58px] min-[1800px]:h-[68px] min-[2100px]:h-[74px] object-contain"
      />

      {/* 2. Tiêu Đề Chào Mừng */}
      <div className="mb-5 sm:mb-6 min-[1800px]:mb-7">
        <h1 className="text-[26px] xs:text-2xl sm:text-[30px] min-[1400px]:text-[34px] min-[1800px]:text-[38px] min-[2100px]:text-[42px] font-extrabold leading-tight text-[#001C4C] tracking-tight">
          Chào mừng trở lại!
        </h1>
        <p className="mt-1.5 min-[1800px]:mt-2 text-xs sm:text-[14px] min-[1800px]:text-[15.5px] min-[2100px]:text-base leading-snug text-[#001C4C]/75">
          CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUYỀN THÔNG GOADS
        </p>
      </div>

      {/* 3. Khung Thông Báo Lỗi */}
      <div
        id="error"
        className="text-[#e11d48] bg-[#fff0f2] border border-[#ffd0d4] rounded-xl min-[1920px]:rounded-2xl p-3.5 min-[1920px]:p-4 text-xs sm:text-sm min-[1920px]:text-base leading-snug flex items-start gap-2.5 mb-5 shadow-xs"
        hidden={!errorMsg}
        role="alert"
      >
        <AlertCircleIcon size={18} className="shrink-0 mt-0.5 text-[#e11d48]" />
        <span>{errorMsg}</span>
      </div>

      {/* 4. Form Đăng Nhập Chính */}
      <form
        id="login-form"
        onSubmit={handleLoginSubmit}
        hidden={currentPanel !== 'login'}
        noValidate
        className="flex flex-col"
      >
        {/* Trường nhập Tài khoản */}
        <div>
          <label htmlFor="username" className="block text-xs sm:text-sm min-[1920px]:text-[15px] font-bold text-[#001C4C] mb-1.5 min-[1920px]:mb-2">
            Tài khoản / Email công vụ <span className="text-[#FF6400]">*</span>
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="w-full rounded-xl min-[1920px]:rounded-2xl border border-[#E4E4E4] bg-white/75 focus:bg-white px-3.5 sm:px-4 min-[1920px]:px-5 py-3 min-[1920px]:py-3.5 text-sm sm:text-[15px] min-[1920px]:text-base text-[#001C4C] outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition-colors duration-150"
            placeholder="Nhập tên đăng nhập hoặc email @goads.vn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        {/* Trường nhập Mật khẩu */}
        <div className="mt-4 min-[1800px]:mt-5">
          <label htmlFor="password" className="block text-xs sm:text-sm min-[1800px]:text-[15px] font-bold text-[#001C4C] mb-1.5 min-[1800px]:mb-2">
            Mật khẩu <span className="text-[#FF6400]">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full rounded-xl min-[1800px]:rounded-2xl border border-[#E4E4E4] bg-white/75 focus:bg-white pl-3.5 sm:pl-4 min-[1800px]:pl-5 pr-11 sm:pr-12 min-[1800px]:pr-14 py-3 min-[1800px]:py-3.5 text-sm sm:text-[15px] min-[1800px]:text-base text-[#001C4C] outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition-colors duration-150"
              placeholder="Nhập mật khẩu truy cập"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              id="toggle-password"
              aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              className="absolute right-3.5 min-[1800px]:right-4 top-1/2 -translate-y-1/2 text-[#9AA0A6] hover:text-[#001C4C] p-1 transition-colors duration-150 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Ghi nhớ & Quên mật khẩu - Checkbox Custom Đẹp Mắt Chuẩn Design System */}
        <div className="mt-4 min-[1920px]:mt-5 flex items-center justify-between text-xs sm:text-sm min-[1920px]:text-[15px] text-[#5C6570]">
          <label className="group flex items-center gap-2.5 cursor-pointer select-none">
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="peer sr-only"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <div
                className={`w-[18px] h-[18px] min-[1920px]:w-5 min-[1920px]:h-5 rounded-md border flex items-center justify-center transition-all duration-200 ${
                  rememberMe
                    ? 'bg-[#FF6400] border-[#FF6400] text-white shadow-[0_2px_8px_rgba(255,100,0,0.35)]'
                    : 'bg-white/85 border-[#CBD5E1] group-hover:border-[#FF6400]/70 group-hover:bg-white'
                } peer-focus-visible:ring-2 peer-focus-visible:ring-[#FF6400]/30 peer-focus-visible:ring-offset-1`}
              >
                <svg
                  className={`w-3 h-3 min-[1920px]:w-3.5 min-[1920px]:h-3.5 text-white transition-all duration-200 stroke-[3] ${
                    rememberMe ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>
            <span className="text-[#001C4C]/80 group-hover:text-[#001C4C] transition-colors font-medium">
              Ghi nhớ đăng nhập
            </span>
          </label>
          <span className="cursor-pointer hover:text-[#FF6400] transition-colors duration-150">Quên mật khẩu?</span>
        </div>

        {/* Nút Submit CTA */}
        <button
          type="submit"
          id="btn-login"
          disabled={isLoading}
          className="mt-6 min-[1920px]:mt-7 w-full rounded-xl min-[1920px]:rounded-2xl bg-[#FF6400] py-3.5 min-[1920px]:py-4 text-base min-[1920px]:text-lg font-bold text-white shadow-[0_8px_20px_rgb(255_100_0_/_28%)] transition-[filter,transform] duration-150 ease-out hover:brightness-105 active:scale-[0.99] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="inline-block w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Đang xác thực...</span>
            </>
          ) : (
            <span id="btn-login-label">Đăng nhập</span>
          )}
        </button>

        {/* Hotline hỗ trợ kỹ thuật */}
        <div className="mt-5 min-[1920px]:mt-6">
          <HotlineBanner label="Hỗ Trợ Chiến Dịch &amp; Kỹ Thuật 24/7" />
        </div>
      </form>

      {/* 5. Panel: requires_email */}
      <div
        id="email-box"
        hidden={currentPanel !== 'email'}
      >
        <p className="text-[17px] min-[1800px]:text-xl min-[2200px]:text-2xl font-bold text-[#001C4C] mb-1.5">
          Xác nhận email liên kết
        </p>
        <p className="text-sm min-[1800px]:text-base text-[#001C4C]/75 leading-relaxed mb-5 min-[1800px]:mb-6">
          Tài khoản này được gán cho nhiều chiến dịch quảng cáo hoặc cụm phương tiện. Vui lòng nhập email làm việc chính thức để tiếp tục.
        </p>
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 min-[1800px]:gap-5">
          <div>
            <label htmlFor="emailSpecific" className="block text-xs sm:text-sm min-[1800px]:text-[15px] font-bold text-[#001C4C] mb-1.5 min-[1800px]:mb-2">
              Email công vụ GOADS <span className="text-[#FF6400]">*</span>
            </label>
            <div className="relative">
              <input
                id="emailSpecific"
                name="emailSpecific"
                type="email"
                ref={emailInputRef}
                className="w-full rounded-xl min-[1800px]:rounded-2xl border border-[#E4E4E4] bg-white/75 focus:bg-white pl-11 sm:pl-12 min-[1800px]:pl-14 pr-3.5 sm:pr-4 min-[1800px]:pr-5 py-3 min-[1800px]:py-3.5 text-sm sm:text-[15px] min-[1800px]:text-base text-[#001C4C] outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition-colors duration-150"
                placeholder="name@goads.vn"
                value={emailSpecific}
                onChange={(e) => setEmailSpecific(e.target.value)}
                autoComplete="email"
                required
              />
              <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#9AA0A6] pointer-events-none flex items-center justify-center">
                <MailIcon size={18} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="btn-email"
            disabled={isLoading}
            className="w-full rounded-xl min-[1800px]:rounded-2xl bg-[#FF6400] py-3.5 min-[1800px]:py-4 text-base min-[1800px]:text-lg font-bold text-white shadow-[0_8px_20px_rgb(255_100_0_/_28%)] transition-[filter,transform] duration-150 ease-out hover:brightness-105 active:scale-[0.99] cursor-pointer mt-1"
          >
            Tiếp tục
          </button>
          <button
            type="button"
            id="btn-email-back"
            onClick={() => {
              setErrorMsg('');
              setCurrentPanel('login');
            }}
            className="w-full rounded-xl min-[1800px]:rounded-2xl border border-[#E4E4E4] bg-white py-3 min-[1800px]:py-3.5 text-sm min-[1800px]:text-base font-semibold text-[#001C4C] hover:bg-[#F5F7FA] transition-colors duration-150 cursor-pointer"
          >
            Quay lại đăng nhập
          </button>
        </form>
      </div>

      {/* 6. Panel: requires_2fa */}
      <div
        id="otp-box"
        hidden={currentPanel !== 'otp'}
      >
        <p className="text-[17px] min-[1800px]:text-xl min-[2200px]:text-2xl font-bold text-[#001C4C] mb-1.5">
          Xác thực 2 bước (2FA)
        </p>
        <p className="text-sm min-[1800px]:text-base text-[#001C4C]/75 leading-relaxed mb-5 min-[1800px]:mb-6">
          Vui lòng nhập mã bảo mật OTP 6 chữ số từ ứng dụng xác thực của quản trị viên (Google Authenticator / Microsoft Authenticator).
        </p>
        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4 min-[1800px]:gap-5">
          <div>
            <label htmlFor="otp" className="block text-xs sm:text-sm min-[1800px]:text-[15px] font-bold text-[#001C4C] mb-1.5 min-[1800px]:mb-2">
              Mã OTP 6 số <span className="text-[#FF6400]">*</span>
            </label>
            <div className="relative">
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                ref={otpInputRef}
                className="w-full rounded-xl min-[1800px]:rounded-2xl border border-[#E4E4E4] bg-white/75 focus:bg-white pl-11 sm:pl-12 min-[1800px]:pl-14 pr-3.5 sm:pr-4 min-[1800px]:pr-5 py-3 min-[1800px]:py-3.5 text-sm sm:text-[15px] min-[1800px]:text-base text-[#001C4C] tracking-widest font-semibold outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition-colors duration-150"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                autoComplete="one-time-code"
                required
              />
              <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#9AA0A6] pointer-events-none flex items-center justify-center">
                <ShieldCheckIcon size={19} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="btn-otp"
            disabled={isLoading}
            className="w-full rounded-xl min-[1800px]:rounded-2xl bg-[#FF6400] py-3.5 min-[1800px]:py-4 text-base min-[1800px]:text-lg font-bold text-white shadow-[0_8px_20px_rgb(255_100_0_/_28%)] transition-[filter,transform] duration-150 ease-out hover:brightness-105 active:scale-[0.99] cursor-pointer mt-1"
          >
            {isLoading ? 'Đang kiểm tra OTP...' : 'Xác nhận mã bảo mật'}
          </button>
          <button
            type="button"
            id="btn-otp-back"
            onClick={() => {
              setErrorMsg('');
              setCurrentPanel('login');
            }}
            className="w-full rounded-xl min-[1800px]:rounded-2xl border border-[#E4E4E4] bg-white py-3 min-[1800px]:py-3.5 text-sm min-[1800px]:text-base font-semibold text-[#001C4C] hover:bg-[#F5F7FA] transition-colors duration-150 cursor-pointer"
          >
            Quay lại đăng nhập
          </button>
        </form>
      </div>
    </div>
  </div>
);
}
