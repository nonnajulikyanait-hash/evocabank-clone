import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function HatukArajark() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Լիզինգ</span> &gt; <span className="text-gray-700 font-medium">Հատուկ առաջարկ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Հատուկ առաջարկ
          </h1>

          <div className="flex gap-8 items-start">
            {/* Social media icons */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 space-y-6">
              <h2 className="text-lg font-bold text-neutral-900 tracking-wide mb-4">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              {/* Accordion 1: Լոջիք Գրուպ ՍՊԸ */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => toggleSection(1)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 1 ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                    Լոջիք Գրուպ ՍՊԸ
                  </span>
                </button>

                {openSection === 1 && (
                  <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                    <p className="leading-relaxed">
                      Արտադրողականության խթանման նպատակային ծրագրից չօգտվող հաճախորդների համար Evocabank-ը ներկայացնում է նոր առաջարկ, ըստ որի կտրամադրվեն լիզինգներ հետևյալ պայմաններով՝
                    </p>

                    {/* Rates Table */}
                    <div className="overflow-x-auto my-4">
                      <table className="w-full text-center border-collapse border border-gray-200 text-xs md:text-sm bg-white rounded-xl">
                        <thead>
                          <tr className="bg-purple-50 text-[#6400dc]">
                            <th className="border border-gray-200 p-3">ժամկետ (ամիս)</th>
                            <th className="border border-gray-200 p-3">AMD</th>
                            <th className="border border-gray-200 p-3">USD</th>
                            <th className="border border-gray-200 p-3">EUR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 p-2.5 font-bold">12</td>
                            <td className="border border-gray-200 p-2.5">5.0%</td>
                            <td className="border border-gray-200 p-2.5">0.0%</td>
                            <td className="border border-gray-200 p-2.5">0.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 p-2.5 font-bold">24</td>
                            <td className="border border-gray-200 p-2.5">8.5%</td>
                            <td className="border border-gray-200 p-2.5">5.0%</td>
                            <td className="border border-gray-200 p-2.5">4.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 p-2.5 font-bold">36</td>
                            <td className="border border-gray-200 p-2.5">10.0%</td>
                            <td className="border border-gray-200 p-2.5">6.0%</td>
                            <td className="border border-gray-200 p-2.5">5.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 p-2.5 font-bold">48</td>
                            <td className="border border-gray-200 p-2.5">10.75%</td>
                            <td className="border border-gray-200 p-2.5">7.00%</td>
                            <td className="border border-gray-200 p-2.5">6.0%</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 p-2.5 font-bold">60</td>
                            <td className="border border-gray-200 p-2.5">11.50%</td>
                            <td className="border border-gray-200 p-2.5">7.50%</td>
                            <td className="border border-gray-200 p-2.5">7.0%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Ավտո Գելլրի ՓԲԸ */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => toggleSection(2)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 2 ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                    Ավտո Գելլրի ՓԲԸ
                  </span>
                </button>

                {openSection === 2 && (
                  <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                    <p className="leading-relaxed">
                      Արտադրողականության խթանման նպատակային ծրագրի շրջանակում՝ Evocabank-ը և իր գործընկեր «Ավտո Գելլրի» ՓԲԸ-ն համատեղ ներկայացնում են նոր առաջարկ, ըստ որի կտրամադրվեն լիզինգներ՝
                    </p>

                    <ul className="list-disc pl-5 space-y-1.5 font-semibold text-[#6400dc]">
                      <li>0.1% տարեկան տոկոսադրույքով</li>
                      <li>մինչև 36 ամիս մարման ժամկետով</li>
                      <li>5% կանխավճարով</li>
                    </ul>

                    <p className="text-gray-600 italic">
                      Առաջարկը գործում է միայն բեռնատար ավտոմեքենաների համար։
                    </p>
                    <p className="font-bold text-neutral-800">
                      Շտապիր օգտվել այս բացառիկ առաջարկից և ձեռք բերել ամենահարմար ու մատչելի պայմաններով լիզինգը հենց այսօր։
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}