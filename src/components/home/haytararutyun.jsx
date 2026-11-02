import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Haytararutyun() {
  // Հայտարարությունների ամբողջական ցանկը
  const announcementsList = [
    {
      id: 1,
      date: '19.10.2026',
      title: '«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2026թ. Նոյեմբերի 10-ին` ժամը 13:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Արտահերթ ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Բանկի Խորհրդի նոր անդամի ընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>«Էվոկաբանկ» ԲԲԸ կանոնադրության փոփոխությունների հաստատում։</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      date: '28.08.2026',
      title: '«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2026թ. հունիսի 22-ին` ժամը 12:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Տարեկան ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Վարչության նախագահի հաշվետվությունը Բանկի 2025թ. գործունեության վերաբերյալ, 2026թ.-ի ծրագրերը:</li>
            <li>Գլխավոր հաշվապահի հաշվետվությունը` Բանկի 2025թ. տարեկան հաշվապահական հաշվեկշիռը, ծախսերի և եկամուտների կատարողականը:</li>
            <li>Բանկի գործունեությամբ կուտակված զուտ շահույթի բաշխումը:</li>
            <li>Բանկի 2026թ. արտաքին աուդիտն իրականացնող անձի հաստատումը:</li>
            <li>Բանկի Խորհրդի անդամների ընտրություն/վերընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>2025թ.-ի արդյունքներով Բանկի Խորհրդի անդամների պարգևատրման չափի հաստատում:</li>
            <li>Դուստր ընկերության հիմնադրում:</li>
          </ol>
        </div>
      )
    },
    {
      id: 3,
      date: '20.10.2026',
      title: 'Գործարքների արգելափակում ֆունկցիոնալ',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ Գործարքների արգելափակում ֆունկցիոնալը։
          </p>
          <p>
            Այն հնարավորություն է տալիս ինքնուրույն՝ ընդամենը 1 կոճակով, ժամանակավորապես արգելափակել առանձին կամ բոլոր հեռավար բանկային ծառայությունները՝ ապահովելով հաշիվների անվտանգության բարձր մակարդակը։ Գործարքների ապաարգելափակման համար անհրաժեշտ կլինի մոտենալ Բանկի ցանկացած մասնաճյուղ:
          </p>
          <p>
            <strong>Ուշադրություն.</strong> «Գործարքների արգելափակում» գործիքը նախատեսված է Ձեր միջոցների և տվյալների անվտանգությունն ապահովելու համար: Խնդրում ենք չկիրառել այն փորձարկման նպատակով, քանի որ արգելափակման դեպքում ընտրված ծառայությունները կդառնան անհասանելի, իսկ դրանց ապաարգելափակման համար անհրաժեշտ կլինի մոտենալ Բանկի մասնաճյուղ:
          </p>
        </div>
      )
    },
    {
      id: 4,
      date: '04.06.2025',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2025թ. հունիսի 19-ին` ժամը 15:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Տարեկան ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Վարչության նախագահի հաշվետվությունը Բանկի 2024թ. գործունեության վերաբերյալ, 2025թ.-ի ծրագրերը:</li>
            <li>Գլխավոր հաշվապահի հաշվետվությունը` Բանկի 2024թ. տարեկան հաշվապահական հաշվեկշիռը, ծախսերի և եկամուտների կատարողականը:</li>
            <li>Բանկի գործունեությամբ կուտակված զուտ շահույթի բաշխումը:</li>
            <li>Բանկի 2025թ. արտաքին աուդիտն իրականացնող անձի հաստատումը:</li>
            <li>Բանկի Խորհրդի անդամների ընտրություն/վերընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>2024թ.-ի արդյունքներով Բանկի Խորհրդի անդամների պարգևատրման չափի հաստատում:</li>
          </ol>
        </div>
      )
    },
    {
      id: 5,
      date: '28.03.2025',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2025թ. ապրիլի 14-ին` ժամը 15:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Արտահերթ ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Խորհրդի անդամների ընտրություն, վարձատրության չափի հաստատում։</li>
            <li>«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ 2025թ. արտաքին աուդիտն իրականացնող անձի ընտրություն:</li>
            <li>«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Կանոնադրության փոփոխությունների հաստատում։</li>
          </ol>
        </div>
      )
    },
    {
      id: 6,
      date: '30.12.2024',
      title: 'Արտաքին աուդիտի մրցույթի հայտարարություն',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            «Էվոկաբանկ» ՓԲԸ-ն հայտարարում է Բանկի 2025թ. գործունեության արտաքին աուդիտ իրականացնող անձի ընտրության բաց հրապարակային մրցույթ` համաձայն Բանկի Խորհրդի 25.12.2019թ. թիվ 20 արձանագրությամբ հաստատված «Անկախ աուդիտորական կազմակերպության ընտրության» կարգի պահանջների:
          </p>
          <p>
            Մրցույթի մասնակցության հայտերն ընդունվում են 03.01.2025թ.-ից մինչև 15.02.2025թ.-ը ընկած ժամանակահատվածում, յուրաքանչյուր աշխատանքային օր, ժամը 9:30-17:00-ն, ք. Երևան, Հանրապետության 44/2 հասցեում, Բանկի Խորհրդի աշխատակազմում:
          </p>
        </div>
      )
    }
  ];

  // Accordion state
  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Մեր Մասին Ենթամենյու */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/mer-masin" className="text-purple-200 hover:text-white transition">Ընդհանուր</Link>
            <Link to="/mer-masin/karucvacq" className="text-purple-200 hover:text-white transition">Կառուցվածք</Link>
            <Link to="/mer-masin/bajneterer" className="text-purple-200 hover:text-white transition">Բաժնետերեր</Link>
            <Link to="/mer-masin/xekavarutyun" className="text-purple-200 hover:text-white transition">Ղեկավարություն</Link>
            <Link to="/mer-masin/gortsynkerner" className="text-purple-200 hover:text-white transition">Գործընկերներ</Link>
            <Link to="/mer-masin/mrcanakner" className="text-purple-200 hover:text-white transition">Մրցանակներ</Link>
            <Link to="/mer-masin/csr" className="text-purple-200 hover:text-white transition">CSR</Link>
            <Link to="/mer-masin/xumb" className="text-purple-200 hover:text-white transition">Էվոկա ֆինանսական խումբ</Link>
            <Link to="/hashvetvutyunner" className="text-purple-200 hover:text-white transition">Հաշվետվություններ</Link>
            <Link to="/haytararutyunner" className="border-b-2 border-white pb-1 cursor-pointer font-black">Հայտարարություններ</Link>
          </div>
        </div>

        <main className="space-y-12 pb-20 pt-8">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 max-w-6xl text-xs text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-[#6400dc]">🏠</Link>
            <span>/</span>
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span className="text-neutral-800 font-semibold">Հայտարարություններ</span>
          </div>

          <div className="container mx-auto px-4 max-w-6xl space-y-8">
            {/* Title & Filter Icon Section */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-950">
                Հայտարարություններ
              </h1>

              {/* Filter / Calendar placeholder */}
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
                <span>📅</span>
                <span className="text-gray-400">Սկսած</span>
                <span>-</span>
                <span className="text-gray-400">Մինչև</span>
              </div>
            </div>

            {/* Main Content Layout with Background Graphics */}
            <div className="relative">
              {/* Decorative Background Shapes (Matching visual reference) */}
              <div className="absolute -left-16 top-10 w-48 h-48 bg-[#fff3cd]/40 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute left-12 top-32 z-0 hidden lg:block">
                <img 
                  src="https://www.evoca.am/img/announcements-img.png" 
                  alt="Announcements Illustration" 
                  className="w-72 object-contain opacity-90"
                />
              </div>

              {/* Announcements Accordion List */}
              <div className="relative z-10 lg:ml-80 space-y-4">
                {announcementsList.map((item) => (
                  <div 
                    key={item.id} 
                    className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white transition hover:border-[#6400dc]/50"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-xs text-gray-400 font-medium block">{item.date}</span>
                        <span>{item.title}</span>
                      </div>
                      <span className={`text-xl transform transition-transform duration-300 shrink-0 ${openId === item.id ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>
                        ∨
                      </span>
                    </button>

                    {openId === item.id && (
                      <div className="px-5 md:px-6 pb-6 pt-2 border-t border-gray-100 bg-[#f8f9fa]/50">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}

                {/* Pagination (1 to 8 as per design) */}
                <div className="flex items-center justify-center gap-2 pt-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      onClick={() => setCurrentPage(num)}
                      className={`w-9 h-9 rounded-lg font-bold text-sm transition cursor-pointer flex items-center justify-center ${
                        currentPage === num 
                          ? 'bg-[#6400dc] text-white shadow-sm' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <button className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold text-sm flex items-center justify-center cursor-pointer">
                    →
                  </button>
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