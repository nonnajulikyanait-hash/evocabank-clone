import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Harcer() {
  // Հարցերի և պատասխանների ցանկ
  const faqList = [
    {
      question: 'Կարո՞ղ եմ միաժամանակ դիմել տարբեր աշխատատեղերի համար:',
      answer: 'Մեկ օգտատիրոջ կողմից ներկայացվող դիմումների քանակն անսահմանափակ է, սակայն խնդրում ենք դիմել միայն այն աշխատանքների համար, որում նշված պահանջներին և հմտություններին համապատասխանում եք:'
    },
    {
      question: 'Դիմումը ներկայացնելուց որքա՞ն ժամանակ հետո ինձ կհրավիրեն հարցազրույցի:',
      answer: 'Եթե Դուք դիմել եք հայտարարված ազատ աշխատատեղի համար և հայտնվել եք նախնական ընտրված թեկնածուների շարքում, ապա մեր թիմը կապ կհաստատի Ձեզ հետ հայտարարության ժամկետի ավարտից հետո` մեկ ամսվա ընթացքում:'
    },
    {
      question: 'Հարցազրույցի ընթացքում լինելու՞ է թեստավորում:',
      answer: 'Աշխատանքի ընդունման մեր գործընթացը մի քանի փուլից է կազմված: Առաջին փուլում թեստավորում չի իրականացվում: Հետագա փուլերի մասին ինֆորմացիան կարող եք գտնել «Ինչպես ընդունվել աշխատանքի Evocabank-ում» բաժնում:'
    }
  ];

  // Accordion-ի ակտիվ ինդեքսի սթեյթ
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Կարիերայի Ենթամենյու */}
        <div className="bg-[#6400dc] text-white py-3 px-4 sm:px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 sm:gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/kariera" className="text-purple-200 hover:text-white transition cursor-pointer">Մշակույթ</Link>
            <Link to="/aravelutyunner" className="text-purple-200 hover:text-white transition cursor-pointer">Առավելություններ</Link>
            <Link to="/harcer" className="border-b-2 border-white pb-1 cursor-pointer font-black">Հաճախ տրվող հարցեր</Link>
            <Link to="/yndunum" className="text-purple-200 hover:text-white transition cursor-pointer">Ինչպես ընդունվել աշխատանքի Evocabank-ում</Link>
          </div>
        </div>

        <main className="space-y-12 sm:space-y-16 pb-12 sm:pb-16">
          {/* 1. Full-Width Hero Banner (Հաճախ տրվող հարցեր) */}
          <div 
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center overflow-hidden flex items-end md:items-center justify-start px-4 sm:px-6 md:px-24 pb-8 md:pb-0"
            style={{ backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16194612949534/1920x634.jpg')` }}
          >
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl max-w-lg space-y-4 border border-gray-100">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900">Հաճախ տրվող հարցեր</h1>
            </div>
          </div>

          {/* 2. Հարցերի ցանկ (Accordion) */}
          <div className="container mx-auto px-4 max-w-4xl space-y-6 sm:space-y-8 text-left">
            <div className="text-center space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900">
                Հարցերի ցանկ
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Բացահայտիր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին:
              </p>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4 pt-2 sm:pt-4">
              {faqList.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-[#f8f9fa] transition">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-xs sm:text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <span className={`text-lg sm:text-xl transform transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>
                      ∨
                    </span>
                  </button>

                  {openIndex === idx && (
                    <div className="px-4 sm:px-5 md:px-6 pb-6 pt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 bg-white">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Դառնալ թիմի անդամ (Դիմումի ձևաթուղթ) */}
          <div className="container mx-auto px-4 max-w-3xl bg-[#f8f9fa] border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm space-y-6 sm:space-y-8 text-left">
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900">
                Դառնալ թիմի անդամ
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm">
                Եթե ցանկանում ես միանալ EvocaTEAM-ին, կարող ես ուղարկել դիմում` կցելով ինքնակենսագրականը:
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Անուն *</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Ազգանուն *</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Հեռախոսահամար *</label>
                  <div className="flex">
                    <span className="bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl px-3 flex items-center text-xs sm:text-sm font-medium text-gray-600">+374</span>
                    <input type="tel" required className="w-full bg-white border border-gray-200 rounded-r-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Էլ. հասցե</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Facebook սոց. կայքում անձնական էջի հղում</label>
                  <input type="url" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">LinkedIn սոց. կայքում անձնական էջի հղում</label>
                  <input type="url" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Ուղեկցող նամակ</label>
                <textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]"></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Վերբեռնեք Ձեր ռեզյումեն *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white hover:border-[#6400dc] transition cursor-pointer">
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">Կցել ֆայլը / ֆայլերը</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-neutral-700">Ստուգման ծածկագիր *</label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-center">
                    <img 
                      src="https://accounts.zoho.com/static/showcaptcha?digest=1_C_c650227a5d5f803deda631352226140fab644e31fffbddd9a8f2c43683e1676dfed64664d53e4e0fc68fdc773c30f2568394c4cb889fe89cac5d77f7187f1ad7" 
                      alt="Captcha" 
                      className="h-10 object-contain"
                    />
                  </div>
                  <input type="text" placeholder="Մուտքագրեք ծածկագիրը" required className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 sm:py-4 rounded-xl transition shadow-md cursor-pointer text-center text-xs sm:text-sm"
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