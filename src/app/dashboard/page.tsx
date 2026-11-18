'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  GoadsIcon,
  SmartLedIcon,
  RoadshowIcon,
  AiCameraIcon,
  ActivityIcon,
  AlertCircleIcon,
  ShieldCheckIcon,
} from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';
import { Card, KpiCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableEmpty,
} from '@/components/ui/Table';

interface ServiceNode {
  id: string;
  code: string;
  location: string;
  serviceType: 'led' | 'roadshow' | 'ai';
  serviceName: string;
  metrics: string;
  bandwidth: string;
  technician: string;
  time: string;
  status: 'completed' | 'processing' | 'pending';
  statusText: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'led' | 'roadshow'>('all');
  const [mobileDisplayMode, setMobileDisplayMode] = useState<'card' | 'table'>('card');

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('cp_user');
      } catch {}
      router.push('/');
    }
  };

  const serviceNodes: ServiceNode[] = [
    {
      id: 'GOAD-LED-8812',
      code: 'M-LED-Q1-01..20',
      location: 'Tuyến Nguyễn Huệ - Lê Lợi (Quận 1, TP.HCM)',
      serviceType: 'led',
      serviceName: 'Màn Hình LED Xe Máy (DOOH)',
      metrics: '34,250 Lượt tiếp cận',
      bandwidth: 'GPS Active • Độ sáng Auto-Lux',
      technician: 'Kỹ sư Bùi Thanh Nam',
      time: '15:45 - Hôm nay',
      status: 'completed',
      statusText: 'Đang di chuyển & phát sóng',
    },
    {
      id: 'GOAD-RS-3401',
      code: 'RS-BRAND-HCM-06',
      location: 'Đoàn Xe Võ Thị Sáu - Nam Kỳ Khởi Nghĩa',
      serviceType: 'roadshow',
      serviceName: 'Đội Xe Diễu Hành Roadshow',
      metrics: '18 Xe máy + 02 Xe 4 bánh',
      bandwidth: 'Đồng bộ Media HD 1080p',
      technician: 'Đội Vận Hành Chiến Dịch',
      time: '15:20 - Hôm nay',
      status: 'completed',
      statusText: 'Đang chạy đúng lộ trình',
    },
    {
      id: 'GOAD-LED-8815',
      code: 'M-LED-Q3-01..15',
      location: 'Khu vực Trương Định - Hồ Con Rùa (Quận 3)',
      serviceType: 'led',
      serviceName: 'Màn Hình LED Xe Máy (DOOH)',
      metrics: '28,920 Lượt tiếp cận',
      bandwidth: 'Lưu lượng cao (Giờ cao điểm)',
      technician: 'Kỹ sư Lê Hoàng Long',
      time: '14:50 - Hôm nay',
      status: 'processing',
      statusText: 'Mật độ đông (Tăng tần suất)',
    },
    {
      id: 'GOAD-RS-3409',
      code: 'MB-4W-Q7-02',
      location: 'Đoàn Xe 4 Bánh Mobile Billboard (Quận 7)',
      serviceType: 'roadshow',
      serviceName: 'Mobile Billboard 4 Bánh',
      metrics: 'Màn hình LED kép 2 mặt',
      bandwidth: 'Luồng Video 4K 60fps',
      technician: 'Kỹ sư Đặng Quốc Cường',
      time: '14:15 - Hôm nay',
      status: 'pending',
      statusText: 'Chờ duyệt spot phát mới',
    },
    {
      id: 'GOAD-LED-8820',
      code: 'M-LED-GV-01..12',
      location: 'KDC Cityland Center Hills (Gò Vấp)',
      serviceType: 'led',
      serviceName: 'Màn Hình LED Xe Máy (DOOH)',
      metrics: '19,150 Lượt tiếp cận',
      bandwidth: 'GPS Live • Pin 94%',
      technician: 'Kỹ sư Nguyễn Minh Tuấn',
      time: '13:30 - Hôm nay',
      status: 'completed',
      statusText: 'Chiến dịch Active 100%',
    },
  ];

  const filteredNodes =
    activeTab === 'all'
      ? serviceNodes
      : serviceNodes.filter((item) => item.serviceType === activeTab);

  return (
    <div className="min-h-screen bg-[#f7f9fc] flex flex-col text-[#0f172a]">
      {/* Top Navigation - Tối ưu tỷ lệ cân đối trên màn hình lớn 2K/4K */}
      <header className="bg-[#090d16] text-white px-4 sm:px-6 lg:px-8 min-[1800px]:px-12 min-[2400px]:px-16 py-4 min-[1800px]:py-5 min-[2400px]:py-6 border-b-2 border-[#ff6400] sticky top-0 z-50 shadow-md">
        <div className="w-full max-w-[1500px] min-[1400px]:max-w-[1650px] min-[1600px]:max-w-[1800px] min-[1800px]:max-w-[1980px] min-[2100px]:max-w-[2200px] min-[2400px]:max-w-[2450px] min-[2800px]:max-w-[2750px] min-[3200px]:max-w-[3200px] mx-auto flex flex-wrap items-center justify-between gap-4 min-[1800px]:gap-6">
          <div className="flex items-center gap-3.5">
            <div className="flex items-center gap-2.5 text-lg min-[1800px]:text-xl min-[2400px]:text-2xl font-extrabold tracking-tight">
              <GoadsIcon size={26} className="drop-shadow-[0_0_8px_rgba(255,100,0,0.8)] min-[1800px]:w-8 min-[1800px]:h-8 min-[2400px]:w-9 min-[2400px]:h-9" />
              <span className="tracking-wide">GOADS MEDIA TECHNOLOGY</span>
            </div>
            <Badge variant="neutral" className="hidden sm:inline-flex bg-white/10 text-white border-white/20 min-[1800px]:text-sm min-[1800px]:px-3.5 min-[1800px]:py-1.5 min-[2400px]:text-base min-[2400px]:px-4 min-[2400px]:py-2">
              <AiCameraIcon size={14} className="text-[#ff7a1a] min-[1800px]:w-4 min-[1800px]:h-4 min-[2400px]:w-5 min-[2400px]:h-5" />
              Trung Tâm Điều Hành Chiến Dịch OOH &amp; DOOH Toàn Quốc
            </Badge>
          </div>

          <div className="flex items-center gap-4 min-[1800px]:gap-6 text-xs sm:text-sm min-[1800px]:text-base min-[2400px]:text-lg">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#ff7a1a] text-xs min-[1800px]:text-sm min-[2400px]:text-base font-medium before:content-[''] before:w-2 before:h-2 before:bg-[#ff6400] before:rounded-full before:shadow-[0_0_8px_#ff6400] before:animate-pulse">
              Đội xe hoạt động: 99.8% Online
            </span>
            <div className="text-white/90">
              Kỹ sư vận hành: <strong>Đội Quản Trị Chiến Dịch</strong>
            </div>
            <Button variant="danger" size="sm" onClick={handleLogout} className="min-[1800px]:text-sm min-[1800px]:px-4 min-[1800px]:py-2 min-[2400px]:text-base min-[2400px]:px-5 min-[2400px]:py-2.5">
              Đăng xuất
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Mở rộng tối ưu toàn diện cho màn hình 2K WQHD & 4K UHD */}
      <main className="max-w-[1500px] min-[1400px]:max-w-[1650px] min-[1600px]:max-w-[1800px] min-[1800px]:max-w-[1980px] min-[2100px]:max-w-[2200px] min-[2400px]:max-w-[2450px] min-[2800px]:max-w-[2750px] min-[3200px]:max-w-[3200px] w-full mx-auto p-4 sm:p-6 lg:p-8 min-[1800px]:p-10 min-[2400px]:p-12 min-[2800px]:p-14 flex flex-col gap-6 sm:gap-7 min-[1800px]:gap-8 min-[2400px]:gap-10">
        {/* Banner giới thiệu & Thông báo vận hành */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-[1800px]:gap-5">
          <div>
            <h2 className="text-xl sm:text-2xl min-[1600px]:text-[28px] min-[1800px]:text-3xl min-[2100px]:text-[34px] min-[2400px]:text-[38px] font-extrabold text-[#0f172a] tracking-tight mb-1 min-[1800px]:mb-2">
              Bảng Điều Hành Mạng Lưới Quảng Cáo Ngoài Trời (OOH &amp; DOOH)
            </h2>
            <p className="text-xs sm:text-sm min-[1800px]:text-base min-[2400px]:text-lg text-[#64748b]">
              Giám sát thời gian thực các trạm màn hình LED xe máy di động, đội xe Roadshow, lưu lượng tiếp cận và định vị hành trình GPS.
            </p>
          </div>
          <div>
            <Badge variant="success" className="px-3.5 py-2 min-[1800px]:px-4 min-[1800px]:py-2.5 min-[2400px]:px-5 min-[2400px]:py-3 text-xs min-[1800px]:text-sm min-[2400px]:text-base">
              ✓ Hệ Thống Định Vị &amp; AI Camera: Hoạt động bình thường
            </Badge>
          </div>
        </div>

        {/* 4 Reusable KPI Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 min-[1800px]:gap-6 min-[2400px]:gap-8">
          <KpiCard
            title="Màn Hình LED Xe Máy (DOOH)"
            value="1,280"
            unit="/ 1,300 Xe"
            subtitle={<>Tỷ lệ online: <strong>98.5%</strong> · Tiếp cận: +1,285,420 lượt</>}
            icon={<SmartLedIcon size={22} />}
            accentColor="#ff6400"
          />

          <KpiCard
            title="Đội Xe Roadshow & Xe 4 Bánh"
            value="48"
            unit="Đội xe"
            subtitle={<>Chiến dịch media: <strong>16 active</strong> · Phủ sóng các tuyến phố</>}
            icon={<RoadshowIcon size={22} />}
            accentColor="#ea580c"
          />

          <KpiCard
            title="AI Camera & Đo Lường Lượt Xem"
            value="99.98%"
            unit="Uptime"
            subtitle={<>Định mức tiếp cận: <strong>Tốt</strong> · 24 tuyến đường trọng điểm</>}
            icon={<AiCameraIcon size={22} />}
            accentColor="#008a3d"
          />

          <KpiCard
            title="Yêu Cầu Hỗ Trợ / Điều Phối Tuyến"
            value="02"
            unit="Ticket"
            subtitle={<>Thời gian phản hồi TB: <strong>3.5 phút</strong> · Ưu tiên xử lý</>}
            icon={<AlertCircleIcon size={22} />}
            accentColor="#ff6400"
            isAlert={true}
          />
        </div>

        {/* Section Bảng Trạm Thiết Bị - Dùng Table Component Độc Lập */}
        <Card className="p-4 sm:p-6 min-[1800px]:p-8 min-[2400px]:p-10 border-[#e8edf4]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-[1800px]:gap-6 mb-5 min-[1800px]:mb-7">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <ActivityIcon size={20} className="text-[#ff6400] shrink-0 min-[1800px]:w-6 min-[1800px]:h-6 min-[2400px]:w-7 min-[2400px]:h-7" />
                <h3 className="text-base sm:text-lg min-[1800px]:text-xl min-[2400px]:text-2xl font-extrabold text-[#0f172a]">
                  Danh Sách Phương Tiện &amp; Cụm Màn Hình Đang Hoạt Động
                </h3>
              </div>
              <p className="text-xs sm:text-sm min-[1800px]:text-base min-[2400px]:text-lg text-[#64748b] mt-0.5 min-[1800px]:mt-1">
                Kiểm soát lộ trình GPS, số lượt tiếp cận người xem và tình trạng phát sóng quảng cáo thời gian thực
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-nowrap overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {/* Nút lọc tab theo loại dịch vụ */}
              <div className="flex items-center gap-1.5 bg-[#f0f4f9] p-1 min-[1800px]:p-1.5 min-[2400px]:p-2 rounded-xl min-[2400px]:rounded-2xl border border-[#e2eaf4] shrink-0">
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                  className="text-xs min-[1800px]:text-sm min-[2400px]:text-base px-3 min-[1800px]:px-4 min-[2400px]:px-5 py-1.5 min-[1800px]:py-2 min-[2400px]:py-2.5 h-8 min-[1800px]:h-10 min-[2400px]:h-11 whitespace-nowrap shrink-0"
                >
                  Tất cả ({serviceNodes.length})
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'led'}
                  onClick={() => setActiveTab('led')}
                  className="text-xs min-[1800px]:text-sm min-[2400px]:text-base px-3 min-[1800px]:px-4 min-[2400px]:px-5 py-1.5 min-[1800px]:py-2 min-[2400px]:py-2.5 h-8 min-[1800px]:h-10 min-[2400px]:h-11 whitespace-nowrap shrink-0"
                >
                  Màn Hình LED Xe Máy
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'roadshow'}
                  onClick={() => setActiveTab('roadshow')}
                  className="text-xs min-[1800px]:text-sm min-[2400px]:text-base px-3 min-[1800px]:px-4 min-[2400px]:px-5 py-1.5 min-[1800px]:py-2 min-[2400px]:py-2.5 h-8 min-[1800px]:h-10 min-[2400px]:h-11 whitespace-nowrap shrink-0"
                >
                  Roadshow &amp; 4 Bánh
                </Button>
              </div>

              {/* Bộ chuyển đổi chế độ xem trên Mobile */}
              <div className="md:hidden flex items-center gap-1 bg-[#f0f4f9] p-1 rounded-xl border border-[#e2eaf4] shrink-0">
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('card')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'card'
                      ? 'bg-white text-[#ff6400] shadow-xs'
                      : 'text-[#5a738e] hover:text-[#001c4c]'
                  }`}
                >
                  Dạng Thẻ
                </button>
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('table')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'table'
                      ? 'bg-white text-[#ff6400] shadow-xs'
                      : 'text-[#5a738e] hover:text-[#001c4c]'
                  }`}
                >
                  Dạng Bảng
                </button>
              </div>
            </div>
          </div>

          {/* 1. HIỂN THỊ DẠNG THẺ (CARD VIEW) TRÊN MOBILE CHO TRẢI NGHIỆM TỐI ƯU */}
          <div
            className={`flex flex-col gap-3.5 ${
              mobileDisplayMode === 'card' ? 'md:hidden' : 'hidden'
            }`}
          >
            {filteredNodes.length === 0 ? (
              <div className="text-center py-8 text-sm text-[#5a738e] bg-[#f8fafc] rounded-xl border border-[#e8edf4]">
                Không tìm thấy phương tiện phù hợp.
              </div>
            ) : (
              filteredNodes.map((node) => (
                <div
                  key={node.id}
                  className="bg-white border border-[#e8edf4] rounded-xl p-4 transition-all hover:border-[#ff6400] hover:shadow-xs flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-[#f0f4f9] pb-2.5">
                    <div>
                      <div className="text-sm font-extrabold text-[#001c4c] tracking-tight">
                        {node.id}
                      </div>
                      <div className="text-xs text-[#5a738e]">
                        Mã phương tiện: <span className="font-mono font-medium text-[#001c4c]">{node.code}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        node.status === 'completed'
                          ? 'success'
                          : node.status === 'processing'
                          ? 'warning'
                          : 'info'
                      }
                      className="shrink-0 text-[11px] whitespace-nowrap"
                    >
                      {node.statusText}
                    </Badge>
                  </div>

                  <div>
                    <div className="font-bold text-[15px] text-[#001c4c] leading-snug">
                      {node.location}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-[#e8edf4]">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          node.serviceType === 'led'
                            ? 'bg-[#fff3eb] text-[#ff6400]'
                            : 'bg-[#fef3c7] text-[#b45309]'
                        }`}
                      >
                        {node.serviceName}
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-[#5a738e] block">Tiếp cận</span>
                        <span className="text-base font-extrabold text-[#ff6400]">{node.metrics}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f8fafc] rounded-lg p-2.5 border border-[#e8edf4] text-xs grid grid-cols-1 gap-1.5 text-[#5a738e]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#5a738e]">Trạng thái kỹ thuật:</span>
                      <span className="font-semibold text-[#001c4c] text-right">{node.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5a738e]">Kỹ sư phụ trách:</span>
                      <span className="font-semibold text-[#001c4c] text-right">{node.technician}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5a738e]">Cập nhật lần cuối:</span>
                      <span className="font-medium text-[#001c4c] text-right">{node.time}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 2. HIỂN THỊ DẠNG BẢNG (TABLE VIEW) KẾ THỪA COMPONENT TABLE */}
          <div
            className={`w-full ${
              mobileDisplayMode === 'table' ? 'block' : 'hidden md:block'
            }`}
          >
            <Table minWidth="min-w-[1150px]" showScrollHint={true}>
              <TableHeader>
                <TableRow>
                  <TableHead nowrap={true} className="min-w-[150px] min-[1800px]:text-sm min-[2400px]:text-base min-[1800px]:py-4 min-[2400px]:py-5">Mã Điểm / Xe</TableHead>
                  <TableHead nowrap={true} className="min-w-[300px] min-[1800px]:text-sm min-[2400px]:text-base min-[1800px]:py-4 min-[2400px]:py-5">Tuyến Đường &amp; Dịch Vụ</TableHead>
                  <TableHead nowrap={true} className="min-w-[170px] min-[1800px]:text-sm min-[2400px]:text-base min-[1800px]:py-4 min-[2400px]:py-5">Lượt Tiếp Cận (AI)</TableHead>
                  <TableHead nowrap={true} className="min-w-[240px] min-[1800px]:text-sm min-[2400px]:text-base min-[1800px]:py-4 min-[2400px]:py-5">Trạng Thái Kỹ Thuật</TableHead>
                  <TableHead nowrap={true} className="min-w-[180px] min-[1800px]:text-sm min-[2400px]:text-base min-[1800px]:py-4 min-[2400px]:py-5">Kỹ Sư Phụ Trách</TableHead>
                  <TableHead nowrap={true} className="min-w-[140px] min-[1800px]:text-sm min-[2400px]:text-base min-[1800px]:py-4 min-[2400px]:py-5">Thời Gian</TableHead>
                  <TableHead nowrap={true} className="min-w-[190px] min-[1800px]:text-sm min-[2400px]:text-base min-[1800px]:py-4 min-[2400px]:py-5">Trạng Thái</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredNodes.length === 0 ? (
                  <TableEmpty
                    colSpan={7}
                    message="Không có dữ liệu phương tiện"
                    description="Hiện chưa có xe nào theo bộ lọc được chọn."
                  />
                ) : (
                  filteredNodes.map((node) => (
                    <TableRow key={node.id}>
                      <TableCell nowrap={true}>
                        <div className="font-bold text-[#001c4c] whitespace-nowrap min-[1800px]:text-base min-[2400px]:text-lg">{node.id}</div>
                        <div className="text-xs min-[1800px]:text-sm min-[2400px]:text-base text-[#5a738e] font-mono whitespace-nowrap">{node.code}</div>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[320px] min-[1800px]:max-w-[500px] min-[2400px]:max-w-[700px]">
                        <div
                          className="font-semibold text-[#001c4c] whitespace-nowrap truncate min-[1800px]:text-base min-[2400px]:text-lg"
                          title={node.location}
                        >
                          {node.location}
                        </div>
                        <div
                          className={`text-xs min-[1800px]:text-sm min-[2400px]:text-base font-medium mt-0.5 whitespace-nowrap ${
                            node.serviceType === 'led' ? 'text-[#ff6400]' : 'text-[#b45309]'
                          }`}
                        >
                          {node.serviceName}
                        </div>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <span className="font-extrabold text-[15px] min-[1800px]:text-lg min-[2400px]:text-xl text-[#ff6400] whitespace-nowrap">
                          {node.metrics}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[250px] min-[1800px]:max-w-[400px] min-[2400px]:max-w-[550px]">
                        <span
                          className="text-[#001c4c] min-[1800px]:text-base min-[2400px]:text-lg whitespace-nowrap truncate block"
                          title={node.bandwidth}
                        >
                          {node.bandwidth}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true} className="max-w-[190px] min-[1800px]:max-w-[280px] min-[2400px]:max-w-[360px]">
                        <span
                          className="font-medium text-[#001c4c] min-[1800px]:text-base min-[2400px]:text-lg whitespace-nowrap truncate block"
                          title={node.technician}
                        >
                          {node.technician}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <span className="text-[#5a738e] text-xs min-[1800px]:text-sm min-[2400px]:text-base whitespace-nowrap">
                          {node.time}
                        </span>
                      </TableCell>

                      <TableCell nowrap={true}>
                        <Badge
                          variant={
                            node.status === 'completed'
                              ? 'success'
                              : node.status === 'processing'
                              ? 'warning'
                              : 'info'
                          }
                          className="whitespace-nowrap min-[1800px]:text-sm min-[1800px]:px-3.5 min-[1800px]:py-1.5 min-[2400px]:text-base min-[2400px]:px-4 min-[2400px]:py-2"
                        >
                          {node.statusText}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Section Cảnh báo & Hỗ trợ kỹ thuật */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 min-[1800px]:gap-7 min-[2400px]:gap-8">
          <Card className="border-[#e8edf4] p-5 sm:p-6 min-[1800px]:p-8 min-[2400px]:p-10">
            <h4 className="text-base min-[1800px]:text-xl min-[2400px]:text-2xl font-bold text-[#001c4c] mb-3 min-[1800px]:mb-4 flex items-center gap-2">
              <ShieldCheckIcon size={20} className="text-[#ff6400] min-[1800px]:w-6 min-[1800px]:h-6 min-[2400px]:w-7 min-[2400px]:h-7" />
              Tiêu Chuẩn Giám Sát Chiến Dịch &amp; Đo Lường AI Camera
            </h4>
            <p className="text-xs sm:text-sm min-[1800px]:text-base min-[2400px]:text-lg text-[#5a738e] leading-relaxed mb-4 min-[1800px]:mb-5">
              Toàn bộ dữ liệu hành trình GPS, số lượt người tiếp cận và spot phát sóng màn hình LED được mã hóa và xác thực thời gian thực, đảm bảo tính minh bạch tuyệt đối cho đối tác Nhãn hàng.
            </p>
            <div className="bg-[#f0f4f9] p-3 min-[1800px]:p-4 min-[2400px]:p-5 rounded-xl text-xs sm:text-sm min-[1800px]:text-base min-[2400px]:text-lg border border-[#e2eaf4]">
              <strong>Nền tảng báo cáo tự động hóa:</strong>{' '}
              <code className="bg-white px-1.5 py-0.5 rounded border border-[#e2eaf4] font-mono text-[#ff6400] font-bold">
                GOADS AI Live Analytics v2.6 (DOOH Certified)
              </code>
            </div>
          </Card>

          <Card className="border-[#e8edf4] p-5 sm:p-6 min-[1800px]:p-8 min-[2400px]:p-10">
            <h4 className="text-base min-[1800px]:text-xl min-[2400px]:text-2xl font-bold text-[#001c4c] mb-3 min-[1800px]:mb-4 flex items-center gap-2">
              <AlertCircleIcon size={20} className="text-[#ff6400] min-[1800px]:w-6 min-[1800px]:h-6 min-[2400px]:w-7 min-[2400px]:h-7" />
              Trung Tâm Trực Ban Hỗ Trợ Chiến Dịch GOADS 24/7
            </h4>
            <p className="text-xs sm:text-sm min-[1800px]:text-base min-[2400px]:text-lg text-[#5a738e] leading-relaxed mb-4 min-[1800px]:mb-5">
              Mọi sự cố về điều phối lộ trình đoàn xe, hiệu chỉnh spot nội dung màn hình LED hoặc yêu cầu trích xuất dữ liệu đo lường, vui lòng liên hệ bộ phận hỗ trợ kỹ thuật trực ban.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm min-[1800px]:text-base min-[2400px]:text-lg font-bold text-[#001c4c]">
              <span>📞 Hotline Kỹ Thuật:</span>
              <a href="tel:0945318968" className="text-[#ff6400] underline hover:text-[#e65a00]">
                094 531 89 68
              </a>
              <span className="text-xs min-[1800px]:text-sm min-[2400px]:text-base font-normal text-[#5a738e]">(Info@goads.vn)</span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
