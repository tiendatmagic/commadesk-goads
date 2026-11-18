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
    <div className="relative w-full max-w-[520px] xl:max-w-[540px] 3xl:max-w-[620px] 4xl:max-w-[700px] 5xl:max-w-[780px]">
      {/* Thẻ Card Kính Mờ Chuẩn Glassmorphism (Background Opacity 0.6 & Backdrop Blur 6px - Tự động mở rộng tỷ lệ trên 2K/4K) */}
      <div className="w-full bg-white/60 backdrop-blur-[6px] rounded-3xl 4xl:rounded-[36px] p-7 sm:p-10 md:p-12 3xl:p-14 4xl:p-16 5xl:p-20 shadow-[0_20px_60px_rgba(0,28,76,0.07),_0_10px_32px_rgba(255,100,0,0.14),_inset_0_1px_2px_rgba(255,255,255,0.95)] border border-white/85 transform-gpu">
        {/* 1. Logo Thương Hiệu GOADS Chính Thức */}
      <img
        src="./assets/images/GoadsLogo.png"
        alt="GOADS Media Technology - goads.vn"
        className="mb-6 sm:mb-8 3xl:mb-10 h-[46px] w-auto sm:h-[58px] md:h-[68px] min-[1200px]:h-[74px] 3xl:h-[84px] 4xl:h-[96px] 5xl:h-[110px] object-contain"
      />

      {/* 2. Tiêu Đề Chào Mừng */}
      <div className="mb-6 sm:mb-8 3xl:mb-10">
        <h1 className="text-[26px] xs:text-2xl sm:text-[32px] min-[1200px]:text-[36px] 3xl:text-[42px] 4xl:text-[48px] 5xl:text-[54px] font-extrabold leading-tight text-[#001C4C] tracking-tight">
          Chào mừng trở lại!
        </h1>
        <p className="mt-2 3xl:mt-3 text-xs sm:text-[15px] 3xl:text-base 4xl:text-lg 5xl:text-xl leading-snug text-[#001C4C]/75">
          CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUYỀN THÔNG GOADS
        </p>
      </div>

      {/* 3. Khung Thông Báo Lỗi */}
      <div
        id="error"
        className="text-[#e11d48] bg-[#fff0f2] border border-[#ffd0d4] rounded-xl 4xl:rounded-2xl p-3.5 3xl:p-4 4xl:p-5 text-xs sm:text-sm 3xl:text-base leading-snug flex items-start gap-2.5 mb-5 3xl:mb-6 shadow-xs"
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
          <label htmlFor="username" className="block text-xs sm:text-sm 3xl:text-base 4xl:text-lg font-bold text-[#001C4C] mb-1.5 3xl:mb-2">
            Tài khoản / Email công vụ <span className="text-[#FF6400]">*</span>
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="w-full rounded-xl 4xl:rounded-2xl border border-[#E4E4E4] bg-white/75 focus:bg-white px-3.5 sm:px-4 3xl:px-5 4xl:px-6 py-3 3xl:py-3.5 4xl:py-4 5xl:py-5 text-sm sm:text-[15px] 3xl:text-base 4xl:text-lg 5xl:text-xl text-[#001C4C] outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition-colors duration-150"
            placeholder="Nhập tên đăng nhập hoặc email @goads.vn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        {/* Trường nhập Mật khẩu */}
        <div className="mt-4 3xl:mt-5 4xl:mt-6">
          <label htmlFor="password" className="block text-xs sm:text-sm 3xl:text-base 4xl:text-lg font-bold text-[#001C4C] mb-1.5 3xl:mb-2">
            Mật khẩu <span className="text-[#FF6400]">*</span>
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full rounded-xl 4xl:rounded-2xl border border-[#E4E4E4] bg-white/75 focus:bg-white px-3.5 sm:px-4 3xl:px-5 4xl:px-6 py-3 3xl:py-3.5 4xl:py-4 5xl:py-5 pr-12 3xl:pr-14 text-sm sm:text-[15px] 3xl:text-base 4xl:text-lg 5xl:text-xl text-[#001C4C] outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition-colors duration-150"
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
              className="absolute right-3.5 3xl:right-4 top-1/2 -translate-y-1/2 text-[#9AA0A6] hover:text-[#001C4C] p-1 transition-colors duration-150 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Ghi nhớ & Quên mật khẩu */}
        <div className="mt-4 3xl:mt-5 flex items-center justify-between text-xs sm:text-sm 3xl:text-base text-[#5C6570]">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="h-4 w-4 3xl:h-5 3xl:w-5 accent-[#FF6400] rounded cursor-pointer"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Ghi nhớ đăng nhập
          </label>
          <span className="cursor-pointer hover:text-[#FF6400] transition-colors duration-150">Quên mật khẩu?</span>
        </div>

        {/* Nút Submit CTA */}
        <button
          type="submit"
          id="btn-login"
          disabled={isLoading}
          className="mt-6 3xl:mt-8 w-full rounded-xl 4xl:rounded-2xl bg-[#FF6400] py-3.5 3xl:py-4 4xl:py-5 5xl:py-6 text-base 3xl:text-lg 4xl:text-xl 5xl:text-2xl font-bold text-white shadow-[0_8px_20px_rgb(255_100_0_/_28%)] 4xl:shadow-[0_12px_30px_rgb(255_100_0_/_35%)] transition-[filter,transform] duration-150 ease-out hover:brightness-105 active:scale-[0.99] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="inline-block w-4 h-4 3xl:w-5 3xl:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Đang xác thực...</span>
            </>
          ) : (
            <span id="btn-login-label">Đăng nhập</span>
          )}
        </button>

        {/* Hotline hỗ trợ kỹ thuật */}
        <div className="mt-6 3xl:mt-8">
          <HotlineBanner label="Hỗ Trợ Chiến Dịch &amp; Kỹ Thuật 24/7" />
        </div>
      </form>

      {/* 5. Panel: requires_email */}
      <div
        id="email-box"
        hidden={currentPanel !== 'email'}
      >
        <p className="text-[17px] 3xl:text-xl 4xl:text-2xl font-bold text-[#001C4C] mb-1.5">Xác nhận email liên kết</p>
        <p className="text-sm 3xl:text-base text-[#001C4C]/75 leading-relaxed mb-5 3xl:mb-6">
          Tài khoản này được gán cho nhiều chiến dịch quảng cáo hoặc cụm phương tiện. Vui lòng nhập email làm việc chính thức để tiếp tục.
        </p>
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 3xl:gap-5">
          <div>
            <label htmlFor="emailSpecific" className="block text-xs sm:text-sm 3xl:text-base font-bold text-[#001C4C] mb-1.5 3xl:mb-2">
              Email công vụ GOADS <span className="text-[#FF6400]">*</span>
            </label>
            <div className="relative">
              <input
                id="emailSpecific"
                name="emailSpecific"
                type="email"
                ref={emailInputRef}
                className="w-full rounded-xl 4xl:rounded-2xl border border-[#E4E4E4] bg-[#FAFAFA] focus:bg-white px-3.5 sm:px-4 3xl:px-5 4xl:px-6 py-3 3xl:py-3.5 4xl:py-4 pl-10 3xl:pl-12 text-sm sm:text-[15px] 3xl:text-base 4xl:text-lg text-[#001C4C] outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition"
                placeholder="name@goads.vn"
                value={emailSpecific}
                onChange={(e) => setEmailSpecific(e.target.value)}
                autoComplete="email"
                required
              />
              <div className="absolute left-3.5 3xl:left-4 top-1/2 -translate-y-1/2 text-[#9AA0A6] pointer-events-none">
                <MailIcon size={18} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="btn-email"
            disabled={isLoading}
            className="w-full rounded-xl 4xl:rounded-2xl bg-[#FF6400] py-3.5 3xl:py-4 4xl:py-5 text-base 3xl:text-lg 4xl:text-xl font-bold text-white shadow-[0_8px_20px_rgb(255_100_0_/_28%)] transition-[filter,transform] duration-150 ease-out hover:brightness-105 active:scale-[0.99] cursor-pointer mt-1"
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
            className="w-full rounded-xl 4xl:rounded-2xl border border-[#E4E4E4] bg-white py-2.5 sm:py-3 3xl:py-3.5 text-sm 3xl:text-base font-semibold text-[#001C4C] hover:bg-[#F5F7FA] transition-colors duration-150 cursor-pointer"
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
        <p className="text-[17px] 3xl:text-xl 4xl:text-2xl font-bold text-[#001C4C] mb-1.5">Xác thực 2 bước (2FA)</p>
        <p className="text-sm 3xl:text-base text-[#001C4C]/75 leading-relaxed mb-5 3xl:mb-6">
          Vui lòng nhập mã bảo mật OTP 6 chữ số từ ứng dụng xác thực của quản trị viên (Google Authenticator / Microsoft Authenticator).
        </p>
        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4 3xl:gap-5">
          <div>
            <label htmlFor="otp" className="block text-xs sm:text-sm 3xl:text-base font-bold text-[#001C4C] mb-1.5 3xl:mb-2">
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
                className="w-full rounded-xl 4xl:rounded-2xl border border-[#E4E4E4] bg-[#FAFAFA] focus:bg-white px-3.5 sm:px-4 3xl:px-5 4xl:px-6 py-3 3xl:py-3.5 4xl:py-4 pl-10 3xl:pl-12 text-sm sm:text-[15px] 3xl:text-base 4xl:text-lg text-[#001C4C] tracking-widest font-semibold outline-none placeholder:text-[#B0B0B0] focus:border-[#FF6400] focus:ring-2 focus:ring-[#FF6400]/15 transition-colors duration-150"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                autoComplete="one-time-code"
                required
              />
              <div className="absolute left-3.5 3xl:left-4 top-1/2 -translate-y-1/2 text-[#9AA0A6] pointer-events-none">
                <ShieldCheckIcon size={18} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="btn-otp"
            disabled={isLoading}
            className="w-full rounded-xl 4xl:rounded-2xl bg-[#FF6400] py-3.5 3xl:py-4 4xl:py-5 text-base 3xl:text-lg 4xl:text-xl font-bold text-white shadow-[0_8px_20px_rgb(255_100_0_/_28%)] transition-[filter,transform] duration-150 ease-out hover:brightness-105 active:scale-[0.99] cursor-pointer mt-1"
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
            className="w-full rounded-xl 4xl:rounded-2xl border border-[#E4E4E4] bg-white py-2.5 sm:py-3 3xl:py-3.5 text-sm 3xl:text-base font-semibold text-[#001C4C] hover:bg-[#F5F7FA] transition-colors duration-150 cursor-pointer"
          >
            Quay lại đăng nhập
          </button>
        </form>
      </div>
    </div>
  </div>
);
}
