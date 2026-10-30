import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function EvocaInvest() {
  const [openSection, setOpenSection] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Արժեթղթերի շուկա</span> &gt; <span className="text-gray-700 font-medium">EvocaINVEST</span>
          </div>

          {/* Top Banner Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                Կատարիր ներդրումեր և ստացիր եկամուտ EvocaINVEST հավելվածով[cite: 18]
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                EvocaINVEST հավելվածի միջոցով կարող ես կատարել ներդրումներ մի շարք միջազգային ֆինանսական շուկաներում:[cite: 18]
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17812684765006/780x585.png" 
                alt="EvocaINVEST" 
                className="rounded-3xl shadow-sm object-cover w-full max-h-[350px]"
              />
            </div>
          </div>

          {/* Social Icons & Main Content */}
          <div className="flex gap-8 items-start mb-12">
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            <div className="flex-1 space-y-8 text-xs md:text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Apple, Tesla, Google, Amazon, թե՞ Nike[cite: 19]:</h3>
                <p className="text-gray-600">
                  EvocaINVEST-ի միջոցով դու կարող ես ներդրումներ կատարել միջազգային և տեղական կապիտալի շուկաներում։ Իսկ բրոքերային հաշիվ կարող ես բացել ընդամենը մի քանի րոպեում՝ անմիջապես EvocaTOUCH հավելվածից[cite: 19]:
                </p>
                <p className="text-gray-600 mt-2 font-medium">
                  Գնիր բաժնետոմսեր, պարտատոմսեր, ETF-ներ և կառավարիր պորտֆոլիոդ մեկ հարթակից[cite: 19]:
                </p>
              </div>

              {/* Քո ներդրումային գործիքները */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#6400dc]">Քո ներդրումային գործիքները[cite: 19]</h3>
                <p className="text-gray-600">
                  EvocaINVEST-ը հնարավորություն է տալիս ներդրումներ կատարել ամերիկյան, եվրոպական և ասիական ֆոնդային բորսաներում՝ ընտրելով քեզ հարմար ռազմավարությունը[cite: 19]:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><strong>Բաժնետոմսեր՝</strong> ներդրումներ համաշխարհային առաջատար ընկերություններում[cite: 19]</li>
                  <li><strong>Պարտատոմսեր և եվրապարտատոմսեր՝</strong> ավելի կանխատեսելի ներդրումներ և կայուն եկամտի հնարավորություն[cite: 19]</li>
                  <li><strong>ETF-ներ՝</strong> դիվերսիֆիկացված ներդրումներ մեկ գործիքի միջոցով[cite: 19]</li>
                </ul>
              </div>

              <p className="text-gray-600 italic">
                Անկախ նրանից՝ նո՞ր ես սկսում ներդրում կատարել, թե՞ արդեն ունես փորձ, կատարում ես երկարաժամկե՞տ, թե՞ կարճաժամկետ ներդրումներ, EvocaINVEST-ը տալիս է բոլոր անհրաժեշտ գործիքները քո ներդրումային ռազմավարության համար[cite: 19]:
              </p>

              {/* Բացիր բրոքերային հաշիվ 3 պարզ քայլով */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-neutral-900">Բացիր բրոքերային հաշիվ 3 պարզ քայլով</h3>
                
                <div className="space-y-3 text-gray-600">
                  <p><strong>1. Ներբեռնիր EvocaTOUCH հավելվածը</strong><br />
                  Բանկային և ներդրումային գործառույթները՝ մեկ հավելվածում։ Հասանելի է iOS և Android համակարգերում։ Ներբեռնելու համար անցիր App Store և Google Play:</p>

                  <p><strong>2. Բացիր Բրոքերային հաշիվ</strong><br />
                  Մուտք գործիր հավելվածի «Հաշիվներ» բաժին, ընտրիր «Բրոքերային հաշիվ» և ավարտիր գրանցումը մի քանի րոպեում՝ առանց Բանկ այցելելու անհրաժեշտության։</p>

                  <p><strong>3. Սկսիր ներդրումներ կատարել</strong><br />
                  Փնտրիր ընկերությունն ըստ անվան կամ ticker-ի EvocaINVEST հավելվածում, տեղադրիր լիմիտային կամ շուկայական պատվեր և հետևիր պորտֆոլիոդ:</p>
                </div>

                <div className="w-full flex justify-center py-4">
                  <img 
                    src="https://www.evoca.am/file_manager/other/invest%20steps%20(1).png" 
                    alt="EvocaINVEST Steps" 
                    className="rounded-2xl shadow-sm object-cover w-full max-w-2xl"
                  />
                </div>
              </div>

              {/* Ինչո՞ւ ընտրել EvocaINVEST */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-neutral-900">Ինչո՞ւ ընտրել EvocaINVEST ներդրումային հարթակը</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-[#6400dc] mb-1">24/7 պատվերներ</h4>
                    <p className="text-xs text-gray-600">Տեղադրիր պատվերդ ցանկացած ժամի, այն կհերթագրվի և կկատարվի ավտոմատ՝ բորսայի բացվելուն պես։</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-[#6400dc] mb-1">Մրցակցային սակագներ</h4>
                    <p className="text-xs text-gray-600">Մրցակցային և թափանցիկ միջնորդավճարներ։ Ամբողջական սակագներին ծանոթանում ես նախքան գործարքը հաստատելը։</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-[#6400dc] mb-1">Լիմիտային և շուկայական պատվերներ</h4>
                    <p className="text-xs text-gray-600">Պատվերներն ավտոմատ կիրառվում են որպես լիմիտային՝ գնի ճշգրտության համար։</p>
                  </div>
                </div>
              </div>

              {/* Զարգացրու ոչ միայն պորտֆոլիոդ */}
              <div className="bg-purple-50/60 p-5 rounded-2xl border border-purple-100 space-y-2">
                <h3 className="text-base font-bold text-[#6400dc]">Զարգացրու ոչ միայն պորտֆոլիոդ, այլ նաև գիտելիքդ</h3>
                <p className="text-gray-600">Միանալով EvocaINVEST տելեգրամյան ալիքին՝ դու կգտնես․</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Ներդրումների մասին պարզ և հասկանալի նյութեր,</li>
                  <li>Շուկայական հետազոտություններ և վերլուծություններ,</li>
                  <li>Փորձագետների կարծիքներ միջազգային ներդրումային մասնագետների կողմից,</li>
                  <li>Համաշխարհային ներդրումային շուկաների մասին կարևոր թարմացումներ:</li>
                </ul>
              </div>

              {/* ----------------- ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ (Accordion) ----------------- */}
              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                {/* Accordion 1: EvocaINVEST օգտակար նյութեր */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(1)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 1 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      EvocaINVEST օգտակար նյութեր
                    </span>
                  </button>

                  {openSection === 1 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-6 bg-gray-50/50">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="aspect-video w-full">
                          <iframe className="w-full h-full rounded-xl shadow-sm" src="https://www.youtube.com/embed/5kUF-3KueZ8" title="Video 1" allowFullScreen></iframe>
                        </div>
                        <div className="aspect-video w-full">
                          <iframe className="w-full h-full rounded-xl shadow-sm" src="https://www.youtube.com/embed/wax5BjEOAGQ" title="Video 2" allowFullScreen></iframe>
                        </div>
                        <div className="aspect-video w-full">
                          <iframe className="w-full h-full rounded-xl shadow-sm" src="https://www.youtube.com/embed/oxxOZXf2kPA" title="Video 3" allowFullScreen></iframe>
                        </div>
                        <div className="aspect-video w-full">
                          <iframe className="w-full h-full rounded-xl shadow-sm" src="https://www.youtube.com/embed/XCz2N5eicHs" title="Video 4" allowFullScreen></iframe>
                        </div>
                      </div>
                      <div className="aspect-video w-full max-w-lg mx-auto">
                        <iframe className="w-full h-full rounded-xl shadow-sm" src="https://www.youtube.com/embed/8_C9YpvlZAE" title="Video 5" allowFullScreen></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ----------------- ՀԱՃԱԽ ՏՐՎՈՂ ՀԱՐՑԵՐ ----------------- */}
              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                Հաճախ տրվող հարցեր
              </h2>

              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button onClick={() => toggleFaq(1)} className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openFaq === 1 ? 'rotate-180' : ''}`}>▼</span>
                      Ի՞նչ է բաժնետոմսը։
                    </span>
                  </button>
                  {openFaq === 1 && (
                    <p className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-600 bg-gray-50/50">
                      Բաժնետոմսը ընկերության սեփականության մասնաբաժին ներկայացնող արժեթուղթ է։ Բաժնետոմս գնելիս՝ ներդրողը դառնում է տվյալ ընկերության մասնակի սեփականատեր և կարող է շահույթ ստանալ բաժնետոմսի գնի աճից կամ ընկերության կողմից վճարվող դիվիդենտներից։
                    </p>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button onClick={() => toggleFaq(2)} className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openFaq === 2 ? 'rotate-180' : ''}`}>▼</span>
                      Ի՞նչ է պարտատոմսը։
                    </span>
                  </button>
                  {openFaq === 2 && (
                    <p className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-600 bg-gray-50/50">
                      Պարտատոմսը պարտքային արժեթուղթ է։ Այն գնելիս` փաստացի գումար ես տրամադրում ընկերությանը կամ պետությանը որոշակի ժամկետով և դրա դիմաց ստանում ես կանխատեսելի տոկոսային եկամուտ։
                    </p>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button onClick={() => toggleFaq(3)} className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openFaq === 3 ? 'rotate-180' : ''}`}>▼</span>
                      Ի՞նչ է ETF-ը։
                    </span>
                  </button>
                  {openFaq === 3 && (
                    <p className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-600 bg-gray-50/50">
                      ETF-ը (Exchange Traded Fund) ներդրումային ֆոնդ է, որը վաճառվում և գնվում է բորսայում սովորական բաժնետոմսի նման։ Այն սովորաբար միավորում է բազմաթիվ ակտիվներ մեկ գործիքի մեջ։
                    </p>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button onClick={() => toggleFaq(4)} className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openFaq === 4 ? 'rotate-180' : ''}`}>▼</span>
                      Ո՞րն է տարբերությունը բաժնետոմսերի, պարտատոմսերի և ETF-ների միջև։
                    </span>
                  </button>
                  {openFaq === 4 && (
                    <p className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-600 bg-gray-50/50">
                      Բաժնետոմսը կապվում է մեկ ընկերության հետ և ունի բարձր եկամտաբերության ու ռիսկի պոտենցիալ։ Պարտատոմսն ավելի կայուն է, իսկ ETF-ը թույլ է տալիս ներդրում կատարել միանգամից բազմաթիվ ակտիվներում։
                    </p>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button onClick={() => toggleFaq(5)} className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openFaq === 5 ? 'rotate-180' : ''}`}>▼</span>
                      Կարո՞ղ եմ բրոքերային հաշիվ բացել առանց մասնաճյուղ այցելելու։
                    </span>
                  </button>
                  {openFaq === 5 && (
                    <p className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-600 bg-gray-50/50">
                      Այո, իհարկե։ Հարկավոր է մուտք գործել EvocaTOUCH հավելված, «Հաշիվներ» բաժնում ընտրել «Բրոքերային հաշիվ» և գրանցվել ամբողջությամբ օնլայն։
                    </p>
                  )}
                </div>
              </div>

              {/* Կարևոր և Հետադարձ կապ */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 space-y-4 mt-8">
                <h3 className="font-bold text-neutral-900">Կարևոր</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  EvocaINVEST-ը հնարավորություն է տալիս բացահայտել ներդրումային հնարավորությունները․ այս հարթակում և մյուս սոց․ հարթակներում ներկայացված նյութերը բացառապես տեղեկատվական նպատակի համար են։ Ներդրումները կապված են ռիսկերի հետ։
                </p>

                <h3 className="font-bold text-neutral-900 pt-2">EvocaINVEST հետադարձ կապ</h3>
                <form className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Անուն" className="p-3 bg-white rounded-xl border border-gray-200 text-xs w-full outline-none focus:border-[#6400dc]" />
                    <input type="text" placeholder="Ազգանուն" className="p-3 bg-white rounded-xl border border-gray-200 text-xs w-full outline-none focus:border-[#6400dc]" />
                  </div>
                  <input type="email" placeholder="Էլ. Հասցե" className="p-3 bg-white rounded-xl border border-gray-200 text-xs w-full outline-none focus:border-[#6400dc]" />
                  <div className="flex gap-2">
                    <span className="p-3 bg-white rounded-xl border border-gray-200 text-xs flex items-center">+374</span>
                    <input type="tel" placeholder="Հեռախոսահամար" className="p-3 bg-white rounded-xl border border-gray-200 text-xs w-full outline-none focus:border-[#6400dc]" />
                  </div>
                  <button type="button" className="bg-[#6400dc] text-white font-bold px-6 py-3 rounded-xl text-xs hover:bg-opacity-90 transition cursor-pointer">
                    Submit
                  </button>
                </form>
              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}