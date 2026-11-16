import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'tab';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isActive?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  isActive = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer rounded-xl select-none disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2.5 h-11 gap-2',
    lg: 'text-[15px] px-5 py-3 h-[50px] gap-2 tracking-wide',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#ff6400] hover:bg-[#e65a00] active:bg-[#cc5000] text-white shadow-[0_4px_14px_rgba(255,100,0,0.30)] hover:shadow-[0_6px_20px_rgba(255,100,0,0.42)] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white border border-[#e2eaf4] text-[#0f172a] hover:bg-[#fff8f2] hover:border-[#ff6400]/60 hover:text-[#ff6400]',
    danger:
      'bg-[#ff3b30]/15 border border-[#ff3b30]/40 text-[#ff3b30] hover:bg-[#ff3b30] hover:text-white',
    tab: isActive
      ? 'bg-[#ff6400] text-white border border-[#ff6400] shadow-sm'
      : 'bg-white text-[#334155] border border-[#e2eaf4] hover:bg-[#fff8f2] hover:text-[#ff6400]',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin shrink-0" aria-hidden="true" />
          <span>{loadingText || 'Đang xử lý...'}</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
