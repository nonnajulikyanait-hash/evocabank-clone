import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function BiznesVarker() {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const loans = [
    {
      id: 1,
      image: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png",
      title: "Արագ բիզնես վարկ/վարկային գիծ",
      description: "Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով։",
      details: [
        { label: "Ժամկետ", value: "Մինչև 60 ամիս" },
        { label: "Սահմանաչափ կամ համարժեք արտարժույթ", value: "Մինչև 30 մլն ֏" },
        { label: "Տարեկան տոկոսադրույք", value: "9.22%-17.89%" }
      ],
      fullInfo: "Արագ բիզնես վարկը նախատեսված է շրջանառու միջոցների համալրման, հիմնական միջոցների ձեռքբերման և բիզնեսի ընթացիկ ծախսերի ֆինանսավորման համար։ Ձևակերպումը կատարվում է սեղմ ժամկետներում՝ նվազագույն փաստաթղթերի փաթեթով։"
    },
    {
      id: 2,
      image: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png",
      title: "Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ",
      description: "Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար։ Շտապեք դիմել, զարգացնել Ձեր բիզնեսը և դառնալ ոլորտում մրցունակ։",
      details: [
        { label: "Ժամկետ", value: "Մինչև 36 ամիս" },
        { label: "Սահմանաչափ կամ համարժեք արտարժույթ", value: "Մինչև 500 մլն ֏" },
        { label: "Տոկոսադրույքի սուբսիդավորման չափ", value: "8%" }
      ],
      fullInfo: "Այս վարկատեսակը հնարավորություն է տալիս տեքստիլ արդյունաբերությամբ զբաղվող ընկերություններին ձեռք բերել որակյալ հումք արտերկրից շահավետ պայմաններով և պետական սուբսիդավորման աջակցությամբ։"
    },
    {
      id: 3,
      image: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png",
      title: "Բիզնես վարկերի վերաֆինանսավորում",
      description: "Տեղափոխեք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում՝ ավելի հարմար պայմաններով։",
      details: [
        { label: "Ժամկետ", value: "36-120 ամիս" },
        { label: "Գումար", value: "15մլն-500մլն ՀՀ դրամ կամ համարժեք արտարժույթ" },
        { label: "Տարեկան անվանական տոկոսադրույք", value: "Սկսած ՀՀ դրամ՝ 12% | ԱՄՆ դոլար՝ 9%" }
      ],
      fullInfo: "Վերաֆինանսավորման միջոցով դուք կարող եք միավորել ձեր գործող վարկերը մեկտեղ, նվազեցնել ամսական մարումների բեռը և ստանալ լրացուցիչ միջոցներ բիզնեսի ընդլայնման համար։"
    },
    {
      id: 4,
      image: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png",
      title: "Պարտատոմսերով ապահովված վարկ",
      description: "Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը։",
      details: [
        { label: "Ապահովում", value: "Evocabank-ի պարտատոմսեր" },
        { label: "Արագություն", value: "Անհապաղ ձևակերպում" }
      ],
      fullInfo: "Ձեր ներդրումները պարտատոմսերում կարող են ծառայել որպես հուսալի գրավ՝ բիզնեսի ընթացիկ խնդիրները լուծելու և արագ շրջանառու միջոցներ ներգրավելու համար։"
    },
    {
      id: 5,
      image: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg",
      title: "Խոշոր և ՓՄՁ բիզնես վարկ",
      description: "Զարգացրե'ք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:",
      details: [
        { label: "Սահմանաչափ", value: "Մինչև 4 մլրդ ֏ կամ համարժեք արտարժույթ" },
        { label: "Մարման ժամկետ", value: "Մինչև 180 ամիս" },
        { label: "Տոկոսադրույք", value: "Սկսած 8.2%-ից" }
      ],
      fullInfo: "Նախատեսված է խոշոր և միջին բիզնեսների մասշտաբային նախագծերի, հիմնական միջոցների ձեռքբերման և երկարաժամկետ ներդրումների իրականացման համար։"
    },
    {
      id: 6,
      image: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg",
      title: "Evoca GO",
      description: "Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:",
      details: [
        { label: "Սահմանաչափ", value: "Մինչև 500 մլն. ֏" },
        { label: "Մարման ժամկետ", value: "Մինչև 90 ամիս" },
        { label: "Տոկոսադրույք", value: "10.5%" },
        { label: "Արտոնյալ ժամկետ", value: "Մինչև 30 ամիս մայր գումարի համար" }
      ],
      fullInfo: "Evoca GO ծրագիրն իրականացվում է Եվրոպական ներդրումային բանկի հետ համատեղ՝ առաջարկելով արտոնյալ պայմաններ և երկարաժամկետ ֆինանսավորում բիզնեսին։"
    },
    {
      id: 7,
      image: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
      title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
      description: "Եթե Դուք ցանկանում եք ձեռք բերել ԷԱ սարքավորումներ և մեքենաներ կամ իրականացնել այլ Էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է:",
      details: [
        { label: "Սահմանաչափ", value: "Մինչև 500 մլն. ֏" },
        { label: "Մարման ժամկետ", value: "Մինչև 5 տարի" },
        { label: "Տոկոսադրույք", value: "Սկսած 9%-ից" }
      ],
      fullInfo: "Այս ծրագիրն օգնում է կրճատել էներգախնայողության ծախսերը՝ ձեռք բերելով արդիական էկոլոգիապես մաքուր սարքավորումներ և տեխնոլոգիաներ։"
    },
    {
      id: 8,
      image: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
      title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
      description: "Մի՛ օգտագործեք կուտակված խնայողությունները․ Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք։",
      details: [
        { label: "Ավանդի սահմանաչափ", value: "Մինչև ավանդի գումարի 95%" },
        { label: "Պարտատոմսի սահմանաչափ", value: "Մինչև պարտատոմսի գումարի 80%" }
      ],
      fullInfo: "Ստացեք անհրաժեշտ վարկային միջոցներ՝ առանց ձեր ավանդային կամ խնայողական հաշիվները փակելու, շարունակելով ստանալ տոկոսային եկամուտ։"
    },
    {
      id: 9,
      image: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
      title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
      description: "Եթե ցանկանում եք իրականացնել էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է:",
      details: [
        { label: "Առանց գրավի սահմանաչափ", value: "Մինչև 10 մլն. ֏" },
        { label: "Տոկոսադրույք ՎԷԷԿ", value: "9.5% (փաստացի մինչև 10%)" },
        { label: "Տոկոսադրույք ԷԱՆ", value: "10.25% (փաստացի մինչև 10.75%)" },
        { label: "Մարման ժամկետ", value: "Մինչև 120 ամիս" }
      ],
      fullInfo: "KfW գերմանական բանկի հետ համագործակցությամբ իրականացվող այս ծրագիրը տրամադրում է վարկեր կանաչ և վերականգնվող էներգիայի նախագծերի համար։"
    },
    {
      id: 10,
      image: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
      title: "Պարզ բիզնես վարկ",
      description: "Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով: Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում:",
      details: [
        { label: "Սահմանաչափ", value: "Մինչև 50 մլն. ֏ կամ համարժեք արտարժույթ" },
        { label: "Մարման ժամկետ", value: "Մինչև 60 ամիս" },
        { label: "Տոկոսադրույք", value: "Սկսած 7.5%-ից" }
      ],
      fullInfo: "Արագ և հարմարավետ վարկային պրոդուկտ անշարժ գույքի գրավադրմամբ՝ բիզնեսի ընդլայնման և նոր հնարավորությունների ստեղծման համար։"
    },
    {
      id: 11,
      image: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
      title: "Հաշվի վարկավորում",
      description: "Հանդիսանո՞ւմ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:",
      details: [
        { label: "Առավելագույն սահմանաչափ", value: "500 մլն ֏ կամ համարժեք արտարժույթ" },
        { label: "Մարման ժամկետ", value: "Առավելագույնը 12 ամիս" },
        { label: "Տոկոսադրույք", value: "Սկսած 7%-ից" }
      ],
      fullInfo: "Նախատեսված է բանկում հաշիվ ունեցող հաճախորդների համար՝ օվերդրաֆտային սկզբունքով ընթացիկ և հրատապ ծախսերը արագ հոգալու նպատակով։"
    },
    {
      id: 12,
      image: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
      title: "Վարկային գիծ",
      description: "Եթե Դուք ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ, ապա կարող եք օգտվել Evocabank-ի վերականգնվող և չվերականգնվող վարկային գծերից:",
      details: [
        { label: "Սահմանաչափ", value: "Մինչև 1.5 մլրդ. ֏" },
        { label: "Մարման ժամկետ", value: "Մինչև 5 տարի" },
        { label: "Տոկոսադրույք", value: "Սկսած 6%-ից" }
      ],
      fullInfo: "Ապահովեք ձեր բիզնեսի անընդհատությունը վարկային գծի միջոցով, որը թույլ է տալիս վերցնել և մարել գումարներ ըստ անհրաժեշտության։"
    },
    {
      id: 13,
      image: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
      title: "Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)",
      description: "Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:",
      details: [
        { label: "Սահմանաչափ", value: "Մինչև 1 մլրդ ֏ կամ համարժեք արտարժույթ" },
        { label: "Մարման ժամկետ", value: "Մինչև 120 ամիս" },
        { label: "Տոկոսադրույք / Սուբսիդավորում", value: "Սկսած 6% | Սուբսիդավորում՝ մինչև 6%" }
      ],
      fullInfo: "Պետական աջակցությամբ իրականացվող այս ծրագիրը տրամադրում է բարձր մատչելիություն արտադրական հզորությունների ընդլայնման համար։"
    },
    {
      id: 14,
      image: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
      title: "KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում",
      description: "Կատարե'ք Ձեր կապիտալ ներդրումները և իրականացրե'ք բիզնես գործունեության նպատակները Evocabank-ի հետ:",
      details: [
        { label: "Սահմանաչափ", value: "Մինչև 160 մլն. ֏" },
        { label: "Մարման ժամկետ", value: "Մինչև 60 ամիս" },
        { label: "Տոկոսադրույք", value: "Սկսած 9,5%-ից" }
      ],
      fullInfo: "ՄՓՄՁ սուբյեկտներին ուղղված այս վարկն ապահովում է հուսալի և երկարաժամկետ ֆինանսական հենք ձեր բիզնես նախաձեռնությունների համար։"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Purple Sub-Bar Header */}
        <div className="bg-[#6400dc] text-white py-3 px-8 text-sm font-bold shadow-sm">
          <div className="container mx-auto">
            Բիզնես վարկեր
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Վարկեր</span> &gt; <span className="text-gray-700 font-medium">Բիզնես վարկեր</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-10">
            Բիզնես վարկեր
          </h1>

          {/* Loans List */}
          <div className="space-y-12">
            {loans.map((loan) => (
              <div key={loan.id} className="bg-white border border-gray-100 rounded-[28px] p-6 md:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 hover:shadow-md transition">
                
                {/* Left side: Image */}
                <div className="lg:w-1/3 flex justify-center bg-gray-50 rounded-2xl p-4 w-full">
                  <img src={loan.image} alt={loan.title} className="max-h-56 object-contain rounded-xl" />
                </div>

                {/* Right side: Info */}
                <div className="lg:w-2/3 space-y-4 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                    {loan.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {loan.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 border-t border-b border-gray-100">
                    {loan.details.map((det, idx) => (
                      <div key={idx}>
                        <div className="text-sm md:text-lg font-black text-[#6400dc]">
                          {det.value}
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5">
                          {det.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Details Button */}
                  <div>
                    <button 
                      onClick={() => setSelectedLoan(loan)}
                      className="bg-purple-50 hover:bg-[#6400dc] hover:text-white text-[#6400dc] text-xs font-bold px-6 py-2.5 rounded-xl transition cursor-pointer"
                    >
                      Մանրամասն &gt;
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Detail Modal */}
      {selectedLoan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl space-y-6 text-left">
            <button 
              onClick={() => setSelectedLoan(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-black text-lg cursor-pointer font-bold"
            >
              ✕
            </button>
            <div className="flex justify-center bg-gray-50 p-4 rounded-2xl">
              <img src={selectedLoan.image} alt={selectedLoan.title} className="h-40 object-contain" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900">{selectedLoan.title}</h2>
            <p className="text-xs text-gray-700 leading-relaxed">{selectedLoan.fullInfo}</p>
            
            <div className="space-y-2 bg-purple-50 p-4 rounded-2xl">
              <h4 className="text-xs font-bold text-[#6400dc]">Հիմնական պայմաններ՝</h4>
              {selectedLoan.details.map((d, i) => (
                <div key={i} className="text-xs flex justify-between">
                  <span className="text-gray-600">{d.label}:</span>
                  <span className="font-bold text-neutral-900">{d.value}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setSelectedLoan(null)}
                className="bg-[#6400dc] text-white font-bold px-6 py-2 rounded-xl text-xs transition cursor-pointer"
              >
                Փակել
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}