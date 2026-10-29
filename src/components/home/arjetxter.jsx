import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Arjetxter() {
  const [activeTab, setActiveTab] = useState('investment'); // 'investment', 'bonds', 'hpd', 'repo', 'invest'
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Purple Sub-bar #6400dc */}
        <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
            <span 
              onClick={() => setActiveTab('investment')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'investment' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Ներդրումային ծառայություններ
            </span>
            <span 
              onClick={() => setActiveTab('bonds')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'bonds' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Պարտատոմսեր
            </span>
            <span 
              onClick={() => setActiveTab('hpd')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'hpd' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              ՀՊԴ ծառայություններ
            </span>
            <span 
              onClick={() => setActiveTab('repo')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'repo' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Ռեպո/Հակադարձ Ռեպո գործարքներ
            </span>
            <span 
              onClick={() => setActiveTab('invest')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'invest' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              EvocaINVEST
            </span>
          </div>
        </div>

        {activeTab === 'investment' ? (
          /* ================= ՆԵՐԴՐՈՒՄԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Արժեթղթեր</span> &gt; <span className="text-gray-700 font-medium">Ներդրումային ծառայություններ</span>
            </div>

            {/* Banner Section */}
            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Ներդրումային ծառայություններ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
                  alt="Ներդրումային ծառայություններ" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            {/* Main Content Description */}
            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-10">
              <p>
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական and ֆիզիկական անձ հանդիսացող հաճախորդներին:
              </p>
            </div>

            {/* How to become a client */}
            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-10">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                Ինչպե՞ս դառնալ հաճախորդ։
              </h2>
              <p>
                Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-medium">այստեղ</a>:
              </p>
              <p>
                Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ։
              </p>
            </div>

            {/* Address & Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 bg-purple-50 p-6 md:p-8 rounded-3xl border border-purple-100 text-xs md:text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-[#6400dc] text-base">Հասցե՝</h3>
                <p className="text-gray-700">Երևան, Հանրապետության 44/2</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[#6400dc] text-base">Հետադարձ կապ՝</h3>
                <p className="text-gray-700">
                  <strong>Հեռ.՝</strong> 374 33 777 453<br />
                  374 33 603 055
                </p>
                <p className="text-gray-700 pt-1">
                  <strong>Էլ․ հասցե՝</strong> <a href="mailto:investsecurities@evoca.am" className="text-[#6400dc] underline">investsecurities@evoca.am</a>
                </p>
              </div>
            </div>

            {/* Warning Notice */}
            <div className="bg-red-50 p-5 rounded-2xl border-l-4 border-red-500 text-red-700 font-semibold text-xs md:text-sm mb-12">
              ՈՒՇԱԴՐՈՒԹՅՈՒՆ․ Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
            </div>

            {/* ANHRAZESHT TEXEKATVUTYUN Accordions */}
            <div className="space-y-6 mb-16">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                {/* Accordion 1: Ներդրումային ծառայությունների մատուցման կանոններ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(0)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Ներդրումային ծառայությունների մատուցման կանոններ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[0] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[0] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p className="font-bold text-[#6400dc]">Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ</p>
                      <p>
                        Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
                      </p>
                      <p className="font-bold text-[#6400dc] pt-2">Արժեթղթերի Պահառության գործունեության կանոններ</p>
                      <p>
                        Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում` Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Ծառայությունների մատուցման սակագներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Ծառայությունների մատուցման սակագներ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[1] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700">
                      <p>• <a href="#" className="text-[#6400dc] underline font-medium">Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ</a></p>
                      <p>• <a href="#" className="text-[#6400dc] underline font-medium">Միջազգային շուկաներում ծառայությունների մատուցման սակագներ</a></p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Լրացուցիչ տեղեկատվություն */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Լրացուցիչ տեղեկատվություն
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[2] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[2] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Հաճախորդները կարող են իրականացնել գործարքներ տարբեր ֆինանսական գործիքներով՝ բաժնետոմսեր, պարտատոմսեր, ETF-ներ:</p>
                      <p>• Բանկը ապահովում է անհատական մոտեցում յուրաքանչյուր ներդրողին և պրոֆեսիոնալ խորհրդատվություն:</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= ԱՅԼ ԵՆԹԱԲԱԺԻՆՆԵՐԻ ԷՋԵՐ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Արժեթղթեր</span> &gt; <span className="text-gray-700 font-medium">Բաժին</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Արժեթղթերի բաժին
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Ընտրված բաժնի տեղեկատվությունը շուտով հասանելի կլինի։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
                  alt="Արժեթղթեր" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}