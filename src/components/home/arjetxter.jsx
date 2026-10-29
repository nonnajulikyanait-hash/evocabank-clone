import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Arjetxter() {
  const [activeTab, setActiveTab] = useState('investment'); // 'investment', 'bonds', 'hpd', 'repo', 'invest'
  const [openAccordions, setOpenAccordions] = useState({});
  const [openBondsAccordions, setOpenBondsAccordions] = useState({});
  const [openHpdAccordions, setOpenHpdAccordions] = useState({});

  // EvocaINVEST նյութերի և հարցերի վիճակները
  const [openUseful, setOpenUseful] = useState(false);
  const [openFaq, setOpenFaq] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const faqList = [
    {
      question: "Ի՞նչ է բաժնետոմսը։",
      answer: "Բաժնետոմսը ընկերության սեփականության մասնաբաժին ներկայացնող արժեթուղթ է։ Բաժնետոմս գնելիս՝ ներդրողը դառնում է տվյալ ընկերության մասնակի սեփականատեր և կարող է շահույթ ստանալ բաժնետոմսի գնի աճից կամ ընկերության կողմից վճարվող դիվիդենտներից։ Բաժնետոմսերի արժեքը կարող է փոփոխվել՝ շուկայական պահանջարկից, ընկերության արդյունքներից և տնտեսական պայմաններից կախված։"
    },
    {
      question: "Ի՞նչ է պարտատոմսը։",
      answer: "Պարտատոմսը պարտքային արժեթուղթ է։ Այն գնելիս` փաստացի գումար ես տրամադրում ընկերությանը կամ պետությանը որոշակի ժամկետով և դրա դիմաց ստանում ես կանխատեսելի տոկոսային եկամուտ։"
    },
    {
      question: "Ի՞նչ է ETF-ը։",
      answer: "ETF-ը (Exchange Traded Fund) ներդրումային ֆոնդ է, որը վաճառվում և գնվում է բորսայում սովորական բաժնետոմսի նման։ Այն սովորաբար միավորում է բազմաթիվ ակտիվներ մեկ գործիքի մեջ, օրինակ՝ բաժնետոմսեր, պարտատոմսեր կամ ամբողջ ինդեքս։"
    },
    {
      question: "Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև։",
      answer: "Բաժնետոմսը կապվում է մեկ ընկերության հետ և սովորաբար ունի ավելի բարձր եկամտաբերության, բայց նաև ավելի բարձր ռիսկի պոտենցիալ։\nՊարտատոմսը սովորաբար ավելի կայուն գործիք է և կարող է ապահովել կանխատեսելի տոկոսային եկամուտ։\nETF-ը թույլ է տալիս մեկ գործիքի միջոցով ներդրում կատարել միանգամից բազմաթիվ ակտիվներում, ինչը հաճախ օգնում է դիվերսիֆիկացնել ռիսկը։"
    }
  ];

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

  const toggleHpdAccordion = (index) => {
    setOpenHpdAccordions(prev => ({
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
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական and ֆիզիկական անձ հանդիսացող հաճախորդներին:
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
                        Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները:
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

                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleBondsAccordion(1)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Հաճախ տրվող հարցեր պարտատոմսերի մասին
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openBondsAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openBondsAccordions[1] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <div>
                        <strong className="text-[#6400dc]">? Ի՞նչ է պարտատոմսը:</strong>
                        <p className="pt-1">Պարտատոմսը պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ ստանալու անվանական արժեքն ու տոկոսը։</p>
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
        ) : activeTab === 'hpd' ? (
          /* ================= ՀՊԴ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Արժեթղթեր</span> &gt; <span className="text-gray-700 font-medium">ՀԿԴ ծառայություններ</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ) ծառայություններ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ռեեստրավարման և արժեթղթերի պահառության հետ կապված բոլոր ծառայությունները:
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16783474498811/780x585.jpg" 
                  alt="ՀԿԴ ծառայություններ" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-12">
              <p>
                ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
              </p>
              <p>
                Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
              </p>
              <p>
                Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝ մասնաճյուղերում։
              </p>
            </div>

            <div className="space-y-6 mb-16">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleHpdAccordion(0)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> ՀԿԴ ծառայությունների միջնորդավորման սակագներ և կանոններ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openHpdAccordions[0] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openHpdAccordions[0] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700">
                      <p>• <a href="#" className="text-[#6400dc] underline font-medium">Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության սակագներ</a></p>
                      <p>• <a href="#" className="text-[#6400dc] underline font-medium">Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության կանոններ</a></p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : activeTab === 'repo' ? (
          /* ================= ՌԵՊՈ/ՀԱԿԱԴԱՐՁ ՌԵՊՈ ԳՈՐԾԱՐՔՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Արժեթղթեր</span> &gt; <span className="text-gray-700 font-medium">Ռեպո/Հակադարձ Ռեպո գործարքներ</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Ռեպո/Հակադարձ Ռեպո գործարքներ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ։ Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ՝ Բանկը կատարում է կարճաժամկետ իրացվելիության կառավարում։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16783548886405/780x585.jpg" 
                  alt="Ռեպո/Հակադարձ Ռեպո գործարքներ" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-16">
              <p>
                Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ):
              </p>
              <p>
                Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի Ֆոնդային Բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:
              </p>
              <p>
                Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում:
              </p>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= EVOCAINVEST ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Արժեթղթեր</span> &gt; <span className="text-gray-700 font-medium">EvocaINVEST</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  EvocaINVEST
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  EvocaINVEST-ի միջոցով Դուք կարող եք ներդրումներ կատարել և կառավարել Ձեր ակտիվները առցանց եղանակով։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
                  alt="EvocaINVEST" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            {/* EvocaInvest Bottom Section (Անհրաժեշտ տեղեկատվություն, օգտակար նյութեր և ՀՏՀ) */}
            <div className="evocainvest-bottom-container" style={{ padding: '20px 0', fontFamily: 'sans-serif' }}>
              
              {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
              <h2 style={{ color: '#6400dc', borderBottom: '2px solid #6400dc', paddingBottom: '8px', marginBottom: '20px', fontSize: '24px', fontWeight: '900' }}>
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              {/* EvocaINVEST օգտակար նյութեր (Dropdown) */}
              <div style={{ marginBottom: '20px', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
                <div 
                  onClick={() => setOpenUseful(!openUseful)}
                  style={{ 
                    backgroundColor: '#f9fafb', 
                    padding: '15px 20px', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    color: '#6400dc',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  <span>EvocaINVEST օգտակար նյութեր</span>
                  <span>{openUseful ? '▲' : '▼'}</span>
                </div>

                {openUseful && (
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#fff' }}>
                    <a href="https://www.youtube.com/watch?v=5kUF-3KueZ8&t=2s" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                      ▶ Տեսանյութ 1 (Դիտել YouTube-ում)
                    </a>
                    <a href="https://www.youtube.com/watch?v=wax5BjEOAGQ&t=32s" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                      ▶ Տեսանյութ 2 (Դիտել YouTube-ում)
                    </a>
                    <a href="https://www.youtube.com/watch?v=oxxOZXf2kPA&t=12s" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                      ▶ Տեսանյութ 3 (Դիտել YouTube-ում)
                    </a>
                    <a href="https://www.youtube.com/watch?v=XCz2N5eicHs" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                      ▶ Տեսանյութ 4 (Դիտել YouTube-ում)
                    </a>
                  </div>
                )}
              </div>

              {/* Հաճախ տրվող հարցեր */}
              <div style={{ marginBottom: '40px', border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
                <div 
                  onClick={() => setOpenFaq(!openFaq)}
                  style={{ 
                    backgroundColor: '#f9fafb', 
                    padding: '15px 20px', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    color: '#6400dc',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  <span>Հաճախ տրվող հարցեր</span>
                  <span>{openFaq ? '▲' : '▼'}</span>
                </div>

                {openFaq && (
                  <div style={{ backgroundColor: '#fff' }}>
                    {faqList.map((item, index) => (
                      <div key={index} style={{ borderBottom: index !== faqList.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                        <div 
                          onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                          style={{ 
                            padding: '15px 20px', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            color: '#4b5563',
                            fontWeight: '600'
                          }}
                        >
                          <span style={{ color: '#6400dc' }}>{item.question}</span>
                          <span>{activeFaqIndex === index ? '−' : '+'}</span>
                        </div>
                        {activeFaqIndex === index && (
                          <div style={{ padding: '0 20px 15px 20px', color: '#4b5563', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                            {item.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
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