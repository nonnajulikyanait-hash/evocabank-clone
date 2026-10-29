import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isLoansActive = location.pathname === '/loans';
  const isCardsActive = location.pathname === '/cards';
  const isDepositsActive = location.pathname === '/deposits' || location.pathname === '/anhat-avandner';
  const isAccountsActive = location.pathname === '/accounts' || location.pathname === '/hashivner';
  const isTransfersActive = location.pathname === '/transfers' || location.pathname === '/poxancumner';
  const isSecuritiesActive = location.pathname === '/securities' || location.pathname === '/arjetxter';
  const isEvocaSalaryActive = location.pathname === '/evocasalary';
  const isEvocaTouchActive = location.pathname === '/evocatouch';

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 text-[11px] text-gray-600 py-1.5 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-5 font-normal">
            <Link to="/" className="text-[#6400dc] border-b-2 border-[#6400dc] pb-1 font-semibold cursor-pointer">
              Անհատ
            </Link>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Բիզնես</span>
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
        {/* Logo (Սեղմելիս տանում է Գլխավոր էջ) */}
        <Link to="/" className="flex items-center gap-1.5 cursor-pointer">
          <span className="text-2xl font-black text-[#6400dc] tracking-tighter">evoca</span>
          <span className="w-2 h-2 bg-[#6400dc] rounded-full"></span>
        </Link>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-gray-800">
          {/* «Վարկեր» */}
          <Link 
            to="/loans" 
            className={`transition ${isLoansActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            Վարկեր
          </Link>

          {/* «Քարտեր» */}
          <Link 
            to="/cards" 
            className={`transition ${isCardsActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            Քարտեր
          </Link>

          {/* «Ավանդներ» */}
          <Link 
            to="/deposits" 
            className={`transition ${isDepositsActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            Ավանդներ
          </Link>

          {/* «Հաշիվներ» */}
          <Link 
            to="/accounts" 
            className={`transition ${isAccountsActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            Հաշիվներ
          </Link>

          {/* «Փոխանցումներ» */}
          <Link 
            to="/transfers" 
            className={`transition ${isTransfersActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            Փոխանցումներ
          </Link>

          {/* «Արժեթղթեր» */}
          <Link 
            to="/securities" 
            className={`transition ${isSecuritiesActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            Արժեթղթեր
          </Link>

          {/* «EvocaSALARY» */}
          <Link 
            to="/evocasalary" 
            className={`transition ${isEvocaSalaryActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            EvocaSALARY
          </Link>

          {/* «EvocaTOUCH» */}
          <Link 
            to="/evocatouch" 
            className={`transition ${isEvocaTouchActive ? 'text-[#6400dc]' : 'text-gray-800 hover:text-[#6400dc]'}`}
          >
            EvocaTOUCH
          </Link>
        </nav>

        {/* Button */}
        <Link 
          to="/evocaonline" 
          className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-[11px] px-4 py-2 rounded-full transition shadow-sm cursor-pointer inline-block text-center"
        >
          EvocaONLINE
        </Link>
      </div>
    </header>
  );
}