import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Kariera() {
  const teamQuotes = [
    {
      words: ['Թրենդային', 'Պահանջված', 'Ուրախ'],
      name: 'Հարություն Սահակյան',
      role: 'Անվտանգության մասնագետ'
    },
    {
      words: ['Դինամիկ', 'Պրպտող', 'Զարգացող'],
      name: 'Լիլիթ Գաբոյան',
      role: 'Գլխավոր ֆինանսական տնօրեն'
    },
    {
      words: ['Կրեատիվ', 'Նորարար', 'Մանուշակագույն'],
      name: 'Ալլա Զաքարյան',
      role: 'Վճարային գործիքների մասնագետ'
    },
    {
      words: ['Գույներ', 'Էմոցիաներ', 'Նորարարություններ'],
      name: 'Գայանե Առաքելյան',
      role: 'Մասնաճյուղի կառավարիչ'
    },
    {
      words: ['Թրենդային', 'Պահանջված', 'Ուրախ'],
      name: 'Հարություն Սահակյան',
      role: 'Անվտանգության մասնագետ'
    }
  ];

  const videos = [
    { title: 'Evocabank corporate event', url: 'https://www.youtube.com/embed/PvDYyPGb3RU' },
    { title: 'Evoca New Year Corporate Party 2022', url: 'https://www.youtube.com/embed/PF9JbEC-z-I' },
    { title: 'EVOCAISLAND Evoca Summer Party 2022', url: 'https://www.youtube.com/embed/Abpc2dbNEdU' },
    { title: 'Evocabank neon art corporate party', url: 'https://www.youtube.com/embed/X9yAx39078s' },
    { title: 'Evocabank Life', url: 'https://www.youtube.com/embed/ygQS-e1-2I8' },
    { title: 'Evocabank Team', url: 'https://www.youtube.com/embed/VNVSaTULcBk' }
  ];

  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);

  const prevVideo = () => {
    setCurrentVideoIdx((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideoIdx((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevQuote = () => {
    setCurrentQuoteIdx((prev) => (prev === 0 ? teamQuotes.length - 1 : prev - 1));
  };

  const nextQuote = () => {
    setCurrentQuoteIdx((prev) => (prev === teamQuotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Purple Sub-header */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/kariera" className="border-b-2 border-white pb-1 cursor-pointer font-black">Մշակույթ</Link>
            <Link to="/aravelutyunner" className="text-purple-200 hover:text-white transition">Առավելություններ</Link>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Հաճախ տրվող հարցեր</span>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Ինչպես ընդունվել աշխատանքի Evocabank-ում</span>
          </div>
        </div>

        <main className="space-y-16 pb-16">
          {/* 1. Full-Width Hero Section */}
          <div className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center overflow-hidden flex items-center justify-end px-6 md:px-24"
               style={{ backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg')` }}>
            <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-lg space-y-4 border border-gray-100">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900">Մշակույթ</h1>
              <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է նորարարություններով: Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում:
              </p>
            </div>
          </div>

          {/* 2. Ինչու՞ աշխատել Evoca-ում */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 text-center">
                Ինչու՞ աշխատել Evoca-ում
              </h2>
              <p className="text-center text-neutral-600 italic max-w-2xl mx-auto text-sm md:text-base">
                «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
              </p>
              <div className="rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                <img 
                  src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" 
                  alt="Evoca Girl" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3. Culture & Video Swiper (Purple Animated Background) */}
          <div className="bg-[#6400dc] text-white py-20 relative overflow-hidden">
            <img src="https://www.evoca.am/img/shape6.png" alt="shape" className="absolute top-10 left-10 w-16 opacity-40 animate-pulse" />
            <img src="https://www.evoca.am/img/shape8.png" alt="shape" className="absolute bottom-10 right-10 w-24 opacity-40 animate-bounce" />
            <img src="https://www.evoca.am/img/shape1.png" alt="shape" className="absolute top-1/2 left-8 w-14 opacity-40" />
            <img src="https://www.evoca.am/img/shape7.png" alt="shape" className="absolute top-1/4 right-12 w-20 opacity-40" />

            <div className="container mx-auto px-4 relative z-10 space-y-10">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-black">Մշակույթ</h2>
                <p className="text-purple-100 text-sm md:text-base leading-relaxed">
                  Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ. Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում: Միացեք մեզ!
                </p>
              </div>

              {/* Large Video Swiper */}
              <div className="relative max-w-4xl mx-auto flex items-center justify-center gap-4">
                <button 
                  onClick={prevVideo} 
                  className="bg-white/20 hover:bg-white text-white hover:text-[#6400dc] p-4 rounded-full transition cursor-pointer text-xl z-20"
                >
                  ←
                </button>

                <div className="w-full bg-white rounded-3xl p-4 shadow-2xl overflow-hidden">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-black">
                    <iframe 
                      src={videos[currentVideoIdx].url} 
                      title={videos[currentVideoIdx].title} 
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="text-neutral-900 font-bold text-center mt-3 text-lg">
                    {videos[currentVideoIdx].title}
                  </h3>
                </div>

                <button 
                  onClick={nextVideo} 
                  className="bg-white/20 hover:bg-white text-white hover:text-[#6400dc] p-4 rounded-full transition cursor-pointer text-xl z-20"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* 4. Team Quotes Cards Swiper */}
          <div className="container mx-auto px-4 py-8 space-y-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 text-center">
              Հարցրու ՛ մեր թիմին. «Ինչպիսի ՞ ն է Evoca-ն` 3 բառով»
            </h2>

            <div className="relative max-w-3xl mx-auto flex items-center justify-center gap-6">
              <button 
                onClick={prevQuote} 
                className="bg-gray-100 hover:bg-[#6400dc] hover:text-white text-gray-700 p-4 rounded-full transition cursor-pointer text-xl"
              >
                ←
              </button>

              <div className="w-full bg-[#f8f9fa] border border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-md space-y-6">
                <div className="flex justify-center flex-wrap gap-4">
                  {teamQuotes[currentQuoteIdx].words.map((word, wIdx) => (
                    <span key={wIdx} className="text-[#6400dc] font-black text-2xl md:text-3xl">
                      {word}
                    </span>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-extrabold text-neutral-900 text-lg">{teamQuotes[currentQuoteIdx].name}</p>
                  <p className="text-gray-500 text-sm">{teamQuotes[currentQuoteIdx].role}</p>
                </div>
              </div>

              <button 
                onClick={nextQuote} 
                className="bg-gray-100 hover:bg-[#6400dc] hover:text-white text-gray-700 p-4 rounded-full transition cursor-pointer text-xl"
              >
                →
              </button>
            </div>
          </div>

          {/* 5. Application Form */}
          <div className="container mx-auto px-4 max-w-3xl bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">
                Դառնալ թիմի անդամ
              </h2>
              <p className="text-neutral-600 text-sm">
                Եթե ցանկանում ես միանալ EvocaTEAM-ին, կարող ես ուղարկել դիմում` կցելով ինքնակենսագրականը:
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Անուն *</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Ազգանուն *</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Հեռախոսահամար *</label>
                  <div className="flex">
                    <span className="bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl px-3 flex items-center text-sm font-medium">+374</span>
                    <input type="tel" required className="w-full bg-white border border-gray-200 rounded-r-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Էլ. հասցե</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Facebook սոց. կայքում անձնական էջի հղում</label>
                  <input type="url" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">LinkedIn սոց. կայքում անձնական էջի հղում</label>
                  <input type="url" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Ուղեկցող նամակ</label>
                <textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]"></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Վերբեռնեք Ձեր ռեզյումեն *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white hover:border-[#6400dc] transition cursor-pointer">
                  <span className="text-sm text-gray-500 font-medium">Կցել ֆայլը / ֆայլերը</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-neutral-700">Ստուգման ծածկագիր *</label>
                <div className="flex items-center gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-center">
                    <img 
                      src="https://accounts.zoho.com/static/showcaptcha?digest=1_C_c650227a5d5f803deda631352226140fab644e31fffbddd9a8f2c43683e1676dfed64664d53e4e0fc68fdc773c30f2568394c4cb889fe89cac5d77f7187f1ad7" 
                      alt="Captcha" 
                      className="h-10 object-contain"
                    />
                  </div>
                  <input type="text" placeholder="Մուտքագրեք ծածկագիրը" required className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-4 rounded-xl transition shadow-md cursor-pointer text-center"
              >
                Ես ուզում եմ աշխատել Evoca-ում :)
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}