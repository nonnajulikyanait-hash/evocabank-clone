import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Bajneterer() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Sub-header navigation menu for About Us */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Ընդհանուր</Link>
            <Link to="/mer-masin/karucvacq" className="text-purple-200 hover:text-white cursor-pointer">Կառուցվածք</Link>
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black">Բաժնետերեր</span>
            <Link to="/mer-masin/xekavarutyun" className="text-purple-200 hover:text-white cursor-pointer">Ղեկավարություն</Link>
            <Link to="/mer-masin/gortsynkerner" className="text-purple-200 hover:text-white cursor-pointer">Գործընկերներ</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Մրցանակներ</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">CSR</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Էվոկա ֆինանսական խումբ</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Բաժնետերեր</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
            Բաժնետերեր
          </h1>

          {/* Shareholder Profile Section */}
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col items-center space-y-4">
              <img 
                src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png" 
                alt="Մարետա Գևորկյան" 
                className="rounded-2xl shadow-md w-full max-w-[280px] object-cover"
              />
              <div className="flex gap-3 text-gray-400">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-purple-100 hover:text-[#6400dc] transition">f</span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-purple-100 hover:text-[#6400dc] transition">in</span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-purple-100 hover:text-[#6400dc] transition">✉</span>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-[#6400dc]">Մարետա Գևորկյան</h2>
              <p>
                Մարետա Գևորկյանը միանձնյա տիրապետում է Evocabank-ի բաժնետոմսերի 100%-ին։
              </p>
              <p>
                Նա ծնվել է Դիլիջանում, ավարտել Դիլիջանի միջնակարգ դպրոցը, այնուհետև՝ Երևանի պետական մանկավարժական ակադեմիան:
              </p>
              <p>
                2008 թվականից բնակվելով Շվեյցարիայում՝ նա ակտիվորեն ներգրավված է բանկային, տարածքային զարգացման և սոցիալական նախաձեռնություններում՝ նպաստելով Հայաստանի կայուն զարգացմանը:
              </p>
              <p className="font-semibold text-neutral-900 pt-2">
                <span className="text-[#6400dc]">Նշում.</span> Բանկն անուղղակի նշանակալից մասնակից չունի:
              </p>
            </div>
          </div>

          {/* ANHRAZHESHT TEXEKATVUTYUN (Accordions) */}
          <section className="space-y-6 pt-6">
            <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900">
              ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
            </h2>

            <div className="space-y-4">
              {/* Accordion 1: Ուշադրություն */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                <button 
                  onClick={() => toggleAccordion(1)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-bold text-neutral-800 hover:bg-gray-50 transition cursor-pointer"
                >
                  <span>Ուշադրություն</span>
                  <span className={`transform transition-transform ${openAccordion === 1 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openAccordion === 1 && (
                  <div className="px-6 pb-6 text-sm text-gray-700 space-y-3 border-t border-gray-100 pt-4 leading-relaxed">
                    <p>
                      - «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի յուրաքանչյուր բաժնետեր, համաձայն «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ մասի, իրավունք ունի ստանալու մեր վերջին տարեկան հաշվետվության և արտաքին աուդիտի եզրակացության պատճենները:
                    </p>
                    <p>
                      - «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի տեղաբաշխված քվեարկող բաժնետոմսերի 2%-ին և ավելիին տիրապետող յուրաքանչյուր բաժնետեր իրավունք ունի ստանալու «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ և 5-րդ մասերով սահմանված տեղեկությունները:
                    </p>
                    <p>
                      - Վերոնշյալ տեղեկությունները տրամադրում ենք ԱՆՎՃԱՐ՝ բաժնետիրոջ գրավոր դիմումը ստանալուց հետո 3 (երեք) աշխատանքային օրվա ընթացքում: Գրավոր դիմումը կարող է ներկայացվել առձեռն՝ մեր Գլխամասային գրասենյակում, ցանկացած մասնաճյուղում կամ ներկայացուցչությունում, էլեկտրոնային հասցեով՝ hello@evoca.am կամ փոստով՝ ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով:
                    </p>
                    <p>
                      - Շահութաբաժինների բաշխումը կատարվում է ՀՀ օրենսդրական ակտերի համաձայն և Բանկի կանոնադրությամբ սահմանված կարգով:
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Տեղեկատվություն մեր կանոնադրական կապիտալի փոփոխության վերաբերյալ */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                <button 
                  onClick={() => toggleAccordion(2)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-bold text-neutral-800 hover:bg-gray-50 transition cursor-pointer"
                >
                  <span>Տեղեկատվություն մեր կանոնադրական կապիտալի փոփոխության վերաբերյալ</span>
                  <span className={`transform transition-transform ${openAccordion === 2 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openAccordion === 2 && (
                  <div className="px-6 pb-6 text-sm text-gray-700 space-y-3 border-t border-gray-100 pt-4 leading-relaxed">
                    <p>2011թ. Բանկի կանոնադրական կապիտալը համալրվել է 7.2 մլրդ դրամով՝ կազմելով 14 մլրդ. 400 մլն. դրամ:</p>
                    <p>Մեր մասնակիցների 08.07.2016թ. արտահերթ ընդհանուր ժողովի որոշմամբ՝ Բանկը սահմանափակ պատասխանատվության ընկերությունից վերակազմավորվել է փակ բաժնետիրական ընկերության և մեր փաստացի համալրված կանոնադրական կապիտալը (14 մլրդ. 400 մլն. դրամ) բաժանվել է 144,000 հատ հասարակ բաժնետոմսերի, յուրաքանչյուրը՝ 100,000 դրամ անվանական արժեքով:</p>
                    <p>2016թ. Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. 550 մլն. դրամով և կազմել 17 մլրդ. 950 մլն. դրամ: Մենք տեղաբաշխել ենք 100,000 դրամ անվանական արժեքով 35,500 հատ արտոնյալ բաժնետոմս:</p>
                    <p>2020թ. Բանկի կանոնադրական կապիտալը համալրվել է 2 մլրդ. 50 մլն. դրամով և կազմել 20 մլրդ. դրամ: Այդ թվում` մենք տեղաբաշխել ենք նաև 29.05.2020թ. թողարկման 100,000 դրամ անվանական արժեքով 14,500 հատ արտոնյալ բաժնետոմս:</p>
                    <p>2020թ. ՀՀ քաղաքացի Մարետա Գևորկյանը դարձել է Բանկի ուղղակի նշանակալից բաժնետերը:</p>
                    <p>2022թ. ՀՀ քաղաքացի Մարետա Գևորկյանի կողմից Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. դրամով և կազմել 23 մլրդ. դրամ: Այդ թվում` մենք տեղաբաշխել ենք 12.03.2022թ. թողարկման 100,000 ՀՀ դրամ անվանական արժեքով 7,500 հատ արտոնյալ բաժնետոմս:</p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Տեղեկատվություն շահաբաժինների բաշխման վերաբերյալ */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                <button 
                  onClick={() => toggleAccordion(3)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left font-bold text-neutral-800 hover:bg-gray-50 transition cursor-pointer"
                >
                  <span>Տեղեկատվություն շահաբաժինների բաշխման վերաբերյալ</span>
                  <span className={`transform transition-transform ${openAccordion === 3 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openAccordion === 3 && (
                  <div className="px-6 pb-6 text-sm text-gray-700 space-y-3 border-t border-gray-100 pt-4 leading-relaxed">
                    <p>2003-2006 թթ. մեր մասնակիցների միջև շահաբաժիններ չեն բաշխվել: Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթն ուղղվել է մեր կանոնադրական հիմնադրամի համալրմանը կամ որպես չբաշխված շահույթ թողնվել մեր տրամադրության տակ:</p>
                    <p>2006թ. 9 ամսվա գործունեություն արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 80 մլն. դրամ շահաբաժին:</p>
                    <p>2007թ. 9 ամսվա գործունեություն արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 55 մլն. դրամ շահաբաժին:</p>
                    <p>2008թ. փաստացի ստացված զուտ շահույթն Ընդհանուր ժողովի որոշմամբ թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2009թ. Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթից 70 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2010-2012 թթ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2013թ. փաստացի ստացված զուտ շահույթից 895 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2014-2016 թթ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2017թ. փաստացի ստացված զուտ շահույթից 78 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2018-2020 թթ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2021թ. փաստացի ստացված զուտ շահույթից 482 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                    <p>2022թ. փաստացի ստացված զուտ շահույթից 571 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:</p>
                  </div>
                )}
              </div>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  );
}