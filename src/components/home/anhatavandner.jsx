import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

const depositsList = [
  {
    id: 1,
    title: "Դասական ավանդ",
    image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg",
    desc: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
    features: [
      { label: "Գումար", value: "100,000 ֏", prefix: "Սկսած" },
      { label: "Ժամկետ", value: "31-1,825 օր" },
      { label: "Տոկոսադրույք", value: "10.5% ֏", prefix: "մինչև" },
      { label: "Համալրման հնարավորություն", value: "100,000 ֏", prefix: "սկսած" }
    ],
    detailsInfo: {
      about: "Դասական ավանդը հիանալի տարբերակ է խնայողություններն ապահով պահելու և կայուն եկամուտ ստանալու համար: Ավանդի տոկոսագումարները կարող եք ստանալ ամսական կամ ժամկետի ավարտին:",
      conditions: [
        "Ավանդի նվազագույն գումար՝ 100,000 ՀՀ դրամ",
        "Ավանդի ժամկետը՝ 31-ից 1,825 օր",
        "Տոկոսագումարների հաշվարկը կատարվում է օրական կտրվածքով",
        "Ավանդը կարող է համալրվել ներդրման պահից սկսած"
      ]
    }
  },
  {
    id: 2,
    title: "Մանկական ավանդ",
    image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg",
    desc: "Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունում ենք ֆիզիկական անձանցից` երեխաների անունով ներդնելու պայմանով:",
    features: [
      { label: "Գումար", value: "100,000 ֏", prefix: "Սկսած" },
      { label: "Ժամկետ", value: "18 լրանալը", prefix: "մինչև" },
      { label: "Տոկոսադրույք", value: "9.5% ֏" },
      { label: "Համալրման հնարավորություն", value: "40,000 ֏", prefix: "սկսած" }
    ],
    detailsInfo: {
      about: "«Մանկական» ավանդը ներդրվում է օգուտ երեխայի՝ մինչև վերջինիս 18 տարին լրանալը: Այն թույլ է տալիս կուտակել անհրաժեշտ միջոցներ երեխայի ուսման, ապագա ծախսերի կամ մեկնարկային կապիտալի համար:",
      conditions: [
        "Ավանդատու կարող է հանդիսանալ ծնողը, խնամակալը կամ ցանկացած երրորդ անձ",
        "Ավանդի նվազագույն սկզբնական գումար՝ 100,000 ՀՀ դրամ",
        "Ավանդի պայմանագիրը գործում է մինչև երեխայի 18 տարեկան դառնալը",
        "Պարբերական համալրման հնարավորություն"
      ]
    }
  },
  {
    id: 3,
    title: "Ավանդ Evoca Online",
    image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg",
    desc: "Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մենք բոլոր փաստաթղթերը կուղարկենք Ձեր էլ. հասցեին:",
    features: [
      { label: "Գումար", value: "100,000 ֏", prefix: "Սկսած" },
      { label: "Ժամկետ", value: "31-1,825 օր" },
      { label: "Տոկոսադրույք", value: "10.75% ֏", prefix: "մինչև" }
    ],
    detailsInfo: {
      about: "EvocaONLINE ավանդը հարմար է նրանց համար, ովքեր գնահատում են իրենց ժամանակը: Ավանդը ձևակերպվում է առցանց՝ EvocaTOUCH հավելվածի կամ EvocaONLINE համակարգի միջոցով՝ ավելի բարձր տոկոսադրույքով:",
      conditions: [
        "Ձևակերպումը 100% առցանց՝ 24/7 ռեժիմով",
        "Ավելի բարձր տոկոսադրույք, քան մասնաճյուղում ձևակերպելիս",
        "Նվազագույն գումար՝ 100,000 ՀՀ դրամ",
        "Էլեկտրոնային պայմանագրի ստացում էլ. փոստին"
      ]
    }
  }
];

