import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';
import EvocaOnlineMobile from './evocaonlinemobile';

export default function Kayqiqartez() {
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Կայքի քարտեզ</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-8 md:mb-10">
            Կայքի քարտեզ
          </h1>

          {/* Քարտեզի բովանդակություն */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-xs sm:text-sm">
            
            {/* Սյուն 1: Անհատ */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#6400dc] mb-3 pb-2 border-b border-gray-200">Անհատ</h2>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Վարկեր</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/anhatvarker')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Վարկեր</button></li>
                  <li><button onClick={() => handleRouteChange('/credit-history-and-score')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Վարկային պատմություն և սքոր</button></li>
                  <li><button onClick={() => handleRouteChange('/important-information')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կարևոր տեղեկատվություն</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Քարտեր</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/qarter')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Քարտեր</button></li>
                  <li><button onClick={() => handleRouteChange('/qarter')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Քարտերի տրամադրում և սպասարկում</button></li>
                  <li><button onClick={() => handleRouteChange('/qarter')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Սոցիալական ապահովության վճարային քարտեր</button></li>
                  <li><button onClick={() => handleRouteChange('/qarter')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Evoca Benefits</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Ավանդներ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/deposits')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ավանդներ</button></li>
                  <li><button onClick={() => handleRouteChange('/deposits')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կարևոր տեղեկատվություն</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Հաշիվներ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/accounts')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Evoca խնայողական հաշիվ</button></li>
                  <li><button onClick={() => handleRouteChange('/accounts')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաշիվների բացում և սպասարկում</button></li>
                  <li><button onClick={() => handleRouteChange('/accounts')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Առարկայազուրկ մետաղական հաշիվներ</button></li>
                  <li><button onClick={() => handleRouteChange('/accounts')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Փոխանցումներ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/transfers')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Դրամական փոխանցումներ</button></li>
                  <li><button onClick={() => handleRouteChange('/transfers')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Վճարային համակարգեր</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Արժեթղթեր</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/securities')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ներդրումային ծառայություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/bonds')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Պարտատոմսեր</button></li>
                  <li><button onClick={() => handleRouteChange('/cda-services')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">ՀԿԴ ծառայություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/repo-reverse-repo')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ռեպո/Հակադարձ Ռեպո գործարքներ</button></li>
                  <li><button onClick={() => handleRouteChange('/evocainvest-service')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaINVEST</button></li>
                </ul>
              </div>

              <div className="space-y-2">
                <button onClick={() => handleRouteChange('/evocasalary')} className="block font-bold text-neutral-900 hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaSALARY</button>
                <button onClick={() => handleRouteChange('/evocatouch')} className="block font-bold text-neutral-900 hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaTOUCH</button>
              </div>
            </div>

            {/* Սյուն 2: Բիզնես */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#6400dc] mb-3 pb-2 border-b border-gray-200">Բիզնես</h2>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Վարկեր</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/business-loans')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բիզնես վարկեր</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Լիզինգ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/leasing')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Evoca Leasing</button></li>
                  <li><button onClick={() => handleRouteChange('/special-offer')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հատուկ առաջարկ</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Հաշիվներ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/business-accounts')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաշիվների բացում և սպասարկում</button></li>
                  <li><button onClick={() => handleRouteChange('/business-unallocated-metal-accounts')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Առարկայազուրկ մետաղական հաշիվներ</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Ավանդներ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/business-deposits')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Դասական ավանդ</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Արժեթղթերի շուկա</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/business-securities')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ներդրումային ծառայություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/bonds')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Պարտատոմսեր</button></li>
                  <li><button onClick={() => handleRouteChange('/cda-services')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">ՀԿԴ ծառայություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/repo-reverse-repo')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ռեպո/Հակադարձ ռեպո գործարքներ</button></li>
                  <li><button onClick={() => handleRouteChange('/evocainvest-service')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaINVEST</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Առևտրի ֆինանսավորում</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/trade-finance')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Երաշխիք</button></li>
                  <li><button onClick={() => handleRouteChange('/factoring')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ֆակտորինգային ֆինանսավորում</button></li>
                  <li><button onClick={() => handleRouteChange('/creditive')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ակրեդիտիվ</button></li>
                  <li><button onClick={() => handleRouteChange('/inkaso')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ինկասո</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Դիջիթալ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/dijital')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">V-POS Տերմինալ</button></li>
                  <li><button onClick={() => handleRouteChange('/terminal')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">POS Տերմինալ</button></li>
                  <li><button onClick={() => handleRouteChange('/sakagner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Սակագներ</button></li>
                  <li><button onClick={() => handleRouteChange('/hayt')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Տերմինալի տեղադրման հայտ</button></li>
                  <li><button onClick={() => handleRouteChange('/mobilepos')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Evoca Mobile POS՝ mPOS</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Այլ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/footerpahatuper')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Պահատուփեր</button></li>
                  <li><button onClick={() => handleRouteChange('/aylpoxancumner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Փոխանցումներ</button></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-neutral-900 mb-2">Ակնթարթային վճարումներ</h3>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/akntartayinvcharumner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ակնթարթային վճարումներ</button></li>
                </ul>
              </div>
            </div>

            {/* Սյուն 3: Մեր մասին, Սակագներ, Հաշվետվություններ և այլն */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#6400dc] mb-3 pb-2 border-b border-gray-200">Մեր մասին</h2>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/mer-masin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Evoca-ի մասին</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ընդհանուր</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin/karucvacq')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կառուցվածք</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin/bajneterer')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բաժնետերեր</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin/xekavarutyun')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ղեկավարություն</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin/gortsynkerner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Գործընկերներ</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin/mrcanakner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Մրցանակներ</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin/csr')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">CSR</button></li>
                  <li><button onClick={() => handleRouteChange('/mer-masin/xumb')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Էվոկա ֆինանսական խումբ</button></li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#6400dc] mb-3 pb-2 border-b border-gray-200">Սակագներ</h2>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/sakagner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Վարկեր ֆիզիկական անձանց</button></li>
                  <li><button onClick={() => handleRouteChange('/sakagner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Վարկեր իրավաբանական անձանց</button></li>
                  <li><button onClick={() => handleRouteChange('/sakagner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Միջնորդավճարների սակագները</button></li>
                  <li><button onClick={() => handleRouteChange('/sakagner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ավանդների սակագներ</button></li>
                  <li><button onClick={() => handleRouteChange('/arxiv')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Արխիվ</button></li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#6400dc] mb-3 pb-2 border-b border-gray-200">Հաշվետվություններ</h2>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/hashvetvutyunner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Աուդիտորական եզրակացություն</button></li>
                  <li><button onClick={() => handleRouteChange('/finansakan')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ֆինանսական հաշվետվություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/nerdroxner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ներդրողների համար</button></li>
                  <li><button onClick={() => handleRouteChange('/kisamyakayin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կիսամյակային հաշվետվություն</button></li>
                  <li><button onClick={() => handleRouteChange('/mermasintarekan')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Տարեկան հաշվետվություն</button></li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-black text-[#6400dc] mb-3 pb-2 border-b border-gray-200">Այլ բաժիններ</h2>
                <ul className="space-y-1.5 text-gray-600">
                  <li><button onClick={() => handleRouteChange('/haytararutyunner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հայտարարություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/norutyunner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Նորություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/blog')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բլոգ</button></li>
                  <li><button onClick={() => handleRouteChange('/kariera')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կարիերա</button></li>
                  <li><button onClick={() => handleRouteChange('/aravelutyunner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Evoca Լայֆ / Մշակույթ / Առավելություններ</button></li>
                  <li><button onClick={() => handleRouteChange('/harcer')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաճախ տրվող հարցեր</button></li>
                  <li><button onClick={() => handleRouteChange('/yndunum')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ինչպես ընդունվել աշխատանքի Evocabank-ում</button></li>
                  <li><button onClick={() => handleRouteChange('/praktika')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Աշխատանք և պրակտիկա</button></li>
                  <li><button onClick={() => handleRouteChange('/evocabridge')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaBRIDGE</button></li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* Տեղադրված են EvocaOnlineMobile և Footer բաղադրիչները */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}