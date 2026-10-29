import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Hashivner() {
  const [activeTab, setActiveTab] = useState('saving'); // 'saving', 'opening', 'metal', 'non-resident'
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

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Evoca խնայողական հաշիվ</span>
          </div>

          {/* Banner Section */}
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

          {/* Description Paragraphs */}
          <div className="space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed mb-12">
            <p>
              Գումարդ ավելանա՞, թե՞ միշտ հասանելի մնա։ Այլևս պետք չէ ընտրել։ Evoca խնայողական հաշվի միջոցով կարող ես միաժամանակ և՛ խնայել, և՛ ավելացնել գումարդ, և՛ անհրաժեշտ պահին ունենալ դրա հասանելիությունը։
            </p>
            <p>
              Պահիր գումարդ Evoca խնայողական հաշվին և ստացիր մինչև 5.09% տարեկան տոկոսային եկամտաբերություն: Իսկ երբ գումարդ անհրաժեշտ լինի, պարզապես փոխանցիր այն Evocabank-ում գործող քո մեկ այլ հաշվին:
            </p>
          </div>

          {/* Why Evoca savings account */}
          <div className="space-y-6 mb-12">
            <h2 className="text-xl md:text-2xl font-black text-neutral-900">
              Ինչո՞ւ Evoca խնայողական հաշիվ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2">
                <h3 className="font-extrabold text-[#6400dc] text-base">Գումարի աճ</h3>
                <p className="text-xs md:text-sm text-gray-600">Հաշվիդ դրական մնացորդի նկատմամբ տոկոսները հաշվարկվում են ամեն օր:</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2">
                <h3 className="font-extrabold text-[#6400dc] text-base">Միշտ հասանելիություն</h3>
                <p className="text-xs md:text-sm text-gray-600">Այս պահին հարկավո՞ր է գումարդ։ Փոխանցիր այն Evocabank-ում գործող քո այլ հաշվին և օգտագործիր:</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2">
                <h3 className="font-extrabold text-[#6400dc] text-base">Ոչ մի սահմանափակում</h3>
                <p className="text-xs md:text-sm text-gray-600">Այսօր՝ մի փոքր քիչ, հաջորդ ամիս՝ ավելի շատ: Չկա պարտադիր ժամկետ կամ համալրման նվազագույն գումար:</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-2">
                <h3 className="font-extrabold text-[#6400dc] text-base">Նախընտրելի արժույթ</h3>
                <p className="text-xs md:text-sm text-gray-600">Բացիր խնայողական հաշիվ ՀՀ դրամով, ԱՄՆ դոլարով կամ եվրոյով:</p>
              </div>
            </div>
          </div>

          {/* Why start saving today */}
          <div className="space-y-4 mb-12">
            <h2 className="text-xl md:text-2xl font-black text-neutral-900">
              Ինչո՞ւ սկսել գումար կուտակել հենց այսօր։
            </h2>
            <p className="font-bold text-[#6400dc]">Քանի որ</p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Հաշվի բացումն ու սպասարկումն անվճար են,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Բացման և համալրման նվազագույն գումար չկա,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Գործարքի նվազագույն չափ չկա․</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Խնայելու պարտադիր ժամկետ չկա,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Հաշիվը կարող եք համալրել ցանկացած պահի՝ Evocabank-ում գործող քո այլ հաշվից:</span>
              </li>
            </ul>
          </div>

          {/* Yield Section */}
          <div className="space-y-4 mb-12">
            <h2 className="text-xl md:text-2xl font-black text-neutral-900">
              Ստացիր մինչև 5.09% տարեկան տոկոսային եկամտաբերություն
            </h2>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Եկամտաբերությունը կախված է հաշվիդ մնացորդից և ընտրված արժույթից:</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Եթե օրվա վերջում հաշվիդ մնացորդը համապատասխանում է տվյալ արժույթի համար սահմանված նվազագույն շեմին, այդ օրվա համար հաշվարկվում է տոկոսագումար: Նվազագույն շեմերին և այլ պայմաններին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-medium">այստեղ</a>:</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6400dc] font-bold">•</span>
                <span>Տոկոսները հաշվարկվում են ամեն օր, իսկ կուտակված տոկոսագումարը փոխանցվում է հաշվիդ յուրաքանչյուր եռամսյակի ավարտից հետո՝ հաջորդ ամսվա 1-ին օրը:</span>
              </li>
            </ul>
          </div>

          {/* Legal / General terms note */}
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-xs md:text-sm text-gray-700 leading-relaxed mb-12 space-y-3">
            <p>
              Մեր և Ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և Ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-medium">այստեղ</a>:
            </p>
          </div>

          {/* ANHRAZESHT TEXEKATVUTYUN Accordions */}
          <div className="space-y-6 mb-16">
            <h2 className="text-xl md:text-2xl font-black text-neutral-900">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h2>

            <div className="space-y-4">
              {/* Accordion 1: Անհրաժեշտ փաստաթղթեր */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#6400dc]">⌄</span> Անհրաժեշտ փաստաթղթեր
                  </span>
                  <span className="text-xs text-gray-400 font-normal">{openAccordions[0] ? 'Փակել' : 'Բացել'}</span>
                </button>
                {openAccordions[0] && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700">
                    <p>• Հաշվի բացման էլեկտրոնային հայտ/դիմում հեռակառավարման համակարգերի միջոցով:</p>
                    <p>• Մեր պահանջով այլ փաստաթղթեր:</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Երաշխավորված ավանդների սահմանաչափերը */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#6400dc]">⌄</span> Երաշխավորված ավանդների սահմանաչափերը
                  </span>
                  <span className="text-xs text-gray-400 font-normal">{openAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                </button>
                {openAccordions[1] && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                    <p>
                      Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը: Եթե դուք անվճարունակ բանկում ունեք՝
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#6400dc] font-bold">•</span>
                        <span>Միայն դրամային ավանդ ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6400dc] font-bold">•</span>
                        <span>Միայն արտարժութային ավանդ ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6400dc] font-bold">•</span>
                        <span>Դրամային ու արտարժութային ավանդներ, և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6400dc] font-bold">•</span>
                        <span>Դրամային ու արտարժութային բանկային ավանդներ, և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</span>
                      </li>
                    </ul>
                    <p className="italic text-gray-500">
                      Ծանոթագրություն. Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում`առավելագույն սահմանաչափով։
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Խնայողական հաշիվների սպասարկում */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#6400dc]">⌄</span> Խնայողական հաշիվների սպասարկում
                  </span>
                  <span className="text-xs text-gray-400 font-normal">{openAccordions[2] ? 'Փակել' : 'Բացել'}</span>
                </button>
                {openAccordions[2] && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                    <p>
                      Ձեր հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված խնայողական հաշվի սպասարկման պայմանագրով: Հաշիվների սպասարկումն իրականացնում են մեր գլխամասային գրասենյակը և մասնաճյուղերը: Հաշիվները սպասարկում ենք մեր սահմանած գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման: Ձեր հաշիվներով իրականացվող գործառնությունների դիմաց գանձում ենք համապատասխան միջնորդավճարներ՝ մեր Սակագների համաձայն: Հաշիվների վարման սպասարկումն անվճար է: Հաշվի չնվազող մնացորդի պահանջ սահմանված չէ:
                    </p>
                    <p className="font-bold text-[#6400dc]">Ձեր խնայողական հաշիվներով կարող եք կատարել հետևյալ գործառնությունները՝</p>
                    <ul className="space-y-1 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#6400dc] font-bold">•</span>
                        <span>Հաշվի անկանխիկ համալրում՝ փոխանցում միայն Էվոկաբանկ ԲԲԸ-ում գործող ձեր այլ բանկային հաշիվներից,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6400dc] font-bold">•</span>
                        <span>Հաշվից անկանխիկ ելքագրում՝ փոխանցում միայն դեպի Էվոկաբանկ ԲԲԸ-ում գործող ձեր այլ բանկային հաշիվներ,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6400dc] font-bold">•</span>
                        <span>Բանկային ձեր բոլոր հաշիվներով կատարել արտարժույթի փոխարկում (գործարքի կատարման դրությամբ մեր սահմանած` արտարժույթների առք ու վաճառքի փոխարժեքներով):</span>
                      </li>
                    </ul>
                    <p>• Կարող եք նաև հեռակառավարել ձեր հաշիվները՝ բանկային հաշիվների հեռակառավարման (online) մեր համակարգերի միջոցով:</p>
                    <p>• Հաշիվների բոլոր գործառնությունները արտացոլվում են քաղվածքներում: Մեր և ձեր միջև ձեռք բերված համաձայնության հիման վրա քաղվածքները կարող են տրամադրվել առձեռն, փոստային կամ էլեկտրոնային կապի միջոցներով: Քաղվածքների կրկնօրինակների և/կամ հաշիվների վերաբերյալ այլ տեղեկությունների (տեղեկանքների) տրամադրման դիմաց գանձում ենք միջնորդավճարներ՝ մեր սակագների համաձայն:</p>
                    <p>• Ձեր հաշվին դրամական միջոցների մուտքագրումը/ելքագրումը կատարվում է՝ ձեր կողմից մեզ ներկայացված վճարման հանձնարարագրերի հիմքերով:</p>
                  </div>
                )}
              </div>

              {/* Accordion 4: Խնայողական հաշվի պայմանագրի լուծման պայմաններ */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleAccordion(3)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#6400dc]">⌄</span> Խնայողական հաշվի պայմանագրի լուծման պայմաններ
                  </span>
                  <span className="text-xs text-gray-400 font-normal">{openAccordions[3] ? 'Փակել' : 'Բացել'}</span>
                </button>
                {openAccordions[3] && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                    <p>• Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել խնայողական հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը (անկանխիկ ելքագրել միայն դեպի Էվոկաբանկ ԲԲԸ-ում գործող ձեր այլ բանկային հաշիվներ): Այս դեպքերում հաշվին եղած դրամական միջոցների մնացորդը ձեր ցուցումով փոխանցում ենք Էվոկաբանկ ԲԲԸ-ում գործող ձեր այլ հաշվի՝ ձեր համապատասխան գրավոր դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում:</p>
                    <p>• Կարող ենք անվիճելի կարգով դադարեցնել խնայողական հաշվի սպասարկման պայմանագիրը, եթե լինելով ֆիզիկական անձ հաճախորդ՝ վեց ամսվա ընթացքում ձեր խնայողական հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է:</p>
                    <p>• Խնայողական հաշվի պայմանագրի լուծումը հիմք է ձեր հաշիվը փակելու համար:</p>
                  </div>
                )}
              </div>

              {/* Accordion 5: Հաշիվ բացելու ընթացակարգ */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleAccordion(4)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#6400dc]">⌄</span> Հաշիվ բացելու ընթացակարգ
                  </span>
                  <span className="text-xs text-gray-400 font-normal">{openAccordions[4] ? 'Փակել' : 'Բացել'}</span>
                </button>
                {openAccordions[4] && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                    <p>• Հաշիվը կարող եք բացել դրամով, դոլարով և եվրոյով:</p>
                    <p>• Խնայողական հաշիվները կարող եք բացել բացառապես հեռակառավարման համակարգերի միջոցով:</p>
                    <p>• Հեռակառավարման համակարգերով հաշիվները բացում ենք մեր կայքի կամ բջջային հավելվածի միջոցով ներկայացված էլեկտրոնային հայտ/դիմում-ի հիման վրա, որի համար կիրառվում են Համալիր բանկային ծառայությունների մատուցման պայմաններով սահմանված՝ ձեր հավաստագրման և նույնականացման միջոցները:</p>
                    <p>• «Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին» ՀՀ օրենքի պահանջներից ելնելով` կարող ենք պահանջել լրացուցիչ փաստաթղթեր կամ ներկայացված փաստաթղթերը լրացուցիչ ուսումնասիրել:</p>
                    <p>• Ներկայացված փաստաթղթերի իսկությունն ու վավերականությունը ստուգելուց հետո ձեզ հետ կնքում ենք «Խնայողական հաշվի բացման հայտ-պայմանագիրը» և հաշիվ բացում 1 (մեկ) աշխատանքային օրվա ընթացքում:</p>
                  </div>
                )}
              </div>

              {/* Accordion 6: Հաշիվների սպասարկմանն առնչվող այլ դրույթներ */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => toggleAccordion(5)}
                  className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#6400dc]">⌄</span> Հաշիվների սպասարկմանն առնչվող այլ դրույթներ
                  </span>
                  <span className="text-xs text-gray-400 font-normal">{openAccordions[5] ? 'Փակել' : 'Բացել'}</span>
                </button>
                {openAccordions[5] && (
                  <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                    <p>• Հաշվետիրոջ ձեր իրավունքները կարող են սահմանափակվել դատարանի վճռով, դատական ակտերի հարկադիր կատարումն ապահովող մարմինների կամ հարկային մարմինների կողմից ներկայացված հայտի հիման վրա: Առանց ձեր կարգադրության՝ հաշվից դրամական միջոցները կարող են բռնագանձվել դատարանի վճռով հարկադիր կատարումն ապահովող մարմինների և հարկային մարմինների ներկայացրած հայտի հիման վրա:</p>
                    <p>• Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը: Նման տեղեկություններ տրամադրում ենք միայն ձեզ կամ ձեր լիազոր ներկայացուցչին:</p>
                    <p>• Մեր և ձեր միջև ծագած ցանկացած վեճ և տարաձայնություն նախ և առաջ լուծվում է փոխադարձ բանակցությունների միջոցով, իսկ համաձայնության չգալու դեպքում՝ դատական կարգով և ֆինանսական համակարգի հաշտարարի միջոցով:</p>
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