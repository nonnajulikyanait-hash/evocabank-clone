import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Partatomser() {
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
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Արժեթղթերի շուկա</span> &gt; <span className="text-gray-700 font-medium">Պարտատոմսեր</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Պարտատոմսեր
          </h1>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական տեքստեր */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p className="text-base text-gray-800 font-medium">
                Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ EvocaTOUCH հավելվածի միջոցով։
              </p>

              <div className="space-y-3">
                <p>
                  Պարտատոմսերը պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:
                  </li>
                  <li>
                    ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:
                  </li>
                </ul>
              </div>

              {/* Accordion Header */}
              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">

                {/* 1. ՏԱՍՆՉՈՐՍԵՐՈՐԴ ԵՎ ՏԱՍՆՀԻՆԳԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(1)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer uppercase"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 1 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      ՏԱՍՆՉՈՐՍԵՐՈՐԴ ԵՎ ՏԱՍՆՀԻՆԳԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                  </button>

                  {openSection === 1 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <h4 className="font-bold text-[#6400dc] uppercase">ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</h4>
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">Դաս</td><td className="p-3" colSpan="2">Անվանական արժեկտրոնային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Անվանական արժեք</td><td className="p-3">10,000 ՀՀ դրամ</td><td className="p-3">100 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Ընդհանուր ծավալ</td><td className="p-3">3,000,000,000 ՀՀ դրամ</td><td className="p-3">15,000,000 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Թողարկվող պարտատոմսերի քանակ</td><td className="p-3">300,000 հատ</td><td className="p-3">150,000 հատ</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Շրջանառության ժամկետ</td><td className="p-3">36 ամիս</td><td className="p-3">36 ամիս</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="p-3 font-bold text-[#6400dc]">10%</td><td className="p-3 font-bold text-[#6400dc]">5%</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնների վճարման պարբերականություն</td><td className="p-3">Եռամսյակային</td><td className="p-3">Եռամսյակային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Տեղաբաշխող</td><td className="p-3" colSpan="2">«Էվոկաբանկ» ԲԲԸ</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-500 italic text-xs">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
                      </p>
                    </div>
                  )}
                </div>

                {/* 2. ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(2)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer uppercase"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 2 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      ՏԱՍՆԵՐԿՈՒԵՐՈՐԴ ԵՎ ՏԱՍՆԵՐԵՔԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                  </button>

                  {openSection === 2 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <h4 className="font-bold text-[#6400dc] uppercase">ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</h4>
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">Դաս</td><td className="p-3" colSpan="2">Անվանական արժեկտրոնային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Անվանական արժեք</td><td className="p-3">10,000 ՀՀ դրամ</td><td className="p-3">100 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Ընդհանուր ծավալ</td><td className="p-3">3,000,000,000 ՀՀ դրամ</td><td className="p-3">15,000,000 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Թողարկվող պարտատոմսերի քանակ</td><td className="p-3">300,000 հատ</td><td className="p-3">150,000 հատ</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Շրջանառության ժամկետ</td><td className="p-3">36 ամիս</td><td className="p-3">36 ամիս</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="p-3 font-bold text-[#6400dc]">10.25%</td><td className="p-3 font-bold text-[#6400dc]">5.25%</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնների վճարման պարբերականություն</td><td className="p-3">Եռամսյակային</td><td className="p-3">Եռամսյակային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Տեղաբաշխող</td><td className="p-3" colSpan="2">«Էվոկաբանկ» ԲԲԸ</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-500 italic text-xs">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ:
                      </p>
                    </div>
                  )}
                </div>

                {/* 3. ՏԱՍԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(3)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer uppercase"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 3 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      ՏԱՍԵՐՈՐԴ ԵՎ ՏԱՍՆՄԵԿԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                  </button>

                  {openSection === 3 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <h4 className="font-bold text-[#6400dc] uppercase">ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</h4>
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">Դաս</td><td className="p-3" colSpan="2">Անվանական արժեկտրոնային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Անվանական արժեք</td><td className="p-3">10,000 ՀՀ դրամ</td><td className="p-3">100 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Ընդհանուր ծավալ</td><td className="p-3">2,000,000,000 ՀՀ դրամ</td><td className="p-3">10,000,000 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Թողարկվող պարտատոմսերի քանակ</td><td className="p-3">200,000 հատ</td><td className="p-3">100,000 հատ</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Շրջանառության ժամկետ</td><td className="p-3">30 ամիս</td><td className="p-3">30 ամիս</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="p-3 font-bold text-[#6400dc]">11%</td><td className="p-3 font-bold text-[#6400dc]">5%</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնների վճարման պարբերականություն</td><td className="p-3">Եռամսյակային</td><td className="p-3">Եռամսյակային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Տեղաբաշխող</td><td className="p-3" colSpan="2">«Էվոկաբանկ» ԲԲԸ</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-500 italic text-xs">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:
                      </p>
                    </div>
                  )}
                </div>

                {/* 4. ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(4)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer uppercase"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 4 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      ՅՈԹԵՐՈՐԴ, ՈՒԹԵՐՈՐԴ ԵՎ ԻՆՆԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                  </button>

                  {openSection === 4 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <h4 className="font-bold text-[#6400dc] uppercase">ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</h4>
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">Դաս</td><td className="p-3" colSpan="3">Անվանական արժեկտրոնային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Անվանական արժեք</td><td className="p-3">10,000 ՀՀ դրամ</td><td className="p-3">100 ԱՄՆ դոլար</td><td className="p-3">100 Եվրո</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Ընդհանուր ծավալ</td><td className="p-3">2,000,000,000 ՀՀ դրամ</td><td className="p-3">10,000,000 ԱՄՆ դոլար</td><td className="p-3">7,000,000 Եվրո</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Թողարկվող պարտատոմսերի քանակ</td><td className="p-3">200,000 հատ</td><td className="p-3">100,000 հատ</td><td className="p-3">70,000 հատ</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Շրջանառության ժամկետ</td><td className="p-3">30 ամիս</td><td className="p-3">39 ամիս</td><td className="p-3">39 ամիս</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="p-3 font-bold text-[#6400dc]">11%</td><td className="p-3 font-bold text-[#6400dc]">5.25%</td><td className="p-3 font-bold text-[#6400dc]">4%</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնների վճարման պարբերականություն</td><td className="p-3">Եռամսյակային</td><td className="p-3">Եռամսյակային</td><td className="p-3">Եռամսյակային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Տեղաբաշխող</td><td className="p-3" colSpan="3">«Էվոկաբանկ» ԲԲԸ</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-500 italic text-xs">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ:
                      </p>
                    </div>
                  )}
                </div>

                {/* 5. ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(5)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer uppercase"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 5 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      ՀԻՆԳԵՐՈՐԴ ԵՎ ՎԵՑԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                  </button>

                  {openSection === 5 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <h4 className="font-bold text-[#6400dc] uppercase">ԹՈՂԱՐԿՎՈՂ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</h4>
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">Դաս</td><td className="p-3" colSpan="2">Անվանական արժեկտրոնային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Անվանական արժեք</td><td className="p-3">10,000 ՀՀ դրամ</td><td className="p-3">100 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Ընդհանուր ծավալ</td><td className="p-3">2,000,000,000 ՀՀ դրամ</td><td className="p-3">10,000,000 ԱՄՆ դոլար</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Թողարկվող պարտատոմսերի քանակ</td><td className="p-3">200,000 հատ</td><td className="p-3">100,000 հատ</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Շրջանառության ժամկետ</td><td className="p-3">30 ամիս</td><td className="p-3">30 ամիս</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="p-3 font-bold text-[#6400dc]">11%</td><td className="p-3 font-bold text-[#6400dc]">5%</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Արժեկտրոնների վճարման պարբերականություն</td><td className="p-3">Եռամսյակային</td><td className="p-3">Եռամսյակային</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">Տեղաբաշխող</td><td className="p-3" colSpan="2">«Էվոկաբանկ» ԲԲԸ</td></tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-500 italic text-xs">
                        Պարտատոմսերի ծրագրային ազդագիրը գրանցվել է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ:
                      </p>
                    </div>
                  )}
                </div>

                {/* 6. ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(6)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer uppercase"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 6 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      ԵՐՐՈՐԴ ԵՎ ՉՈՐՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                  </button>

                  {openSection === 6 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                      <p>
                        Հաշվի առնելով պարտատոմսերի նկատմամբ ներդրողների ցուցաբերած զգալի հետաքրքրությունը՝ Evocabank-ը մարտ ամսվա ընթացքում թողարկել է պարտատոմսերի հաջորդ տրանշը։
                      </p>
                      <p>
                        Evocabank-ը 2021թ․ մարտի 23-ին թողարկել է անվանական, արժեկտրոնային, ոչ փաստաթղթային, առանց հետգնման հնարավորության, ոչ փոխարկելի պարտատոմսերի 2-րդ տրանշը:
                      </p>
                      <p>
                        Պարտատոմսերը ցուցակվելու են Հայաստանի ֆոնդային բորսայում և գնանշվելու են շուկա ստեղծողի (marketmaker) կողմից։
                      </p>
                      <p>
                        Ինչպես և առաջին տրանշի ընթացքում, Բանկը տեղաբաշխել է 50,000 հատ դրամային և 50,000 հատ դոլարային պարտատոմս: Արժեկտրոններ կվճարվեն եռամսյա պարբերականությամբ։ Մեկ դրամային պարտատոմսի անվանական արժեքը կկազմի 10,000 ՀՀ դրամ, իսկ դոլարայինը՝ 100 ԱՄՆ դոլար:
                      </p>
                      <p>
                        Պարտատոմսերի և՛ առաջին, և՛ երկրորդ տրանշի տեղաբաշխումն ավարտվել է ընդամենը մի քանի ժամում:
                      </p>
                    </div>
                  )}
                </div>

                {/* 7. ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(7)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer uppercase"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 7 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      ԱՌԱՋԻՆ ԵՎ ԵՐԿՐՈՐԴ ԹՈՂԱՐԿՈՒՄ
                    </span>
                  </button>

                  {openSection === 7 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                      <p>
                        Evocabank-ը 2021թ․ մարտի 2-ին առաջին տրանշով թողարկել է 10% և 5.5% եկամտաբերությամբ դրամային և դոլարային անվանական, արժեկտրոնային, ոչ փաստաթղթային, առանց հետգնման հնարավորության, ոչ փոխարկելի պարտատոմսեր ՝ 500 մլն ՀՀ դրամ և 5 մլն ԱՄՆ դոլար ընդհանուր ծավալով:
                      </p>
                      <p>
                        Բանկը տեղաբաշխել է 50,000 հատ դրամային և 50,000 հատ դոլարային պարտատոմս:
                      </p>
                      <p>
                        Evocabank-ն առաջին իսկ օրը՝ մի քանի ժամում, ավարտել է իր առաջին տրանշի պարտատոմսերի տեղաբաշխումը:
                      </p>
                    </div>
                  )}
                </div>

                {/* 8. ՀԱՃԱԽ ՏՐՎՈՂ ՀԱՐՑԵՐ ՊԱՐՏԱՏՈՄՍԵՐԻ ՄԱՍԻՆ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(8)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 8 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Հաճախ տրվող հարցեր պարտատոմսերի մասին
                    </span>
                  </button>

                  {openSection === 8 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <div>
                        <p className="font-bold text-[#6400dc] mb-1">? Ի՞նչ է պարտատոմսը:</p>
                        <p className="text-gray-600">
                          Պարտատոմսը (լատիներեն՝ obligation - պարտավորություն) պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ դրանում նշված ժամկետում պարտատոմս թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս։
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-[#6400dc] mb-1">? Ի՞նչ կլինի, եթե պարտատոմսերում ներդրված գումարն ինձ անհրաժեշտ լինի մինչև մարման ժամկետը:</p>
                        <p className="text-gray-600">
                          Evocabank-ի կողմից թողարկված պարտատոմսերը ցուցակվելու են Հայաստանի ֆոնդային բորսայում, և Դուք ցանկացած պահի կարող եք գնել կամ վաճառել դրանք:
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-[#6400dc] mb-1">? Ինչու՞ պետք է գնեմ պարտատոմսեր՝ ավանդ ներդնելու փոխարեն:</p>
                        <p className="text-gray-600">
                          Պարտատոմսեր գնելն է՛լ ավելի շահավետ է և հարմար։ Պարտատոմսերն ունեն մի շարք առավելություններ․
                          <br />• Պարտատոմսերից ստացված եկամուտները ազատված են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից:
                          <br />• Պարտատոմսերը վաճառելու դեպքում Դուք պահպանում եք մինչ այդ պահը կուտակված տոկոսագումարները:
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-[#6400dc] mb-1">? Իմ ավանդները երաշխավորված են ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից, իսկ պարտատոմսե՞րը:</p>
                        <p className="text-gray-600">
                          Պարտատոմսերը ևս երաշխավորված են։ «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի համաձայն՝ Բանկի կողմից թողարկված անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամի» կողմից:
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-[#6400dc] mb-1">? Ինչպե՞ս կարող եմ գնել Evocabank-ի պարտատոմսեր:</p>
                        <p className="text-gray-600">
                          Պարտատոմսեր գնելու համար անհրաժեշտ է՝ Մոտենալ Բանկի ցանկացած գրասենյակ, լրացնել պարտատոմսերի ձեռքբերման հայտ-հանձնարարականը, մուտքագրել գումարը հատուկ հաշվին կամ online տարբերակով` աշխարհի ցանկացած վայրից, օրվա ցանկացած ժամին։
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-[#6400dc] mb-1">? Կարող եմ արդյո՞ք անհրաժեշտության դեպքում պարտատոմսերի գրավով վարկ վերցնել:</p>
                        <p className="text-gray-600">
                          Այո, կարող եք: Ինչպես և ավանդի դեպքում, պարտատոմսերի դեպքում ևս կարելի է պարտատոմսերի գրավով վերցնել կարճաժամկետ վարկ։ Վարկը տրամադրվում է առավելագույնը պարտատոմսի մարման ժամկետով` պարտատոմսի արժեկտրոնային տոկոսադրույք +2%:
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}