import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Ayl() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Այլ բաժնի Sub-Bar Նավարկություն */}
        <div className="bg-[#6400dc] text-white px-12 text-xs font-bold border-b border-white">
          <div className="container mx-auto pl-6 flex gap-8 items-center h-12 overflow-x-auto">
            <Link to="/ayl" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/ayl' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>
              Պահատուփեր
            </Link>
            <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">
              Փոխանցումներ
            </span>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Այլ</span> &gt; <span className="text-gray-700 font-medium">Պահատուփեր</span>
          </div>

          {/* Banner / Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                Պահատուփեր
              </h1>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական պահատուփեր:
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16154664725996/780x585.jpg" 
                alt="Safe Deposit Boxes" 
                className="w-full max-w-md rounded-2xl shadow-sm object-cover"
              />
            </div>
          </div>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական բովանդակություն */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p className="text-gray-800 leading-relaxed">
                Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն):
              </p>

              <p className="text-gray-800 leading-relaxed">
                Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ, պահատուփերի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե:
              </p>

              <p className="text-gray-800 font-medium">
                Առաջարկում ենք 3 չափսի պահատուփեր` փոքր, միջին, մեծ:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ, իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալիի օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալման գինը կախված է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների:
              </p>

              <p className="text-gray-800 leading-relaxed">
                12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին:
              </p>

              {/* 1. Աղյուսակ - ՀՀ ռեզիդենտներ */}
              <div className="pt-4 space-y-4">
                <h2 className="text-xl font-bold text-neutral-900">
                  Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
                </h2>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-purple-50/50 border-b border-gray-200 text-gray-900 font-bold">
                        <th className="p-3">Ժամկետ</th>
                        <th className="p-3 text-center" colSpan="3">Պահարանի չափերը</th>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold text-center">
                        <th className="p-3"></th>
                        <th className="p-3">փոքր</th>
                        <th className="p-3">միջին</th>
                        <th className="p-3">մեծ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">14 օր</td>
                        <td className="p-3 text-center">5,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">1 ամիս</td>
                        <td className="p-3 text-center">7,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">12,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">3 ամիս</td>
                        <td className="p-3 text-center">10,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">15,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">20,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">6 ամիս</td>
                        <td className="p-3 text-center">15,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">20,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">25,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">12 ամիս</td>
                        <td className="p-3 text-center">30,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">40,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Երկարաժամկետ</td>
                        <td className="p-3 text-center" colSpan="3">պայմանագրային</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Պահարանի բանալու կորուստ կամ վնասում</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">20,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Պահարանի վնասում</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">Հասցված վնասի եռապատիկը</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. Աղյուսակ - Օտարերկրյա քաղաքացիներ */}
              <div className="pt-6 space-y-4">
                <h2 className="text-xl font-bold text-neutral-900">
                  Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
                </h2>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-purple-50/50 border-b border-gray-200 text-gray-900 font-bold">
                        <th className="p-3">Ժամկետ</th>
                        <th className="p-3 text-center" colSpan="3">Պահարանի չափսերը</th>
                      </tr>
                      <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold text-center">
                        <th className="p-3"></th>
                        <th className="p-3">փոքր</th>
                        <th className="p-3">միջին</th>
                        <th className="p-3">մեծ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">14 օր</td>
                        <td className="p-3 text-center">25,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">35,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">1 ամիս</td>
                        <td className="p-3 text-center">35,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">60,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">3 ամիս</td>
                        <td className="p-3 text-center">50,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">75,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">100,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">6 ամիս</td>
                        <td className="p-3 text-center">75,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">100,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">125,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">12 ամիս</td>
                        <td className="p-3 text-center">100,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">125,000 ՀՀ դրամ</td>
                        <td className="p-3 text-center">150,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Երկարաժամկետ</td>
                        <td className="p-3 text-center" colSpan="3">պայմանագրային</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Պահարանի բանալու կորուստ կամ վնասում</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">20,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Պահարանի վնասում</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">Հասցված վնասի եռապատիկը</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                        <td className="p-3 font-bold text-neutral-900 text-center" colSpan="3">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1000 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Նշում */}
              <div className="pt-2 text-xs text-gray-500 italic">
                <p><strong>Նշում․</strong> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
              </div>

            </div>
          </div>
        </main>

        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}