import React from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function AkntartayinVcharumner() {
  const items = [
    { 
      title: "EVOCABANK", 
      icon: "https://resource.evoca.am/images/WebPayment/evoca.png" 
    },
    { 
      title: "Միջազգային բջջային օպերատորներ", 
      icon: "https://resource.evoca.am/images/WebPayment/international.png" 
    },
    { 
      title: "Կոմունալ վճարումներ", 
      icon: "https://resource.evoca.am/images/WebPayment/utility.png" 
    },
    { 
      title: "Ինտերնետ և TV", 
      icon: "https://resource.evoca.am/images/WebPayment/internettv.png" 
    },
    { 
      title: "ՃՈ վճարներ", 
      icon: "https://resource.evoca.am/images/WebPayment/roadpolice.png" 
    },
    { 
      title: "Վարկային կազմակերպություններ", 
      icon: "https://resource.evoca.am/images/WebPayment/loan.png" 
    },
    { 
      title: "Միջոցառումներ", 
      icon: "https://resource.evoca.am/images/WebPayment/event.png" 
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-12 w-full text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Ակնթարթային վճարումներ</span>
          </div>

          <h1 className="text-3xl font-black text-neutral-900 mb-10 text-center">
            Ակնթարթային վճարումներ
          </h1>

          {/* Քառակուսիների ցանց (Grid) */}
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

        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}