import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';
import EvocaOnlineMobile from './evocaonlinemobile';

export default function Footerevoca() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">EvocaONLINE</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6 md:mb-8">
            EvocaONLINE
          </h1>

          <div className="space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            
            {/* Նկարագիրը և հնարավորությունները */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-4">Նկարագիրը և հնարավորությունները</h2>
              <p className="mb-4">
                EvocaOnline-ը բանկային հաշիվների հեռակառավարման ինտերնետ-բանկ համակարգ է, որի միջոցով կարող եք հեռակառավարել ձեր բանկային հաշիվները: EvocaOnline-ից կարող եք օգտվել մեր կայքի համապատասխան հղման միջոցով: Համակարգի միջոցով կարող եք՝
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-neutral-900 mb-1">Դիտել տարաբնույթ տեղեկատվություն․</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>բանկային հաշիվների մնացորդներն ու գործառնությունները,</li>
                    <li>հաշիվների, վճարային քարտերի, վարկերի, ավանդների քաղվածքները,</li>
                    <li>վճարային քարտերի օնլայն մնացորդները,</li>
                    <li>վարկերի մասին ամբողջ տեղեկատվությունն ու մարման ժամանակացույցը,</li>
                    <li>ավանդների մասին ամբողջ տեղեկատվությունը,</li>
                    <li>արտարժույթի փոխարժեքները:</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-neutral-900 mb-1">Կատարել գործարքներ․</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>փոխանցումներ՝ միջազգային և Հայաստանի տարածքում (նաև խմբային),</li>
                    <li>արտարժույթի փոխանակումներ,</li>
                    <li>վարկի մարումներ,</li>
                    <li>ավանդի բացում և համալրումներ,</li>
                    <li>կոմունալ վճարումներ (նաև խմբային),</li>
                    <li>բյուջետային փոխանցումներ,</li>
                    <li>գույքահարկի վճարումներ,</li>
                    <li>կանխիկացումներ,</li>
                    <li>փաստաթղթերի չեղարկում:</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-neutral-900 mb-1">Ինչպես նաև․</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>ուղարկել և ստանալ ազատ ֆորմատի նամակներ՝ կցված ֆայլերով (MS Word, Excel և այլն),</li>
                    <li>ներմուծել տվյալներ xml ֆորմատով ֆայլից,</li>
                    <li>ստեղծել փաստաթղթերի ձևանմուշներ (շաբլոններ):</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ուշադրություն */}
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="font-bold text-neutral-900 text-sm sm:text-base">Ուշադրություն․</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>EvocaOnline հավելվածով գործարքներ կատարելիս գործում է միջնորդավճարների կիրառման շահավետ զեղչային համակարգ:</li>
                <li>Ծանոթացեք մեր Evoca Online ավանդատեսակին, որի ներդրման պարագայում գործում են ավելի բարձր տոկոսադրույքներ (մեր կողմից առաջարկվող այլ ավանդատեսակների համեմատ):</li>
                <li>
                  Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅՄԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված՝ բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ այստեղ:
                </li>
              </ul>
            </div>

            {/* ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ */}
            <div className="pt-4">
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
              
              <div className="space-y-4">
                
                {/* Անվտանգությունը (Accordion) */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('security')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-neutral-900 text-left text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Անվտանգությունը</span>
                    <span className="transform transition-transform duration-200 text-xs">
                      {openSection === 'security' ? '▲' : '▼'}
                    </span>
                  </button>
                  {openSection === 'security' && (
                    <div className="p-4 space-y-3 text-gray-600 bg-white border-t border-gray-200 leading-relaxed">
                      <p>Համակարգն առավել անվտանգ դարձնելու նպատակով մեր EvocaOnline համակարգի օգտատերերին առաջարկում ենք Vasco Token Digipass GO-6 սարք:</p>
                      <p>Vasco Token Digipass GO-6 անվտանգության սարքը մեր սեփականությունն է, որը տրամադրում ենք ձեզ EvocaOnline համակարգ մուտք գործելու անվտանգության համապատասխան գաղտնանիշերի գեներացման համար:</p>
                      <p>Տվյալների գաղտնագրման համար օգտագործվում է Secure Socket Layer (SSL) տեխնոլոգիան:</p>
                    </div>
                  )}
                </div>

                {/* Ակտիվացման կարգը (Accordion) */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('activation')}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-neutral-900 text-left text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Ակտիվացման կարգը</span>
                    <span className="transform transition-transform duration-200 text-xs">
                      {openSection === 'activation' ? '▲' : '▼'}
                    </span>
                  </button>
                  {openSection === 'activation' && (
                    <div className="p-4 space-y-3 text-gray-600 bg-white border-t border-gray-200 leading-relaxed">
                      <p>Հավելվածը մեր հաճախորդներին տրամադրում ենք «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</p>
                      <p>Մեր և ձեր միջև բանկային ծառայությունների մատուցման որևէ պայմանագիր կնքելու դեպքում (հաշիվների բացում, վարկերի տրամադրում, ավանդների ներգրավում և այլն), հավելվածն ակտիվանում է ավտոմատ կերպով՝ «Միայն դիտելու» հնարավորությամբ: Համակարգեր մուտք գործելու տվյալները (Login, Password) առկա են ծառայությունների մատուցման պայմանագրերում: Պայմանագրերում առկա է նաև QR կոդի տեսքով հղում՝ հավելվածը App Store-ից կամ Play-Store-ից ներբեռնելու համար:</p>
                      <p>Ցանկության դեպքում կարող եք ակտիվացնել հավելվածը՝ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</p>
                      <p>Եթե արդեն օգտվում եք մեր ծառայություններից, ապա կարող եք դիմել մեզ և ակտիվացնել հավելվածը՝ «Միայն դիտելու» կամ «Դիտելու և գործարքներ կատարելու» հնարավորությամբ:</p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Տեղադրված են EvocaOnlineMobile և Footer բաղադրիչները */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}