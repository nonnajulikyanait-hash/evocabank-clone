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
      answer: "Այո՛, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձդ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով։"
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

        <main className="max-w-7xl mx-auto px-4 py-6 md:py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span className="text-gray-700 font-medium">EvocaSALARY</span>
          </div>

          {/* Banner Section */}
          <div className="bg-[#f5efff] rounded-2xl md:rounded-[32px] overflow-hidden p-6 sm:p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="space-y-4 md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
                EVOCA ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ ՆԱԽԱԳԻԾ
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։ Պարզապես պետք է ընտրել Evocabank-ը։
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center w-full">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
                alt="EvocaSALARY" 
                className="rounded-xl md:rounded-2xl max-h-64 md:max-h-80 object-cover shadow-md w-full max-w-md"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed mb-12">
            <p>
              Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ նոր հնարավորություններ ու առավելություններ։
            </p>

            {/* 1. Mastercard Gold */}
            <div className="bg-purple-50 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-purple-100 space-y-3">
              <h3 className="font-bold text-[#6400dc] text-sm sm:text-base md:text-lg">Բեր աշխատավարձդ Evoca, Տար անվճար Mastercard Gold</h3>
              <ul className="space-y-1.5 pl-4 list-disc">
                <li>Պրեմիում դասի քարտ</li>
                <li>Հասանելի ամբողջ աշխարհում</li>
                <li>Գումարի անվտանգության բարձր մակարդակ</li>
                <li>Դրական մնացորդի նկատմամբ 2% տարեկան տոկոսադրույք</li>
              </ul>
            </div>

            {/* 2. Travel Card */}
            <div className="bg-purple-50 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-purple-100 space-y-3">
              <h3 className="font-bold text-[#6400dc] text-sm sm:text-base md:text-lg">Բեր աշխատավարձդ Evoca, Տար 50% զեղչով Evoca Travel Card</h3>
              <ul className="space-y-1.5 pl-4 list-disc">
                <li>Մինչև 1.5% cashback արտասահմանում իրականացրած վճարումների համար</li>
                <li>Անվճար 6 մուտք Lounge Key սրահներ քեզ և հյուրերիդ համար</li>
                <li>Անվճար 6 անգամ Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</li>
                <li>Այլ ճամփորդական առավելություններ</li>
              </ul>
            </div>

            {/* 3. Benefits */}
            <div className="bg-purple-50 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-purple-100 space-y-3">
              <h3 className="font-bold text-[#6400dc] text-sm sm:text-base md:text-lg">Բեր աշխատավարձդ Evoca Տար մի շարք Բենեֆիթներ</h3>
              <p>Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու Evoca Benefits նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝</p>
              <ul className="space-y-1.5 pl-4 list-disc">
                <li>Մինչև 25% զեղչ</li>
                <li>Մինչև 25% cashback</li>
                <li>Նվեր քարտեր</li>
              </ul>
            </div>

            {/* 4. Loans */}
            <div className="bg-purple-50 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-purple-100 space-y-4">
              <h3 className="font-bold text-[#6400dc] text-sm sm:text-base md:text-lg">Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր</h3>
              
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Օվերդրաֆտ կամ Մարման գրաֆիկով վարկ</p>
                <ul className="pl-4 space-y-1 list-disc">
                  <li>Մինչև աշխատավարձի 15-ապատիկի չափով</li>
                  <li>Մինչև 10 մլն դրամ գումար</li>
                  <li>Մինչև 60 ամիս մարման ժամկետ</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-semibold text-gray-900">Ավտովարկ</p>
                <ul className="pl-4 space-y-1 list-disc">
                  <li>0.5-ով ցածր տոկոսադրույք</li>
                  <li>Մինչև 50 մլն դրամ գումար</li>
                  <li>Մինչև 84 ամիս մարման ժամկետ</li>
                  <li>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <p className="font-semibold text-gray-900">Անշարժ գույքի գրավով սպառողական վարկ</p>
                <ul className="pl-4 space-y-1 list-disc">
                  <li>0.5-ով ցածր տոկոսադրույք</li>
                  <li>Մինչև 100 մլն դրամ գումար</li>
                  <li>Մինչև 120 ամիս մարման ժամկետ</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 mb-16">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-neutral-900">
              Հաճախ տրվող հարցեր
            </h2>

            <div className="space-y-4">
              {faqList.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer text-xs sm:text-sm"
                  >
                    <span className="flex items-center gap-2 text-[#6400dc]">
                      <span>⌄</span> {faq.question}
                    </span>
                    <span className="text-xs text-gray-400 font-normal shrink-0 ml-2">{openFaq[index] ? 'Փակել' : 'Բացել'}</span>
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