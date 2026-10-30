import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function BiznesArjetxter() {
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
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Արժեթղթերի շուկա</span> &gt; <span className="text-gray-700 font-medium">Ներդրումային ծառայություններ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Ներդրումային ծառայություններ
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
                Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
              </p>

              <div className="space-y-2 pt-2">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Ինչպե՞ս դառնալ հաճախորդ։
                </h3>
                <p>
                  Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <span className="text-[#6400dc] font-bold underline cursor-pointer">այստեղ</span>:
                </p>
                <p>
                  Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ։
                </p>
              </div>

              <div className="space-y-1 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <p className="font-bold text-gray-900">Հասցե՝</p>
                <p>Երևան, Հանրապետության 44/2</p>
                <p className="font-bold text-gray-900 pt-2">Հետադարձ կապ՝</p>
                <p>Հեռ.՝ 374 10 205555</p>
                <p>Էլ․ հասցե՝ <a href="mailto:invest@evoca.am" className="text-[#6400dc] font-bold underline">invest@evoca.am</a></p>
              </div>

              <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100 text-gray-800 text-xs leading-relaxed">
                <strong className="text-[#6400dc] font-bold">ՈՒՇԱԴՐՈՒԹՅՈՒՆ․</strong> Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված <strong>ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ:</strong> Բանկը <strong>ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ</strong> հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
              </div>

              {/* Accordion Section */}
              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                {/* Accordion 1 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(1)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 1 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Ներդրումային ծառայությունների մատուցման կանոններ
                    </span>
                  </button>

                  {openSection === 1 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <div>
                        <h4 className="font-bold text-[#6400dc] mb-1">Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ</h4>
                        <p className="leading-relaxed text-gray-600">
                          Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#6400dc] mb-1">Արժեթղթերի Պահառության գործունեության կանոններ</h4>
                        <p className="leading-relaxed text-gray-600">
                          Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում` Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(2)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 2 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Ծառայությունների մատուցման սակագներ
                    </span>
                  </button>

                  {openSection === 2 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-2 bg-gray-50/50">
                      <p className="text-[#6400dc] font-bold cursor-pointer hover:underline">
                        • Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ
                      </p>
                      <p className="text-[#6400dc] font-bold cursor-pointer hover:underline">
                        • Միջազգային շուկաներում ծառայությունների մատուցման սակագներ
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 3 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(3)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 3 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Լրացուցիչ տեղեկատվություն
                    </span>
                  </button>

                  {openSection === 3 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-2 bg-gray-50/50">
                      <p className="text-[#6400dc] font-bold cursor-pointer hover:underline">
                        • «Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման» ընթացակարգ
                      </p>
                      <p className="text-[#6400dc] font-bold cursor-pointer hover:underline">
                        • «Շահերի բախման սահմանափակման» ընթացակարգ
                      </p>
                      <p className="text-[#6400dc] font-bold cursor-pointer hover:underline">
                        • Ֆոնդային բորսաներ
                      </p>
                      <p className="text-[#6400dc] font-bold cursor-pointer hover:underline">
                        • Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ
                      </p>
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