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
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Փոխանցումներ</span> &gt; <span className="text-gray-700 font-medium">Վճարային համակարգեր</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-neutral-900 mb-10 tracking-tight">
              Վճարային համակարգեր
            </h1>

            {/* Payment Systems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* 1. MoneyTun */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="h-16 flex items-center">
                    <img 
                      src="https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png" 
                      alt="MoneyTun" 
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակը Ամերիկայի և Հայաստանի միջև ապահով ու պաշտպանված գործարքների ապահովումն է՝ հիմնված տասնամյակների փորձի վրա: Դրամական փոխանցումները կազմում են MoneyTun-ի կողմից մատուցվող ծառայությունների զգալի մասը:
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-1 text-xs text-gray-700">
                  <p className="font-bold text-[#6400dc]">MoneyTun Հաճախորդների սպասարկման հեռախոսահամար՝</p>
                  <p className="font-semibold">+374 10 27 72 85</p>
                  <p className="font-bold text-[#6400dc] pt-2">Աշխատանքային գրաֆիկ՝</p>
                  <p>Երկուշաբթի-ուրբաթ 10:00-17:30</p>
                  <p>Շաբաթ 10:00-14:00</p>
                  <p>Կիրակի 10:00-13:00</p>
                </div>
              </div>

              {/* 2. Ria */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="h-16 flex items-center">
                    <img 
                      src="https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png" 
                      alt="Ria" 
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ RIA համակարգի սահմանած սակագների:
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-1 text-xs text-gray-700">
                  <p className="font-bold text-[#6400dc]">Ria Հաճախորդների սպասարկման հեռախոսահամար Հայաստանի համար՝</p>
                  <p className="font-semibold">+374 94 23 59 00</p>
                  <p className="font-bold text-[#6400dc] pt-2">Աշխատանքային գրաֆիկ՝</p>
                  <p>երկուշաբթի-ուրբաթ, 09:00-18:00 (Երևանի ժամանակով)</p>
                  <p className="font-bold text-[#6400dc] pt-2">Հաճախորդների աջակցության լեզուներ՝</p>
                  <p>ռուսերեն, անգլերեն</p>
                </div>
              </div>

              {/* 3. UBPay */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="h-16 flex items-center">
                    <img 
                      src="https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png" 
                      alt="UBPay" 
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    UBPay – ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային դրամական փոխանցումների իրականացման համար: Համակարգի միջոցով կարող եք իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ:
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-1 text-xs text-gray-700">
                  <p className="font-bold text-[#6400dc]">UBPay Հաճախորդների սպասարկման հեռախոսահամար`</p>
                  <p className="font-semibold">+374 43 00 49 35</p>
                </div>
              </div>

              {/* 4. IntelExpress */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="h-16 flex items-center">
                    <img 
                      src="https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png" 
                      alt="IntelExpress" 
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան, եվրոպական երկրներ և այլն)։ Փոխանցումները կատարվում են ռուբլով, դոլարով և եվրոյով: Միջնորդավճարը գանձվում է՝ ըստ IntelExpress-ի սահմանած սակագների:
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-1 text-xs text-gray-700">
                  <p className="font-bold text-[#6400dc]">INTELEXPRESS Հաճախորդների սպասարկման հեռախոսահամար՝</p>
                  <p className="font-semibold">+995 32 2 49 25 25</p>
                </div>
              </div>

              {/* 5. Stak */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="h-16 flex items-center">
                    <img 
                      src="https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png" 
                      alt="Stak" 
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    «ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է: Համակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դոլարով և, ինչպես նաև եվրոյով։
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-1 text-xs text-gray-700">
                  <p className="font-bold text-[#6400dc]">«ՍՏԱԿ» փոխանցումների համակարգ</p>
                </div>
              </div>

              {/* 6. MoneyGram */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="h-16 flex items-center">
                    <img 
                      src="https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png" 
                      alt="MoneyGram" 
                      className="max-h-12 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո, իսկ Հայաստանից արտերկիր՝ միայն դոլար: Միջնորդավճարը գանձվում է ըստ MoneyGram-ի սահմանած սանդղակի:
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-1 text-xs text-gray-700">
                  <p className="font-bold text-[#6400dc]">MoneyGram Հաճախորդների սպասարկման հեռախոսահամար`</p>
                  <p className="font-semibold">1-800-926-9400</p>
                </div>
              </div>

            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= ԴՐԱՄԱԿԱՆ ՓՈԽԱՆՑՈՒՄՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Փոխանցումներ</span> &gt; <span className="text-gray-700 font-medium">Դրամական փոխանցումներ</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
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