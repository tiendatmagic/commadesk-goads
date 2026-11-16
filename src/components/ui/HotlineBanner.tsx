import React from 'react';
import { PhoneIcon, MailIcon } from '@/components/icons/Icons';

export interface PhoneItem {
  number: string;
  tel: string;
  label?: string;
}

export interface HotlineBannerProps {
  label?: string;
  phones?: PhoneItem[];
  email?: string;
  className?: string;
}

const DEFAULT_PHONES: PhoneItem[] = [
  { number: '094 531 89 68', tel: '0945318968' },
];

export function HotlineBanner({
  label = 'Hỗ Trợ Kỹ Thuật & Chiến Dịch 24/7',
  phones = DEFAULT_PHONES,
  email,
  className = '',
}: HotlineBannerProps) {
  return (
    <div
      className={`flex items-center gap-3.5 bg-[#fff8f2] border border-[#ffdecb] rounded-xl p-3 px-4 transition-all duration-300 hover:border-[#ff6400]/60 hover:bg-[#fff3eb] hover:shadow-xs ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#ff6400] text-white flex items-center justify-center text-lg shrink-0 shadow-[0_2px_8px_rgba(255,100,0,0.28)]">
        <PhoneIcon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="block text-[11px] font-bold text-[#627792] tracking-wider uppercase mb-0.5">
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          {phones.map((phone, idx) => (
            <React.Fragment key={phone.tel}>
              {idx > 0 && <span className="text-xs font-semibold text-[#8ea5bc]">/</span>}
              <a
                href={`tel:${phone.tel}`}
                className="text-[15px] sm:text-[16px] font-extrabold text-[#0f172a] hover:text-[#ff6400] transition-colors no-underline tracking-tight whitespace-nowrap hover:underline"
                title={`Hotline tư vấn: ${phone.number}`}
              >
                {phone.number}
              </a>
            </React.Fragment>
          ))}
          {email && (
            <>
              <span className="text-xs font-semibold text-[#8ea5bc]">|</span>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#627792] hover:text-[#ff6400] transition-colors no-underline"
              >
                <MailIcon size={12} />
                <span>{email}</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
