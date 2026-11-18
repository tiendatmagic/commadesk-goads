import React from 'react';

/**
 * -----------------------------------------------------------------------------
 * Table Component System (Chuẩn Tailwind CSS v4 & Modular Tái Sử Dụng)
 * -----------------------------------------------------------------------------
 * Cung cấp đầy đủ các primitive component (Table, TableHeader, TableBody,
 * TableRow, TableHead, TableCell, TableFooter, TableCaption)
 * Hỗ trợ Responsive Container tự động chống co rúm chữ trên Mobile & Tablet.
 */

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  containerClassName?: string;
  minWidth?: string;
  showScrollHint?: boolean;
}

export function Table({
  className = '',
  containerClassName = '',
  minWidth = 'min-w-[840px]',
  showScrollHint = true,
  children,
  ...props
}: TableProps) {
  return (
    <div className={`w-full ${containerClassName}`}>
      {showScrollHint && (
        <div className="md:hidden flex items-center justify-between text-[11px] font-medium text-[#5a738e] bg-[#f8fafc] border border-[#e2eaf4] px-3 py-1.5 rounded-lg mb-2.5">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Bảng dữ liệu nhiều cột</span>
          </span>
          <span className="text-[#ff6400] font-semibold flex items-center gap-1">
            Vuốt ngang để xem chi tiết
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </span>
        </div>
      )}

      <div className="w-full overflow-x-auto custom-scrollbar rounded-xl border border-[#e2eaf4] bg-white shadow-xs">
        <table
          className={`w-full border-collapse text-sm text-left ${minWidth} ${className}`}
          {...props}
        >
          {children}
        </table>
      </div>
    </div>
  );
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  className?: string;
}

export function TableHeader({ className = '', children, ...props }: TableHeaderProps) {
  return (
    <thead
      className={`bg-[#f8fafc] text-[#64748b] text-xs uppercase tracking-wider border-b border-[#e2eaf4] [&_tr]:border-b-0 ${className}`}
      {...props}
    >
      {children}
    </thead>
  );
}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  className?: string;
}

export function TableBody({ className = '', children, ...props }: TableBodyProps) {
  return (
    <tbody
      className={`divide-y divide-[#edf2f7] bg-white text-[#0f172a] ${className}`}
      {...props}
    >
      {children}
    </tbody>
  );
}

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
  className?: string;
}

export function TableFooter({ className = '', children, ...props }: TableFooterProps) {
  return (
    <tfoot
      className={`border-t border-[#e2eaf4] bg-[#f8fafc]/70 font-medium text-xs text-[#64748b] ${className}`}
      {...props}
    >
      {children}
    </tfoot>
  );
}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  className?: string;
  isStriped?: boolean;
}

export function TableRow({
  className = '',
  isStriped = false,
  children,
  ...props
}: TableRowProps) {
  return (
    <tr
      className={`transition-colors hover:bg-[#fff9f5] ${
        isStriped ? 'even:bg-[#fcfdfd]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
  nowrap?: boolean;
}

export function TableHead({
  className = '',
  nowrap = true,
  children,
  ...props
}: TableHeadProps) {
  return (
    <th
      className={`p-3.5 px-4 3xl:p-4.5 3xl:px-5 font-bold text-xs 3xl:text-sm uppercase tracking-wider text-[#0f172a] align-middle ${
        nowrap ? 'whitespace-nowrap' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
  nowrap?: boolean;
  truncate?: boolean;
}

export function TableCell({
  className = '',
  nowrap = true,
  truncate = false,
  children,
  ...props
}: TableCellProps) {
  return (
    <td
      className={`p-3.5 px-4 3xl:p-4.5 3xl:px-5 align-middle text-sm 3xl:text-base text-[#0f172a] ${
        nowrap ? 'whitespace-nowrap' : ''
      } ${truncate ? 'truncate max-w-[280px] 3xl:max-w-[420px]' : ''} ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}

export interface TableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children: React.ReactNode;
  className?: string;
}

export function TableCaption({ className = '', children, ...props }: TableCaptionProps) {
  return (
    <caption className={`mt-3 text-xs text-[#5a738e] text-center ${className}`} {...props}>
      {children}
    </caption>
  );
}

export interface TableEmptyProps {
  colSpan: number;
  message?: string;
  description?: string;
}

export function TableEmpty({
  colSpan,
  message = 'Không tìm thấy dữ liệu',
  description = 'Hiện chưa có bản ghi phù hợp với bộ lọc hiện tại.',
}: TableEmptyProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="text-center py-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#fff8f2] text-[#ff6400] flex items-center justify-center text-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
          <p className="font-bold text-[#0f172a] text-sm">{message}</p>
          <p className="text-xs text-[#5a738e] max-w-sm">{description}</p>
        </div>
      </TableCell>
    </TableRow>
  );
}
