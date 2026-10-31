import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Sakagner() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Դիջիթալ Բաժնի Sub-Bar Նավարկություն */}
        <div className="bg-[#6400dc] text-white px-12 text-xs font-bold border-b border-white">
          <div className="container mx-auto pl-6 flex gap-8 items-center h-12 overflow-x-auto">
            <Link to="/dijital" className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap">
              V-POS Տերմինալ
            </Link>
            <Link to="/terminal" className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap">
              POS Տերմինալ
            </Link>
            <Link to="/sakagner" className="h-full flex items-center border-b-2 border-white text-white font-black whitespace-nowrap">
              Սակագներ
            </Link>
            <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">
              Տերմինալի տեղադրման հայտ
            </span>
            <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">
              Evoca Mobile POS' mPOS
            </span>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Դիջիթալ</span> &gt; <span className="text-gray-700 font-medium">Սակագներ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Սակագներ
          </h1>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական բովանդակություն */}
            <div className="flex-1 space-y-10 text-xs md:text-sm text-gray-700 leading-relaxed">
              
              <div className="space-y-4">
                <p className="text-gray-800 leading-relaxed">
                  Տերմինալը փողոցում, ինչպես նաև առևտրի կետերում վճարումների համար նախատեսված սարք է։ Տերմինալների միջոցով Դուք նաև կարող եք կատարել բանկային ծառայություններ՝ առանց բանկ այցելելու՝ հեշտ և հարմար տարբերակով[cite: 13]։
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Եթե Ձեր տարածքում չկա Evocabank-ի մասնաճյուղ, Դուք կարող եք կատարել Ձեր վճարումները հետևյալ տերմինալների միջոցով․[cite: 13]
                </p>
              </div>

              {/* 1. Telcell */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h2 className="text-2xl font-black text-neutral-900">Telcell</h2>
                <div className="py-2">
                  <img 
                    src="https://www.evoca.am/file_manager/telcell-evoca-logo.png" 
                    alt="Telcell Logo" 
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Telcell վճարային տերմինալների միջոցով Դուք կարող եք 24/7 ռեժիմով կատարել ընթացիկ և քարտային հաշիվների համալրում և վարկի մարումներ[cite: 13, 14]։
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Telcell համակարգը հասանելի է ինչպես Հայաստանի Հանրապետության տարածքում, այնպես էլ Արցախի Հանրապետությունում: Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ <span className="text-[#6400dc] font-bold underline cursor-pointer">այստեղ</span>[cite: 14]:
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Evocabank-ի մասնաճյուղերում տեղադրված Telcell տերմինալներից օգտվելիս գործում է <strong>0% միջնորդավճար</strong>։ Այլ վայրերում տեղադրված Telcell տերմինալով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 14]
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Հաշվի համալրում</td>
                        <td className="p-3">մինչև 100,000 դրամը ներառյալ</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Քարտային հաշվի համալրում</td>
                        <td className="p-3">մինչև 100,000 դրամը ներառյալ</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Վարկի մարում</td>
                        <td className="p-3">մինչև 100,000 դրամը ներառյալ</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. uPay */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-black text-neutral-900">uPay</h2>
                <div className="py-2">
                  <img 
                    src="https://www.evoca.am/file_manager/uPay-evoca.png" 
                    alt="uPay Logo" 
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-gray-800 leading-relaxed">
                  uPay-ի միջոցով վճարումներ կարող եք կատարել՝ ինչպես uPay հավելվածով, այնպես էլ այցելելով Ucom սպասարկման կենտրոններ[cite: 14]։
                </p>
                <p className="text-gray-800 leading-relaxed font-semibold">
                  uPay-ում վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 14]
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50" rowSpan="2">
                          Վարկերի մարում և փոխանցում բանկային հաշիվներին
                        </td>
                        <td className="p-3">մինչև 35,000 ՀՀ դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">200 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3">35,001-ից ավելի ՀՀ դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">0.6%, բայց ոչ ավել 1200 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3. ՄոբիԴրամ */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-black text-neutral-900">ՄոբիԴրամ</h2>
                <div className="py-2">
                  <img 
                    src="https://www.evoca.am/file_manager/mobidram-evoca.jpg" 
                    alt="MobiDram Logo" 
                    className="h-16 object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-800 leading-relaxed">
                  Տերմինալների ցանկին և հասցեներին կարող եք ծանոթանալ <span className="text-[#6400dc] font-bold underline cursor-pointer">այստեղ</span>[cite: 15]:
                </p>
                <p className="text-gray-800 leading-relaxed font-semibold">
                  ՄոբիԴրամի տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 15]
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50" rowSpan="2">Վարկի մարում</td>
                        <td className="p-3">մինչև 50,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">200 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3">50,001 - 100,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50" rowSpan="2">Բանկային հաշիվների/քարտերի համալրում</td>
                        <td className="p-3">մինչև 50,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">200 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3">50,001 - 100,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4. iDram */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-black text-neutral-900">iDram</h2>
                <div className="py-2">
                  <img 
                    src="https://www.evoca.am/file_manager/idram-evoca.png" 
                    alt="iDram Logo" 
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-gray-800 leading-relaxed font-semibold">
                  Idram հավելվածով կարող եք կատարել գործարքներ հետևյալ միջնորդավճարներով՝[cite: 16]
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50" rowSpan="3">Վարկի մարում</td>
                        <td className="p-3">մինչև 15,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">100 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3">15,001 - 50,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">200 ՀՀ դրամ</td>
                      </tr>
                      <tr>
                        <td className="p-3">50,001 - 100,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. EasyPay */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-black text-neutral-900">EasyPay</h2>
                <div className="py-2">
                  <img 
                    src="https://www.evoca.am/file_manager/easypay-evoca.png" 
                    alt="EasyPay Logo" 
                    className="h-16 object-contain"
                  />
                </div>
                <p className="text-gray-800 leading-relaxed">
                  2,000-ից ավել վճարային տերմինալ, որոնց ցանկին և հասցեներին կարող եք ծանոթանալ <span className="text-[#6400dc] font-bold underline cursor-pointer">այստեղ</span>[cite: 16]:
                </p>
                <p className="text-gray-800 leading-relaxed">
                  Evocabank-ի մասնաճյուղերում տեղադրված EasyPay տերմինալներից օգտվելիս գործում է <strong>0% միջնորդավճար</strong>։ Այլ վայրերում տեղադրված EasyPay տերմինալներով Evocabank-ի վճարում կատարելիս գործում են հետևյալ միջնորդավճարները՝[cite: 16]
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Հաշվի համալրում</td>
                        <td className="p-3">1,000 - 100,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ (առավելագույնը 1,200 ՀՀ դրամ)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Քարտային հաշվի համալրում</td>
                        <td className="p-3">1,000 - 100,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ (առավելագույնը 1,200 ՀՀ դրամ)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Վարկի մարում</td>
                        <td className="p-3">1,000 - 100,000 դրամի դեպքում</td>
                        <td className="p-3 font-bold text-neutral-900">300 ՀՀ դրամ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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