import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Arxiv() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('Բոլորը');

  const archiveBlogs = [
    // --- ԷՋ 1 (1 - 12) ---
    {
      id: 1,
      category: "Կենսակերպ",
      title: "Monthly Recap",
      date: "05.01.2026",
      image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/510x383.png",
      content: "Մենք հաճախ շտապում ենք առաջ՝ նոր նպատակներ, նոր պլաններ, նոր ամիսներ։ Բայց արդյո՞ք կանգ ենք առնում և հարցնում ինքներս մեզ․ «Ի՞նչ տվեց ինձ այս ամիսը»։ Այստեղ օգնության է գալիս Monthly Recap-ը։ Monthly Recap-ն ամիսն ամփոփելու պարզ, բայց շատ արդյունավետ մեթոդ է։ Այն օգնում է ամփոփել նախորդ ամիսը ոչ թե քննադատությամբ, այլ՝ վերլուծությամբ, հասկանալ՝ ինչն է աշխատել, ինչը՝ ոչ, և ինչ կարելի է անել հաջորդ ամիսն ավելի արդյունավետ դարձնելու համար։ Evoca notebook-ում սա հենց այն հատվածն է, որը սպասում է քեզ յուրաքանչյուր ամսվա վերջում։"
    },
    {
      id: 2,
      category: "Կենսակերպ",
      title: "Habit Tracker",
      date: "05.01.2026",
      image: "https://www.evoca.am/images-cache/blogs/1/17683792444137/510x383.png",
      content: "Մենք հաճախ մտածում ենք, որ փոփոխությունների համար պետք են մեծ քայլեր։ Իրականում՝ ամենամեծ արդյունքները գալիս են ամենափոքր, բայց կրկնվող գործողություններից։ Այստեղ օգնության է գալիս Habit Tracker-ը։ Habit Tracker-ը գործիք է (թղթային, թվային կամ հավելվածի տեսքով), որն օգնում է հետևել ձեր առօրյա սովորություններին։ Ամեն օր նշումներ կատարելով՝ դուք ոչ միայն վերահսկում եք ընթացքը, այլ նաև մոտիվացնում ինքներդ ձեզ շարունակել։"
    },
    {
      id: 3,
      category: "Կենսակերպ",
      title: "Եվրոպայի լավագույն 5 Christmas Market-ները",
      date: "16.12.2025",
      image: "https://www.evoca.am/images-cache/blogs/1/17658933558475/510x383.png",
      content: "Ամանորին Եվրոպան վերածվում է կախարդական հեքիաթի․ լուսավոր տոնավաճառներ, ձյունաշատ փողոցներ, տաք շոկոլադի ու գլինթվեյնի բույրեր։ Ձեզ ենք ներկայացնում Եվրոպայի 5 ամենագեղեցիկ Christmas Market-ները, որոնց դուք կսիրահարվեք առաջին իսկ հայացքից։ 1․ Վիեննա, Ավստրիա, 2․ Բուդապեշտ, Հունգարիա, 3․ Պրահա, Չեխիա։"
    },
    {
      id: 4,
      category: "Կենսակերպ",
      title: "Սև ուրբաթի իրական գույնը",
      date: "24.11.2025",
      image: "https://www.evoca.am/images-cache/blogs/1/17639790235101/510x383.png",
      content: "Սև Ուրբաթն այլևս 1 օր չի տևում։ Վերջին շրջանում այն դարձել է Black Weekend, նույնիսկ՝ Black Week: Այս տարի Սև Ուրբաթը նոյեմբերի 28-ին է, բայց պաշտոնապես կսկսվի նոյեմբերի 27-ի երեկոյան։ Մարդիկ նախապես պատրաստվում են մեծ զեղչերի շրջանին։"
    },
    {
      id: 5,
      category: "Կենսակերպ",
      title: "Wheel of Life Balance",
      date: "01.11.2025",
      image: "https://www.evoca.am/images-cache/blogs/1/17663897182479/510x383.png",
      content: "Երբևէ ունեցե՞լ եք այն տագնապը, որ ոչինչ չեք հասցնում։ Կա մի շատ պարզ, բայց օգտակար գործիք, որը կարող է փոխել ձեր առօրյան՝ Կյանքի անիվը կամ Wheel of life balance-ը։ Այն օգնում է գնահատել կյանքի բոլոր ոլորտների հավասարակշռությունը։"
    },
    {
      id: 6,
      category: "Կենսակերպ",
      title: "Evoca Calendar 2025. Երբ արվեստը հանդիպում է AI-ին",
      date: "16.05.2025",
      image: "https://www.evoca.am/images-cache/blogs/1/17404671397799/510x383.png",
      content: "Եթե AI-ը նկարեր աշխարհահռչակ նկարիչների հանրահայտ կտավները, ինչպիսի՞ տեսք կունենային դրանք։ Այս հարցից սկսվեց մեր Evoca Calendar 2025 նախագիծը, որը միավորեց տեխնոլոգիաներն ու արվեստը։"
    },
    {
      id: 7,
      category: "Կենսակերպ",
      title: "99 խնդի՞ր, 1 լուծում՝ Evoca թվային քարտ",
      date: "28.11.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17327967150177/510x383.png",
      content: "Պատկերացրու հետևյալը․ Դու առցանց գնումներ ես կատարում և հանկարծ հասկանում, որ չես ցանկանում քո հիմնական ֆիզիկական քարտը կցել անծանոթ կայքերին։ Ժամանակն է ձեռք բերել Evoca թվային քարտ՝ վստահ և ապահով վճարումների համար։"
    },
    {
      id: 8,
      category: "Կենսակերպ",
      title: "Evoca Art",
      date: "23.10.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17296851097593/510x383.png",
      content: "Հասարակ հրապարակումից մինչև համաշխարհային լրատվականներ։ Ինչպես համավարակի օրերին դրական ու թեթև քոնթենթ ստեղծելու նպատակով Evoca-ում հորինեցին հայկական համացանցի ամենավառ արշավներից մեկը։"
    },
    {
      id: 9,
      category: "Կենսակերպ",
      title: "Ֆիլմեր ֆինանսական աշխարհի էնտուզիաստների համար Մաս 1",
      date: "28.08.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17248413426642/510x383.png",
      content: "Եթե սիրում եք պատմություններ մեծ գումարների, ֆինանսական հսկաների ու շուկաների մասին, վերցրեք պոպկորն, դուք արդեն գիտեք՝ ինչ կարելի է դիտել այս երեկո։ Wall Street, Margin Call և այլն։"
    },
    {
      id: 10,
      category: "Կենսակերպ",
      title: "Ուսանողական վա՞րկ, թե՞ ներդրում ապագայի համար",
      date: "22.07.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17216331113919/510x383.png",
      content: "Ի՞նչ է ուսանողական վարկը։ Ե՞րբ և որտե՞ղ է առաջացել այն։ Ուսանողական վարկը տրամադրվում է ուսանողին միջնակարգ կամ բարձրագույն մասնագիտացված կրթության վճարը կատարելու համար։"
    },
    {
      id: 11,
      category: "Ներդրումներ",
      title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
      date: "17.06.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/510x383.jpg",
      content: "Մեր նախորդ բլոգերում քննարկեցինք, թե ինչ քայլեր են հարկավոր կատարել ներդրումային որոշում կայացնելուց առաջ։ EvocaINVEST-ը հարթակ է միջազգային բորսաներում գործարքներ կատարելու համար։"
    },
    {
      id: 12,
      category: "Ներդրումներ",
      title: "Ինչպե՞ս կառավարել պորտֆելը։ Պորտֆելի կառավարման 3 փուլերը",
      date: "17.05.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17159356763697/510x383.jpg",
      content: "Keep a trading diary write down your reasons for entering and exiting every trade. Alexander Elder. Պորտֆելի կառավարման 3 հիմնական փուլերը և դրանց նշանակությունը։"
    },

    // --- ԷՋ 2 (13 - 24) ---
    {
      id: 13,
      category: "Ներդրումներ",
      title: "Ներդրումների կարելիներն ու չի կարելիները",
      date: "23.04.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/510x383.jpg",
      content: "It is not whether you are right or wrong that is important, but how much money you make when you are right and how much you lose when you are wrong. George Soros. Ֆինանսական ոլորտում ներդրումներ կատարելիս ի՞նչ անել և ինչ չանել։"
    },
    {
      id: 14,
      category: "Ներդրումներ",
      title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
      date: "11.04.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17128187874533/510x383.jpg",
      content: "Never depend on a single income. Make an investment to create a second source. Warren Buffett. Պարտատոմսեր, բաժնետոմսեր, ETF-ներ և EvocaINVEST: Ձեր գումարն աշխատեցրեք ձեր փոխարեն։"
    },
    {
      id: 15,
      category: "Բիզնես",
      title: "Mann Deshi Bank – կանանց համար առաջին բանկը և բանկային դպրոցը",
      date: "07.03.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17038544649688/510x383.jpg",
      content: "Chetna-ն ծնվել և մեծացել է Mumbai քաղաքում, որտեղ հիմնեց Mann Deshi բանկը ցածր եկամուտ ունեցող կանանց համար։ Ոգեշնչող պատմություն կանանց ձեռներեցության մասին։"
    },
    {
      id: 16,
      category: "Բիզնես",
      title: "Բոլորին հայտնի Մոնոպոլիա խաղի օրենքներն իրական կյանքում",
      date: "01.02.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/1703767719255/510x383.jpg",
      content: "Հիշում եք չէ՞ հայտնի Մոնոպոլիա խաղը, որի նախագիծը ստեղծվել էր Չարլզ Դարոունի կողմից 1934 թվականին։ Ինչպես խաղում, իրական կյանքում ևս հաղթելու ռազմավարությունը ֆինանսների կառավարումն է։"
    },
    {
      id: 17,
      category: "Բիզնես",
      title: "Ամեն ինչ բանկոմատների մասին",
      date: "31.01.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16679076091685/510x383.jpg",
      content: "Կար ժամանակ, երբ բանկի հետ որևէ գործարք անելու համար պարտադիր էր այցելել բանկ: Սակայն 1960-ականներին հայ գյուտարար Լյութեր Ջորջ Սիմջյանի գյուտը փոխեց աշխարհը ստեղծելով բանկոմատը։"
    },
    {
      id: 18,
      category: "Բիզնես",
      title: "Ինչպե՞ս չդառնալ խարդախության զոհ",
      date: "26.01.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/1684499196192/510x383.jpg",
      content: "Ամեն ինչ սկսվում է մի պարզ ու բարի Բարև Ձեզ-ից։ ՉԻ՛ կարելի փոխանցել քարտային տվյալները, 3D secure, CVV, PIN կոդ և այլն։ Եղեք զգոն և պաշտպանեք ձեր ֆինանսները։"
    },
    {
      id: 19,
      category: "Բիզնես",
      title: "Ինչպե՞ս սկսել բիզնես։ Guide from A to Z",
      date: "05.01.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16691870758279/510x383.jpg",
      content: "Բիզնես ունենալը գրավիչ է, սակայն որտեղի՞ց սկսել։ Evoca-ն պատրաստել է բիզնես սկսելու guide from A to Z իրական, աշխատող խորհուրդներով և գաղափարի զարգացման քայլերով։"
    },
    {
      id: 20,
      category: "Կենսակերպ",
      title: "Ամանորի քո Evocaգույն երազանքը",
      date: "21.12.2023",
      image: "https://www.evoca.am/images-cache/blogs/1/1703162335976/510x383.png",
      content: "Շուրջբոլորը ամանորյա զարդարանքներ, փայլեր, լույսեր․․․ Ամեն ինչ հուշում է, որ տոներն են մոտենում։ Ինչպիսի՞ նվերներ են նվիրում աշխարհի տարբեր երկրներում և ինչպես ընտրել իդեալական նվեր։"
    },
    {
      id: 21,
      category: "Կենսակերպ",
      title: "Սև Ուրբաթ, վարդագույն գնումներ",
      date: "17.11.2023",
      image: "https://www.evoca.am/images-cache/blogs/1/17002203918441/510x383.png",
      content: "Ամեն տարի այս օրը մոտ 135 միլիոն մարդ ամբողջ աշխարհում կատարում է գնումներ։ Սև Ուրբաթն այլևս 1 օր չի տևում, այն դարձել է Black Weekend: Evoca Digital քարտի առավելությունները։"
    },
    {
      id: 22,
      category: "Կենսակերպ",
      title: "Նվիրենք ամիսը մշակույթին",
      date: "05.05.2022",
      image: "https://www.evoca.am/images-cache/blogs/1/16515644843588/510x383.png",
      content: "Մայիսը թատրոնի, թանգարանների, կինոյի, դասական համերգների և ցուցահանդեսների ամիս Է: Մայիսի 18-ը Թանգարանների միջազգային օրն է՝ բազմաթիվ հետաքրքիր միջոցառումներով։"
    },
    {
      id: 23,
      category: "Կենսակերպ",
      title: "Գումար խնայելն այնքան դժվար չէ, որքան կարծում եք",
      date: "07.03.2022",
      image: "https://www.evoca.am/images-cache/blogs/1/16466487776012/510x383.png",
      content: "Շատերն են բողոքում նրանից, որ չեն կարողանում գումար խնայել, բայց դա իրականացնելու համար պետք է հետևել մի քանի հիմնական կանոնի (օրինակ՝ 10%-ի կանոնին)։"
    },
    {
      id: 24,
      category: "Կենսակերպ",
      title: "Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան",
      date: "09.02.2022",
      image: "https://www.evoca.am/images-cache/blogs/1/16443271105456/510x383.png",
      content: "Մեր շուրջն ամեն ինչ կազմված է էներգիայից: Իսկ ավելորդ իրերը խլում են լրացուցիչ էներգիա: Zero Waste ապրելակերպի հիմնական սկզբունքները և միջավայրի պահպանության խորհուրդներ։"
    }
  ];

  const filteredBlogs = activeCategory === 'Բոլորը'
    ? archiveBlogs
    : archiveBlogs.filter(item => item.category === activeCategory);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {selectedBlog ? (
          <main className="max-w-4xl mx-auto px-4 py-6 md:py-8 text-left bg-white">
            <button 
              onClick={() => setSelectedBlog(null)} 
              className="font-bold text-xs text-gray-500 hover:text-[#6400dc] mb-6 flex items-center gap-1 cursor-pointer"
            >
              ← Վերադառնալ արխիվին
            </button>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-4">{selectedBlog.title}</h1>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-bold text-[#6400dc] bg-purple-50 px-3 py-1 rounded-full inline-block">{selectedBlog.category}</span>
              <span className="text-xs text-gray-400">{selectedBlog.date}</span>
            </div>
            <div className="rounded-2xl overflow-hidden mb-6 max-h-[450px] bg-gradient-to-r from-purple-800 to-indigo-900 shadow-sm flex items-center justify-center relative min-h-[250px]">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                className="w-full h-full object-cover" 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute p-6 text-center text-white">
                <span className="text-xs uppercase tracking-widest text-purple-200">{selectedBlog.category}</span>
                <h2 className="text-xl font-bold mt-2">{selectedBlog.title}</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4 text-xs sm:text-sm">
              {selectedBlog.content}
            </div>
          </main>
        ) : (
          <main className="max-w-7xl mx-auto px-4 py-6 md:py-8 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6 md:mb-8">
              Արխիվ
            </h1>

            {/* Ֆիլտրերի կոճակներ */}
            <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-4 md:pb-6 mb-8 md:mb-12 text-xs font-semibold text-gray-600">
              {['Բոլորը', 'Բիզնես', 'Կենսակերպ', 'Ներդրումներ'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                  className={`px-4 py-2 rounded-full transition cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#6400dc] text-white font-bold shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-[#6400dc]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Բլոգների քարտերի ցանց (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
              {currentBlogs.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => { setSelectedBlog(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex flex-col justify-between group border border-gray-100"
                >
                  <div>
                    <div className="h-44 overflow-hidden bg-gradient-to-br from-purple-700 via-purple-900 to-indigo-950 flex items-center justify-center relative text-white p-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 absolute inset-0 z-10" 
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="z-0 text-center space-y-1">
                        <span className="text-[10px] uppercase font-semibold text-purple-200 tracking-wider block">{item.category}</span>
                        <p className="text-xs font-bold line-clamp-3 leading-snug">{item.title}</p>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-sm font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="px-4 pb-4 text-xs text-gray-400 font-medium">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination (1, 2) */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mb-16 text-xs font-bold text-gray-500">
                <button 
                  onClick={() => { setCurrentPage(prev => Math.max(prev - 1, 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#6400dc] cursor-pointer"
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => { setCurrentPage(num); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                      currentPage === num
                        ? 'bg-[#6400dc] text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button 
                  onClick={() => { setCurrentPage(prev => Math.min(prev + 1, totalPages)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#6400dc] cursor-pointer"
                >
                  →
                </button>
              </div>
            )}
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}