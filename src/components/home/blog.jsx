import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsData = {
    monthlyRecap: {
      id: 1,
      category: "Կենսակերպ",
      title: "Monthly Recap",
      date: "05.01.2026",
      image: "https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png",
      description: "Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ։",
      content: "Մենք հաճախ շտապում ենք առաջ՝ նոր նպատակներ, նոր պլաններ։ Monthly Recap-ն ամիսն ամփոփելու պարզ և շատ արդյունավետ մեթոդ է, որն օգնում է վերլուծել նախորդ ամիսը, հասկանալ ինչն է աշխատել և պլանավորել հաջորդ քայլերը։"
    },
    evocaInvestMain: {
      id: 2,
      category: "Ներդրումներ",
      title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
      date: "17.06.2024",
      image: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg",
      description: "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:",
      content: "EvocaINVEST-ը հարթակ է, որը հասանելիություն է տալիս միջազգային խոշոր բորսաների։ Այն հնարավորություն է տալիս իրական ժամանակում գործարքներ կնքել աշխարհի տարբեր երկրների բորսաներում տասնյակից ավելի արժույթներով։"
    },
    baghadrichner: [
      {
        id: 3,
        category: "Ներդրումներ",
        title: "Ներդրումների կարելիներն ու չի կարելիները",
        date: "23.04.2024",
        image: "https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg",
        description: "Ֆինանսական ոլորտում ներդրումներ կատարելիս՝ երբեմն դժվար է կողմնորոշվել՝ որտեղից սկսել...",
        content: "Ֆինանսական ոլորտում ներդրումներ կատարելիս կարևոր է գնահատել ռիսկերը, իրականացնել դիվերսիֆիկացիա և նախապես մշակել ռազմավարություն։"
      },
      {
        id: 4,
        category: "Ներդրումներ",
        title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
        date: "11.04.2024",
        image: "https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg",
        description: "Ինչպե՞ս կատարել ներդրումներ։ Ինչպիսի՞ ներդրող եք Դուք։ Ո՞րն է Ձեր ներդրումային ոճը։",
        content: "Ամենատարածված ներդրումային ակտիվներն են պարտատոմսերը, բաժնետոմսերը և ֆոնդերի փայերը (ETF)։"
      },
      {
        id: 5,
        category: "Բիզնես",
        title: "Ինչպե՞ս սկսել բիզնես։ Guide from A to Z",
        date: "05.01.2024",
        image: "https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg",
        description: "Evoca-ն պատրաստել է բիզնես սկսելու guide from A to Z` իրական, աշխատող խորհուրդներով։",
        content: "Բիզնես սկսելու ուղեցույցը ներառում է գաղափարի մշակումից մինչև պետական գրանցում և ֆինանսավորման ներգրավում։"
      },
      {
        id: 6,
        category: "Կենսակերպ",
        title: "Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան",
        date: "09.02.2022",
        image: "https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.jpg",
        description: "Մեր շուրջն ամեն ինչ կազմված է էներգիայից: Իսկ ավելորդ իրերը խլում են լրացուցիչ էներգիա:",
        content: "Zero Waste մեթոդիկան օգնում է նվազագույնի հասցնել ավելորդ իրերի կուտակումը և ապրել ավելի ներդաշնակ միջավայրում։"
      }
    ],
    amanor: {
      id: 7,
      category: "Կենսակերպ",
      title: "Ամանորի քո Evocaգույն երազանքը",
      date: "21.12.2023",
      image: "https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png",
      badge: "Լավագույն",
      description: "Ավելի հաճելի է նվեր նվիրե՞լ, թե՞ ստանալ։ Ինչպե՞ս երազանք պահել Ամանորի գիշերը։",
      content: "Շուրջբոլորը ամանորյա զարդարանքներ ու լույսեր են։ Աշխարհի տարբեր երկրներում առկա են նվերների հետաքրքիր ու յուրահատուկ ավանդույթներ։"
    },
    takiEreq: [
      {
        id: 8,
        category: "Կենսակերպ",
        title: "2021-ը դարձել է կինո պրեմիերաների մրցավազք",
        date: "01.02.2021",
        image: "https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg",
        description: "Fast & Furious 9, No Time to Die, Dune, Free Guy և այս տարվա ամենասպասված ու քննարկվող կինոպրեմիերաները:",
        content: "Այս բլոգում ներկայացված են 2021 թվականի ամենասպասված հոլիվուդյան ֆիլմերը։"
      },
      {
        id: 9,
        category: "Կենսակերպ",
        title: "2021-ի ամենասպասված 21 սերիալները",
        date: "18.01.2021",
        // URL Nkar 2 (PNG)
        image: "https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png",
        description: "Ձեզ ենք ներկայացնում 2021-ի #mustwatch սերիալները՝ ըստ պաշտոնական և ոչ պաշտոնական տվյալների:",
        content: "Ցանկում ընդգրկված են Wanda Vision, The Witcher (season 2), La Casa De Papel և այլ հայտնի սերիալներ։"
      },
      {
        id: 10,
        category: "Կենսակերպ",
        title: "Ապագայի ամենապահանջված մասնագիտությունները",
        date: "22.06.2020",
        // URL Nkar 3 (PNG)
        image: "https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png",
        description: "Կիսվենք ձեզ հետ ապագայի ամենապահանջված մասնագիտություններով՝ IT մասնագետ, Թվային մարքեթինգ և այլն:",
        content: "Տեխնոլոգիաների զարգացմանը զուգընթաց մեծանում է նորարարական մասնագիտությունների պահանջարկը։"
      }
    ],
    evocaGuyn: {
      id: 11,
      category: "Կենսակերպ",
      title: "Evoca-գույնի հոգեբանական նկարագիրը",
      date: "2024",
      image: "https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png",
      description: "Գույնը մարքեթինգային գործիք է։ Այն ազդում է մարդու հոգեբանության վրա։ Ո՞րն է Evoca-գույն մանուշակագույնի հոգեբանությունը:",
      content: "Ուլտրա-մանուշակագույնը թագավորական գույն է՝ գաղտնի, թանկ, նրբաճաշակ և իմաստուն։"
    }
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
        <div>
          <Navbar />
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
            <div className="text-gray-700 leading-relaxed space-y-4">
              {selectedBlog.content}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-8 text-left">
          <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Բլոգ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Բլոգ
          </h1>

          <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-6 mb-12 text-xs font-semibold text-gray-600">
            {['Բիզնես', 'Կենսակերպ', 'Ներդրումներ'].map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 cursor-pointer hover:bg-purple-50 hover:text-[#6400dc]">
                {cat}
              </span>
            ))}
            <span className="ml-auto px-4 py-2 rounded-full bg-gray-100 text-gray-700 cursor-pointer">
              Արխիվ &gt;
            </span>
          </div>

          {/* 1. Monthly Recap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                {blogsData.monthlyRecap.category}
              </span>
              <h2 
                onClick={() => { setSelectedBlog(blogsData.monthlyRecap); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-2xl md:text-3xl font-extrabold text-neutral-900 cursor-pointer hover:text-[#6400dc] transition"
              >
                {blogsData.monthlyRecap.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {blogsData.monthlyRecap.description}
              </p>
              <div className="text-xs text-gray-400 font-medium pt-2">
                {blogsData.monthlyRecap.date}
              </div>
            </div>
            <div 
              onClick={() => { setSelectedBlog(blogsData.monthlyRecap); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="lg:col-span-7 rounded-3xl overflow-hidden shadow-sm cursor-pointer group bg-gray-50 h-[380px]"
            >
              <img 
                src={blogsData.monthlyRecap.image} 
                alt={blogsData.monthlyRecap.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              />
            </div>
          </div>

          {/* 2. Բաց մի թող */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-neutral-900 mb-8">Բաց մի թող</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div 
                onClick={() => { setSelectedBlog(blogsData.evocaInvestMain); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="h-80 overflow-hidden bg-gray-50">
                    <img 
                      src={blogsData.evocaInvestMain.image} 
                      alt={blogsData.evocaInvestMain.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                      {blogsData.evocaInvestMain.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-neutral-900 group-hover:text-[#6400dc] transition">
                      {blogsData.evocaInvestMain.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {blogsData.evocaInvestMain.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                  {blogsData.evocaInvestMain.date}
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {blogsData.baghadrichner.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => { setSelectedBlog(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-32 overflow-hidden bg-gray-50">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      </div>
                      <div className="p-4 space-y-2">
                        <span className="text-[10px] font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-1.5 block">
                          {item.category}
                        </span>
                        <h4 className="text-xs font-extrabold text-neutral-900 group-hover:text-[#6400dc] transition line-clamp-2">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-[10px] text-gray-400 font-medium">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Ամանորի երազանքը */}
          <div 
            onClick={() => { setSelectedBlog(blogsData.amanor); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm cursor-pointer group p-6"
          >
            <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-gray-50 h-[350px]">
              <img src={blogsData.amanor.image} alt={blogsData.amanor.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#6400dc] bg-purple-50 px-3 py-1 rounded-full inline-block">
                {blogsData.amanor.badge}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 group-hover:text-[#6400dc] transition">
                {blogsData.amanor.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {blogsData.amanor.description}
              </p>
              <div className="text-xs text-gray-400 font-medium pt-2">
                {blogsData.amanor.date}
              </div>
            </div>
          </div>

          {/* 4. Ներքևի 3 նկարով բլոգները */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {blogsData.takiEreq.map((item) => (
              <div 
                key={item.id}
                onClick={() => { setSelectedBlog(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 overflow-hidden bg-gray-50">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-extrabold text-neutral-900 group-hover:text-[#6400dc] transition line-clamp-2">
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

          {/* 5. Evoca-գույնի հոգեբանական նկարագիրը */}
          <div 
            onClick={() => { setSelectedBlog(blogsData.evocaGuyn); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="relative rounded-3xl overflow-hidden shadow-sm cursor-pointer group mb-16 bg-gray-900 h-[400px]"
          >
            <img src={blogsData.evocaGuyn.image} alt={blogsData.evocaGuyn.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700" />
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-8 rounded-2xl max-w-lg shadow-lg">
              <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block mb-2">
                {blogsData.evocaGuyn.category}
              </span>
              <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-[#6400dc] transition mb-2">
                {blogsData.evocaGuyn.title}
              </h3>
              <p className="text-xs text-gray-600">
                {blogsData.evocaGuyn.description}
              </p>
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}