import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Gortsynkerner() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // 15 գործընկերների լոգոները
  const partners = [
    { id: 1, name: 'Partner 1', img: 'https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png' },
    { id: 2, name: 'Partner 2', img: 'https://www.evoca.am/images-cache/partners/1/16104604109064/185x80_grayscale.png' },
    { id: 3, name: 'Partner 3', img: 'https://www.evoca.am/images-cache/partners/1/16104604382658/185x80_grayscale.png' },
    { id: 4, name: 'Partner 4', img: 'https://www.evoca.am/images-cache/partners/1/17104032198171/185x80_grayscale.png' },
    { id: 5, name: 'Partner 5', img: 'https://www.evoca.am/images-cache/partners/1/17077436606929/185x80_grayscale.png' },
    { id: 6, name: 'Partner 6', img: 'https://www.evoca.am/images-cache/partners/1/17107493820339/185x80_grayscale.png' },
    { id: 7, name: 'Partner 7', img: 'https://www.evoca.am/images-cache/partners/1/17072192942611/185x80_grayscale.png' },
    { id: 8, name: 'Partner 8', img: 'https://www.evoca.am/images-cache/partners/1/17072192635138/185x80_grayscale.png' },
    { id: 9, name: 'Partner 9', img: 'https://www.evoca.am/images-cache/partners/1/17072192435541/185x80_grayscale.png' },
    { id: 10, name: 'Partner 10', img: 'https://www.evoca.am/images-cache/partners/1/16104577054001/185x80_grayscale.png' },
    { id: 11, name: 'Partner 11', img: 'https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png' },
    { id: 12, name: 'Partner 12', img: 'https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png' },
    { id: 13, name: 'Partner 13', img: 'https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png' },
    { id: 14, name: 'Partner 14', img: 'https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png' },
    { id: 15, name: 'Partner 15', img: 'https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png' },
  ];

  // Verjin norutyunneri tvyalnery՝ BolorNorutyunner.jsx-ic vercvats 3 irakan qarterov
  const newsList = [
    {
      id: 1,
      category: "Բանկային",
      title: "Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը",
      date: "26.10.2026",
      img: "https://www.evoca.am/images-cache/news/1/17930164747919/510x383.png",
    },
    {
      id: 2,
      category: "Հարցազրույցներ",
      title: "Սթիվեն Բարթլեթը Երևանում Evoca Conference 2026-ին",
      date: "19.10.2026",
      img: "https://www.evoca.am/images-cache/news/1/17930859918757/510x383.png",
    },
    {
      id: 3,
      category: "Մրցանակներ",
      title: "Evocabank-ը FinComm Armenia 2026-ի գլխավոր գործընկեր",
      date: "08.10.2026",
      img: "https://www.evoca.am/images-cache/news/1/17915391966329/510x383.png",
    },
  ];

  const handleGoToPartners = () => {
    navigate('/mer-masin/gortsynkerner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToAllNews = () => {
    navigate('/bolor-norutyunner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsClick = (newsId) => {
    navigate('/bolor-norutyunner', { state: { openNewsId: newsId } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white font-sans py-10 sm:py-16 space-y-16 sm:space-y-20">
      
      {/* 1. ԳՈՐԾԸՆԿԵՐՆԵՐԻ ԲԱԺԻՆ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#fbfbfb] border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden min-h-[420px]">
          
          {/* Dzax mas: Tekst */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 relative z-10 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Գործընկերներ</h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Դարձեք Evocabank-ի գործընկեր և եկեք միասին գնանք դեպի նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք եք գործում ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
            </p>
            <div>
              <button 
                onClick={handleGoToPartners}
                className="bg-[#6400dc] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:bg-purple-800 transition-colors cursor-pointer"
              >
                Բոլոր գործընկերները &gt;
              </button>
            </div>
          </div>

          {/* Kentronakan mas */}
          <div className="hidden lg:flex absolute left-[38%] top-1/2 -translate-y-1/2 items-center justify-center z-10 pointer-events-none">
            <div className="absolute w-[280px] h-[280px] rounded-full border-2 border-dotted border-amber-300 animate-[spin_35s_linear_infinite]"></div>
            <div className="absolute w-[220px] h-[220px] rounded-full border-2 border-dashed border-amber-400 opacity-80 animate-[spin_25s_linear_infinite_reverse]"></div>
            <div className="absolute w-[160px] h-[160px] rounded-full border border-dotted border-amber-400 opacity-60"></div>
            <div className="absolute top-2 left-6 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-8 w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>

            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt="Evocabank Hand" 
              className="w-32 h-auto object-contain relative z-20 drop-shadow-md translate-y-1"
            />
          </div>

          {/* Aj mas: Slider */}
          <div className="lg:col-span-7 lg:col-start-6 relative flex items-center z-10 pl-0 lg:pl-16">
            <button 
              onClick={scrollLeft}
              className="absolute -left-2 z-20 bg-white border border-gray-200 shadow-md w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              &lt;
            </button>

            <div 
              ref={scrollRef}
              className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-none py-4 px-2 w-full scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  onClick={handleGoToPartners}
                  className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 min-w-[170px] sm:min-w-[200px] h-[100px] sm:h-[120px] flex items-center justify-center shadow-sm flex-shrink-0 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <img 
                    src={partner.img} 
                    alt={partner.name} 
                    className="max-h-14 sm:max-h-16 max-w-[120px] sm:max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <button 
              onClick={scrollRight}
              className="absolute -right-2 sm:-right-4 z-20 bg-white border border-gray-200 shadow-md w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              &gt;
            </button>
          </div>

        </div>
      </div>


      {/* 2. ՎԵՐՋԻՆ ՆՈՐՈՒԹՅՈՒՆՆԵՐԻ ԲԱԺԻՆ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 text-left">
        
        {/* Vernagir ev «Բոլոր նորությունները» knopka */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Վերջին նորությունները</h2>
          <button 
            onClick={handleGoToAllNews}
            className="bg-purple-100 text-[#6400dc] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm hover:bg-purple-200 transition-colors cursor-pointer"
          >
            Բոլոր նորությունները &gt;
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {newsList.map((news) => (
            <div 
              key={news.id}
              onClick={() => handleNewsClick(news.id)}
              className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              {/* Nkari blok */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img 
                  src={news.img} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tekstayin blok */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] sm:text-xs font-semibold text-purple-600 uppercase tracking-wider">
                    | {news.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#6400dc] transition-colors leading-snug">
                    {news.title}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400 pt-4 border-t border-gray-100">
                  {news.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Gortsynkerner;