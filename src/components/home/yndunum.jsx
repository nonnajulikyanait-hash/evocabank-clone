import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Yndunum() {
  // Աշխատանքի ընդունվելու 5 փուլերի տվյալները
  const hiringSteps = [
    {
      id: 1,
      title: 'Առաջին փուլ` Դիմում',
      content: (
        <p>
          Evocabank-ում աշխատանքի դիմելիս թեկնածուի ճանապարհը սկսվում է հայտի ներկայացումից, որն իրականացվում է կամ ներքոնշյալ հայտը լրացնելով կամ{' '}
          <a href="mailto:cv@evocabank.am" className="text-[#6400dc] font-bold underline">
            cv@evocabank.am
          </a>{' '}
          էլ. հասցեին Ձեր ինքնակենսագրականն ուղարկելով:
        </p>
      )
    },
    {
      id: 2,
      title: 'Երկրորդ փուլ` Հարցազրույցներ',
      content: (
        <div className="space-y-3">
          <p>
            Եթե ինքնակենսագրականում նշված Ձեր փորձը համապատասխանել է պահանջներին, ապա Evocabank-ի հարցազրուցավարը կապ կհաստատի Ձեզ հետ: Սովորաբար, Evoca-ում հարցազրույցների գործընթացն անցնում է երեք փուլով:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-neutral-700">
            <li>
              <strong>Առաջին փուլը</strong> հեռախոսային հարցազրույց է: Այս փուլում Դուք կստանաք ավելի մանրամասն ինֆորմացիա այն աշխատանքի մասին, որի համար դիմել եք: Կներկայացնենք Ձեզ Evocabank-ը, և, թե ինչպիսին է աշխատանքը մեր թիմում: Նաև մի քանի հարցեր կլինեն Ձեր մասնագիտական փորձի վերաբերյալ:
            </li>
            <li>
              <strong>Երկրորդ փուլը</strong> առերես հարցազրույց է հարցազրուցավարի և հավաքագրման ղեկավարի հետ: Այս փուլի նպատակն է գնահատել Ձեր հետաքրքրվածությունը և կարողությունները իրականացնելու ամենօրյա աշխատանքն ու պարտականությունները:
            </li>
            <li>
              <strong>Երրորդ փուլը</strong> հարցազրույց է թիմի անդամների, ղեկավարների և բոլոր այն մարդկանց հետ, ում հետ Դուք հնարավոր է հետագայում աշխատեք:
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: 'Երրորդ փուլ` Թեստավորում և ամփոփում',
      content: (
        <p>
          Թեստավորումից և հարցազրույցների ավարտից հետո այն մարդիկ, ում հետ զրուցել եք, իրենց կարծիքն են հայտնում Ձեր հետ ունեցած հարցազրույցի արդյունքների վերաբերյալ, և մենք գնահատում ենք, թե արդյոք հաջողակ կլինեք տվյալ դերում:
        </p>
      )
    },
    {
      id: 4,
      title: 'Չորրորդ փուլ` Ստուգումներ',
      content: (
        <p>
          Աշխատանքի պայմանական առաջարկ կատարելուց հետո, Evoca-ն իրականացնում է դիմորդի վերաբերյալ պարտադիր ստուգումներ: Կատարվում են 4 հիմնական տեսակների ստուգումներ` քրեական պատմության, կրթության, աշխատանքային պատմության և referral ստուգումներ:
        </p>
      )
    },
    {
      id: 5,
      title: 'Հինգերորդ փուլ` Աշխատանքի առաջարկ',
      content: (
        <p>
          Ստուգումների դրական արդյունքներ ստանալուց հետո մեր թիմը կապ կհաստատի Ձեզ հետ և կներկայացնի աշխատանքի առաջարկ: Ձեր կողմից այն ընդունվելուց հետո կիրականացվենի փաստաթղթային ձևակերպումները և կամփոփվեն այլ մանրամասներ: Բարի գալուստ Evocabank!
        </p>
      )
    }
  ];

  // Accordion state management
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Կարիերայի Ենթամենյու */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/kariera" className="text-purple-200 hover:text-white transition">Մշակույթ</Link>
            <Link to="/aravelutyunner" className="text-purple-200 hover:text-white transition">Առավելություններ</Link>
            <Link to="/harcer" className="text-purple-200 hover:text-white transition">Հաճախ տրվող հարցեր</Link>
            <Link to="/yndunum" className="border-b-2 border-white pb-1 cursor-pointer font-black">Ինչպես ընդունվել աշխատանքի Evocabank-ում</Link>
          </div>
        </div>

        <main className="space-y-16 pb-16">
          {/* 1. Full-Width Hero Section */}
          <div 
            className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center overflow-hidden flex items-end md:items-center justify-start px-6 md:px-24 pb-8 md:pb-0"
            style={{ backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16194613464502/1920x634.jpg')` }}
          >
            <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-lg space-y-4 border border-gray-100">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                Ինչպես ընդունվել աշխատանքի Evocabank-ում
              </h1>
            </div>
          </div>

          {/* 2. Աշխատանքի ընդունվելու փուլեր (Interactive Accordion Timeline) */}
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 text-center">
              Աշխատանքի ընդունվելու փուլեր
            </h2>

            <div className="space-y-4 relative">
              {hiringSteps.map((step) => (
                <div 
                  key={step.id} 
                  className="flex items-start gap-4 border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-[#f8f9fa] transition"
                >
                  {/* Step Number Circle */}
                  <div className="bg-[#6400dc] text-white font-extrabold w-12 h-12 rounded-xl flex items-center justify-center shrink-0 m-4 text-lg shadow-sm">
                    {step.id}
                  </div>

                  {/* Accordion Content Box */}
                  <div className="flex-1 my-auto pr-4 py-3">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="w-full text-left py-2 flex justify-between items-center gap-4 font-bold text-neutral-900 text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                    >
                      <span>{step.title}</span>
                      <span className={`text-xl transform transition-transform duration-300 ${openStep === step.id ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>
                        ∨
                      </span>
                    </button>

                    {openStep === step.id && (
                      <div className="pt-3 pb-2 text-neutral-600 text-sm leading-relaxed border-t border-gray-200 mt-2">
                        {step.content}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Application Form */}
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