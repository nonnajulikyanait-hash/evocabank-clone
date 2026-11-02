import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Kariera() {
  // Թիմի անդամների գնահատականների տվյալները
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

  // Տեսանյութերի ցանկ
  const videos = [
    'https://www.youtube.com/embed/PvDYyPGb3RU',
    'https://www.youtube.com/embed/PF9JbEC-z-I',
    'https://www.youtube.com/embed/Abpc2dbNEdU',
    'https://www.youtube.com/embed/X9yAx39078s',
    'https://www.youtube.com/embed/ygQS-e1-2I8',
    'https://www.youtube.com/embed/VNVSaTULcBk'
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Կարիերայի Ենթամենյու */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/kariera" className="border-b-2 border-white pb-1 cursor-pointer font-black">Մշակույթ</Link>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Առավելություններ</span>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Հաճախ տրվող հարցեր</span>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Ինչպես ընդունվել աշխատանքի Evocabank-ում</span>
          </div>
        </div>

        <main className="space-y-16 pb-16">
          {/* 1. Հիմնական վերնագրի բաժին (Մշակույթ) */}
          <div className="relative w-full overflow-hidden bg-white">
            <div className="container mx-auto px-4 py-8 relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg" 
                  alt="Մշակույթ Evoca-ում" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4">Մշակույթ</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է նորարարություններով: Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում:
                </p>
              </div>
            </div>
          </div>

          {/* 2. Ինչու՞ աշխատել Evoca-ում */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 text-center">
                Ինչու՞ աշխատել Evoca-ում
              </h2>
              <p className="text-center text-neutral-600 italic max-w-2xl mx-auto">
                «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
                <img 
                  src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" 
                  alt="Evoca Girl" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3. Մշակույթ և Վիդեո Սլայդեր (Մանուշակագույն ֆոնով՝ անիմացիոն տարրերով) */}
          <div className="bg-[#6400dc] text-white py-16 relative overflow-hidden">
            {/* Անիմացիոն ֆոնային տարրեր */}
            <img src="https://www.evoca.am/img/shape6.png" alt="shape" className="absolute top-10 left-10 w-16 opacity-30 animate-pulse" />
            <img src="https://www.evoca.am/img/shape8.png" alt="shape" className="absolute bottom-10 right-10 w-20 opacity-30 animate-bounce" />
            <img src="https://www.evoca.am/img/shape1.png" alt="shape" className="absolute top-1/2 left-5 w-12 opacity-30" />
            <img src="https://www.evoca.am/img/shape7.png" alt="shape" className="absolute top-1/3 right-10 w-16 opacity-30" />

            <div className="container mx-auto px-4 relative z-10 space-y-8">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-3xl font-extrabold">Մշակույթ</h2>
                <p className="text-purple-100 text-sm md:text-base leading-relaxed">
                  Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ. Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում: Միացեք մեզ!
                </p>
              </div>

              {/* Տեսանյութերի ցանկ / Սլայդերի սիմուլյացիա */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
                {videos.map((vid, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
                    <div className="aspect-video rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
                      <iframe 
                        src={vid} 
                        title={`Evoca Video ${idx + 1}`} 
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Հարցրու՛ մեր թիմին */}
          <div className="container mx-auto px-4 py-8 space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 text-center">
              Հարցրու ՛ մեր թիմին. «Ինչպիսի ՞ ն է Evoca-ն` 3 բառով»
            </h2>

            {/* Քարտերի սլայդեր */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {teamQuotes.map((item, idx) => (
                <div key={idx} className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                  <div className="space-y-3">
                    {item.words.map((word, wIdx) => (
                      <span key={wIdx} className="block text-[#6400dc] font-bold text-lg">
                        • {word}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <p className="font-extrabold text-neutral-900 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Դառնալ թիմի անդամ (Դիմումի ձևաթուղթ) */}
          <div className="container mx-auto px-4 max-w-3xl bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">
                Դառնալ թիմի անդամ
              </h2>
              <p className="text-neutral-600 text-sm">
                Եթե ցանկանում ես միանալ EvocaTEAM-ին, կարողես ուղարկել դիմում` կցելով ինքնակենսագրականը:
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
                      src="https://accounts.zoho.com/static/showcaptcha?digest=1_C_3a7387f57aeb4a95c073e6cbd5a5b77c53b6d14de1cf87b3014acf4b8d780678348bf3fc0057957aa6b9b741e931792c56a0d2e9a714b8158788e33e65322b3d" 
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