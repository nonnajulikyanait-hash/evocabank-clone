import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function EvocaSalary() {
  const [openFaq, setOpenFaq] = useState({});

  const toggleFaq = (index) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqList = [
    {
      question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:",
      answer: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից։"
    },
    {
      question: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:",
      answer: "Ո՛չ։ Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի արդեն Evoca-ում բացված հաշվին։"
    },
    {
      question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:",
      answer: "Իհարկե՛։ Եթե դեռ Evoca-ի հաճախորդ չես, դու նույնպես կարող ես միանալ Evoca աշխատավարձային նախագծին:"
    },
    {
      question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:",
      answer: "Արտոնություններից կարող ես օգտվել այն պահից, երբ առաջին աշխատավարձդ փոխանցվի Evocabank-ի քարտին։ Քարտերի առավելությունները գործում են անմիջապես, իսկ վարկային առավելություններից կարող ես օգտվել աշխատավարձդ Բանկի քարտին մեկ անգամ ստանալուց հետո։"
    },
    {
      question: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:",
      answer: "Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող էդ ձեռք բերել 50% զեղչով։"
    },
    {
      question: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:",
      answer: "Միանալու համար կարող ես՝\n• Զանգահարել +37410605555 | 8444 հեռախոսահամարներով\n• Այցելել Evocabank-ի ցանկացած մասնաճյուղ և ստանալ խորհրդատվություն"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span className="text-gray-700 font-medium">EvocaSALARY</span>
          </div>

          {/* Banner Section */}
          <div className="bg-[#f5efff] rounded-[32px] overflow-hidden p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-4 md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                EVOCA ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ
              </h1>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։ Պարզապես պետք է ընտրել Evocabank-ը։
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
                alt="EvocaSALARY" 
                className="rounded-2xl max-h-80 object-cover shadow-md"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed mb-12">
            <p>
              Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ նոր հնարավորություններ ու առավելություններ[cite: 17]։
            </p>

            {/* 1. Mastercard Gold */}
            <div className="bg-purple-50 p-6 md:p-8 rounded-3xl border border-purple-100 space-y-3">
              <h3 className="font-bold text-[#6400dc] text-base md:text-lg">Բեր աշխատավարձդ Evoca, Տար անվճար Mastercard Gold</h3>
              <ul className="space-y-1.5 pl-4">
                <li>• Պրեմիում դասի քարտ[cite: 18]</li>
                <li>• Հասանելի ամբողջ աշխարհում[cite: 18]</li>
                <li>• Գումարի անվտանգության բարձր մակարդակ[cite: 18]</li>
                <li>• Դրական մնացորդի նկատմամբ 2% տարեկան տոկոսադրույք[cite: 18]</li>
              </ul>
            </div>

            {/* 2. Travel Card */}
            <div className="bg-purple-50 p-6 md:p-8 rounded-3xl border border-purple-100 space-y-3">
              <h3 className="font-bold text-[#6400dc] text-base md:text-lg">Բեր աշխատավարձդ Evoca, Տար 50% զեղչով Evoca Travel Card</h3>
              <ul className="space-y-1.5 pl-4">
                <li>• Մինչև 1.5% cashback արտասահմանում իրականացրած վճարումների համար[cite: 18]</li>
                <li>• Անվճար 6 մուտք Lounge Key սրահներ քեզ և հյուրերիդ համար[cite: 18]</li>
                <li>• Անվճար 6 անգամ Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար[cite: 18]</li>
                <li>• Այլ ճամփորդական առավելություններ[cite: 18]</li>
              </ul>
            </div>

            {/* 3. Benefits */}
            <div className="bg-purple-50 p-6 md:p-8 rounded-3xl border border-purple-100 space-y-3">
              <h3 className="font-bold text-[#6400dc] text-base md:text-lg">Բեր աշխատավարձդ Evoca Տար մի շարք Բենեֆիթներ</h3>
              <p>Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու Evoca Benefits նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս[cite: 18]՝</p>
              <ul className="space-y-1.5 pl-4">
                <li>• Մինչև 25% զեղչ[cite: 18]</li>
                <li>• Մինչև 25% cashback[cite: 18]</li>
                <li>• Նվեր քարտեր[cite: 19]</li>
              </ul>
            </div>

            {/* 4. Loans */}
            <div className="bg-purple-50 p-6 md:p-8 rounded-3xl border border-purple-100 space-y-4">
              <h3 className="font-bold text-[#6400dc] text-base md:text-lg">Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր</h3>
              
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ[cite: 19]</p>
                <ul className="pl-4 space-y-1">
                  <li>• Մինչև աշխատավարձի 15-ապատիկի չափով[cite: 19]</li>
                  <li>• Մինչև 10 մլն դրամ գումար[cite: 19]</li>
                  <li>• Մինչև 60 ամիս մարման ժամկետ[cite: 19]</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-semibold text-gray-900">Ավտովարկ[cite: 19]</p>
                <ul className="pl-4 space-y-1">
                  <li>• 0.5-ով ցածր տոկոսադրույք[cite: 19]</li>
                  <li>• Մինչև 50 մլն դրամ գումար[cite: 19]</li>
                  <li>• Մինչև 84 ամիս մարման ժամկետ[cite: 19]</li>
                  <li>• Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից[cite: 19]</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-semibold text-gray-900">Անշարժ գույքի գրավով սպառողական վարկ[cite: 19]</p>
                <ul className="pl-4 space-y-1">
                  <li>• 0.5-ով ցածր տոկոսադրույք[cite: 19]</li>
                  <li>• Մինչև 100 մլն դրամ գումար[cite: 19]</li>
                  <li>• Մինչև 120 ամիս մարման ժամկետ[cite: 19]</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 mb-16">
            <h2 className="text-xl md:text-2xl font-black text-neutral-900">
              Հաճախ տրվող հարցեր
            </h2>

            <div className="space-y-4">
              {faqList.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2 text-[#6400dc]">
                      <span>⌄</span> {faq.question}
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{openFaq[index] ? 'Փակել' : 'Բացել'}</span>
                  </button>
                  {openFaq[index] && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs md:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <EvocaOnlineMobile />
        </main>
      </div>

      <Footer />
    </div>
  );
}