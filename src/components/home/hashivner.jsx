import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Hashivner() {
  const [activeTab, setActiveTab] = useState('metal'); // 'saving', 'opening', 'metal'
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
              onClick={() => setActiveTab('saving')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'saving' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Evoca խնայողական հաշիվ
            </span>
            <span 
              onClick={() => setActiveTab('opening')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'opening' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Հաշիվների բացում և սպասարկում
            </span>
            <span 
              onClick={() => setActiveTab('metal')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'metal' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Առարկայազուրկ մետաղական հաշիվներ
            </span>
          </div>
        </div>

        {activeTab === 'metal' ? (
          /* ================= ԱՌԱՐԿԱՅԱԶՈՒՐԿ ՄԵՏԱՂԱԿԱՆ ՀԱՇԻՎՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
            </div>

            {/* Banner Section */}
            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Առարկայազուրկ մետաղական հաշիվներ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png" 
                  alt="Առարկայազուրկ մետաղական հաշիվներ" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            {/* Main Conditions Section */}
            <div className="space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed mb-16">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                Հիմնական պայմաններ
              </h2>

              <ul className="space-y-4 pl-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>
                    Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն 999.9 հարգի ոսկով, առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած 31 գրամից (ոսկու գնանշումը կատարվում է գրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից:
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>
                    Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով` ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամի):
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>
                    Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:
                  </span>
                </li>

                <li className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#6400dc] font-bold">•</span>
                    <span className="font-bold text-[#6400dc]">Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝</span>
                  </div>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>հաշվի ելքագրում՝ հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով:</span>
                    </li>
                  </ul>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>Մետաղական հաշիվները կարող են գրավադրվել:</span>
                </li>

                <li className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#6400dc] font-bold">•</span>
                    <span className="font-bold text-[#6400dc]">Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝</span>
                  </div>
                  <ul className="space-y-1 pl-6">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Դիմում՝ մեր ձևանմուշի համաձայն:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Մեր պահանջով այլ փաստաթղթեր:</span>
                    </li>
                  </ul>
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>
                    Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-medium">այստեղ</a>:
                  </span>
                </li>
              </ul>

              {/* Extra Loans Note */}
              <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 my-6">
                <p>
                  Evocabank-ում նաև կարող եք ձեռք բերել ոսկու գրավով վարկեր՝ ամենահարմար պայմաններով։ <a href="#" className="text-[#6400dc] font-bold underline">Ոսկու գրավով վարկը</a> տրամադրվում է ոսկյա իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:
                </p>
              </div>

              {/* Warning Notice */}
              <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500 text-red-700 font-semibold text-xs md:text-sm">
                Ուշադրություն. Ավանդների հատուցումը երաշխավորող հիմնադրամը չի հատուցում մետաղական հաշիվները:
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : activeTab === 'opening' ? (
          /* ================= ՀԱՇԻՎՆԵՐԻ ԲԱՑՈՒՄ ԵՎ ՍՊԱՍԱՐԿՈՒՄ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Հաշիվների բացում և սպասարկում</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Հաշիվների բացում և սպասարկում
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձիք:
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg" 
                  alt="Հաշիվների բացում և սպասարկում" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-xs md:text-sm text-gray-700 leading-relaxed mb-10">
              <p>
                Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված՝ բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-medium">այստեղ</a>:
              </p>
            </div>

            <div className="relative rounded-[32px] overflow-hidden mb-12 shadow-md">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg" 
                alt="Հաշիվներ բացելու նպատակով" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <h2 className="text-xl md:text-3xl font-extrabold text-white max-w-3xl leading-snug">
                  Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի» -ի):
                </h2>
              </div>
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
                      <span className="text-[#6400dc]">⌄</span> Անհրաժեշտ փաստաթղթեր
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[0] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[0] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700">
                      <p>• Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն:</p>
                      <p>• Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:</p>
                      <p>• Մեր պահանջով այլ փաստաթղթեր:</p>
                    </div>
                  )}
                </div>

                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Հաշիվ բացելու ընթացակարգ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[1] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Ընթացիկ հաշիվ կարող եք բացել դրամով, դոլարով, եվրոյով, ռուբլով, կանադական դոլարով, ֆրանկով և ֆունտ ստեռլինգով:</p>
                      <p>• Նախքան հաշվի բացումը մեր աշխատակիցները ձեզ տեղեկացնում են հաշիվների բացման ու սպասարկման պայմանների մասին:</p>
                      <p>• Ներկայացված փաստաթղթերի իսկությունն ու վավերականությունը ստուգելուց հետո ձեզ հետ կնքում ենք պայմանագիրը:</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= EVOCA ԽՆԱՅՈՂԱԿԱՆ ՀԱՇԻՎ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Evoca խնայողական հաշիվ</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Evoca խնայողական հաշիվ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Ստացիր եկամուտ՝ պարզապես գումարդ պահելով խնայողական հաշվիդ վրա։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/17906902726456/780x585.png" 
                  alt="Evoca խնայողական հաշիվ" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            <div className="space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed mb-12">
              <p>
                Գումարդ ավելանա՞, թե՞ միշտ հասանելի մնա։ Այլևս պետք չէ ընտրել։ Evoca խնայողական հաշվի միջոցով կարող ես միաժամանակ և՛ խնայել, և՛ ավելացնել գումարդ, և՛ անհրաժեշտ պահին ունենալ դրա հասանելիությունը։
              </p>
            </div>

            <EvocaOnlineMobile />
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}