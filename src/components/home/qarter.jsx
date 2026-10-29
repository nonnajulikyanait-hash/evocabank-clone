import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

const cardsList = [
  {
    id: 1,
    title: "Evoca Travel Card",
    image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
    desc: "Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը։",
    categories: ['Mastercard'],
    features: [
      { label: "Cashback արտասահմանում իրականացրած վճարումների համար", value: "1.5%", prefix: "Մինչև" },
      { label: "Lounge Key սրահներ քեզ և հյուրերիդ համար", value: "6 մուտք", prefix: "Անվճար" },
      { label: "Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար", value: "6 անգամ", prefix: "Անվճար" },
      { label: "Քարտի տարեկան սպասարկում", value: "16․000֏" }
    ]
  },
  {
    id: 2,
    title: "Evoca Visa Platinum",
    image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
    desc: "Պրեմիում առավելություններ պրեմիում քարտով։",
    categories: ['Պրեմիում', 'VISA'],
    features: [
      { label: "Սպասարկման վճար", value: "30.000 ֏" },
      { label: "Օդանավակայանների բիզնես սրահներ", value: "6 մուտք", prefix: "Անվճար" }
    ]
  },
  {
    id: 3,
    title: "Wilco Visa Infinite",
    image: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png",
    desc: "Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ։",
    categories: ['Պրեմիում', 'VISA'],
    features: []
  },
  {
    id: 4,
    title: "Evoca Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
    desc: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:)",
    categories: ['Նվեր քարտեր'],
    features: []
  },
  {
    id: 5,
    title: "Digital Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
    desc: "Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող:",
    categories: ['Նվեր քարտեր', 'Թվային քարտեր', 'Mastercard'],
    features: []
  },
  {
    id: 6,
    title: "Visa Infinite",
    image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
    desc: "Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է։",
    categories: ['Պրեմիում', 'VISA'],
    features: [
      { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "1%" },
      { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "1.2%" },
      { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1.5%", prefix: "min 2,500 ֏" },
      { label: "Տարեկան սպասարկում", value: "100,000 ֏" }
    ]
  },
  {
    id: 7,
    title: "Visa Vision",
    image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
    desc: "Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:)",
    categories: ['VISA'],
    features: []
  },
  {
    id: 8,
    title: "Mastercard World Digital",
    image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
    desc: "Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։",
    categories: ['Թվային քարտեր', 'Mastercard'],
    features: [
      { label: "Կանխիկացում բանկի բանկոմատներից", value: "2%" },
      { label: "Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից", value: "2.5%" }
    ]
  },
  {
    id: 9,
    title: "UnionPay Business Platinum",
    image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
    desc: "Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:",
    categories: ['Պրեմիում', 'UnionPay'],
    features: [
      { label: "Կանխիկացում", value: "0.5%" },
      { label: "Քարտի ժամկետ", value: "5 տարի" },
      { label: "Տարեկան սպասարկման վճար", value: "15,000 ֏" }
    ]
  },
  {
    id: 10,
    title: "MyLer Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
    desc: "Մեկ քարտ, անսահմանափակ արկածներ:)",
    categories: ['Նվեր քարտեր', 'arca'],
    features: []
  },
  {
    id: 11,
    title: "UnionPay Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
    desc: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:",
    categories: ['UnionPay'],
    features: [
      { label: "Կանխիկացում", value: "0.5%" },
      { label: "Քարտի ժամկետ", value: "5 տարի" },
      { label: "Տարեկան սպասարկման վճար", value: "15,000 ֏" }
    ]
  },
  {
    id: 12,
    title: "4U.am Gift card",
    image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
    desc: "Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր։",
    categories: ['Նվեր քարտեր', 'arca'],
    features: []
  },
  {
    id: 13,
    title: "Mastercard Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png",
    desc: "Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով։",
    categories: ['Mastercard'],
    features: [
      { label: "Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏", value: "0%" },
      { label: "Տարեկան սպասարկում", value: "15․000 ֏" }
    ]
  },
  {
    id: 14,
    title: "Mastercard Standard",
    image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png",
    desc: "Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։",
    categories: ['Mastercard'],
    features: [
      { label: "Քարտի տարեկան սպասարկում", value: "5000 ֏" }
    ]
  },
  {
    id: 15,
    title: "Visa Digital",
    image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png",
    desc: "Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով:",
    categories: ['Թվային քարտեր', 'VISA'],
    features: [
      { label: "Տարեկան սպասարկում", value: "1000 ֏" }
    ]
  },
  {
    id: 16,
    title: "Visa Classic",
    image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png",
    desc: "Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով:",
    categories: ['VISA'],
    features: [
      { label: "Տարեկան սպասարկում", value: "5,000 ֏" }
    ]
  },
  {
    id: 17,
    title: "Arca Classic",
    image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png",
    desc: "Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի։",
    categories: ['arca'],
    features: [
      { label: "Տարեկան սպասարկում", value: "1500 ֏" }
    ]
  },
  {
    id: 18,
    title: "Arca-UnionPay",
    image: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png",
    desc: "Մեկ քարտ, բազմաթիվ հնարավորություններ:",
    categories: ['arca', 'UnionPay'],
    features: [
      { label: "տարեկան (ամսական՝ 250֏)", value: "2,500֏" }
    ]
  },
  {
    id: 19,
    title: "Visa Business",
    image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png",
    desc: "Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով։",
    categories: ['VISA'],
    features: []
  },
  {
    id: 20,
    title: "Dalma Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
    desc: "Նվեր ընտրելն այլևս դժվար չէ:)",
    categories: ['Նվեր քարտեր'],
    features: []
  },
  {
    id: 21,
    title: "Rio Gift Card",
    image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
    desc: "Ամեն ինչ մեկ նվեր քարտում",
    categories: ['Նվեր քարտեր'],
    features: []
  },
  {
    id: 22,
    title: "Visa Gold",
    image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png",
    desc: "Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից",
    categories: ['VISA'],
    features: [
      { label: "Տարեկան սպասարկում", value: "15,000 ֏" }
    ]
  }
];

