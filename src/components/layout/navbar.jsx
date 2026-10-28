import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Վերին Մենյու (Top Bar) */}
      <div className="bg-gray-50 border-b border-gray-100 text-xs text-gray-600 py-2 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6 font-medium">
            <span className="text-[#6400dc] border-b-2 border-[#6400dc] pb-0.5 font-bold cursor-pointer">
              Անհատ
            </span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Բիզնես</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Ակնթարթային վճարումներ</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Մեր մասին</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Նորություններ</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Բլոգ</span>
            <span className="hover:text-[#6400dc] cursor-pointer transition">Կարիերա</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#6400dc] font-semibold cursor-pointer">Անցանց հայտեր ▾</span>
            <span className="text-[#6400dc] font-semibold cursor-pointer">Հետադարձ կապ ▾</span>
            <div className="flex items-center gap-3 text-gray-500 ml-2">
              <span className="cursor-pointer">📍</span>
              <span className="cursor-pointer">❓</span>
              <span className="cursor-pointer">🌐</span>
              <span className="cursor-pointer">🔍</span>
              <span className="cursor-pointer font-bold">☰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Հիմնական Նավիգացիա */}
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        {/* Լոգո */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-3xl font-black text-[#6400dc] tracking-tighter">evoca</span>
          <span className="w-2.5 h-2.5 bg-[#6400dc] rounded-full"></span>
        </div>

        {/* Հղումներ */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-800">
          <a href="#" className="hover:text-[#6400dc] transition">Վարկեր</a>
          <a href="#" className="hover:text-[#6400dc] transition">Քարտեր</a>
          <a href="#" className="hover:text-[#6400dc] transition">Ավանդներ</a>
          <a href="#" className="hover:text-[#6400dc] transition">Հաշիվներ</a>
          <a href="#" className="hover:text-[#6400dc] transition">Փոխանցումներ</a>
          <a href="#" className="hover:text-[#6400dc] transition">Արժեթղթեր</a>
          <a href="#" className="hover:text-[#6400dc] transition">EvocaSALARY</a>
          <a href="#" className="hover:text-[#6400dc] transition">EvocaTOUCH</a>
        </nav>

        {/* Կոճակ */}
        <button className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs px-5 py-2.5 rounded-full transition shadow-md cursor-pointer">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
}