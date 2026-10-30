import React from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Carayutyunner() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Արժեթղթերի շուկա</span> &gt; <span className="text-gray-700 font-medium">ՀԿԴ ծառայություններ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8 leading-tight">
            Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ) ծառայություններ
          </h1>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական բովանդակություն */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p className="text-base text-gray-800">
                ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
              </p>

              <p className="text-gray-600">
                Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
              </p>

              <p className="text-gray-600">
                Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝ մասնաճյուղերում։
              </p>

              {/* Փաստաթղթերի և սակագների հղումներ */}
              <div className="pt-6 space-y-4 border-t border-gray-100">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 transition">
                  <a 
                    href="https://www.evoca.am/file_manager/Bonds%202026/%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6%D5%AB%20%D4%BF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6%D5%A1%D5%AF%D5%A1%D5%B6%20%D4%B4%D5%A5%D5%BA%D5%B8%D6%86%D5%A9%D5%AB%20%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%BD%20%D5%B4%D5%AB%D5%BB%D5%B6%D5%B8%D6%86%D5%A4%D5%A1%D5%B5%D5%B8%D6%82%D5%B2%D5%B4%D5%A1%D5%B6%20%D5%BD%D5%A1%D5%AF%D5%A1%D5%A3%D5%BD%20%D6%87%20%D5%A4%D6%80%D5%B8%D6%82%D5%B5%D5%A9%D5%BD%D5%A1%20(1).pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#6400dc] font-bold underline hover:text-purple-800 block"
                  >
                    Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության սակագներ (Սակագների ուժի մեջ մտնելու ամսաթիվ – 01.04.2026թ.)
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 transition">
                  <a 
                    href="https://www.evoca.am/file_manager/PDF-FILES/Investment%20Services/%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6%20%D5%AF%D5%A5%D5%B6%D5%BF%D6%87%D5%B8%D5%B6%D5%A1%D5%AF%D5%A1%D5%B6%20%D5%A4%D5%A5%D5%BA%D5%B8%D6%86%D5%A9%D5%AB%20%D5%AF%D5%B8%D5%B5%D5%B6%20%D5%B4%D5%A1%D5%BF%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%BD%20%D5%B4%D5%AB%D5%BB%D5%B6%D5%B8%D6%86%D5%A4%D5%A1%D5%B5%D5%B8%D6%82%D5%B2%D5%B4%D5%A1%20%D5%A3%D5%BE%D5%B8%D6%80%D5%B9%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6%20%D5%AF%D5%A1%D5%BD%D5%B6%D5%B8%D5%B6%20(1).pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#6400dc] font-bold underline hover:text-purple-800 block"
                  >
                    Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության կանոններ
                  </a>
                </div>
              </div>

            </div>
          </div>
        </main>

        {/* Mobile & Online Section */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}