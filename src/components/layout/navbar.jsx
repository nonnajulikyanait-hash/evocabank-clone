import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isBusinessSection = 
    location.pathname.startsWith('/business') || 
    location.pathname === '/biznesvarker' || 
    location.pathname === '/leasing' || 
    location.pathname === '/special-offer' ||
    location.pathname === '/business-accounts' ||
    location.pathname === '/business-unallocated-metal-accounts' ||
    location.pathname === '/business-deposits' ||
    location.pathname === '/business-securities' ||
    location.pathname === '/bonds' ||
    location.pathname === '/cda-services' ||
    location.pathname === '/repo-reverse-repo' ||
    location.pathname === '/evocainvest-service' ||
    location.pathname === '/trade-finance' ||
    location.pathname === '/factoring' ||
    location.pathname === '/creditive' ||
    location.pathname === '/inkaso' ||
    location.pathname === '/dijital';

  const isLeasingSub = location.pathname === '/leasing' || location.pathname === '/special-offer';
  const isAccountsSub = location.pathname === '/business-accounts' || location.pathname === '/business-unallocated-metal-accounts';
  const isSecuritiesSub = 
    location.pathname === '/business-securities' || 
    location.pathname === '/bonds' || 
    location.pathname === '/cda-services' ||
    location.pathname === '/repo-reverse-repo' ||
    location.pathname === '/evocainvest-service';
  const isTradeFinanceSub = 
    location.pathname === '/trade-finance' || 
    location.pathname === '/factoring' || 
    location.pathname === '/creditive' ||
    location.pathname === '/inkaso';

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 text-[11px] text-gray-600 py-1.5 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-5 font-normal">
            <Link 
              to="/" 
              className={`pb-1 cursor-pointer transition ${!isBusinessSection ? 'text-[#6400dc] border-b-2 border-[#6400dc] font-semibold' : 'hover:text-[#6400dc]'}`}
            >
              Անհատ
            </Link>

            <span 
              onClick={() => navigate('/business-loans')}
              className={`cursor-pointer transition ${isBusinessSection ? 'text-[#6400dc] border-b-2 border-[#6400dc] font-semibold' : 'hover:text-[#6400dc]'}`}
            >
              Բիզնես
            </span>

            <span className="hover:text-[#6400dc] cursor-pointer transition">Ակնթարթային վճարումներ</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Մեր մասին</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Նորություններ</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Բլոգ</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Կարիերա</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[#6400dc] font-medium cursor-pointer">Անցանց հայտեր ▾</span>
            <span className="text-[#6400dc] font-medium cursor-pointer">Հետադարձ կապ ▾</span>
            <div className="flex items-center gap-3.5 text-gray-500 ml-2">
              <span className="cursor-pointer text-xs">📍</span>
              <span className="cursor-pointer text-xs">❓</span>
              <span className="cursor-pointer text-xs">🌐</span>
              <span className="cursor-pointer text-xs">🔍</span>
              <span className="cursor-pointer font-bold text-xs">☰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto py-3 px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5 cursor-pointer">
          <span className="text-2xl font-black text-[#6400dc] tracking-tighter">evoca</span>
          <span className="w-2 h-2 bg-[#6400dc] rounded-full"></span>
        </Link>

        {isBusinessSection ? (
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-gray-800">
            <Link to="/business-loans" className={`transition ${location.pathname === '/business-loans' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Վարկեր
            </Link>
            <Link to="/leasing" className={`transition ${isLeasingSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Լիզինգ
            </Link>
            <Link to="/business-accounts" className={`transition ${isAccountsSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Հաշիվներ
            </Link>
            <Link to="/business-deposits" className={`transition ${location.pathname === '/business-deposits' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Ավանդներ
            </Link>
            <Link to="/business-securities" className={`transition ${isSecuritiesSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Արժեթղթերի շուկա
            </Link>
            <Link to="/trade-finance" className={`transition ${isTradeFinanceSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Առևտրի ֆինանսավորում
            </Link>
            <Link to="/dijital" className={`transition ${location.pathname === '/dijital' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Դեպոզիտարիա
            </Link>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Այլ</span>
          </nav>
        ) : (
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-gray-800">
            <Link to="/loans" className="hover:text-[#6400dc] transition">Վարկեր</Link>
            <Link to="/cards" className="hover:text-[#6400dc] transition">Քարտեր</Link>
            <Link to="/deposits" className="hover:text-[#6400dc] transition">Ավանդներ</Link>
            <Link to="/accounts" className="hover:text-[#6400dc] transition">Հաշիվներ</Link>
            <Link to="/transfers" className="hover:text-[#6400dc] transition">Փոխանցումներ</Link>
            <Link to="/securities" className="hover:text-[#6400dc] transition">Արժեթղթեր</Link>
            <Link to="/evocasalary" className="hover:text-[#6400dc] transition">EvocaSALARY</Link>
            <Link to="/evocatouch" className="hover:text-[#6400dc] transition">EvocaTOUCH</Link>
          </nav>
        )}

        <Link 
          to="/evocaonline" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-[11px] px-4 py-2 rounded-full transition shadow-sm cursor-pointer inline-block text-center"
        >
          EvocaONLINE
        </Link>
      </div>

      {/* Sub-Bar */}
      {isBusinessSection && location.pathname === '/dijital' && (
        <div className="bg-[#6400dc] text-white px-12 text-xs font-bold border-b border-white">
          <div className="container mx-auto pl-6 flex gap-8 items-center h-12 overflow-x-auto">
            <Link to="/dijital" className="h-full flex items-center border-b-2 border-white text-white font-black">
              Դեպոզիտարիա
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}