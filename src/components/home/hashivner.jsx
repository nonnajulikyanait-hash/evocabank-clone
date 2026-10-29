import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Hashivner() {
  const [activeTab, setActiveTab] = useState('opening'); // 'saving', 'opening', 'metal', 'non-resident'
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

        {activeTab === 'opening' ? (
          /* ================= ՀԱՇԻՎՆԵՐԻ ԲԱՑՈՒՄ ԵՎ ՍՊԱՍԱՐԿՈՒՄ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Հաշիվների բացում և սպասարկում</span>
            </div>

            {/* Banner Section 1 */}
            <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="space-y-4 md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                  Հաշիվների բացում և սպասարկում
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձիք:
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

            {/* Legal / General terms note */}
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-xs md:text-sm text-gray-700 leading-relaxed mb-10">
              <p>
                Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված՝ բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-medium">այստեղ</a>:
              </p>
            </div>

            {/* Large Wide Banner Image with White Overlay Text */}
            <div className="relative rounded-[32px] overflow-hidden mb-12 shadow-md">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg" 
                alt="Հաշիվներ բացելու նպատակով" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                <h2 className="text-xl md:text-3xl font-extrabold text-white max-w-3xl leading-snug">
                  Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի» -ի):
                </h2>
              </div>
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
                      <p>• Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն:</p>
                      <p>• Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:</p>
                      <p>• Մեր պահանջով այլ փաստաթղթեր:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Հաշիվ բացելու ընթացակարգ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Հաշիվ բացելու ընթացակարգ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[1] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[1] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Ընթացիկ հաշիվ կարող եք բացել դրամով, դոլարով, եվրոյով, ռուբլով, կանադական դոլարով, ֆրանկով և ֆունտ ստեռլինգով (այլ արտարժույթներով ընթացիկ հաշիվներ կարող եք բացել միայն մեզ հետ համաձայնեցված կարգով):</p>
                      <p>• Նախքան հաշվի բացումը մեր աշխատակիցները ձեզ տեղեկացնում են հաշիվների բացման ու սպասարկման պայմանների, սակագների, պահանջվող փաստաթղթերի և այլ մանրամասների մասին:</p>
                      <p>• Եթե հաշվի բացման և վարման պայմաններն ընդունելի են, ապա լրացնում եք դիմում և ներկայացնում պահանջվող փաստաթղթերը:</p>
                      <p>• «Փողերի լվացման և ահաբեկչության ֆինանսավորման դեմ պայքարի մասին» ՀՀ օրենքի պահանջներից ելնելով` կարող ենք պահանջել լրացուցիչ փաստաթղթեր կամ ներկայացված փաստաթղթերը լրացուցիչ ուսումնասիրել:</p>
                      <p>• Ներկայացված փաստաթղթերի իսկությունն ու վավերականությունը ստուգելուց հետո ձեզ հետ կնքում ենք «Բանկային հաշվի սպասարկման պայմանագիրը» և հաշիվ բացում 1 (մեկ) աշխատանքային օրվա ընթացքում: Կնքված պայմանագրի օրինակի հետ ձեզ ենք հանձնում նաև Ավանդների հատուցման երաշխավորման պայմանների և կարգի մասին ծանուցում:</p>
                      <p>• Հաշիվները կարող եք բացել ինչպես մեր գործունեության վայրում, այնպես էլ հեռակառավարման համակարգերի միջոցով:</p>
                      <p>• Հեռակառավարման համակարգերով հաշիվները բացում ենք մեր կայքի կամ բջջային հավելվածի միջոցով ներկայացված էլեկտրոնային հայտ/դիմում-ի հիման վրա, որի համար կիրառվում են Համալիր բանկային ծառայությունների մատուցման պայմաններով սահմանված՝ ձեր հավաստագրման և նույնականացման միջոցները:</p>
                      <p>• Հաշիվ բացելուց հետո կարող եք իրականացնել ՀՀ օրենսդրությամբ չարգելված ցանկացած գործառնություն:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Բանկային հաշիվների սպասարկում */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Բանկային հաշիվների սպասարկում
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[2] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[2] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>
                        Ձեր բանկային հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, մեր և ձեր միջև կնքված բանկային հաշվի սպասարկման պայմանագրով: Բանկային հաշիվների սպասարկումն իրականացնում են մեր գլխամասային գրասենյակը և մասնաճյուղերը: Հաշիվները սպասարկում ենք մեր սահմանած գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման: Ձեր հաշիվներով իրականացվող գործառնությունների դիմաց գանձում ենք համապատասխան միջնորդավճարներ՝ մեր Սակագների համաձայն: Բանկային հաշիվների վարման սպասարկումն անվճար է: Հաշվի չնվազող մնացորդի պահանջ սահմանված չէ:
                      </p>
                      <p className="font-bold text-[#6400dc]">Բանկային հաշվով կարող եք կատարել հետևյալ գործառնությունները՝</p>
                      <ul className="space-y-1 pl-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#6400dc] font-bold">•</span>
                          <span>բացված հաշվին մուտքագրել դրամական միջոցներ,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#6400dc] font-bold">•</span>
                          <span>կատարել հաշվից փոխանցումներ,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#6400dc] font-bold">•</span>
                          <span>հաշվից գումարներ ստանալ,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#6400dc] font-bold">•</span>
                          <span>ընթացիկ հաշվի մնացորդը փոխարկել արտարժույթի,</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#6400dc] font-bold">•</span>
                          <span>ընթացիկ հաշվից մարել վարկեր:</span>
                        </li>
                      </ul>
                      <p>• Կարող եք նաև հեռակառավարել ձեր հաշիվները՝ բանկային հաշիվների հեռակառավարման (online) մեր համակարգերի միջոցով:</p>
                      <p>• Բանկային հաշիվների բոլոր գործառնությունները (դրամական միջոցների շարժ, գանձված միջնորդավճարներ, ստացված եկամուտներ) արտացոլվում են քաղվածքներում:</p>
                      <p><strong>Ձեր հաշվին դրամական միջոցների մուտքագրման/ելքագրման ժամկետները՝</strong></p>
                      <p>• Ձեր օգտին ստացված դրամական միջոցները մուտքագրվում են ոչ ուշ, քան մուտքագրումը հաստատող փաստաթղթերի ստացման հաջորդող բանկային օրը: Հաշվի կանխիկ համալրման դեպքում՝ դրամական միջոցները մուտքագրվում են նույն բանկային օրը:</p>
                      <p>• Ձեր հաշվից դրամական միջոցների ելքագրումը (փոխանցումների իրականացումը) կատարվում է՝ ձեր կողմից մեզ ներկայացված վճարման հանձնարարագրերի հիմքերով, ընդ որում՝ մինչև ժամը 15:30-ը ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը:</p>
                      <p>• Բանկի կողմից Վճարման հանձնարարականի դրոշմակնիքումը հաստատում է այն փաստը, որ վճարման հանձնարարականն ընդունվել է Բանկի կողմից ի կատարման:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 4: Հաշիվների սպասարկմանն առնչվող այլ դրույթներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Հաշիվների սպասարկմանն առնչվող այլ դրույթներ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[3] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[3] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Բանկային հաշվին առկա դրամական միջոցները տնօրինելու ձեր իրավունքները չենք սահմանափակում:</p>
                      <p>• Հաշվետիրոջ ձեր իրավունքները կարող են սահմանափակվել դատարանի վճռով, դատական ակտերի հարկադիր կատարումն ապահովող մարմինների կամ հարկային մարմինների կողմից ներկայացված հայտի հիման վրա: Առանց ձեր կարգադրության՝ հաշվից դրամական միջոցները կարող են բռնագանձվել դատարանի վճռով հարկադիր կատարումն ապահովող մարմինների և հարկային մարմինների ներկայացրած հայտի հիման վրա:</p>
                      <p>• Երաշխավորում ենք հաշվի, հաշվով գործառնությունների և ձեր մասին տեղեկությունների գաղտնիությունը:</p>
                      <p>• Մեր և ձեր միջև ծագած ցանկացած վեճ և տարաձայնություն նախ և առաջ լուծվում է փոխադարձ բանակցությունների միջոցով, իսկ համաձայնության չգալու դեպքում՝ դատական կարգով և ֆինանսական համակարգի հաշտարարի միջոցով:</p>
                    </div>
                  )}
                </div>

                {/* Accordion 5: Բանկային հաշվի պայմանագրի լուծման պայմաններ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleAccordion(4)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#6400dc]">⌄</span> Բանկային հաշվի պայմանագրի լուծման պայմաններ
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openAccordions[4] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openAccordions[4] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                      <p>• Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել բանկային հաշվի սպասարկման պայմանագիրը և ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը (կանխիկ ելքագրել կամ փոխանցել այլ հաշվի): Այս դեպքերում հաշվին եղած դրամական միջոցների մնացորդը տրամադրում ենք ձեզ կամ ձեր ցուցումով փոխանցում այլ հաշվի՝ ձեր համապատասխան գրավոր դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում:</p>
                      <p>• Կարող ենք անվիճելի կարգով դադարեցնել բանկային հաշվի սպասարկման պայմանագիրը, եթե լինելով ֆիզիկական անձ հաճախորդ՝ վեց ամսվա ընթացքում ձեր բանկային հաշվով գործառնություններ չեք կատարել, իսկ մնացորդը զրոյական է:</p>
                      <p>• Բանկային հաշվի պայմանագրի լուծումը հիմք է ձեր հաշիվը փակելու համար:</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= EVOCA ԽՆԱՅՈՂԱԿԱՆ ՀԱՇԻՎ ԷՋ ================= */
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

            <EvocaOnlineMobile />
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}