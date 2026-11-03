import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Բոլորը');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsData = [
    {
      id: 1,
      category: "Կենսակերպ",
      title: "Monthly Recap",
      date: "05.01.2026",
      image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png",
      description: "Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները և կատարել արդյունավետ փոփոխություններ։",
      badge: "Բաց մի թող",
      content: "Մենք հաճախ շտապում ենք առաջ՝ նոր նպատակներ, նոր պլաններ։ Բայց արդյո՞ք կանգ ենք առնում և հարցնում ինքներս մեզ՝ ինչ տվեց մեզ այս ամիսը։ Monthly Recap-ն ամիսն ամփոփելու պարզ, բայց շատ արդյունավետ մեթոդ է, որը բարձրացնում է ինքնագիտակցությունը և օգնում ձևավորել նոր սովորություններ։"
    },
    {
      id: 2,
      category: "Ներդրումներ",
      title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
      date: "17.06.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg",
      description: "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար անհրաժեշտ քայլերը:",
      content: "EvocaINVEST-ը հարթակ է, որը հասանելիություն է տալիս միջազգային խոշոր բորսաների։ Այն հասանելի է վեբ տարբերակով և հավելվածի միջոցով (App Store և Google Play)։ Հաշիվը բացելու համար անհրաժեշտ է լինել Բանկի հաճախորդ և կնքել բրոքերային պայմանագիր։"
    },
    {
      id: 3,
      category: "Ներդրումներ",
      title: "Ներդրումների կարելիներն ու չի կարելիները",
      date: "23.04.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg",
      description: "Ինչ անել և ինչ չանել ֆինանսական ներդրումներ կատարելիս՝ ըստ փորձագետների խորհուրդների։",
      content: "Ֆինանսական ոլորտում ներդրումներ կատարելիս կարևոր է գնահատել ռիսկերը, իրականացնել դիվերսիֆիկացիա, նախապես մշակել ռազմավարություն և երբեք չհետևել կուրորեն ամբոխին կամ չկայացնել էմոցիոնալ որոշումներ։"
    },
    {
      id: 4,
      category: "Ներդրումներ",
      title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
      date: "11.04.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg",
      description: "Ինչպե՞ս կատարել ներդրումներ և ստեղծել եկամուտների երկրորդ աղբյուր։",
      content: "ԱՄՆ-ում շուրջ 158 մլն մարդ ներդրումներ է կատարում բաժնետոմսերում։ Ամենատարածված ներդրումային ակտիվներն են պարտատոմսերը, բաժնետոմսերը և ETF-ները։"
    },
    {
      id: 5,
      category: "Բիզնես",
      title: "Ինչպե՞ս սկսել բիզնես։ Guide from A to Z",
      date: "05.01.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg",
      description: "Evoca-ն պատրաստել է բիզնես սկսելու ուղեցույց՝ իրական, աշխատող խորհուրդներով։",
      content: "Բիզնես սկսելու համար հարկավոր է հստակ գաղափար, շուկայի հետազոտություն, պետական գրանցում (e-register.am), հարկային հաշվառման ընտրություն, բանկային հաշվի բացում և ֆինանսավորման ներգրավում։"
    },
    {
      id: 6,
      category: "Կենսակերպ",
      title: "Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան",
      date: "09.02.2022",
      image: "https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.jpg",
      description: "Մեր շուրջն ամեն ինչ կազմված է էներգիայից: Իսկ ավելորդ իրերը խլում են լրացուցիչ էներգիա:",
      content: "Մեր կյանքի ընթացքում մեծ քանակությամբ աղբ ենք կուտակում։ Zero Waste մեթոդիկան օգնում է նվազագույնի հասցնել ավելորդ իրերի կուտակումը, վերամշակել այն և ապրել ավելի հանգիստ միջավայրում։"
    },
    {
      id: 7,
      category: "Կենսակերպ",
      title: "Ամանորի քո Evocaգույն երազանքը",
      date: "21.12.2023",
      image: "https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png",
      description: "Ավելի հաճելի է նվեր նվիրե՞լ, թե՞ ստանալ։ Ո՞րն է ամենաթրենդային նվերի տարբերակը։",
      badge: "Լավագույն",
      content: "Ամանորը հրաշալի առիթ է միմյանց ջերմություն և անակնկալներ պարգևելու համար։ Աշխարհի տարբեր երկրներում առկա են նվերների հետաքրքիր ու յուրահատուկ ավանդույթներ։"
    },
    {
      id: 8,
      category: "Կենսակերպ",
      title: "2021-ը դարձել է կինո պրեմիերաների մրցավազք",
      date: "01.02.2021",
      image: "https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg",
      description: "Fast & Furious 9, No Time to Die, Dune, Free Guy և այս տարվա ամենասպասված կինոպրեմիերաները:",
      content: "2021 թվականը առանձնացավ բազմաթիվ մեծաբյուջետ հոլիվուդյան պրեմիերաներով, որոնք երկար սպասել տվեցին կինոսերներին համաշխարհային համաճարակից հետո։"
    },
    {
      id: 9,
      category: "Կենսակերպ",
      title: "2021-ի ամենասպասված 21 սերիալները",
      date: "18.01.2021",
      image: "https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.jpg",
      description: "Ձեզ ենք ներկայացնում 2021-ի must-watch սերիալները՝ ըստ պաշտոնական տվյալների:",
      content: "Այս ցանկում ընդգրկված են այնպիսի հիթային սերիալներ և շարունակություններ, ինչպիսիք են Marvel-ի նախագծերը, The Witcher-ի 2-րդ եթերաշրջանը և La Casa De Papel-ի եզրափակիչ սերիաները։"
    },
    {
      id: 10,
      category: "Կենսակերպ",
      title: "Ապագայի ամենապահանջված մասնագիտությունները",
      date: "22.06.2020",
      image: "https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.jpg",
      description: "Կիսվենք ձեզ հետ ապագայի ամենապահանջված մասնագիտություններով և զարգացման միտումներով:",
      content: "Տեխնոլոգիաների արագ զարգացմանը զուգընթաց՝ աշխատաշուկայում մեծ պահանջարկ են ձեռք բերում IT ոլորտի մասնագետները, տվյալագետները և թվային մարքեթոլոգները։"
    },
    {
      id: 11,
      category: "Կենսակերպ",
      title: "Evoca-գույնի հոգեբանական նկարագիրը",
      date: "2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png",
      description: "Գույնը մարքեթինգային գործիք է։ Ո՞րն է Evoca-գույն մանուշակագույնի հոգեբանությունը:",
      content: "Ուլտրա-մանուշակագույնը թագավորական գույն է՝ գաղտնի, թանկ, նրբաճաշակ և իմաստուն։ Այն ուղղակիորեն ազդում է հաճախորդների ընկալման վրա՝ ստեղծելով ինքնատիպ բրենդային ասոցիացիաներ։"
    }
  ];

  const filteredBlogs = activeCategory === 'Բոլորը'
    ? blogsData
    : blogsData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {selectedBlog ? (
          <main className="max-w-4xl mx-auto px-4 py-8 text-left bg-white">
            <button 
              onClick={() => setSelectedBlog(null)} 
              className="font-bold text-xs text-gray-500 hover:text-[#6400dc] mb-6 flex items-center gap-1 cursor-pointer"
            >
              ← Վերադառնալ բլոգներին
            </button>
            <h1 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4">{selectedBlog.title}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-[#6400dc] bg-purple-50 px-3 py-1 rounded-full inline-block">{selectedBlog.category}</span>
              <span className="text-xs text-gray-400">{selectedBlog.date}</span>
            </div>
            <div className="rounded-2xl overflow-hidden mb-6 max-h-[450px] bg-gray-50 shadow-sm">
              <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
              {selectedBlog.content}
            </div>
          </main>
        ) : (
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
              <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Բլոգ</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
              Բլոգ
            </h1>

            <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-6 mb-12 text-xs font-semibold text-gray-600">
              {['Բոլորը', 'Բիզնես', 'Կենսակերպ', 'Ներդրումներ'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full transition cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#6400dc] text-white font-bold'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-[#6400dc]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredBlogs.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => { setSelectedBlog(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-56 overflow-hidden bg-gray-50 relative">
                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-[#6400dc] text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm">
                          {item.badge}
                        </span>
                      )}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-base font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                    {item.date}
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