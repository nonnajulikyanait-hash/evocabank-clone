import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';
import EvocaOnlineMobile from './evocaonlinemobile';

export default function FooterPahatuper() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Պահատուփեր</span>
          </div>

          {/* Վերնագիր և մեծ նկար */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                Անհատական պահատուփեր
              </h1>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17738350520558/780x585.jpg" 
                alt="Անհատական պահատուփեր" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
            
            <p>
              Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձանց առաջարկում ենք արժեքավոր իրերը պահպանելու հուսալի և անվտանգ միջոց՝ չհրկիզվող անհատական պահատուփեր:
            </p>

            <p>
              Պահատուփերի պարունակությունը միայն ձեր գաղտնիքն է: Դրանցում կարող եք պահել Ձեզ համար արժեք ներկայացնող ցանկացած իր (դրամ, արժեթղթեր, թանկարժեք մետաղներ և քարեր, ոսկերչական իրեր, արվեստի գործեր, ֆոտո և տեսաժապավեններ, մագնիսական կրիչներ և այլն):
            </p>

            <p>
              Պահատուփերը գտնվում են առանձնացված տարածքում՝ շուրջօրյա հսկողության ներքո: Դրանք զինված են միջազգային չափանիշներին համապատասխան անվտանգության միջոցներով և պաշտպանված են մեխանիկական ու քիմիական գործոնների ազդեցությունից: Յուրաքանչյուր գործարքի ժամանակ, պահատուփերի առանձնացված տարածքում կարող եք գտնվել մինչև 15 րոպե:
            </p>

            <p className="font-semibold text-neutral-900">
              Առաջարկում ենք 3 չափսի պահատուփեր` փոքր, միջին, մեծ:
            </p>

            <p>
              Պահատուփերը փակվում են 2 բանալիով, որոնցից մեկը տրամադրում ենք ձեզ, իսկ մյուսը պահվում է մեզ մոտ (պահատուփը հնարավոր է բացել միայն երկու բանալիների միաժամանակյա կիրառմամբ): Ձեզ տրամադրված բանալիի օրինակը պարտավոր եք վերադարձնել՝ պահատուփի վարձակալության պայմանագրի գործողության ժամկետի վերջում:
            </p>

            <p>
              Պահատուփերը վարձակալության ենք տրամադրում անհատական պայմանագրի հիման վրա, ձեր նախընտրած վարձակալության ժամկետով: Վարձակալման գինը կախված է պահարանի չափից և ժամկետից՝ ըստ մեր սակագների:
            </p>

            <p>
              12 ամսից երկար ժամկետով վարձակալելու դեպքում պահատուփերի սակագները սահմանվում են պայմանագրային կարգով:
            </p>

            <p>
              Անհատական պահատուփից կարելի է օգտվել միայն մեր սպասարկման օրերին և ժամերին:
            </p>

            {/* Աղյուսակ 1: Սակագներ ռեզիդենտների համար */}
            <div className="pt-6">
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-4">
                Չհրկիզվող անհատական պահարանների վարձակալման սակագներ
              </h2>
              <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200 text-neutral-900 font-bold">
                      <th className="p-3">Ժամկետ / Պահարանի չափերը</th>
                      <th className="p-3">փոքր</th>
                      <th className="p-3">միջին</th>
                      <th className="p-3">մեծ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">14 օր</td>
                      <td className="p-3">5,000 ՀՀ դրամ</td>
                      <td className="p-3">7,000 ՀՀ դրամ</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">1 ամիս</td>
                      <td className="p-3">7,000 ՀՀ դրամ</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                      <td className="p-3">12,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">3 ամիս</td>
                      <td className="p-3">10,000 ՀՀ դրամ</td>
                      <td className="p-3">15,000 ՀՀ դրամ</td>
                      <td className="p-3">20,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">6 ամիս</td>
                      <td className="p-3">15,000 ՀՀ դրամ</td>
                      <td className="p-3">20,000 ՀՀ դրամ</td>
                      <td className="p-3">25,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">12 ամիս</td>
                      <td className="p-3">30,000 ՀՀ դրամ</td>
                      <td className="p-3">40,000 ՀՀ դրամ</td>
                      <td className="p-3">50,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Երկարաժամկետ</td>
                      <td className="p-3">պայմանագրային</td>
                      <td className="p-3">պայմանագրային</td>
                      <td className="p-3">պայմանագրային</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Պահարանի բանալու կորուստ կամ վնասում</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">20,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Պահարանի վնասում</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">Հասցված վնասի եռապատիկը</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1,000 ՀՀ դրամ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Աղյուսակ 2: Սակագներ օտարերկրյա քաղաքացիների համար */}
            <div className="pt-6">
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-4">
                Չհրկիզվող անհատական պահարանների վարձակալում օտարերկրյա քաղաքացիների համար
              </h2>
              <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200 text-neutral-900 font-bold">
                      <th className="p-3">Ժամկետ / Պահարանի չափերը</th>
                      <th className="p-3">փոքր</th>
                      <th className="p-3">միջին</th>
                      <th className="p-3">մեծ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">14 օր</td>
                      <td className="p-3">25,000 ՀՀ դրամ</td>
                      <td className="p-3">35,000 ՀՀ դրամ</td>
                      <td className="p-3">50,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">1 ամիս</td>
                      <td className="p-3">35,000 ՀՀ դրամ</td>
                      <td className="p-3">50,000 ՀՀ դրամ</td>
                      <td className="p-3">60,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">3 ամիս</td>
                      <td className="p-3">50,000 ՀՀ դրամ</td>
                      <td className="p-3">75,000 ՀՀ դրամ</td>
                      <td className="p-3">100,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">6 ամիս</td>
                      <td className="p-3">75,000 ՀՀ դրամ</td>
                      <td className="p-3">100,000 ՀՀ դրամ</td>
                      <td className="p-3">125,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">12 ամիս</td>
                      <td className="p-3">100,000 ՀՀ դրամ</td>
                      <td className="p-3">125,000 ՀՀ դրամ</td>
                      <td className="p-3">150,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Երկարաժամկետ</td>
                      <td className="p-3">պայմանագրային</td>
                      <td className="p-3">պայմանագրային</td>
                      <td className="p-3">պայմանագրային</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Պահարանի բանալու կորուստ կամ վնասում</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">20,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Պահարանի վնասում</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">Հասցված վնասի եռապատիկը</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Պայմանագրի ժամկետի ավարտին բանալու չհանձնում</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">Յուրաքանչյուր ուշացրած օրվա համար 1,000 ՀՀ դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Իրերը Բանկի այլ տարածքում պահպանելու վճար</td>
                      <td colSpan="3" className="p-3 font-bold text-neutral-900">Ի պահ ընդունված յուրաքանչյուր օրվա համար 1,000 ՀՀ դրամ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Նշում */}
            <div className="pt-2 text-xs text-gray-500">
              <p><strong>Նշում՝</strong> Միջնորդավճարները ներկայացված են ներառյալ ԱԱՀ:</p>
            </div>

          </div>

        </div>

        {/* Տեղադրված են EvocaOnlineMobile և Footer բաղադրիչները */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}