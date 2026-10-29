import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Poxancumner() {
  const [activeTab, setActiveTab] = useState('systems'); // 'transfers', 'systems'
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
              onClick={() => setActiveTab('transfers')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'transfers' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Դրամական փոխանցումներ
            </span>
            <span 
              onClick={() => setActiveTab('systems')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'systems' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Վճարային համակարգեր
            </span>
          </div>
        </div>

        {activeTab === 'systems' ? (
          /* ================= ՎՃԱՐԱՅԻՆ ՀԱՄԱԿԱՐԳԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Փոխանցումներ</span> &gt; <span className="text-gray-700 font-medium">Վճարային համակարգեր</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-black text-neutral-900 mb-8 tracking-tight">
              Վճարային համակարգեր
            </h1>

            {/* Payment Systems Horizontal Layout */}
            <div className="space-y-6 mb-16">
              
              {/* 1. MoneyTun */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 flex justify-center bg-gray-50 p-4 rounded-2xl">
                  <img 
                    src="https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png" 
                    alt="MoneyTun" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="md:col-span-9 space-y-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակը Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումն է՝ հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը:
                  </p>
                  <div className="text-[11px] text-gray-700 pt-2 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-1">
                    <div><span className="font-bold text-[#6400dc]">Հեռ․՝</span> +374 10 27 72 85</div>
                    <div><span className="font-bold text-[#6400dc]">Գրաֆիկ՝</span> Երկ-Ուրբ 10:00-17:30, Շաբ 10:00-14:00, Կիր 10:00-13:00</div>
                  </div>
                </div>
              </div>

              {/* 2. Ria */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 flex justify-center bg-gray-50 p-4 rounded-2xl">
                  <img 
                    src="https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png" 
                    alt="Ria" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="md:col-span-9 space-y-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանած սակագների:
                  </p>
                  <div className="text-[11px] text-gray-700 pt-2 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-1">
                    <div><span className="font-bold text-[#6400dc]">Հեռ․՝</span> +374 94 23 59 00</div>
                    <div><span className="font-bold text-[#6400dc]">Գրաֆիկ՝</span> Երկ-Ուրբ, 09:00-18:00</div>
                    <div><span className="font-bold text-[#6400dc]">Լեզուներ՝</span> ռուսերեն, անգլերեն</div>
                  </div>
                </div>
              </div>

              {/* 3. UBPay */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 flex justify-center bg-gray-50 p-4 rounded-2xl">
                  <img 
                    src="https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png" 
                    alt="UBPay" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="md:col-span-9 space-y-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    UBPay – ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար: Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ:
                  </p>
                  <div className="text-[11px] text-gray-700 pt-2 border-t border-gray-100">
                    <span className="font-bold text-[#6400dc]">Հեռ․՝</span> +374 43 00 49 35
                  </div>
                </div>
              </div>

              {/* 4. IntelExpress */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 flex justify-center bg-gray-50 p-4 rounded-2xl">
                  <img 
                    src="https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png" 
                    alt="IntelExpress" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="md:col-span-9 space-y-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, եվրոպական երկրներ և այլն)։ Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանած սակագների:
                  </p>
                  <div className="text-[11px] text-gray-700 pt-2 border-t border-gray-100">
                    <span className="font-bold text-[#6400dc]">Հեռ․՝</span> +995 32 2 49 25 25
                  </div>
                </div>
              </div>

              {/* 5. Stak */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 flex justify-center bg-gray-50 p-4 rounded-2xl">
                  <img 
                    src="https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png" 
                    alt="Stak" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="md:col-span-9 space-y-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    «ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է: Համակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով։
                  </p>
                </div>
              </div>

              {/* 6. MoneyGram */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3 flex justify-center bg-gray-50 p-4 rounded-2xl">
                  <img 
                    src="https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png" 
                    alt="MoneyGram" 
                    className="h-10 object-contain"
                  />
                </div>
                <div className="md:col-span-9 space-y-2">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար: Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանած սանդղակի:
                  </p>
                  <div className="text-[11px] text-gray-700 pt-2 border-t border-gray-100">
                    <span className="font-bold text-[#6400dc]">Հեռ․՝</span> 1-800-926-9400
                  </div>
                </div>
              </div>

            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= ԴՐԱՄԱԿԱՆ ՓՈԽԱՆՑՈՒՄՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Փոխանցումներ</span> &gt; <span className="text-gray-700 font-medium">Դրամական փոխանցումներ</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-black text-neutral-900 leading-tight tracking-tight">
                  Դրամական փոխանցումներ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով:
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                  alt="Դրամական փոխանցումներ" 
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