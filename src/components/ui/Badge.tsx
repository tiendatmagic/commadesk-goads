import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'info' | 'danger' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = 'neutral',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const variantStyles = {
    success: 'bg-[#e6f8ec] text-[#008a3d] border border-[#b8dec4]',
    warning: 'bg-[#fff7ee] text-[#ff6400] border border-[#ffd4ba]',
    info: 'bg-[#eef4ff] text-[#0057e1] border border-[#cbdcfc]',
    danger: 'bg-[#fff0f2] text-[#e11d48] border border-[#ffd0d4]',
    neutral: 'bg-white/10 text-white border border-white/20',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 3xl:px-3 py-1 3xl:py-1.5 rounded-md 3xl:rounded-lg text-xs 3xl:text-sm font-bold ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
