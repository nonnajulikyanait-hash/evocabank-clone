import React from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Footer from './footer';

// Պատմություն (History) Page Component (3rd image design)
function HistoryPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        {/* Simplified Header */}
        <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/akntartayinvcharumner" className="flex items-center gap-1.5 cursor-pointer">
              <span className="text-2xl font-black text-[#6400dc] tracking-tighter">evoca</span>
              <span className="w-2 h-2 bg-[#6400dc] rounded-full"></span>
            </Link>
            <span className="text-gray-400 font-light text-lg">|</span>
            <span className="text-gray-600 text-sm font-medium">Online payment</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-neutral-800 hidden sm:inline">+374 10 605555</span>
            <span className="text-gray-300">🌐</span>
            <Link 
              to="/akntartayinvcharumner/history" 
              className="bg-[#6400dc] text-white font-bold text-xs px-4 py-2 rounded-full shadow-sm"
            >
              Պատմություն
            </Link>
          </div>
        </header>

        {/* Main Content for History */}
        <main className="max-w-6xl mx-auto px-4 py-12 text-center w-full">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-8 flex items-center justify-center gap-2">
            <Link to="/akntartayinvcharumner" className="hover:text-[#6400dc]">Գլխավոր</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">Պատմություն</span>
          </div>

          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <div className="w-20 h-20 flex items-center justify-center text-[#6400dc]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h10v2H7zm0 4h7v2H7z"/>
              </svg>
            </div>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              Ձեր վճարումների պատմությունը դատարկ է
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

// Main Akntartayin Vcharumner Component (2nd image design)
function Dashboard() {
  const items = [
    { title: "EVOCABANK", icon: "https://resource.evoca.am/images/WebPayment/evoca.png" },
    { title: "Միջազգային բջջային օպերատորներ", icon: "https://resource.evoca.am/images/WebPayment/international.png" },
    { title: "Կոմունալ վճարումներ", icon: "https://resource.evoca.am/images/WebPayment/utility.png" },
    { title: "Ինտերնետ և TV", icon: "https://resource.evoca.am/images/WebPayment/internettv.png" },
    { title: "ՃՈ վճարներ", icon: "https://resource.evoca.am/images/WebPayment/roadpolice.png" },
    { title: "Վարկային կազմակերպություններ", icon: "https://resource.evoca.am/images/WebPayment/loan.png" },
    { title: "Միջոցառումներ", icon: "https://resource.evoca.am/images/WebPayment/event.png" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        {/* Simplified Header (2nd image style) */}
        <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-1.5 cursor-pointer">
              <span className="text-2xl font-black text-[#6400dc] tracking-tighter">evoca</span>
              <span className="w-2 h-2 bg-[#6400dc] rounded-full"></span>
            </Link>
            <span className="text-gray-400 font-light text-lg">|</span>
            <span className="text-gray-600 text-sm font-medium">Online payment</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-neutral-800 hidden sm:inline">+374 10 605555</span>
            <span className="text-gray-300">🌐</span>
            <Link 
              to="/akntartayinvcharumner/history" 
              className="bg-[#6400dc] text-white font-bold text-xs px-4 py-2 rounded-full shadow-sm hover:bg-opacity-90 transition"
            >
              Պատմություն
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-12 w-full text-center">
          <h1 className="text-3xl font-black text-neutral-900 mb-10">
            Գլխավոր
          </h1>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-16">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 h-56 flex flex-col items-center justify-center text-center shadow-xs border border-gray-100 transition-all duration-300 cursor-pointer hover:border-[#6400dc] hover:shadow-xl hover:ring-2 hover:ring-[#6400dc]/20 group ${
                    isLast ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="max-h-16 max-w-[140px] object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-neutral-800 font-bold text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function AkntartayinVcharumner() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}