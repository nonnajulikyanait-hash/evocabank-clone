import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Lizing() {
  // Ծալվող/բացվող (Accordion) բաժինների վիճակը
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
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Լիզինգ</span> &gt; <span className="text-gray-700 font-medium">Evoca Leasing</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Evoca Leasing
          </h1>

          <div className="flex gap-8 items-start">
            {/* Սոց. ցանցերի կոճակներ ձախ կողմում */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական բովանդակություն */}
            <div className="flex-1 space-y-6">
              <h2 className="text-lg font-bold text-neutral-900 tracking-wide mb-4">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              {/* ----------------- ԲԱԺԻՆ 1: Evoca Leasing ----------------- */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => toggleSection(1)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 1 ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                    Evoca Leasing
                  </span>
                </button>

                {openSection === 1 && (
                  <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                    <p>
                      Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից` առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ`
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Արտադրական/արդյունաբերական հաստոցներ/հոսքագծեր,</li>
                      <li>Բեռնատար/մարդատար ավտոմեքենաներ,</li>
                      <li>Շինարարական տեխնիկա,</li>
                      <li>Արևային կայաններ,</li>
                      <li>Բժշկական սարքավորումներ,</li>
                      <li>Կոմերցիոն անշարժ գույք,</li>
                      <li>և այլն:</li>
                    </ul>

                    <h4 className="font-bold text-[#6400dc] pt-2">Լիզինգի առավելությունները</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Առանց գրավի առկայության պրոդուկտ է,</li>
                      <li>Առանց նոտարական/կադաստրային ծախսերի,</li>
                      <li>Հնարավորություն է տալիս իրականացնել ԱԱՀ-ի հաշվանցումներ և ծախսագրումներ,</li>
                      <li>Լիզինգի առարկայի ձեռքբերում արտերկրից` առանց հաճախորդի մասնակցության գնման գործընթացին,</li>
                      <li>Ստանալ էքսպերտային գնահատում և խորհրդատվություն լիզինգային նախագծի վերաբերյալ:</li>
                    </ul>

                    <h4 className="font-bold text-[#6400dc] pt-2">Պայմաններ և սակագներ՝</h4>
                    <div className="space-y-2 border-t border-gray-200 pt-3">
                      <div><strong className="text-neutral-800">Արժույթը՝</strong> ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</div>
                      <div><strong className="text-neutral-800">Լիզինգառուները՝</strong> ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր</div>
                      <div><strong className="text-neutral-800">Լիզինգի սահմանաչափերը՝</strong> 5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</div>
                      <div><strong className="text-neutral-800">Կանխավճար՝</strong> Նվազագույնը` 10%</div>
                      <div><strong className="text-neutral-800">Մարման ժամկետը՝</strong> 6-72 ամիս` կախված ձեռքբերվող Լիզինգի առարկայից</div>
                      <div><strong className="text-neutral-800">Մարման եղանակը՝</strong> Անուիտետային, Զսպանակաձև, Պայմանագրային</div>
                      <div><strong className="text-neutral-800">Տարեկան տոկոսադրույքը՝</strong> ՀՀ դրամ՝ սկսած 10.5%-ից | ԱՄՆ դոլար՝ սկսած 8%-ից | Եվրո՝ սկսած 6%-ից</div>
                      <div><strong className="text-neutral-800">Տույժեր՝</strong> Ժամկետանց մայր գումարի դեպքում` օրական 0.015%, տոկոսագումարի դեպքում` օրական 0.1%</div>
                    </div>
                  </div>
                )}
              </div>

              {/* ----------------- ԲԱԺԻՆ 2: Տնտեսության Արդիականացման ծրագիր ----------------- */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => toggleSection(2)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 2 ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                    ՀՀ Կառավարության Տնտեսության Արդիականացման նպատակային ծրագրի ներքո արտադրողականության խթանման ուղված լիզինգ (գործելու է մինչև 31.12.2026թ.)
                  </span>
                </button>

                {openSection === 2 && (
                  <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                    <div><strong>1. Ֆինանսավորում՝</strong> Լիզինգ</div>
                    <div><strong>2. Արժույթ՝</strong> ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո</div>
                    <div><strong>3. Լիզինգառու՝</strong> ՀՀ ռեզիդենտ իրավաբանական անձ և անհատ ձեռնարկատեր</div>
                    <div><strong>4. Նպատակ՝</strong> Նոր մեքենասարքավորումների գնում կամ ներմուծում, կապիտալ շինարարություն, թվայնացման ծրագրեր և խորհրդատվություն:</div>
                    <div><strong>5. Սուբսիդավորվող ոլորտներ՝</strong> Մշակող և հանքագործական արդյունաբերություն, շինարարություն, տեղեկատվություն և կապ, առողջապահություն, կրթություն և այլն:</div>
                    <div><strong>6. Առավելագույն չափ՝</strong> Մինչև 1 մլրդ ՀՀ դրամ կամ համարժեք արտարժույթ:</div>
                    <div><strong>7. Մարման ժամկետ՝</strong> Մինչև 120 ամիս:</div>
                    <div><strong>8. Տարեկան տոկոսադրույք՝</strong> ՀՀ դրամ` 9%-14%, ԱՄՆ դոլար/Եվրո` 6%-10%:</div>
                    <div><strong>9. Տոկոսադրույքի սուբսիդավորում՝</strong> ՀՀ դրամ` 8%, ԱՄՆ դոլար/Եվրո` 6%:</div>
                  </div>
                )}
              </div>

              {/* ----------------- ԲԱԺԻՆ 3: Գյուղատնտեսական տեխնիկայի լիզինգ ----------------- */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => toggleSection(3)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 3 ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                    Լիզինգ՝ գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով (գործելու է մինչև 30.12.2026թ.)
                  </span>
                </button>

                {openSection === 3 && (
                  <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                    <div><strong>Արժույթ՝</strong> ՀՀ դրամ</div>
                    <div><strong>Գործունեության ոլորտ՝</strong> Գյուղատնտեսություն</div>
                    <div><strong>Նպատակ՝</strong> Տրակտորներ, կոմբայններ, հավաքիչ-մամլիչներ, սրսկիչներ, կցասայլակներ և այլ տեխնիկա:</div>
                    <div><strong>Լիզինգի սահմանաչափ՝</strong> 5,100,000 - 500,000,000 ՀՀ դրամ</div>
                    <div><strong>Կանխավճար՝</strong> 20%</div>
                    <div><strong>Մարման ժամկետ՝</strong> 36 - 120 ամիս</div>
                    <div><strong>Տարեկան տոկոսադրույք՝</strong> Լիզինգառուի համար փաստացի 2% (սահմանամերձ գոտիների կամ կոոպերատիվների համար՝ 0%):</div>
                  </div>
                )}
              </div>

              {/* ----------------- ԲԱԺԻՆ 4: Տրանսպորտային միջոցի լիզինգ ----------------- */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => toggleSection(4)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 4 ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                    Տրանսպորտային միջոցի լիզինգ
                  </span>
                </button>

                {openSection === 4 && (
                  <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                    <p>
                      Evoca-ի տրանսպորտային միջոցի լիզինգով կարող եք ձեռք բերել մարդատար, ուղևորատար կամ բեռնատար տրանսպորտային միջոց՝ թե՛ Հայաստանից, թե՛ արտերկրից՝ առաջնային կամ երկրորդային շուկայից։
                    </p>
                    <p>
                      Ընտրության ազատությունը միայն տրանսպորտային միջոցին չի վերաբերում․ կարող եք ընտրել նաև լիզինգի արժույթը, մարման եղանակն ու ժամկետը՝ 6-ից մինչև 72 ամիս, իսկ ֆինանսավորման սահմանաչափը կարող է հասնել մինչև 1 մլրդ ՀՀ դրամի կամ համարժեք արտարժույթի։
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