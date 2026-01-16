
import React, { useState } from 'react';
import {
  Search,
  Bell,
  Menu,
  ChevronRight,
  ShieldCheck,
  Heart,
  Plus,
  Zap,
  Pause
} from 'lucide-react';
import { ViewMode } from './types';

import travelImage from './img/travel.png';
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';
import mainLogoWhite from './img/main_logo_white.png';
import warningIcon from './img/warning_icon.png';


// NH NongHyup P&C Logo
const NH_LOGO_URL = mainLogoWhite;

// 사용자가 제공한 3D 캐리어와 모자 이미지 (고해상도 3D 에셋)
const TRAVEL_3D_ASSET_URL = travelImage;

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('wireframe');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#046fd9] rounded-lg flex items-center justify-center shadow-md shadow-blue-200">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-extrabold text-slate-900 tracking-tight text-lg">UX Design Lab</h1>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('analysis')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${viewMode === 'analysis' ? 'bg-white text-[#046fd9] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            기획 분석
          </button>
          <button
            onClick={() => setViewMode('wireframe')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${viewMode === 'wireframe' ? 'bg-white text-[#046fd9] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            메인 디자인
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-10 flex flex-col lg:flex-row gap-12 items-start justify-center">

        {/* Left: Analysis Column */}
        {viewMode === 'analysis' && (
          <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left-6 duration-700">
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <LayoutIcon className="w-8 h-8 text-[#046fd9]" /> 디자인 분석 및 방향
              </h2>
              <div className="bg-white p-8 rounded-[24px] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#046fd9] flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#046fd9] rounded-full"></span> 비주얼 아이덴티티
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    NH농협의 신뢰를 상징하는 <strong>Deep Blue(#046fd9)</strong>와 활력을 주는 <strong>Yellow(#FFD91D)</strong>를 조합하여 전문성과 친근함을 동시에 전달합니다.
                  </p>
                </div>
                <div className="space-y-3 border-t pt-6 border-slate-50">
                  <h3 className="text-xl font-bold text-[#046fd9] flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#046fd9] rounded-full"></span> UX 전략: 안심과 편의
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    보험 앱의 본질인 '보상'과 '케어'에 집중했습니다. <strong>보험금 청구</strong>와 <strong>긴급출동</strong>을 최상단 그리드에 배치하여 위급 상황 시의 경로를 단축했습니다.
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DirectionCard
                title="데이터 시각화"
                description="복잡한 약관 대신 진행 바와 배지를 사용하여 현재 나의 보험 상태를 직관적으로 파악할 수 있게 했습니다."
              />
              <DirectionCard
                title="선제적 알림 시스템"
                description="사용자가 잊기 쉬운 만기일이나 미납 정보를 눈에 띄는 알림 카드로 제공하여 인지 부하를 줄입니다."
              />
            </div>
          </div>
        )}

        {/* Right: Mobile App UI (High-Fidelity) */}
        <div className={`flex-none mx-auto ${viewMode === 'analysis' ? 'hidden xl:block' : 'block'}`}>
          <div className="w-[393px] h-[852px] bg-[#F1F5F9] rounded-[47px] border-[12px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] relative overflow-hidden flex flex-col">

            {/* Status Bar */}
            <div className="h-12 bg-[#046fd9] flex items-center justify-between px-10 pt-4 text-white">
              <span className="text-sm font-black">9:41</span>
              <div className="flex gap-2 items-center">
                <div className="w-4 h-4 rounded-full border-2 border-white"></div>
                <div className="w-6 h-3 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-[#F8FAFC]">

              {/* HERO BANNER SECTION */}
              <section className="bg-[#046fd9] rounded-b-[24px] overflow-hidden relative shadow-lg">

                {/* Header Overlay */}
                <header className="px-6 py-4 flex justify-between items-center relative z-30">
                  <div className="p-1">
                    <img src={NH_LOGO_URL} alt="NH NongHyup" className="h-4 object-contain" />
                  </div>
                  <div className="flex gap-4 text-white/90">
                    <Search className="w-5 h-5" />
                    <Bell className="w-5 h-5" />
                    <Menu className="w-5 h-5" />
                  </div>
                </header>

                {/* Banner Content Container */}
                <div className="px-8 pt-4 pb-[80px] relative z-20">



                  <div className="flex justify-between items-end">
                    {/* Left: Text Area */}
                    <div className="max-w-[210px] pb-4">
                      <h4 className="text-white/60 text-xs font-normal mb-2 tracking-tight">다이렉트 해외여행보험</h4>
                      <h2 className="text-2xl font-semibold text-white leading-tight mb-4">
                        해외여행보험<br />보험료 20% 인하
                      </h2>

                    </div>

                    {/* Right: 3D Object Area (Suitcase + Hat) */}
                    <div className="relative w-[134px] h-[134px] flex items-center justify-center mr-[-30px] mb-[-10px]">


                      {/* TRAVEL IMAGE - Suitcase and Hat Asset */}
                      <div className="relative transform scale-125 animate-bounce-subtle z-10">
                        <img
                          src={TRAVEL_3D_ASSET_URL}
                          alt="3D Travel Suitcase and Hat"
                          className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)]"
                          style={{ mixBlendMode: 'normal' }}
                        />
                      </div>


                    </div>
                  </div>

                  {/* Pagination / Play Controls */}
                  <div className="absolute bottom-[44px] left-8 flex items-center gap-1">
                    <div className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                      <span className="text-[10px] font-bold text-white/90 tracking-widest">1 / 6</span>
                    </div>
                    <button className="w-6 h-6 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Pause className="w-3 h-3 text-white fill-white" />
                    </button>
                  </div>

                </div>


              </section>

              {/* ASSET DASHBOARD */}
              <section className="px-6 -mt-6 relative z-40 mb-6">
                <div className="bg-white p-5 rounded-[16px] shadow-xl shadow-slate-200/60 border border-slate-50 flex flex-col gap-2">
                  {/* Title and Top Arrow */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-slate-900">보험청구 <span className="text-[#046fd9]">3</span></span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#666666]" />
                  </div>

                  {/* Progress Bar Section */}
                  <div className="relative pt-2 pb-6">
                    {/* Progress Background Line (pt-2(8px) + center(16px) - half-line(2px) = 22px) */}
                    <div className="absolute top-[22px] left-0 w-full h-1 bg-slate-100 rounded-full"></div>
                    {/* Active Progress Line */}
                    <div className="absolute top-[22px] left-0 w-1/2 h-1 bg-[#046fd9] rounded-full"></div>

                    <div className="relative flex justify-between items-start">
                      {/* Step 1: Received */}
                      <div className="flex flex-col items-start">
                        <div className="h-8 flex items-center mb-2">
                          <div className="w-3 h-3 rounded-full bg-[#046fd9] z-10"></div>
                        </div>
                        <span className="text-[14px] font-normal text-slate-900">접수완료</span>
                      </div>

                      {/* Step 2: Reviewing (Active/Warning) */}
                      <div className="flex flex-col items-center relative">
                        <div className="h-8 flex items-center justify-center mb-2">
                          <div className="w-[32px] h-[32px] rounded-full bg-[#FF4646] flex items-center justify-center z-10 shadow-md shadow-red-100">
                            <img src={warningIcon} alt="Warning" className="w-[18px] h-[18px] object-contain" />
                          </div>
                        </div>
                        <span className="text-[14px] font-normal text-slate-900">심사중</span>
                        {/* Status Tag */}
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-red-50 text-[#FF4646] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          서류보완필요
                        </div>
                      </div>

                      {/* Step 3: Completed */}
                      <div className="flex flex-col items-end">
                        <div className="h-8 flex items-center mb-2">
                          <div className="w-3 h-3 rounded-full bg-slate-200 z-10"></div>
                        </div>
                        <span className="text-[14px] font-normal text-slate-400">청구완료</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* QUICK ACTIONS */}
              <section className="px-6 mb-4">
                <div className="grid grid-cols-4 gap-6">
                  <ActionButton icon={<img src={icon3} alt="보험금청구" />} label="보험금청구" color="blue" />
                  <ActionButton icon={<img src={icon2} alt="계약조회" />} label="계약조회" color="brandBlue" />
                  <ActionButton icon={<img src={icon1} alt="보험료납입" />} label="보험료납입" color="orange" />
                  <ActionButton icon={<img src={icon4} alt="보장분석" />} label="보장분석" color="purple" />
                </div>
              </section>

              {/* ALERT BAR */}
              <section className="px-6 mb-6">
                <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-2xl border border-red-100 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-red-500">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-red-500 font-black uppercase">Urgent</div>
                    <div className="text-xs font-black text-slate-800">자동차 보험 만기가 7일 남았어요</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-red-300" />
                </div>
              </section>

              {/* POLICY LIST */}
              <section className="px-6 mb-8">
                <div className="flex justify-between items-center mb-4 px-1">
                  <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500 fill-current" /> 나의 보장
                  </h3>
                </div>
                <div className="space-y-4">
                  <InsuranceCard
                    title="NH다이렉트 자동차보험"
                    status="정상"
                    price="125,000"
                    date="2024.12.31"
                  />
                  <InsuranceCard
                    title="무배당 헤아림운전자보험"
                    status="미납"
                    price="24,500"
                    date="2025.06.15"
                    isWarning
                  />
                </div>
              </section>

              <footer className="px-8 pb-32 text-center">
                <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">NH NongHyup Property & Casualty</p>
              </footer>
            </div>

            {/* FLOATING ACTION BUTTON */}
            <button className="absolute bottom-24 right-8 w-14 h-14 bg-[#046fd9] rounded-full shadow-2xl shadow-blue-900/40 flex items-center justify-center text-white border-4 border-white z-20 hover:scale-110 active:scale-95 transition-all">
              <Plus className="w-8 h-8" />
            </button>

            {/* BOTTOM NAV */}
            <nav className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 h-20 flex items-center justify-around px-4 pb-4">
              <NavItem label="홈" active />
              <NavItem label="마이보험" />
              <NavItem label="상품추천" />
              <NavItem label="혜택" />
              <NavItem label="전체" />
            </nav>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

const ActionButton: React.FC<{ icon: React.ReactNode; label: string; color: string; highlight?: boolean }> = ({ icon, label, color, highlight }) => {
  const colorMap: any = {
    blue: "text-blue-500",
    brandBlue: "text-[#046fd9]",
    orange: "text-orange-500",
    purple: "text-purple-500"
  };

  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-slate-50 overflow-hidden ${colorMap[color]} ${highlight ? 'ring-2 ring-[#046fd9]/20' : ''}`}>
        {React.isValidElement(icon) && icon.type === 'img' ? (
          icon
        ) : (
          React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })
        )}
      </div>
      <span className="text-[12px] font-normal text-slate-700 text-center leading-tight">{label}</span>
    </div>
  );
};

const InsuranceCard: React.FC<{ title: string; status: string; price: string; date: string; isWarning?: boolean }> = ({ title, status, price, date, isWarning }) => (
  <div className={`p-5 bg-white border ${isWarning ? 'border-red-100' : 'border-slate-100'} rounded-[20px] shadow-sm hover:shadow-md transition-all cursor-pointer group`}>
    <div className="flex justify-between items-center mb-3">
      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${status === '정상' ? 'bg-blue-50 text-[#046fd9]' : 'bg-red-50 text-red-600'}`}>
        {status}
      </span>
      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#046fd9] transition-colors" />
    </div>
    <h4 className="font-black text-slate-900 text-sm mb-4">{title}</h4>
    <div className="flex justify-between items-center">
      <div className="text-[10px] font-bold text-slate-400">만기 {date}</div>
      <div className="text-sm font-black text-slate-900">{price}원</div>
    </div>
  </div>
);

const NavItem: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <div className="flex flex-col items-center gap-1.5 cursor-pointer group">
    <div className={`w-1.5 h-1.5 rounded-full mb-1 transition-all ${active ? 'bg-[#046fd9]' : 'bg-transparent group-hover:bg-slate-200'}`}></div>
    <span className={`text-[10px] font-black transition-colors ${active ? 'text-[#046fd9]' : 'text-slate-400 group-hover:text-slate-600'}`}>{label}</span>
  </div>
);

const DirectionCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
      <div className="w-2.5 h-2.5 bg-[#046fd9] rounded-full"></div>
    </div>
    <h4 className="font-black text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-medium">{description}</p>
  </div>
);

const LayoutIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export default App;
