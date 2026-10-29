import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Arjetxter() {
  const [activeTab, setActiveTab] = useState('investment'); // 'investment', 'bonds', 'hpd', 'repo', 'invest'
  const [openAccordions, setOpenAccordions] = useState({});
  const [openBondsAccordions, setOpenBondsAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleBondsAccordion = (index) => {
    setOpenBondsAccordions(prev => ({
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
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Արժեթղթեր</span> &gt; <span className="text-gray-700 font-medium">Ներդրումային ծառայություններ</span>
            </div>

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

            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-10">
              <p>
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
              </p>
            </div>

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

            <div className="bg-red-50 p-5 rounded-2xl border-l-4 border-red-500 text-red-700 font-semibold text-xs md:text-sm mb-12">
              ՈՒՇԱԴՐՈՒԹՅՈՒՆ․ Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
            </div>

            <div className="space-y-6 mb-16">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
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
                        Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ:
                      </p>
                      <p className="font-bold text-[#6400dc] pt-2">Արժեթղթերի Պահառության գործունեության կանոններ</p>
                      <p>
                        Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները:
                      </p>
                    </div>
                  )}
                </div>

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
                    </div>
                  )}
                </div>
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : activeTab === 'bonds' ? (
          /* ================= ՊԱՐՏԱՏՈՄՍԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Արժեթղթեր</span> &gt; <span className="text-gray-700 font-medium">Պարտատոմսեր</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Պարտատոմսեր
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ։ Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg" 
                  alt="Պարտատոմսեր" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-12">
              <p>
                Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ EvocaTOUCH հավելվածի միջոցով։
              </p>
              <p>
                Պարտատոմսերը պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 mb-16">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                
                {/* Accordion 1: Պարտատոմսերի թողարկում */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleBondsAccordion(0)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Պարտատոմսերի թողարկում
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openBondsAccordions[0] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openBondsAccordions[0] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700">
                      <p className="font-bold text-[#6400dc]">ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-gray-200 text-gray-500">
                              <th className="py-2">Ցուցանիշ</th>
                              <th className="py-2">ՀՀ դրամ</th>
                              <th className="py-2">ԱՄՆ դոլար</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-100"><td className="py-2 font-semibold">Անվանական արժեք</td><td>10,000 ՀՀ դրամ</td><td>100 ԱՄՆ դոլար</td></tr>
                            <tr className="border-b border-gray-100"><td className="py-2 font-semibold">Ընդհանուր ծավալ</td><td>3,000,000,000 ՀՀ դրամ</td><td>15,000,000 ԱՄՆ դոլար</td></tr>
                            <tr className="border-b border-gray-100"><td className="py-2 font-semibold">Շրջանառության ժամկետ</td><td>36 ամիս</td><td>36 ամիս</td></tr>
                            <tr className="border-b border-gray-100"><td className="py-2 font-semibold">Տարեկան տոկոսադրույք</td><td>10%</td><td>5%</td></tr>
                            <tr className="border-b border-gray-100"><td className="py-2 font-semibold">Վճարման պարբերականություն</td><td>Եռամսյակային</td><td>Եռամսյակային</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-500 italic pt-2">Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleBondsAccordion(1)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openBondsAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openBondsAccordions[1] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700">
                      <p className="font-bold text-[#6400dc]">ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</p>
                      <p>• <strong>Տարեկան տոկոսադրույք՝</strong> ՀՀ դրամով՝ 10.25%, ԱՄՆ դոլարով՝ 5.25%</p>
                      <p>• <strong>Շրջանառության ժամկետ՝</strong> 36 ամիս</p>
                      <p>• <strong>Վճարման պարբերականություն՝</strong> Եռամսյակային</p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: ՏԱՍԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleBondsAccordion(2)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> ՏԱՍԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openBondsAccordions[2] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openBondsAccordions[2] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700">
                      <p className="font-bold text-[#6400dc]">ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</p>
                      <p>• <strong>Տարեկան տոկոսադրույք՝</strong> ՀՀ դրամով՝ 11%, ԱՄՆ դոլարով՝ 5%</p>
                      <p>• <strong>Շրջանառության ժամկետ՝</strong> 30 ամիս</p>
                      <p className="text-gray-500 italic">Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 4: ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleBondsAccordion(3)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openBondsAccordions[3] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openBondsAccordions[3] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700">
                      <p className="font-bold text-[#6400dc]">ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</p>
                      <p>• <strong>ՀՀ դրամ (11%), ԱՄՆ դոլար (5.25%), Եվրո (4%)</strong></p>
                      <p className="text-gray-500 italic">Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 5: ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleBondsAccordion(4)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openBondsAccordions[4] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openBondsAccordions[4] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700">
                      <p className="font-bold text-[#6400dc]">ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</p>
                      <p>• <strong>Տարեկան տոկոսադրույք՝</strong> ՀՀ դրամով՝ 11%, ԱՄՆ դոլարով՝ 5%</p>
                      <p className="text-gray-500 italic">Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 6: Հաճախ տրվող հարցեր */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleBondsAccordion(5)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Հաճախ տրվող հարցեր պարտատոմսերի մասին
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openBondsAccordions[5] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openBondsAccordions[5] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <div>
                        <strong className="text-[#6400dc]">? Ի՞նչ է պարտատոմսը:</strong>
                        <p className="pt-1">Պարտատոմսը պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ ստանալու անվանական արժեքն ու տոկոսը։</p>
                      </div>
                      <div>
                        <strong className="text-[#6400dc]">? Ի՞նչ կլինի, եթե գումարն անհրաժեշտ լինի մինչև ժամկետի ավարտը:</strong>
                        <p className="pt-1">Ցանկացած պահին կարող եք գնել կամ վաճառել Հայաստանի ֆոնդային բորսայում:</p>
                      </div>
                      <div>
                        <strong className="text-[#6400dc]">? Պարտատոմսերը երաշխավորված են՞:</strong>
                        <p className="pt-1">Այո՛, երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամի» կողմից:</p>
                      </div>
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