export default function AnhatAvandner() {
  const [activeTab, setActiveTab] = useState('deposits'); // 'deposits' կամ 'important'
  const [selectedDeposit, setSelectedDeposit] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Sub-navbar #6400dc */}
        <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
            <span 
              onClick={() => { setSelectedDeposit(null); setActiveTab('deposits'); }} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'deposits' && !selectedDeposit ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Ավանդներ
            </span>
            <span 
              onClick={() => { setSelectedDeposit(null); setActiveTab('important'); }} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'important' && !selectedDeposit ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Կարևոր տեղեկատվություն
            </span>
          </div>
        </div>

        {selectedDeposit ? (
          /* ================= 1. ԱՎԱՆԴԻ ՄԱՆՐԱՄԱՍՆ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => setSelectedDeposit(null)} 
                className="text-xs font-bold text-gray-500 hover:text-[#6400dc] flex items-center gap-1 cursor-pointer"
              >
                ← Վերադառնալ
              </button>
              <div className="text-xs text-gray-400 flex items-center gap-2">
                <span>🏠</span> &gt; <span>Անհատ</span> &gt; 
                <span onClick={() => setSelectedDeposit(null)} className="cursor-pointer hover:text-[#6400dc]">Ավանդներ</span> &gt; 
                <span className="text-gray-700 font-medium">{selectedDeposit.title}</span>
              </div>
            </div>

            {/* Top Banner */}
            <div className="bg-[#f5efff] rounded-[32px] p-8 md:p-12 mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-sm">
              <div className="md:col-span-7 space-y-4">
                <h1 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight">
                  {selectedDeposit.title}
                </h1>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {selectedDeposit.desc}
                </p>
                <button className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs px-8 py-3.5 rounded-full transition shadow-md cursor-pointer mt-4">
                  Ներդնել ավանդ
                </button>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <img 
                  src={selectedDeposit.image} 
                  alt={selectedDeposit.title} 
                  className="max-h-64 object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h3 className="text-xl font-extrabold text-neutral-900 mb-3">
                    Ավանդի մասին
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedDeposit.detailsInfo.about}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-xl font-extrabold text-neutral-900 mb-4">
                    Հիմնական պայմաններ
                  </h3>
                  <ul className="space-y-3">
                    {selectedDeposit.detailsInfo.conditions.map((cond, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-700">
                        <span className="text-[#6400dc] font-bold text-base">•</span>
                        <span>{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Box - Key Stats */}
              <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-6">
                <h4 className="font-bold text-neutral-900 border-b border-gray-100 pb-3">
                  Ավանդի ցուցանիշներ
                </h4>
                <div className="space-y-4">
                  {selectedDeposit.features.map((feat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-xs text-gray-400 font-medium">{feat.label}</div>
                      <div className="text-lg font-black text-[#6400dc]">
                        {feat.prefix && <span className="text-xs font-normal text-gray-500 mr-1">{feat.prefix}</span>}
                        {feat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        ) : activeTab === 'important' ? (
          /* ================= 2. ԿԱՐԵՎՈՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span className="cursor-pointer hover:text-[#6400dc]" onClick={() => setActiveTab('deposits')}>Ավանդներ</span> &gt; <span className="text-gray-700 font-medium">Կարևոր տեղեկատվություն</span>
            </div>

            <h1 className="text-3xl font-black text-neutral-900 mb-8">
              Կարևոր տեղեկատվություն
            </h1>

            <div className="space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed mb-16 bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="font-extrabold text-neutral-900 text-base mb-4">Ընդհանուր դրույթներ</h3>
              <ol className="space-y-3 list-decimal pl-5">
                <li>«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և ֆիզիկական անձանցից (ռեզիդենտ, ոչ ռեզիդենտ) ժամկետային ավանդների (այսուհետ՝ Ավանդ) ներգրավում:</li>
                <li>Ավանդները ներգրավվում են՝ ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:</li>
                <li>Ավանդներն ընդունվում են ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:</li>
                <li>Ավանդների դիմաց հաշվեգրվող տոկոսագումարների վճարումն իրականացվում է ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:</li>
                <li>Ֆիզիկական անձ հաճախորդի կողմից Ավանդի ներդրումը ձևակերպվում է Բանկի կողմից սահմանված ձևի Հայտ-պայմանագիրը ստորագրելով և/կամ էլեկտրոնային հայտ ներկայացնելով:</li>
                <li>Հայտ-պայմանագրում/էլ. հայտում նշվում է Ավանդի տեսակը, գումարը, արժույթը, ժամկետը, տոկոսադրույքը և ըստ անհրաժեշտության այլ պայմաններ:</li>
                <li>
                  Ավանդների ներդրման համար գործառնական օր է համարվում՝
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Գլխամասում և մասնաճյուղերում ներդրվող ավանդների գծով` տվյալ ստորաբաժանման Հաճախորդների սպասարկման համար սահմանված ժամերը,</li>
                    <li>Հեռակառավարման համակարգերի միջոցով ներդրվող ավանդների համար` տվյալ օրացուցային օրվա 24-ժամյա ժամանակահատվածը</li>
                  </ul>
                </li>
                <li>Ավանդների ներդրման և համալրման համար տվյալ գործառնական օրվա ընթացքում ներկայացված հայտերը կատարվում են միևնույն գործառնական օրվա ընթացքում։</li>
                <li>Ֆիզիկական անձ հանդիսացող Ավանդատուների ավանդները երաշխավորվում են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի: Երաշխավորված ավանդների չափերին Հաճախորդները կարող են ծանոթանալ Բանկի ինտերնետային կայքում, Ավանդների տեղեկատվական ամփոփագրում, ինչպես նաև Ավանդ ներդնելու դեպքում վերջինիս տրամադրվող ծանուցման միջոցով:</li>
                <li>Ավանդի գումարի վերադարձը կատարվում է Ավանդի պայմանագրի վերջին օրը, իսկ եթե տվյալ օրը ոչ աշխատանքային է, ապա հաջորդ աշխատանքային օրը:</li>
                <li>Հաշվեգրված տոկոսների վճարումը իրականացվում է համաձայն Հաճախորդի կողմից Հայտ-պայմանագրում/Պայմանագրում նշված տոկոսների վճարման պարբերականության:</li>
                <li>
                  Ավանդների հետ կապված կանխիկ գործառնությունների միջնորդավճարները սահմանվում են Բանկի «Սակագներով և դրույքներով» (TRM14-0002-02/1)-ով սահմանված դրամարկղային գործառնությունների սակագներով, բացառությամբ ՌԴ ռուբլով ավանդների:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը վերադարձվում է կանխիկ ՌԴ ռուբլով, իսկ անկանխիկ ՌԴ ռուբլով ներդրված Ավանդը վերադարձվում է անկանխիկ ՌԴ ռուբլով՝ առանց միջնորդավճարների գանձման:</li>
                    <li>Անկանխիկ ՌԴ ռուբլով ներդրված Ավանդը կանխիկ ՌԴ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը ՌԴ ռուբլու կանխիկացման համար սահմանված միջնորդավճարը:</li>
                    <li>Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը անկանխիկ ՌԴ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը կանխիկ ՌԴ ռուբլու մուտքագրման համար սահմանված միջնորդավճարը:</li>
                  </ul>
                </li>
                <li>Արտարժույթով ներդրված ավանդների դիմաց հաշվեգրված տոկոսագումարները ավանդատուի ցանկությամբ կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով` հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար Բանկի կողմից սահմանված անկանխիկ առքի փոխարժեքը:</li>
              </ol>
            </div>
          </main>
        ) : (
          /* ================= 3. ԱՎԱՆԴՆԵՐԻ ՑԱՆԿԻ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2 text-left">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span className="text-gray-700 font-medium">Ավանդներ</span>
            </div>

            <h1 className="text-3xl font-black text-neutral-900 mb-8 text-left">
              Ավանդներ
            </h1>

            {/* Deposit Cards List */}
            <div className="space-y-12 mb-16">
              {depositsList.map((deposit) => (
                <div 
                  key={deposit.id}
                  className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Image */}
                  <div className="lg:col-span-5 rounded-3xl overflow-hidden flex items-center justify-center bg-gray-50 p-4 aspect-[16/10]">
                    <img 
                      src={deposit.image} 
                      alt={deposit.title} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                      {deposit.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {deposit.desc}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-gray-100">
                      {deposit.features.map((feat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-[11px] text-gray-400 font-medium">
                            {feat.prefix && <span className="mr-1">{feat.prefix}</span>}
                          </div>
                          <div className="text-base md:text-xl font-black text-[#6400dc]">
                            {feat.value}
                          </div>
                          <div className="text-[11px] text-gray-400 font-medium">
                            {feat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="pt-2">
                      <button 
                        onClick={() => {
                          setSelectedDeposit(deposit);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-purple-50 hover:bg-purple-100 text-[#6400dc] font-bold text-xs px-6 py-3 rounded-full transition-all cursor-pointer flex items-center gap-1"
                      >
                        Մանրամասն &gt;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}