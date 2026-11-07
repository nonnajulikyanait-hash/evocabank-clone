import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Norutyunner() {
  const navigate = useNavigate();
  const [selectedNews, setSelectedNews] = useState(null);

  const topNews = {
    id: 'top-1',
    category: 'Բանկային',
    title: 'Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը',
    desc: 'IFC-ն Evocabank-ին տրամադրել է 10 մլն դոլարի վարկ` Հայաստանում ՄՓՄՁ-ներին աջակցելու, աշխատատեղեր ստեղծելու և բնապահպանական ծրագրեր ֆինանսավորելու համար։',
    date: '26.10.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17930164747919/780x585.png',
    content: 'IFC-ն Evocabank-ին տրամադրել է 10 մլն դոլարի վարկ` Հայաստանում ՄՓՄՁ-ներին աջակցելու, աշխատատեղեր ստեղծելու և բնապահպանական ծրագրեր ֆինանսավորելու համար։ Ծրագրի շրջանակում ֆինանսավորումը կուղղվի կանաչ նախագծերի, էներգաարդյունավետ տեխնոլոգիաների ներդրմանը և փոքր ու միջին բիզնեսի կայուն զարգացմանը։'
  };

  const mainNews = {
    id: 'main-amx',
    category: 'Մրցանակներ',
    title: 'Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր',
    desc: 'Evocabank-ը AMX AWARDS 2026-ի ընթացքում արժանացել է «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակին։',
    date: '16.06.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png',
    content: 'Տեղի ունեցավ AMX AWARDS 2026 ամենամյա մրցանակաբաշխությունը, որը համախմբեց Հայաստանի ֆինանսական ոլորտի առաջատար կազմակերպություններին։ Մրցանակաբաշխության շրջանակում Հայաստանի կենտրոնական դեպոզիտարիան Evocabank-ին շնորհեց «Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր» մրցանակը։ Այս մրցանակը ևս մեկ անգամ հաստատում է Evocabank-ի հետևողական աշխատանքը թվային փոխակերպման ուղղությամբ։'
  };

  const sideNews = [
    {
      id: 'side-1',
      category: 'Մրցանակներ',
      title: 'Evocabank. Lավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ…',
      date: '08.05.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png',
      content: '«Լավագույն ՓՄՁ բանկը Հայաստանում» 2-րդ տարին անընդմեջ։ Փոքր և միջին ձեռնարկությունները Հայաստանի տնտեսության հիմքն են։ Evocabank-ում մենք շարունակաբար զարգացնում ենք մեր ֆինանսական գործիքներն ու ծառայությունները։'
    },
    {
      id: 'side-2',
      category: 'Պրոդուկտներ',
      title: 'Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում',
      date: '27.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png',
      innerBanner: 'https://www.evoca.am/file_manager/invest-copy-600x315%20(1).png',
      content: 'Ֆինանսները դառնում են ավելի հասանելի և վերահսկելի EvocaTOUCH-ի միջոցով։ Այժմ կարող ես ավելացնել քո Binance-ի հաշիվը EvocaTOUCH-ում և մեկ հարթակում տեսնել մնացորդը, փոփոխությունները և ընդհանուր պատկերը։'
    },
    {
      id: 'side-3',
      category: 'Հարցազրույցներ',
      title: 'Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times…',
      date: '25.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17720089281517/450x295.png',
      content: 'Evocabank-ի Վարչության նախագահ Կարեն Եղիազարյանը միջազգային Los Angeles Times ամսագրի հետ հարցազրույցում անդրադարձել է Բանկի «mobile-first» ձևաչափին, թվային լուծումների կարևորությանը և հաճախորդակենտրոն մոդելին։'
    },
    {
      id: 'side-4',
      category: 'Բանկային',
      title: 'Evocabank-ի «Աջափնյակ» մասնաճյուղն արդեն բաց է',
      date: '12.01.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg',
      content: 'Այսուհետ Evocabank-ի հաճախորդները կսպասարկվեն նորաբաց «Աջափնյակ» մասնաճյուղի հարմարավետ և նորագույն տեխնիկայով հագեցած սրահում։ Աշխատանքային ժամերն են՝ երկուշաբթիից ուրբաթ 09:30–17:00։'
    }
  ];

  const middleNews = {
    id: 'mid-lock',
    category: 'Բանկային',
    title: 'Գործարքների արգելափակում 1 կոճակով',
    desc: 'Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը։',
    date: '01.06.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png',
    content: 'Այսօր թվային աշխարհում խարդախության փորձերը գնալով ավելի բազմազան են դառնում։ Այդ պատճառով EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» գործիքը, որը հնարավորություն է տալիս ընդամենը մեկ կոճակով ժամանակավորապես արգելափակել առանձին կամ բոլոր օնլայն բանկային ծառայությունները։'
  };

  const bottomNews = [
    {
      id: 'bot-1',
      category: 'Կենսակերպ',
      title: 'Evocabank-ը նոր գույներ է տալիս մեր քաղաքին',
      date: '20.05.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17812556342544/438x328.png',
      content: 'Երևանն ունի բազմաթիվ գեղեցիկ անկյուններ, որոնք շուտով բոլորովին նոր շունչ կստանան։ Evocabank-ը և Կենտրոն վարչական շրջանը կնքեցին համագործակցության հուշագիր՝ միավորվելով Երևանի հանրային տարածքները վերափոխելու համար։'
    },
    {
      id: 'bot-2',
      category: 'Բանկային',
      title: 'ESG կառավարման համակարգը Evocabank-ում',
      date: '15.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png',
      content: 'Evocabank-ը կարևորում է բնապահպանական և սոցիալական սկզբունքների ներդրումը՝ դրանք դիտարկելով որպես պատասխանատու և կայուն բանկային գործունեության կարևոր գործոն։'
    },
    {
      id: 'bot-3',
      category: 'Բանկային',
      title: 'Evocabank-ը միացել է AmCham Armenia-ին',
      date: '10.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png',
      content: 'AmCham Armenia-ն, հանդիսանալով երկրի առաջատար բիզնես ասոցիացիան, 25 տարի շարունակ համախմբում է տնտեսության տարբեր ոլորտները ներկայացնող առաջատար ընկերությունների։'
    }
  ];

  const handleOpenNews = (item) => {
    setSelectedNews(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {selectedNews ? (
          <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-left">
            <div className="flex items-center gap-3 mb-6 text-xs text-gray-400 flex-wrap">
              <button 
                onClick={() => setSelectedNews(null)} 
                className="font-bold text-gray-500 hover:text-[#6400dc] flex items-center gap-1 cursor-pointer transition"
              >
                ← Վերադառնալ
              </button>
              <span>&gt;</span>
              <span>Անհատ</span>
              <span>&gt;</span>
              <span onClick={() => setSelectedNews(null)} className="cursor-pointer hover:text-[#6400dc]">
                Նորություններ
              </span>
              <span>&gt;</span>
              <span className="text-gray-700 font-medium truncate max-w-[200px]">{selectedNews.title}</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold text-[#6400dc] bg-purple-50 px-3 py-1 rounded-full">
                  {selectedNews.category}
                </span>
                {selectedNews.date && (
                  <span className="text-xs text-gray-400 font-medium">{selectedNews.date}</span>
                )}
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                {selectedNews.title}
              </h1>

              <div className="rounded-3xl overflow-hidden bg-gray-50 max-h-[480px]">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed space-y-4 whitespace-pre-line border-t border-gray-100 pt-6">
                {selectedNews.content}
              </div>

              {selectedNews.innerBanner && (
                <div className="my-6 rounded-2xl overflow-hidden">
                  <img src={selectedNews.innerBanner} alt="Crypto banner" className="w-full object-cover" />
                </div>
              )}
            </div>
          </main>
        ) : (
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4 text-left">
              <div className="text-xs text-gray-400 mb-3 flex items-center gap-2 flex-wrap">
                <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Նորություններ</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                Նորություններ
              </h1>

              <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-6 text-xs font-semibold text-gray-600">
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Գլխավոր</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Բանկային</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Հարցազրույցներ</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Պրոդուկտներ</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Նորարարություններ</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Կենսակերպ</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Մրցանակներ</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">CSR</button>
                <button className="bg-gray-100 px-3 sm:px-4 py-2 rounded-full hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">Այլ</button>
                <button 
                  onClick={() => navigate('/bolor-norutyunner')}
                  className="bg-[#6400dc] text-white px-4 sm:px-5 py-2 rounded-full font-bold ml-auto cursor-pointer shadow-sm hover:opacity-90 transition shrink-0"
                >
                  Բոլորը &gt;
                </button>
              </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-12">
              
              {/* TOP FEATURE */}
              <div 
                onClick={() => handleOpenNews(topNews)}
                className="bg-[#f8f9fa] rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 cursor-pointer group hover:shadow-lg transition duration-300 text-left border border-gray-100"
              >
                <div className="lg:w-1/2 space-y-4">
                  <span className="text-xs font-bold text-[#6400dc] bg-purple-100 px-3 py-1 rounded-full inline-block">
                    {topNews.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 leading-tight group-hover:text-[#6400dc] transition">
                    {topNews.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {topNews.desc}
                  </p>
                  <div className="pt-4 text-xs font-bold text-gray-400">
                    {topNews.date}
                  </div>
                </div>
                <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-sm w-full">
                  <img 
                    src={topNews.image} 
                    alt={topNews.title} 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </div>

              {/* MAIN & SIDE GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                <div 
                  onClick={() => handleOpenNews(mainNews)}
                  className="lg:col-span-6 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer group flex flex-col justify-between h-full"
                >
                  <div className="p-4 bg-gray-50 rounded-b-3xl">
                    <img 
                      src={mainNews.image} 
                      alt={mainNews.title} 
                      className="w-full h-auto rounded-2xl object-cover" 
                    />
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2">
                      {mainNews.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-neutral-900 leading-snug group-hover:text-[#6400dc] transition">
                      {mainNews.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {mainNews.desc}
                    </p>
                    <div className="text-xs text-gray-400 pt-2 font-medium">
                      {mainNews.date}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sideNews.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => handleOpenNews(item)}
                      className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="h-40 overflow-hidden bg-gray-50">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <span className="text-[11px] font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                          {item.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                          {item.title}
                        </h4>
                        <div className="text-[10px] text-gray-400 pt-1">
                          {item.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MIDDLE BANNER */}
              <div className="bg-[#f8f9fa] rounded-3xl p-6 md:p-8 border border-gray-100">
                <div 
                  onClick={() => handleOpenNews(middleNews)}
                  className="flex flex-col lg:flex-row items-center gap-8 cursor-pointer group text-left"
                >
                  <div className="lg:w-1/2 rounded-2xl overflow-hidden w-full">
                    <img 
                      src={middleNews.image} 
                      alt={middleNews.title} 
                      className="w-full h-auto object-cover rounded-2xl" 
                    />
                  </div>
                  <div className="lg:w-1/2 space-y-4">
                    <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2">
                      {middleNews.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 leading-snug group-hover:text-[#6400dc] transition">
                      {middleNews.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {middleNews.desc}
                    </p>
                    <div className="text-xs text-gray-400 font-medium pt-2">
                      {middleNews.date}
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gray-200/60 rounded-xl p-3 text-center text-xs font-bold text-gray-600 tracking-wide uppercase">
                  Կարևոր
                </div>
              </div>

              {/* BOTTOM SECTION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {bottomNews.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleOpenNews(item)}
                    className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 overflow-hidden bg-gray-50">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                          {item.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>

            </main>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}