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
    location.pathname === '/creditive';

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
    location.pathname === '/creditive';

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
              Anhat
            </Link>

            <span 
              onClick={() => navigate('/business-loans')}
              className={`cursor-pointer transition ${isBusinessSection ? 'text-[#6400dc] border-b-2 border-[#6400dc] font-semibold' : 'hover:text-[#6400dc]'}`}
            >
              Biznes
            </span>

            <span className="hover:text-[#6400dc] cursor-pointer transition">Akntartayin vcharumner</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Mer masin</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Norutyunner</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Blog</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Kariera</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[#6400dc] font-medium cursor-pointer">Anzanc hayter ▾</span>
            <span className="text-[#6400dc] font-medium cursor-pointer">Hetadarc kap ▾</span>
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
              Varker
            </Link>
            <Link to="/leasing" className={`transition ${isLeasingSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Lizing
            </Link>
            <Link to="/business-accounts" className={`transition ${isAccountsSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Hashivner
            </Link>
            <Link to="/business-deposits" className={`transition ${location.pathname === '/business-deposits' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Avandner
            </Link>
            <Link to="/business-securities" className={`transition ${isSecuritiesSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Arjetxteri shuka
            </Link>
            <Link to="/trade-finance" className={`transition ${location.pathname === '/trade-finance' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>
              Arevtri finansavorum
            </Link>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Depozitaria</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Ayl</span>
          </nav>
        ) : (
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-gray-800">
            <Link to="/loans" className="hover:text-[#6400dc] transition">Varker</Link>
            <Link to="/cards" className="hover:text-[#6400dc] transition">Qarter</Link>
            <Link to="/deposits" className="hover:text-[#6400dc] transition">Avandner</Link>
            <Link to="/accounts" className="hover:text-[#6400dc] transition">Hashivner</Link>
            <Link to="/transfers" className="hover:text-[#6400dc] transition">Poxancumner</Link>
            <Link to="/securities" className="hover:text-[#6400dc] transition">Arjetxter</Link>
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
      {isBusinessSection && (
        <div className="bg-[#6400dc] text-white px-12 text-xs font-bold border-b border-white">
          <div className="container mx-auto pl-6 flex gap-8 items-center h-12 overflow-x-auto">
            {isLeasingSub ? (
              <>
                <Link to="/leasing" className={`h-full flex items-center transition ${location.pathname === '/leasing' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Evoca Leasing</Link>
                <Link to="/special-offer" className={`h-full flex items-center transition ${location.pathname === '/special-offer' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Hatuk arajark</Link>
              </>
            ) : isAccountsSub ? (
              <>
                <Link to="/business-accounts" className={`h-full flex items-center transition ${location.pathname === '/business-accounts' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Hashivneri bacum ev spasarkum</Link>
                <Link to="/business-unallocated-metal-accounts" className={`h-full flex items-center transition ${location.pathname === '/business-unallocated-metal-accounts' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Ararkayazurk metaxakan hashivner</Link>
              </>
            ) : isSecuritiesSub ? (
              <>
                <Link to="/business-securities" className={`h-full flex items-center transition ${location.pathname === '/business-securities' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Nerdrumayin carayutyunner</Link>
                <Link to="/bonds" className={`h-full flex items-center transition ${location.pathname === '/bonds' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Partatomser</Link>
                <Link to="/cda-services" className={`h-full flex items-center transition ${location.pathname === '/cda-services' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>HKD carayutyunner</Link>
                <Link to="/repo-reverse-repo" className={`h-full flex items-center transition ${location.pathname === '/repo-reverse-repo' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Repo/Hakadarc repo gorcarqner</Link>
                <Link to="/evocainvest-service" className={`h-full flex items-center transition ${location.pathname === '/evocainvest-service' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>EvocaINVEST</Link>
              </>
            ) : isTradeFinanceSub ? (
              <>
                <Link to="/trade-finance" className={`h-full flex items-center transition ${location.pathname === '/trade-finance' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Erashxiq</Link>
                <Link to="/factoring" className={`h-full flex items-center transition ${location.pathname === '/factoring' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Faktoringayin finansavorum</Link>
                <Link to="/creditive" className={`h-full flex items-center transition ${location.pathname === '/creditive' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Akreditiv</Link>
                <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">Inkaso</span>
              </>
            ) : (
              <div className="h-full flex items-center border-b-2 border-white text-white font-black">
                {location.pathname === '/business-deposits' ? 'Biznes avandner' : 'Biznes varker'}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}