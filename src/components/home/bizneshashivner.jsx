import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function BiznesHashivner() {
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
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Հաշիվների բացում և սպասարկում</span>
          </div>

          {/* Banner Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                Հաշիվների բացում և սպասարկում
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձանց ու անհատ ձեռնարկատերերին առաջարկում ենք մեզ մոտ բացել դրամային և արտարժութային բանկային ընթացիկ հաշիվներ:
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16116367969264/780x585.jpg" 
                alt="Հաշիվների բացում և սպասարկում" 
                className="rounded-3xl shadow-sm object-cover w-full max-h-[350px]"
              />
            </div>
          </div>

          {/* Social Icons & Additional Text */}
          <div className="flex gap-8 items-start mb-12">
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            <div className="flex-1 space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p>
                Հաշիվների սպասարկումն իրականացնում ենք մեր <span className="text-[#6400dc] font-bold underline cursor-pointer">Ընթացիկ հաշիվների սպասարկման սակագների համաձայն</span>: Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ:
              </p>
              <p className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-gray-600">
                <strong className="text-[#6400dc]">ՈՒշադրություն.</strong> <span className="text-[#6400dc] underline cursor-pointer">Առարկայազուրկ մետաղական հաշիվների</span>, Ավանդային և Քարտային հաշիվների սպասարկման պայմաններին կարող եք ծանոթանալ Առարկայազուրկ մետաղական հաշիվներ, Վճարային քարտեր ենթաբաժիններում և իրավաբանական անձանց բանկային ծառայությունների Ավանդներ բաժնում:
              </p>

              <h2 className="text-base md:text-lg font-bold text-neutral-900 tracking-wide pt-4">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              {/* Accordions Container */}
              <div className="space-y-4 pt-2">

                {/* Accordion 1: Անվանատիրոջ հատուկ հաշիվներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(1)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 1 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Անվանատիրոջ հատուկ հաշիվներ
                    </span>
                  </button>

                  {openSection === 1 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                      <p>
                        Անվանատիրոջ հատուկ հաշիվը կարող է օգտագործվել միայն ներդրումային ծառայություններ մատուցող անձի և ներդրումային ֆոնդի կառավարչի կողմից՝ ներդրումային ծառայությունների մատուցման կամ ներդրումային ֆոնդերի կառավարման հետ կապված գործառնությունների իրականացման համար:
                      </p>
                      <div className="font-bold text-[#6400dc]">
                        Հաշվի տարեկան սպասարկումը՝ 5,000 ՀՀ դրամ:
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Անհրաժեշտ փաստաթղթեր */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(2)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 2 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Անհրաժեշտ փաստաթղթեր
                    </span>
                  </button>

                  {openSection === 2 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <div>
                        <h4 className="font-bold text-[#6400dc] mb-2">Իրավաբանական անձանց դեպքում՝</h4>
                        <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                          <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
                          <li>Կանոնադրություն (ոչ ռեզիդենտների դեպքում՝ կանոնադրություն կամ փոխարինող այլ փաստաթուղթ):</li>
                          <li>Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում՝ տվյալ երկրի գրանցող պետական մարմնի կողմից տրված վկայական և գրանցման երկրի համապատասխան մարմնի կողմից տրված հարկային մարմիններում հաշվառված փաստաթուղթ):</li>
                          <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
                          <li>Գործադիր մարմնի ղեկավար/ների, գլխավոր հաշվապահի անձնագրերը կամ նույնականացման քարտերը, ինչպես նաև քաղվածքներ պաշտոնների նշանակման հրամաններից, եթե պետական ռեգիստրի գրանցման վկայականում ղեկավարի վերաբերյալ տվյալները բացակայում են:</li>
                          <li>Հաշվի կարգադրիչների անձնագրերը կամ նույնականացման քարտերը:</li>
                          <li>Կանոնադրական կապիտալում 10% և ավելի բաժնեմաս ունեցող անձանց/իրական շահառուների նույնականացման փաստաթղթեր:</li>
                          <li>Մեր պահանջով այլ փաստաթղթեր:</li>
                        </ul>
                      </div>

                      <div className="pt-2">
                        <h4 className="font-bold text-[#6400dc] mb-2">Անհատ ձեռնարկատերերի դեպքում՝</h4>
                        <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                          <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
                          <li>Անձնագիր կամ նույնականացման քարտ:</li>
                          <li>Պետական ռեգիստրի գրանցման վկայական (բացակայության դեպքում՝ քաղվածք պետական ռեգիստրից):</li>
                          <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
                          <li>Ստորագրության նմուշի քարտ:</li>
                          <li>Մեր պահանջով այլ փաստաթղթեր:</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Հաշիվների սպասարկում */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(3)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 3 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Հաշիվների սպասարկում
                    </span>
                  </button>

                  {openSection === 3 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                      <p>
                        Ձեր բանկային հաշիվների սպասարկումը կարգավորվում է Հայաստանի օրենսդրությամբ, Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված բանկային հաշվի սպասարկման պայմանագրով:
                      </p>
                      <p>
                        Բանկային հաշիվները սպասարկում են մեր գլխամասային գրասենյակը և մասնաճյուղերը՝ գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման:
                      </p>
                      <p>
                        Հաշիվների բացման և փակման դիմաց միջնորդավճարներ չենք գանձում, չի գործում նաև հաշվի չնվազող մնացորդի պահանջ:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Բացված հաշվին մուտքագրել դրամական միջոցներ:</li>
                        <li>Կատարել հաշվից դրամական փոխանցումներ:</li>
                        <li>Իրականացնել ընթացիկ հաշվի մնացորդի փոխարկում արտարժույթի:</li>
                        <li>Ընթացիկ հաշվից մարել վարկեր և կատարել այլ գործառնություններ:</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Accordion 4: Հաշիվների սպասարկմանն առնչվող այլ դրույթներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(4)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 4 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Հաշիվների սպասարկմանն առնչվող այլ դրույթներ
                    </span>
                  </button>

                  {openSection === 4 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                      <p>
                        Բանկային հաշվին առկա դրամական միջոցները տնօրինելու ձեր իրավունքները չենք սահմանափակում:
                      </p>
                      <p>
                        Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը: Նման տեղեկություններ տրամադրում ենք միայն ձեզ կամ ձեր լիազոր ներկայացուցչին:
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 5: Բանկային հաշվի պայմանագրի լուծման պայմաններ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(5)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 5 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Բանկային հաշվի պայմանագրի լուծման պայմաններ
                    </span>
                  </button>

                  {openSection === 5 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                      <p>
                        Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել բանկային հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը:
                      </p>
                      <p>
                        Կարող ենք անվիճելի կարգով դադարեցնել բանկային հաշվի սպասարկման պայմանագիրը, եթե լինելով իրավաբանական անձ հաճախորդ՝ մեկ տարվա ընթացքում ձեր բանկային հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է:
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 6: FATCA ծանուցում */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(6)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 6 ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                      Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում
                    </span>
                  </button>

                  {openSection === 6 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-3 bg-gray-50/50">
                      <p className="font-bold text-[#6400dc]">Հարգելի Հաճախորդ,</p>
                      <p>
                        «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև «Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի» կիրարկմանն օժանդակելու համագործակցության մասին համաձայնագրի պահանջներից ելնելով իրավասու է հաճախորդներից պահանջել լրացուցիչ տեղեկատվություն, մասնավորապես հաճախորդներից պահանջվում է լրացնել վերջիններիս ԱՄՆ անձ կարգավիճակի նույնականացման համար պահանջվող ձևաթղթերը։
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </main>

        {/* Mobile & Online Section */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}