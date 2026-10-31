import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function MerMasin() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const historyData = [
    { year: '2026', img: 'https://www.evoca.am/images-cache/histories/1/17823049564741/450x330.png', text: 'Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երը։' },
    { year: '2025', img: 'https://www.evoca.am/images-cache/histories/1/17574211752061/450x330.png', text: 'Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր։ Ներկայացվեց Evoca Travel Card-ը։ Մեկնարկեցին Evoca Partners Club-ն և Evoca Benefits նախագիծը։' },
    { year: '2024', img: 'https://www.evoca.am/images-cache/histories/1/17240707281875/450x330.png', text: 'Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ, այդ թվում՝ EIB Global-ը, հովանավորել մի շարք նախագծեր, ներկայացրել իր նոր EvocaHOME օվերդրաֆտը, ինչպես նաև արժանացել միջազգային մրցանակների։' },
    { year: '2023', img: 'https://www.evoca.am/images-cache/histories/1/17001230844576/450x330.jpg', text: 'Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2 և EvocaINVEST հավելվածները։ Գործընկերներին է ներկայացրել Evoca Digital քարտը, Action օնլայն վարկը, Էլեկտրոնային ստորագրության e-Sign համակարգը։' },
    { year: '2022', img: 'https://www.evoca.am/images-cache/histories/1/16542512333235/450x330.png', text: 'Evoca-ն համալրել է կանոնադրական կապիտալը 3 մլրդ դրամով: Թողարկել է պարտատոմսեր։ Ներկայացրել է Visa Vision քարտը։ ՀայՓոստի հետ սկսել է համագործակցություն՝ հարմարավետ և հասանելի ֆինտեխ ծառայությունների գծով։ Գործարկել է Evoca mobile POS-ը։' },
    { year: '2021', img: 'https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png', text: 'Evoca-ի նոր, կրեատիվ լուծումներով կայքը Awwwards թիմի կողմից արժանացել է 2 մրցանակի: Բանկը ներկայացրել է իր Evoca Gift Card-ը: Բանկը 2 փուլով թողարկել է պարտատոմսեր, այդ թվում՝ online տարբերակով:' },
    { year: '2020', img: 'https://www.evoca.am/images-cache/histories/1/16328279547034/450x330.png', text: 'Evocabank-ը յուրահատուկ կերպով նշեց իր 3 և Բանկի հիմնադրման 30-ամյակը՝ առաջին անգամ Հայաստանում կազմակերպելով լուսային դրոն շոու: 300 դրոն միաժամանակ լուսավորեցին Երևանի երկինքը՝ շնորհավորելով Evocabank-ի տարեդարձը:' },
    { year: '2019', img: 'https://www.evoca.am/images-cache/histories/1/16099255150877/450x330.jpg', text: 'Evocabank-ի Վարչության նախագահի տեղակալ Կարեն Եղիազարյանը նշանակվել է Բանկի Վարչության նախագահ: Ներկայացվել է Visa Infinite քարտը: Բանկը դարձել է Եվրատեսիլ 2019-ի հեռարձակման գլխավոր հովանավոր։' },
    { year: '2018', img: 'https://www.evoca.am/images-cache/histories/1/16099254755799/450x330.jpg', text: 'Evocabank-ը երկրորդ տարին անընդմեջ Global Finance հեղինակավոր ամսագրի կողմից ճանաչվել է Լավագույն սպառողական թվային բանկը Հայաստանում: Ներկայացվել են ArCa-MIR և Shopping Card քարտերը:' },
    { year: '2017', img: 'https://www.evoca.am/images-cache/histories/1/16099254320292/450x330.jpg', text: 'Բանկը վերանվանվել է Evocabank-ի՝ փոխելով իր ռազմավարությունը և բիզնես մոդելը՝ անցնելով mobile-first ֆորմատի: Անդամակցել է VISA վճարային համակարգին: Ներկայացրել է SingleTOUCH օնլայն վարկատեսակը:' },
    { year: '2016', img: 'https://www.evoca.am/images-cache/histories/1/16099253889356/450x330.jpg', text: 'Բանկի նորմատիվային ընդհանուր կապիտալը գերազանցել է ԿԲ սահմանած 30 մլրդ. ՀՀ դրամ նվազագույն պահանջը: Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ վերակազմավորվելով ՍՊԸ-ից ՓԲԸ-ի:' },
    { year: '2015', img: 'https://www.evoca.am/images-cache/histories/1/16099253491717/450x330.jpg', text: 'Ներդրվել է Prometey Mobile բջջային հավելվածը և իրականացվել է հավելվածի՝ Իվետա Մուկուչյանի մասնակցությամբ գովազդային արշավը, որի շրջանակներում թողարկվել է հատուկ բրենդավորված քարտ: Գործարկվել է Prometey Token անվտանգության բջջային հավելվածն App Store-ում և Play Store-ում:' },
    { year: '2012', img: 'https://www.evoca.am/images-cache/histories/1/1609925307811/450x330.jpg', text: 'Միացել է UNIStream դրամական փոխանցումների համակարգին: Global Finance ամսագիրը, երկրորդ տարին անդընդմեջ, Բանկին ճանաչել է որպես աշխարհի լավագույն ենթապահառու բանկերից մեկը և 2012թ. «Լավագույն ենթապահառու բանկը» Հայաստանում:' },
    { year: '2008', img: 'https://www.evoca.am/images-cache/histories/1/16099252548716/450x330.jpg', text: 'Առաջին անգամ Հայաստանում` Բանկը թողարկել և Շվեյցարական առաջատար բանկերից մեկին է վաճառել սեփական ոչ փաստաթղթային առանց ապահովվածության պարտատոմսեր:' },
    { year: '2006', img: 'https://www.evoca.am/images-cache/histories/1/16099251674213/450x330.jpg', text: 'Ստացել է MasterCard Europe վճարային համակարգի աֆիլիատ անդամի կարգավիճակ: Սկսել է թողարկել Maestro, MasterCard Standard, MasterCard Gold, MasterCard Business տիպի պլաստիկ քարտեր:' },
    { year: '2005', img: 'https://www.evoca.am/images-cache/histories/1/1609925107995/450x330.jpg', text: 'Դարձել է Արմենիան Քարդ ՓԲԸ բաժնետեր և ԱրՔա վճարային համակարգի լիիրավ անդամ:' },
    { year: '2000', img: 'https://www.evoca.am/images-cache/histories/1/16099250658162/450x330.jpg', text: 'Անդամակցել է S.W.I.F.T. միջազգային փոխանցումների համակարգին:' },
    { year: '1993', img: 'https://www.evoca.am/images-cache/histories/1/16099250213165/450x330.jpg', text: 'Լիցենզավորվել է ՀՀ Կենտրոնական բանկի կողմից` թիվ 27 ընդհանուր արտոնագրով:' },
    { year: '1990', img: 'https://www.evoca.am/images-cache/histories/1/16099221719641/450x330.jpg', text: 'Բանկը հիմնադրվել է 1990թ. և մինչև 2017թ. գործել է Պրոմեթևս և Պրոմեթեյ Բանկ անուններով:' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Sub-header navigation menu for About Us */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black">Ընդհանուր</span>
            <Link to="/mer-masin/karucvacq" className="text-purple-200 hover:text-white cursor-pointer">Կառուցվածք</Link>
            <Link to="/mer-masin/bajneterer" className="text-purple-200 hover:text-white cursor-pointer">Բաժնետերեր</Link>
            <Link to="/mer-masin/xekavarutyun" className="text-purple-200 hover:text-white cursor-pointer">Ղեկավարություն</Link>
            <Link to="/mer-masin/gortsynkerner" className="text-purple-200 hover:text-white cursor-pointer">Գործընկերներ</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Մրցանակներ</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">CSR</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Էվոկա ֆինանսական խումբ</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
          
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span>Մեր մասին</span>
            <span>/</span>
            <span>Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Ընդհանուր</span>
          </div>

          {/* 1. Ընդհանուր տեղեկատվություն */}
          <section>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
              Ընդհանուր տեղեկատվություն
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  <strong>Evocabank</strong>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
                </p>
                <p>Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:</p>
                <p>
                  Մենք աշխատում ենք mobile-first ֆորմատով՝ յուրաքանչյուր նոր ծառայություն նախագծելիս՝ նախևառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման հարմարավետությունը:
                </p>
                <p>Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:</p>
              </div>
              <div>
                <img 
                  src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
                  alt="Evocabank general" 
                  className="rounded-2xl shadow-md w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* 2. Մեր տեսլականը (Մանուշակագույն background) */}
          <section className="bg-[#6400dc] text-white rounded-3xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
              Մեր տեսլականը
            </h2>
            <ul className="space-y-4 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-xl font-bold">—</span>
                <span>Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար։</span>
              </li>
            </ul>
          </section>

          {/* 3. Մեր առաքելությունը */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-6">
              Մեր առաքելությունը
            </h2>
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg" 
                alt="Mission" 
                className="w-full h-[350px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-neutral-100/90 backdrop-blur-md p-6 rounded-2xl border border-gray-200">
                <p className="text-neutral-800 text-sm md:text-base leading-relaxed font-medium">
                  Որպես human-first և խելացի ֆինտեխ ընկերություն` մենք հնարավորություն ենք տալիս մարդկանց երազելու ավելի համարձակ, բիզնեսներին` բացահայտելու նոր հորիզոններ, և հասարակությանը՝ կառուցելու ավելի լավ ապագա:
                </p>
              </div>
            </div>
          </section>

          {/* 4. Բանկի պատմությունը (Timeline Swiper style) */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-8">
              Բանկի պատմությունը
            </h2>

            {/* Years Timeline Bar */}
            <div className="relative flex items-center justify-between border-b border-gray-200 pb-4 mb-10 overflow-x-auto gap-6 px-2">
              {historyData.map((item, idx) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYearIndex(idx)}
                  className={`flex flex-col items-center relative transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeYearIndex === idx ? 'text-[#6400dc] font-black scale-110' : 'text-gray-400 font-semibold hover:text-gray-600'
                  }`}
                >
                  <span className="text-sm md:text-base mb-2">{item.year}</span>
                  <span className={`w-3 h-3 rounded-full transition-all ${activeYearIndex === idx ? 'bg-[#6400dc] ring-4 ring-purple-100' : 'bg-gray-300'}`}></span>
                </button>
              ))}
            </div>

            {/* Active Year Content Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xs">
              <div className="text-gray-700 text-sm md:text-base leading-relaxed">
                <span className="text-[#6400dc] font-black text-2xl mb-4 block">{historyData[activeYearIndex].year}</span>
                <p>{historyData[activeYearIndex].text}</p>
              </div>
              <div className="flex justify-center">
                <img 
                  src={historyData[activeYearIndex].img} 
                  alt={historyData[activeYearIndex].year} 
                  className="rounded-2xl shadow-md max-h-[300px] object-contain"
                />
              </div>
            </div>
          </section>

          {/* 5. Արժեքներ և առաջնայնություններ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-8">
              Արժեքներ և առաջնայնություններ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <h3 className="text-lg font-black text-[#6400dc]">Human-first</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էքսպերտների թիմը և հասարակությունը։ Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից մարդկանց համար։
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <h3 className="text-lg font-black text-[#6400dc]">Նորարարություն</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է։ Մենք բաց ենք և պատրաստակամ զարգանալու համար։
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-3">
                <h3 className="text-lg font-black text-[#6400dc]">Դրական ազդեցություն</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն։
                </p>
              </div>
            </div>
          </section>

          {/* 6. Կորպորատիվ սոցիալական պատասխանատվություն */}
          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-6">
              Կորպորատիվ սոցիալական պատասխանատվություն
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
              Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում`
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:</span>
              </div>
            </div>
          </section>

          {/* 7. Բանկի լոգոտիպը */}
          <section className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-6">
              Բանկի լոգոտիպը
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
              Բանկի լոգոն կազմված է evolution՝ էվոլյուցիա բառի արմատից և նմանեցված է evoke՝ զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խարդհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
            </p>
            <div className="flex justify-center">
              <img src="https://www.evoca.am/file_manager/icons/logo.png" alt="Evocabank logo" className="h-16 md:h-20 object-contain" />
            </div>
          </section>

          {/* 8. Բանկի բրենդբուքը */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4">
              Բանկի բրենդբուքը
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդի այլ կարևոր տարրերը։<br />
              Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար։
            </p>
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl mx-auto bg-black">
              <img src="https://www.evoca.am/file_manager/other/52.png" alt="Brandbook" className="w-full object-cover" />
            </div>
          </section>

          {/* 9. Բանկի կորպորատիվ գույները */}
          <section className="space-y-6 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">
              Բանկի կորպորատիվ գույները
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Բանկի կորպորատիվ գույներն են` սպիտակը, մոխրագույնը և մանուշակագույնը:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="font-bold text-[#6400dc] block mb-1">Սպիտակը</span>
                <p className="text-xs text-gray-600">խորհրդանշում է նորը:</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="font-bold text-[#6400dc] block mb-1">Մոխրագույնը</span>
                <p className="text-xs text-gray-600">խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="font-bold text-[#6400dc] block mb-1">Մանուշակագույնը</span>
                <p className="text-xs text-gray-600">երիտասարդության, ստեղծարարության և նորարարության գույնն է:</p>
              </div>
            </div>

            {/* Video embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-video mt-8">
              <iframe 
                src="https://www.youtube.com/embed/QTuqGz3USRE" 
                title="Evocabank video" 
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          {/* 10. ISO27001:2026 միջազգային հավաստագիր */}
          <section className="bg-purple-50/60 rounded-3xl p-8 md:p-12 border border-purple-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4">
              ISO27001:2026 միջազգային հավաստագիր
            </h2>
            <h3 className="text-lg font-bold text-[#6400dc] mb-4">
              Evocabank-ը ստացել է ISO27001:2026 միջազգային հավաստագիր
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Հավաստագիրը վկայում է Բանկում ֆինանսական պրոդուկտների և ծառայությունների, տվյալների բազաների, տեղեկատվության մշակման և պահպանման օբյեկտների, հաճախորդների և բանկային հիմնական գործարքների վերաբերյալ ֆինանսական տեղեկատվության անվտանգ կառավարման համակարգի առկայության մասին:
            </p>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}