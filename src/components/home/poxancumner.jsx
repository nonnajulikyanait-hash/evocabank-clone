import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Poxancumner() {
  const [activeTab, setActiveTab] = useState('transfers'); // 'transfers', 'systems'
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
              onClick={() => setActiveTab('transfers')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'transfers' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Դրամական փոխանցումներ
            </span>
            <span 
              onClick={() => setActiveTab('systems')} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'systems' ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Վճարային համակարգեր
            </span>
          </div>
        </div>

        {activeTab === 'transfers' ? (
          /* ================= ԴՐԱՄԱԿԱՆ ՓՈԽԱՆՑՈՒՄՆԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Փոխանցումներ</span> &gt; <span className="text-gray-700 font-medium">Դրամական փոխանցումներ</span>
            </div>

            {/* Banner Section */}
            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Դրամական փոխանցումներ
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով: Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող համակարգերով:
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                  alt="Դրամական փոխանցումներ" 
                  className="rounded-2xl max-h-80 object-cover shadow-md"
                />
              </div>
            </div>

            {/* General Provisions Section */}
            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed mb-12">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                Ընդհանուր դրույթներ
              </h2>
              <p>
                Ձեր բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:
              </p>
              <p>
                Ձեր փոխանցումները կատարում ենք վճարման հանձնարարագրերի հիման վրա (կախված գումարի չափից, փոխանցման բնույթից և նպատակից` կարող են պահանջվել նաև այլ փաստթղթեր):
              </p>
              <p>
                Յուրաքանչյուր աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30 ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը` հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով փոխանցումները (պետական և տեղական բյուջեի վճարներ, կոմունալ կամ սոցիալական այլ վճարներ) կատարման ենք ընդունում նույն բանկային օրը:
              </p>
              <p>
                Դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս ձեզանից գանձում ենք միջնորդավճարներ՝ ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման դիմաց միջնորդավճար չենք գանձում: Միջնորդավճարները գանձվում են ՀՀ դրամով: Արտարժույթի տոկոսային հարաբերակցությամբ սահմանված միջնորդավճարները գանձվում են ՀՀ դրամով՝ հիմք ընդունելով գանձման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ վաճառքի փոխարժեքը:
              </p>
              <p>
                Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարումը հավաստող փաստաթուղթ, որտեղ նշված կլինեն փոխանցման գումարը, արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
              </p>
            </div>

            {/* Large Wide Banner Image with White Overlay Text */}
            <div className="relative rounded-[32px] overflow-hidden mb-12 shadow-md">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg" 
                alt="Կարող եք գումարներ փոխանցել" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <h2 className="text-xl md:text-3xl font-extrabold text-white max-w-3xl leading-snug">
                  Կարող եք գումարներ փոխանցել ինչպես ձեր հաշվից, այնպես էլ առանց հաշվի բացման:
                </h2>
              </div>
            </div>

            {/* ANHRAZESHT TEXEKATVUTYUN Accordions */}
            <div className="space-y-6 mb-16">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h2>

              <div className="space-y-4">
                {/* Accordion 1: Փոխանցումներ դրամով */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(0)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Փոխանցումներ դրամով
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[0] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[0] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև:</p>
                      <p>• Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Միջազգային փոխանցումներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Միջազգային փոխանցումներ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[1] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Մենք SWIFT համակարգի անդամ ենք և ձեր արտարժութային միջազգային փոխանցումներն իրականացնում ենք այս համակարգով: Այն ապահովում է արագ և անվտանգ փոխանցումներ՝ միջազգային բանկային ստանդարտներին համապատասխան:</p>
                      <p>• Փոխանցումը կատարում ենք միայն փոխանցվող գումարի և միջնորդավճարի գումարի փաստացի առկայության դեպքում:</p>
                      <p>• Արտարժութային միջազգային փոխանցում իրականացնելու համար մեզ եք ներկայացնում սահմանված ձևանմուշի վճարման հանձնարարագիր:</p>
                      <p>• Արտարժութային միջազգային բանկային փոխանցումները, ըստ մեր սակագների, իրականացվում են OUR (ծախսերը՝ փոխանցողի հաշվին), Guaranted OUR (գումարը ստացողին հասնում է ամբողջական) և BEN (ծախսերը՝ ստացողի հաշվին) տարբերակներով:</p>
                      <p>• Արտարժութային միջազգային փոխանցումները, որպես կանոն, տևում են 1-3 բանկային օր:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Վճարային համակարգեր */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Վճարային համակարգեր
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[2] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[2] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Դրամական փոխանցումների վճարային համակարգերը հնարավորություն են տալիս շատ արագ՝ առանց բանկային հաշվի բացման, պարզեցված ընթացակարգով, ոչ առևտրային բնույթի փոխանցումներ կատարել ֆիզիկական անձանց միջև՝ դեպի աշխարհի տարբեր երկրներ:</p>
                      <p>• Մեր կողմից սպասարկվող վճարային համակարգերին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-medium">այստեղ</a>:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 4: Փոխանցման պայմանների փոփոխում կամ չեղյալացում */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Փոխանցման պայմանների փոփոխում կամ չեղյալացում
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[3] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[3] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Փոխանցումների վավերապայմանների փոփոխումը կամ փոխանցման չեղյալացումը կատարում ենք փոխանցումը նախաձեռնող անձի գրավոր դիմումի հիման վրա՝ նրանից գանձելով միջնորդավճարներ:</p>
                      <p>• Փոխանցման մեջ առկա սխալների ուղղումը, ինչպես նաև փոխանցման չեղյալացումն իրականացում ենք փոխանցող և ստացող բանկերի հնարավորության սահմաններում և ժամկետներում, սովորաբար դա կարող է տևել 2-5 բանկային օր:</p>
                      <p>• Եթե փոխանցումը նախաձեռնող անձը ներկայացրել է փոխանցման չեղյալացման հայտ, սակայն ըստ հարցման՝ միջոցներն արդեն հաշվեգրված են, ապա մենք չենք կարող պատասխանատվություն կրել գումարների վերադարձի համար:</p>
                      <p><strong>Փոխանցված միջոցները ստացողին չհասնելու դեպքում`</strong></p>
                      <p>• Փոխանցված միջոցները թղթակից բանկի կողմից վերադարձվում են փոխանցում կատարած բանկին:</p>
                      <p>• Վերադարձված դրամական միջոցները հաշվեգրում ենք փոխանցում իրականացրած անձի բանկային հաշվին, իսկ առանց բանկային հաշվի բացման կատարված փոխանցման դեպքում՝ փոխանցման հանձնարարագրում նշված անձնագրային հիմքերով վերադարձնում ենք փոխանցում իրականացրած անձին:</p>
                      <p>• Վճարային համակարգերով իրականացված փոխանցումների համար գործում են տվյալ համակարգերի ներքին ընթացակարգերով սահմանված պայմանները և ժամկետները:</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= ՎՃԱՐԱՅԻՆ ՀԱՄԱԿԱՐԳԵՐ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Փոխանցումներ</span> &gt; <span className="text-gray-700 font-medium">Վճարային համակարգեր</span>
            </div>

            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Վճարային համակարգեր
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Կատարեք արագ և անվտանգ դրամական փոխանցումներ աշխարհի տարբեր երկրներ՝ առանց բանկային հաշվի բացման։
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                  alt="Վճարային համակարգեր" 
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