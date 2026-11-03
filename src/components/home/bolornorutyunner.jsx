import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function BolorNorutyunner() {
  const [selectedCategory, setSelectedCategory] = useState('Բոլորը');
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  const itemsPerPage = 12; // Ekhan e 12-ta item per page set kora hoilo

  const categories = ['Բոլորը', 'Գլխավոր', 'Բանկային', 'Հարցազրույցներ', 'Պրոդուկտներ', 'Նորարարություններ', 'Կենսակերպ', 'Մրցանակներ', 'CSR', 'Այլ'];

  const allNews = [
    {
      id: 1,
      category: 'Բանկային',
      title: 'Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը',
      date: '26.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17930164747919/510x383.png',
      content: `Evocabank-ը 10 միլիոն ԱՄՆ դոլարի ֆինանսավորում է ներգրավել Համաշխարհային բանկի խմբի անդամ Միջազգային ֆինանսական կորպորացիայից (IFC)՝ միկրո, փոքր և միջին ձեռնարկությունների (ՄՓՄՁ) վարկավորումն ընդլայնելու նպատակով, ինչը կարևոր իրադարձություն է Հայաստանում կայուն ֆինանսավորման զարգացման համար։`
    },
    {
      id: 2,
      category: 'Հարցազրույցներ',
      title: 'Սթիվեն Բարթլեթը՝ Երևանում՝ Evoca Conference 2026-ին',
      date: '19.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17930859918757/510x383.png',
      content: `Հնարավո՞ր է՝ մեկ վայրում հավաքվեն միջազգային ճանաչում ունեցող խոսնակներ, հաջողակ ձեռնարկատերեր և հետաքրքրասեր լսարան։ Պատասխանը՝ այ՛ո, Evoca Conference-ին։`
    },
    {
      id: 3,
      category: 'Մրցանակներ',
      title: 'Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր',
      date: '08.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17915391966329/510x383.png',
      content: `Մեդիամաքս մեդիա ընկերության կազմակերպած կոնֆերանսը նվիրված էր ֆինանսական ոլորտում հաղորդակցության զարգացումներին։`
    },
    {
      id: 4,
      category: 'Բանկային',
      title: 'Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր',
      date: '06.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17913736819959/510x383.jpg',
      content: `Evocabank-ը Armenia-UK Business Forum 2026-ի գլխավոր գործընկերն էր։`
    },
    {
      id: 5,
      category: 'Բանկային',
      title: 'Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր',
      date: '06.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17912685600228/510x383.png',
      content: `Հոկտեմբերի 9-11-ը Դիլիջանը հյուրընկալեց Զբոսաշրջության տարածաշրջանային ֆորում 2026-ը (TRF 2026)։`
    },
    {
      id: 6,
      category: 'Բանկային',
      title: 'Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից',
      date: '05.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17908437653512/510x383.png',
      content: `Evocabank-ը Finance in Motion-ի կողմից կառավարվող հիմնադրամներից ներգրավել է 10 միլիոն ԱՄՆ դոլարի ստորադաս փոխառություն։`
    },
    {
      id: 7,
      category: 'Նորարարություններ',
      title: 'Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026',
      date: '02.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17909253326841/510x383.png',
      content: `Most Innovative Digital Bank in Armenia 2026՝ 4-րդ տարին անընդմեջ Global Business & Finance Magazine-ի կողմից։`
    },
    {
      id: 8,
      category: 'CSR',
      title: 'Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր',
      date: '25.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17906855928227/510x383.png',
      content: `Սեպտեմբերի 25-ին Ամերիկյան համալսարանի (AUA) 35-ամյակի առթիվ տեղի ունեցավ տոնական միջոցառում, որի Legacy Partner-ը Evocabank-ն էր։`
    },
    {
      id: 9,
      category: 'Պրոդուկտներ',
      title: 'Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը',
      date: '23.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17901528701371/510x383.png',
      content: `Պաշտոնապես մեկնարկեց Arca-UnionPay համատեղ քարտերի թողարկումը:`
    },
    {
      id: 10,
      category: 'Կենսակերպ',
      title: 'Evoca-ն մասնակցում է Armenian Auto Show 2026-ին',
      date: '22.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17902383376936/510x383.png',
      content: `Սեպտեմբերի 25-27-ը Evoca-ն մասնակցում է Armenian Auto Show 2026-ին։`
    },
    {
      id: 11,
      category: 'Պրոդուկտներ',
      title: 'Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից',
      date: '21.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17901523859882/510x383.png',
      content: `Rien-a-Porter խանութ-սրահում կամ կայքում Evoca քարտերով վճարելիս ստացիր մինչև 15% cashback։`
    },
    {
      id: 12,
      category: 'Կենսակերպ',
      title: 'Դիլիջա՜ն, մենք գալիս ենք',
      date: '11.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17891134831451/510x383.png',
      content: `Սեպտեմբերի 18-ին Դիլիջանի Կենտրոնական հրապարակում նշում ենք Evocabank-ի նոր մասնաճյուղի բացումը։`
    },
    {
      id: 13,
      category: 'Գլխավոր',
      title: 'Evocabank-ը մասնակցում է CCF 2026-ին',
      date: '17.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1776423301974/510x383.png',
      content: `Career City Fest 2026-ին Evocabank-ն առաջարկում է ինտերակտիվ quiz, աշխատանքի հնարավորություններ Meridian Expo Center-ում։`
    },
    {
      id: 14,
      category: 'Հարցազրույցներ',
      title: 'Կարեն Եղիազարյանը` IMF և WBG Spring Meetings 2026-ին',
      date: '13.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1776162446379/510x383.png',
      content: `Ապրիլի 13–18-ը Վաշինգտոնում անցկացվող IMF-ի և WBG-ի Գարնանային հանդիպումներին մասնակցում է Կարեն Եղիազարյանը։`
    },
    {
      id: 15,
      category: 'Պրոդուկտներ',
      title: 'Evoca-ն մասնակցում է Leasing Expo 2026-ին',
      date: '09.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17758068998241/510x383.png',
      content: `Ապրիլի 10, 11 և 12-ը Evocabank-ը մասնակցում է LEASING EXPO 2026-ին։`
    },
    {
      id: 16,
      category: 'Բանկային',
      title: 'ESG կառավարման համակարգը Evocabank-ում',
      date: '31.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17757342882486/510x383.png',
      content: `Evocabank-ը կարևորում է բնապահպանական և սոցիալական սկզբունքների ներդրումը։`
    },
    {
      id: 17,
      category: 'Բանկային',
      title: 'Evocabank-ը միացել է AI մեգանախագծի 300 մլն ԱՄՆ դոլարի ֆինանսավորմանը',
      date: '27.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17746129517291/510x383.png',
      content: `ՀՀ բանկային համակարգի պատմության մեջ առաջին սինդիկացված վարկային պայմանագրով 6 ֆինանսական կառույցներ միավորվել են։`
    }
  ];

  // Filter based on selected category
  const filteredNews = selectedCategory === 'Բոլորը' 
    ? allNews 
    : allNews.filter(item => item.category === selectedCategory);

  // Pagination calculation
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // Reset to page 1 on category change
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {selectedNews ? (
          <main className="max-w-4xl mx-auto px-4 py-8 text-left">
            <button 
              onClick={() => setSelectedNews(null)} 
              className="font-bold text-xs text-gray-500 hover:text-[#6400dc] mb-6 flex items-center gap-1 cursor-pointer"
            >
              ← Վերադառնալ
            </button>
            <h1 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4">{selectedNews.title}</h1>
            <span className="text-xs font-bold text-[#6400dc] bg-purple-50 px-3 py-1 rounded-full inline-block mb-4">{selectedNews.category}</span>
            <div className="rounded-2xl overflow-hidden mb-6 max-h-[450px] bg-gray-50">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedNews.content}</p>
          </main>
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Նորություններ</span> &gt; <span className="text-gray-700 font-medium">Բոլորը</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
              Բոլորը
            </h1>

            {/* Filter Categories */}
            <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-6 mb-8 text-xs font-semibold text-gray-600">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full transition cursor-pointer ${
                    selectedCategory === cat 
                      ? 'bg-[#6400dc] text-white font-bold' 
                      : 'bg-gray-100 hover:bg-purple-50 hover:text-[#6400dc]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* News Grid (Showing only currentItems) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {currentItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => { setSelectedNews(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-48 overflow-hidden bg-gray-50">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-base font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{item.content}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Pagination Buttons */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-16">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs transition cursor-pointer ${
                      currentPage === page
                        ? 'bg-[#6400dc] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs cursor-pointer"
                  >
                    →
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}