export default function Qarter() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [activeTab, setActiveTab] = useState('about');
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  const filteredCards = activeFilter === 'Բոլորը'
    ? cardsList
    : cardsList.filter(card => card.categories && card.categories.includes(activeFilter));

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const filterButtons = ['Բոլորը', 'Պրեմիում', 'Նվեր քարտեր', 'Թվային քարտեր', 'arca', 'VISA', 'Mastercard', 'UnionPay'];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Purple Sub-bar #6400dc */}
        <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
            <span 
              onClick={() => setSelectedCard(null)} 
              className="text-white border-b-2 border-white pb-1 cursor-pointer"
            >
              Քարտեր
            </span>
            <span className="text-white opacity-80 hover:opacity-100 cursor-pointer">Քարտերի տրամադրում և սպասարկում</span>
            <span className="text-white opacity-80 hover:opacity-100 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
            <span className="text-white opacity-80 hover:opacity-100 cursor-pointer">Evoca Benefits</span>
          </div>
        </div>

        {selectedCard ? (
          /* ================= ՔԱՐՏԻ ՄԱՆՐԱՄԱՍՆ ԷՋԸ ================= */
          <div>
            {/* Banner Section */}
            <div className="relative bg-[#e6d2ff] text-neutral-900 overflow-hidden py-16 px-4 md:px-12 rounded-b-[40px] shadow-sm">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4 text-left">
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900">
                    {selectedCard.title}
                  </h1>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
                    {selectedCard.desc}
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={selectedCard.image} 
                    alt={selectedCard.title} 
                    className="max-h-72 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => setSelectedCard(null)} 
                  className="text-xs font-bold text-gray-500 hover:text-[#6400dc] flex items-center gap-1 cursor-pointer"
                >
                  ← Վերադառնալ
                </button>
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <span>🏠</span> &gt; <span>Անհատ</span> &gt; 
                  <span onClick={() => setSelectedCard(null)} className="cursor-pointer hover:text-[#6400dc]">Քարտեր</span> &gt; 
                  <span className="text-gray-700 font-medium">{selectedCard.title}</span>
                </div>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Tabs Info */}
                <div className="lg:col-span-8 space-y-6 text-left">
                  <div className="flex border-b border-gray-200 gap-8 text-sm font-bold">
                    <button 
                      onClick={() => setActiveTab('about')}
                      className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'about' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
                    >
                      Քարտի մասին
                    </button>
                    <button 
                      onClick={() => setActiveTab('conditions')}
                      className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'conditions' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
                    >
                      Պայմաններ
                    </button>
                    <button 
                      onClick={() => setActiveTab('documents')}
                      className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'documents' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
                    >
                      Պահանջվող փաստաթղթեր
                    </button>
                  </div>

                  {activeTab === 'about' && (
                    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                      <p>{selectedCard.desc}</p>
                      <p>Evocabank-ի քարտերն ապահովում են առավելագույն հարմարավետություն, արագություն և ապահովություն Ձեր բոլոր անկանխիկ գործարքների համար ողջ աշխարհում։</p>
                    </div>
                  )}

                  {activeTab === 'conditions' && (
                    <div className="space-y-3 text-sm text-gray-700">
                      <p className="font-semibold text-neutral-900">Տվյալ քարտատեսակի ընդհանուր պայմաններ․</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Քարտի արժույթը՝ ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</li>
                        <li>Գործողության ժամկետը՝ 3-5 տարի</li>
                        <li>Անհպում (Contactless) վճարումների հնարավորություն</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'documents' && (
                    <div className="space-y-3 text-sm text-gray-700">
                      <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                        <li>Անձնագիր կամ նույնականացման քարտ (ID Card)</li>
                        <li>Հանրային ծառայությունների համարանիշ (Սոց. քարտ)</li>
                      </ol>
                    </div>
                  )}
                </div>

                {/* Right Summary Box */}
                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-24 space-y-4">
                  <div className="flex justify-center">
                    <span className="w-10 h-10 rounded-full bg-[#6400dc] text-white flex items-center justify-center font-bold text-base">
                      💳
                    </span>
                  </div>

                  {selectedCard.features && selectedCard.features.length > 0 ? (
                    <div className="space-y-3 border-t border-b border-gray-100 py-4 text-left text-xs">
                      {selectedCard.features.map((feat, idx) => (
                        <div key={idx} className="pt-1">
                          <div className="text-lg md:text-xl font-black text-[#6400dc]">
                            {feat.value}
                          </div>
                          <div className="text-[11px] text-gray-400 font-medium">
                            {feat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400 border-t border-b border-gray-100 py-4 text-center">
                      Շահավետ պայմաններ Evocabank-ից
                    </div>
                  )}

                  <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs py-3.5 rounded-full transition shadow-md cursor-pointer">
                    Պատվիրել քարտը
                  </button>
                </div>

              </div>
            </div>

            {/* ================= CARDS SWIPER / SLIDER SECTION ================= */}
            <div className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-100">
              <h2 className="text-2xl font-black text-neutral-900 mb-6 text-left">
                Այլ քարտեր
              </h2>

              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-200 snap-x">
                {cardsList
                  .filter(c => c.id !== selectedCard.id)
                  .map(card => (
                    <div
                      key={card.id}
                      onClick={() => {
                        setSelectedCard(card);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="min-w-[260px] max-w-[260px] bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer snap-start flex-shrink-0 text-left flex flex-col justify-between"
                    >
                      <div className="h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-2xl p-3">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-extrabold text-neutral-900 text-sm line-clamp-1">
                          {card.title}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                          {card.desc}
                        </p>
                        <span className="text-[#6400dc] font-bold text-xs inline-block pt-2">
                          Մանրամասն &gt;
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Bottom Mobile Section */}
            <EvocaOnlineMobile />
          </div>
        ) : (
          /* ================= ՔԱՐՏԵՐԻ ՑԱՆԿԻ ԷՋԸ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2 text-left">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span className="text-gray-700 font-medium">Քարտեր</span>
            </div>

            <h1 className="text-3xl font-black text-neutral-900 mb-8 text-left">
              Քարտեր
            </h1>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              {filterButtons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => { setActiveFilter(btn); setCurrentPage(1); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === btn
                      ? 'bg-[#6400dc] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="space-y-10 mb-16">
              {currentCards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 rounded-3xl overflow-hidden flex items-center justify-center aspect-[16/10]">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <div className="lg:col-span-8 space-y-5 text-left">
                    <h3 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {card.desc}
                    </p>

                    {card.features && card.features.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2 border-t border-gray-100">
                        {card.features.map((feat, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="text-base md:text-xl font-black text-[#6400dc]">
                              {feat.value}
                            </div>
                            <div className="text-[11px] text-gray-400 font-medium">
                              {feat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <button 
                        onClick={() => {
                          setSelectedCard(card);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-purple-50 hover:bg-purple-100 text-[#6400dc] font-bold text-xs px-6 py-3 rounded-full transition-all cursor-pointer"
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