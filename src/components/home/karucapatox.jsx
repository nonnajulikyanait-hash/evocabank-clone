import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Karucapatox() {
  // Կառուցապատողների ցանկը՝ իրենց տվյալներով և նկարներով
  const contractors = [
    {
      id: 1,
      title: 'Դե Իքս Քոնսթրաքշն',
      address: 'ՀՀ, Կոտայքի մարզ, գ․ Քասախ, Վ․ Սարգսյան, փողոց 10',
      phone: '+374 93 009944',
      website: 'https://art-group.am/hy/home',
      images: [
        'https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin%20web%20(1).png',
        'https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin2%20web%20(1).png'
      ]
    },
    {
      id: 2,
      title: '«ՀԱԷԿ-ի Շինարարություն» ՓԲԸ',
      project: 'Մեծամոր Ռեզիդենս',
      address: 'ՀՀ, Արմավիրի մարզ, ք․ Մեծամոր, 2-րդ թաղամաս 1/2 հողամաս',
      phone: '+374 95 506506',
      images: [
        'https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin%20web.png',
        'https://www.evoca.am/file_manager/constractors/hipotek%20[Recovered]shin2%20web.png'
      ]
    },
    {
      id: 3,
      title: 'Dilijan Eye («ԴԻ ՍԻ ԴԻ» ՍՊԸ)',
      address: 'ՀՀ, Տավուշի մարզ, ք․ Դիլիջան, Առողջարանային փողոց 12/4',
      phone: '+374 43 100550',
      images: [
        'https://www.evoca.am/file_manager/Constractors/web%201.jpg',
        'https://www.evoca.am/file_manager/Constractors/web%202.jpg'
      ]
    },
    {
      id: 4,
      title: '«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ',
      address: 'Կոտայքի մարզ, Նոր Հաճն, գյուղ Քանաքեռավան, Երևանյան խճ. 8 և 8/3',
      phone: '+374 55-200-707 | +374 41-200-700',
      images: [
        'https://www.evoca.am/file_manager/Constractors/man-invest-web.png',
        'https://www.evoca.am/file_manager/Constractors/man-invest-2-web%20(1).png'
      ]
    },
    {
      id: 5,
      title: '«ԱՍՍՏՐՈՅ» ՍՊԸ',
      address: 'ՀՀ, Արարատի մարզ, ք․ Վեդի, Արցախի փողոց 1',
      phone: '+374 95 444466',
      images: [
        'https://www.evoca.am/file_manager/Constractors/asatroy%20web.png',
        'https://www.evoca.am/file_manager/Constractors/asatroy-web2.png'
      ]
    },
    {
      id: 6,
      title: '«White island» ՍՊԸ',
      address: 'ՀՀ, ք. Աշտարակ',
      phone: '+374 91 767606, +374 91 473874',
      images: [
        'https://www.evoca.am/file_manager/Constractors/hipotekwhite-island-web.png',
        'https://www.evoca.am/file_manager/Constractors/hipotekwhite-island_1-web.png'
      ]
    },
    {
      id: 7,
      title: 'PARK VIEW («ՋԻ ԷՄ ԴԻՎԵԼԸՓՄԵՆԹ» ՍՊԸ)',
      address: 'ք. Երևան, Արաբկիր, Գ. Ղափանցյան փողոց 4/9',
      phone: '+374 55 094949',
      images: [
        'https://www.evoca.am/file_manager/Constractors/hipotekpark%20view2%20-%20web%20(2).png',
        'https://www.evoca.am/file_manager/Constractors/hipotekpark%20view2%20-%20web%20(1).png'
      ]
    },
    {
      id: 8,
      title: '«ՕՊՏԻՄԱ 25» ՍՊԸ',
      address: 'ՀՀ Կոտայքի մարզ, համայնք Նաիրի գյուղ Զովունի 41-րդ փողոց 1-ին նրբանցք 5/2',
      phone: '+374 93 779384, +374 91 196767, +374 91 490700',
      images: [
        'https://www.evoca.am/file_manager/Constractors/optimaweb.png',
        'https://www.evoca.am/file_manager/Constractors/optima2web.png'
      ]
    },
    {
      id: 9,
      title: 'Midis Park («Միդիս Քնսթրաքշն» ՍՊԸ)',
      address: 'ՀՀ Կոտայքի մարզ, գյուղ Ձորաղբյուր, 2-րդ թաղամաս, 10 (Վաճառքի պատասխանատու՝ Silver Rea)',
      phone: '+374 55 386500',
      images: [
        'https://www.evoca.am/file_manager/Constractors/midis-web.png',
        'https://www.evoca.am/file_manager/Constractors/midis2-web.png'
      ]
    },
    {
      id: 10,
      title: '«Ավենյու Գրուպ» ՍՊԸ',
      address: 'ՀՀ, Մարզ Կոտայք, գյուղ Նաիրի, Զովունի 30-րդ փողոց 33/1',
      phone: '+374 98 778177, +374 98 748177',
      images: [
        'https://www.evoca.am/file_manager/Constractors/hipotekavenue-web.png',
        'https://www.evoca.am/file_manager/Constractors/hipotekavenue2-web.png'
      ]
    },
    {
      id: 11,
      title: '«ԴԻ ՋԻ ԷՅ ՔԸՆՍԹՐԱՔՇՆ» ՍՊԸ',
      address: 'Մարզ Կոտայք, համայնք Աբովյան Աբովյան ք. Հատիսի փողոց 1/85',
      phone: '+374 33 015509',
      images: [
        'https://www.evoca.am/file_manager/Constractors/karucapatox-web.png',
        'https://www.evoca.am/file_manager/Constractors/karucapatox-web2.png'
      ]
    },
    {
      id: 12,
      title: '«1ԷՍՔՅՈՒ-ԱՐԳՈ» ՍՊԸ',
      address: 'ՀՀ, ք. Աշտարակ, փ․ Երևանյան 2/10 (Վաճառքի պատասխանատու` «Արգո Ռեալթի»)',
      phone: '+374 55 200707 | 80 85',
      images: [
        'https://www.evoca.am/file_manager/constractors/1sq-web.png',
        'https://www.evoca.am/file_manager/constractors/1sq-web-2.png'
      ]
    },
    {
      id: 13,
      title: '«ԱՏԱՐԱԴ» ՍՊԸ',
      address: 'ՀՀ, ք. Երևան, Գ. Հովսեփյան 26/15',
      phone: '+374 44 580606 | +374 55 218332',
      images: [
        'https://www.evoca.am/file_manager/constractors/atarad-web.png',
        'https://www.evoca.am/file_manager/constractors/atarad-web-2.png'
      ]
    },
    {
      id: 14,
      title: 'Majestic Residence («ՍԱՏՈՒՐՆԱՎԱՆ» ՍՊԸ)',
      address: 'Մարզ Կոտայք, Աբովյան, ք. Ծաղկաձոր, փ․ Պահլավունյաց 73',
      phone: '+374 95 200600',
      images: [
        'https://www.evoca.am/file_manager/constractors/saturn-web.png',
        'https://www.evoca.am/file_manager/constractors/saturn-web-2.png'
      ]
    },
    {
      id: 15,
      title: 'ԱՄՈՒՐ 21 ՍՊԸ',
      address: 'ՀՀ, Կոտայքի մարզ, գ. Առինջ, Խ. Աբովյան, 18 փ., 8',
      phone: '+374 95 064408',
      images: [
        'https://www.evoca.am/file_manager/constractors/amur1[1][1].jpg'
      ]
    },
    {
      id: 16,
      title: '«Փիրումյան Շին» ՍՊԸ',
      address: 'ք.Երևան, Դավթաշեն համայնք, Փիրումյանների փ., 7/6',
      phone: '+374 96 914141',
      images: [
        'https://www.evoca.am/file_manager/Constractors/karucapatox-pirumyan-400x400.png',
        'https://www.evoca.am/file_manager/Constractors/karucapatox-pirumyan-400x400-2.png'
      ]
    },
    {
      id: 17,
      title: 'In Town',
      address: 'Կոտայքի մարզ, Ջրվեժ համայնք, Ձորաղբյուր, Լճափի փ., 1/3 (Վաճառքի պատասխանատու` «ՊՐԵՄԻՈՒՄ ՌԻԵԼԹԻ»)',
      phone: '+374 96 032303',
      images: [
        'https://www.evoca.am/file_manager/constractors/karlenashen1-web.png',
        'https://www.evoca.am/file_manager/Constractors/karlenashen2-web[1].jpg'
      ]
    },
    {
      id: 18,
      title: '«ՄԱՆ ԻՆՎԵՍՏ ԳՐՈՒՊ» ՍՊԸ (Նոր Հաճն)',
      address: 'Կոտայքի մարզ, Նոր Հաճն, գյուղ Քանաքեռավան, Երևանյան խճ. 6, 6/1, 6/3, 6/4, 6/5',
      phone: '+374 55 200707 | +374 41 200700',
      images: [
        'https://www.evoca.am/file_manager/Constractors/maninvest.png'
      ]
    }
  ];

  // Բացված ակորդեոնների կառավարման վիճակ (state)
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Կառուցապատողներ</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            Կառուցապատողներ
          </h1>

          <div className="space-y-4 text-xs sm:text-sm text-gray-600 mb-10 leading-relaxed">
            <p className="font-semibold text-neutral-800">
              Ձե՛ռք բերեք Ձեր նորաոճ և հարմարավետ բնակարանը Evocabank-ի հետ:
            </p>
            <p>
              Ծանոթացե՛ք մեզ հետ համագործակցող կառուցապատող կազմակերպությունների ցանկին և անհրաժեշտ տեղեկատվությանը ստորև.
            </p>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          {/* Ակորդեոնների ցանկ */}
          <div className="space-y-4">
            {contractors.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  {/* Ակորդեոնի գլխամաս (Header) */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 transition-colors text-left cursor-pointer font-bold text-neutral-900 text-sm sm:text-base gap-3"
                  >
                    <span>{item.title}</span>
                    <span className={`transform transition-transform duration-300 text-purple-600 font-bold shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      ⌄
                    </span>
                  </button>

                  {/* Ակորդեոնի բովանդակություն (Body) */}
                  {isOpen && (
                    <div className="p-4 sm:p-6 bg-gray-50/50 border-t border-gray-200 space-y-4 text-xs sm:text-sm">
                      {item.project && (
                        <p><strong className="text-neutral-900">Նախագիծ՝</strong> {item.project}</p>
                      )}
                      <p><strong className="text-neutral-900">Հասցե՝</strong> {item.address}</p>
                      <p><strong className="text-neutral-900">Հեռ․՝</strong> {item.phone}</p>
                      {item.website && (
                        <p className="break-all">
                          <strong className="text-neutral-900">Website:</strong>{' '}
                          <a href={item.website} target="_blank" rel="noreferrer" className="text-[#6400dc] hover:underline">
                            {item.website}
                          </a>
                        </p>
                      )}

                      {/* Նկարների ցուցադրություն */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {item.images.map((imgUrl, idx) => (
                          <div key={idx} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm h-48">
                            <img 
                              src={imgUrl} 
                              alt={`${item.title} ${idx + 1}`} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}