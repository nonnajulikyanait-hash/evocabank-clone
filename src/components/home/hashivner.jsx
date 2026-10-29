import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Hashivner() {
  const [activeTab, setActiveTab] = useState('non-resident'); // 'saving', 'opening', 'metal', 'non-resident'
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
            <span 
              onClick={() => setActiveTab('non-resident')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'non-resident' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
            </span>
          </div>
        </div>

        {activeTab === 'non-resident' ? (
          /* ================= ՈՉ ՌԵԶԻԴԵՆՏ ՀԱՃԱԽՈՐԴՆԵՐԻ ՀԵՌԱՎԱՐ ՍՊԱՍԱՐԿՈՒՄ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</span>
            </div>

            {/* Banner Section */}
            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից և ցանկացած պահի։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png" 
                  alt="Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            {/* Intro description */}
            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-12">
              <p>
                24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայր․ բոլոր մանրուքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը, չշեղվեք կարևոր գործերից և, իհարկե, օգտվեք prime սպասարկումից։
              </p>
              <p className="font-bold text-[#6400dc]">
                Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք Ձեր հաշիվը՝ առանց Բանկ այցելելու։
              </p>
              <p className="text-gray-500 italic">
                Մանրամասները և քայլ առ քայլ ուղեցույցը՝ ներքևում։
              </p>
            </div>

            {/* ANHRAZESHT TEXEKATVUTYUN Accordions */}
            <div className="space-y-6 mb-16">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                {/* Accordion 1: Առավելություններ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(0)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Առավելություններ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[0] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[0] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <div>
                        <strong className="text-[#6400dc]">Prime կարգավիճակ Բանկում</strong>
                        <p className="pl-4 pt-1">• Բացառիկ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում</p>
                      </div>
                      <div>
                        <strong className="text-[#6400dc]">Անհատական մենեջեր/Անձնական օգնական</strong>
                        <p className="pl-4 pt-1">• 24/7 Աջակցություն ֆինանսական ցանկացած հարցում անմիջապես անձնական օգնականի կողմից</p>
                      </div>
                      <div>
                        <strong className="text-[#6400dc]">Հեռավար սպասարկում</strong>
                        <p className="pl-4 pt-1">• Ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած կետից</p>
                      </div>
                      <div>
                        <strong className="text-[#6400dc]">Փաստաթղթերի անվճար առաքում</strong>
                        <p className="pl-4 pt-1">• Առաքում անմիջապես Ձեր գտնվելու վայր, Ձեզ հարմար պահի՝ արագ և անվճար։</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Ֆիզիկական անձանց հաշվի բացման պայմաններ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Ֆիզիկական անձանց հաշվի բացման պայմաններ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[1] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Հանդիսանում են ՀՀ-ում գտնվող անշարժ գույքի սեփականատեր և ունեն անշարժ գույքի նկատմամբ սեփականության իրավունքի գրանցման վկայական</p>
                      <p>• Պատրաստ են ներդնել նվազագույնը 6 ամիս ժամկետով և առնվազն 20 000 ԱՄՆ դոլար, 20 000 Եվրո, 1 500 000 ՌԴ ռուբլի և 10 000 000 ՀՀ դրամ գումարի չափով համարժեք ավանդ «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ում</p>
                      <p>• ՀՀ-ում գրանցված են որպես անհատ ձեռնարկատեր և ունեն ՀՀ Արդարադատության նախարարության իրավաբանական անձանց պետական ռեգիստրի կողմից տրամադրված գրանցման վկայական</p>
                      <p>• Հանդիսանում են ՀՀ-ում գրանցված իրավաբանական անձի մասնակից (բաժնետեր) հիմնավորված համապատասխան փաստաթղթերով</p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[2] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[2] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Անձնագիր</p>
                      <p>• Միջազգային անձնագիր</p>
                      <p>• Եկամուտների ծագման աղբյուրը (ֆիզիկական անձի նախորդ տարվա հարկային հայտարարագիր, անշարժ գույքի, բաժնետոմսերի կամ արժեքավոր թղթերի վաճառքի կամ վարձակալության պայմանագիր)</p>
                    </div>
                  )}
                </div>

                {/* Accordion 4: Իրավաբանական անձանց փաստաթղթերի ցանկ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Իրավաբանական անձանց փաստաթղթերի ցանկ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[3] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[3] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Կանոնադրություն (ոչ ռեզիդենտների դեպքում` կանոնադրություն կամ դրան փոխարինող այլ փաստաթուղթ)</p>
                      <p>• Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում` տվյալ երկրի պետական գրանցման մարմնի կողմից տրված վկայական և հարկային մարմիններում գրանցված փաստաթուղթ)</p>
                      <p>• Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե այն բացակայում է պետական ռեգիստրի վկայականում</p>
                      <p>• Գործադիր մարմնի ղեկավարի, գլխավոր հաշվապահի անձնագրերը կամ անձը հաստատող փաստաթղթերը</p>
                      <p>• Հաշվետերերի անձնագրեր կամ նույնականացման քարտեր</p>
                      <p className="font-bold text-[#6400dc] pt-2">Շահառուների համար անհրաժեշտ է՝</p>
                      <p>• Եթե շահառուն ֆիզիկական անձ է, անձնագրի կամ նույնականացման քարտի պատճենները</p>
                      <p>• Եթե շահառուն իրավաբանական անձ է, համապատասխան փաստաթղթերի պատճենները</p>
                      <p>• Ընկերության ֆինանսական հաշվետվություններ վերջին մեկ տարվա կտրվածքով, աուդիտորական եզրակացություն</p>
                      <p>• Լիցենզիա, եթե ընկերության գործունեությունը պահանջում է:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 5: Սակագներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(4)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Սակագներ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[4] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[4] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <div>
                        <strong className="text-[#6400dc]">Ֆիզիկական անձանց համար</strong>
                        <p>• Հաշվի բացում՝ 50,000 դրամ</p>
                        <p>• Տարեկան սպասարկում՝ 250,000 դրամ</p>
                        <p>• Փակման վճար՝ 0 դրամ</p>
                        <p>• Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին` 0.5%</p>
                        <p>• Հաճախորդների փոխանցումներ` 0.5%</p>
                        <p>• Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</p>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <strong className="text-[#6400dc]">Իրավաբանական անձանց համար</strong>
                        <p>• Հաշվի բացում՝ 100,000 դրամ</p>
                        <p>• Տարեկան սպասարկում՝ 500,000 ՀՀ դրամ</p>
                        <p>• Փակման վճար՝ 0 դրամ</p>
                        <p>• Դրամական միջոցների անկանխիկ մուտքագրում հաճախորդի հաշվին` 0.5%</p>
                        <p>• Հաճախորդների փոխանցումներ` 0.5%</p>
                        <p>• Հաշվի տեսակներ՝ USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : activeTab === 'metal' ? (
          /* ================= ԱՌԱՐԿԱՅԱԶՈՒՐԿ ՄԵՏԱՂԱԿԱՆ ՀԱՇԻՎՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Առարկայազուրկ մետաղական հաշիվներ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար:
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
                  Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ։
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

            <EvocaOnlineMobile />
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}