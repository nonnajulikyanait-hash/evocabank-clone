import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from "./footer";

export default function UnsecuredConsumerLoan() {
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'conditions' | 'documents'

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <Navbar />
      
      {/* Sub-header Purple Bar */}
      <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
          <Link to="/loans" className="text-white border-b-2 border-white pb-1 cursor-pointer">
            Վարկեր
          </Link>
          <Link to="/credit-history-and-score" className="text-white opacity-80 hover:opacity-100 cursor-pointer">
            Վարկային պատմություն և սքոր
          </Link>
          <Link to="/important-information" className="text-white opacity-80 hover:opacity-100 cursor-pointer">
            Կարևոր տեղեկատվություն
          </Link>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative bg-[#6400dc] text-white overflow-hidden py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-4 text-left">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">Անգրավ սպառողական վարկ</h1>
            <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-xl">
              Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/16142452390597/560x400.png" 
              alt="Անգրավ սպառողական վարկ" 
              className="max-h-80 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Breadcrumb & Back */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/loans" className="text-xs font-bold text-gray-500 hover:text-[#6400dc] flex items-center gap-1">
            ← Վերադառնալ
          </Link>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Անհատ</span> &gt; <Link to="/loans">Վարկեր</Link> &gt; <span className="text-gray-700 font-medium">Անգրավ սպառողական վարկ</span>
          </div>
        </div>

        {/* Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details & Tabs (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-200 gap-8 text-sm font-bold">
              <button 
                onClick={() => setActiveTab('about')}
                className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'about' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
              >
                Վարկի մասին
              </button>
              <button 
                onClick={() => setActiveTab('conditions')}
                className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'conditions' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
              >
                Պայմաններ
              </button>
              <button 
                onClick={() => setActiveTab('documents')}
                className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'documents' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
              >
                Պահանջվող փաստաթղթերի ցանկ
              </button>
            </div>

            {/* Tab 1: About */}
            {activeTab === 'about' && (
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed animate-fadeIn">
                <p>
                  Evocabank-ն առաջարկում է մինչև 10,000,000 ՀՀ դրամ անգրավ սպառողական վարկ՝ պարզ, արագ և հարմար։ Վարկը նախատեսված է Ձեր ամենատարբեր ֆինանսական կարիքները հոգալու համար՝ անկախ նրանից՝ ցանկանում եք իրականացնել վաղուց պլանավորված նպատակը, թե լուծել անսպասելի ծախսերը։
                </p>
                <p>
                  Կախված վարկի գումարից, վարկունակությունից և ընտրված պայմաններից՝ վարկը կարող է տրամադրվել առանց երաշխավորի, ինչպես նաև մեկ կամ երկու անձի երաշխավորությամբ։ Այս մոտեցումը հնարավորություն է տալիս ընտրել Ձեզ ամենահարմար տարբերակը։
                </p>
                <p>
                  Մենք անում ենք հնարավոր ամեն բան՝ վարկավորման գործընթացը պարզեցնելու և արագացնելու համար՝ նվազագույն թղթաբանությամբ և վարկի արագ ձևակերպմամբ։
                </p>
              </div>
            )}

            {/* Tab 2: Conditions */}
            {activeTab === 'conditions' && (
              <div className="space-y-6 text-sm text-gray-700 animate-fadeIn">
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">1. Վարկի տրամադրման նպատակը</strong>
                    <p className="text-gray-600">Վարկը տրամադրվում է անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">2. Ովքեր կարող են դիմել</strong>
                    <p className="text-gray-600">18 – 65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք, ովքեր վարկի սպասարկման ողջ ընթացքում չեն բոլորի 65 տարին: Տվյալ պայմանը վերաբերում է նաև երաշխավոր ֆիզիկական անձանց:</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">3. Վարկավորման արժույթ</strong>
                    <p className="text-gray-600">ՀՀ դրամ</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">4. Վարկավորման գումար</strong>
                    <p className="text-gray-600 mb-1"><strong>Առանց եկամուտների հիմնավորման՝</strong> 1,000,000 - 3,000,000 ֏</p>
                    <p className="text-gray-600"><strong>Եկամուտների հիմնավորմամբ՝</strong> 1,000,000 - 10,000,000 ֏</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">5. Վարկի մարման ժամկետը</strong>
                    <p className="text-gray-600">36 - 60 ամիս</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">6. Տարեկան տոկոսադրույքներ</strong>
                    <div className="grid grid-cols-2 gap-4 mt-2 bg-gray-50 p-4 rounded-xl">
                      <div>
                        <span className="font-bold text-xs text-gray-500 block">Առանց եկամուտների հիմնավորման</span>
                        <span>Անվանական՝ <strong>21%</strong></span><br/>
                        <span>Փաստացի՝ <strong>23.17%</strong></span>
                      </div>
                      <div>
                        <span className="font-bold text-xs text-gray-500 block">Եկամուտների հիմնավորմամբ</span>
                        <span>Անվանական՝ <strong>19%</strong></span><br/>
                        <span>Փաստացի՝ <strong>20.77%</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">7. Վարկի մարման ժամանակացույց</strong>
                    <p className="text-gray-600">Անուիտետային (ամենամսյա պարբերականությամբ)</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">8. Վարկը շուտ մարելու տուգանք</strong>
                    <p className="text-gray-600">Տուգանք չի կիրառվում</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">9. Ուշացման տույժեր</strong>
                    <p className="text-gray-600">Ժամկետանց վարկի համար՝ օրական 0.015%, ժամկետանց տոկոսագումարի համար՝ օրական 0.1%:</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">10. Վարկի տրամադրման եղանակը</strong>
                    <p className="text-gray-600">Անկանխիկ</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">11. Սպասարկման վճարներ</strong>
                    <p className="text-gray-600">Չի սահմանվում</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">12. Վարկի վերադարձելիության ապահովման միջոցներ</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                      <li>Առանց եկամուտների հիմնավորման (1,000,000 ֏) – Նվազագույնը 1 անձի երաշխավորություն</li>
                      <li>Առանց եկամուտների հիմնավորման (1,000,001 - 3,000,000 ֏) – Նվազագույնը 2 անձի երաշխավորություն</li>
                      <li>Եկամուտների հիմնավորմամբ (1,000,000 - 3,000,000 ֏) – Առանց երաշխավորի պահանջի</li>
                      <li>Եկամուտների հիմնավորմամբ (3,000,001 - 5,000,000 ֏) – Նվազագույնը 1 անձի երաշխավորություն</li>
                      <li>Եկամուտների հիմնավորմամբ (5,000,001 - 10,000,000 ֏) – Նվազագույնը 2 անձի երաշխավորություն</li>
                    </ul>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">13. Վարկունակության գնահատում</strong>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                      <li>Եկամուտների հիմնավորմամբ OTI գործակիցը չպետք է գերազանցի 70%:</li>
                      <li>ԱՔՌԱ սքորը պետք է լինի 540 և բարձր։</li>
                      <li>Առանց եկամուտների վարկավորման դեպքում վերջին 1 տարում չպետք է ունենա ժամկետանց օրերի հանրագումարը 30 օրից ավելի։</li>
                    </ul>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">14. Վերաֆինանսավորում</strong>
                    <p className="text-gray-600">Այլ բանկերից վերաֆինանսավորման դեպքում (3 մլն ֏-ն գերազանցելիս) կարող է տրամադրվել մայր գումարի մարման արտոնյալ ժամանակահատված մինչև 6 ամիս:</p>
                  </div>

                  <div className="border-b pb-3">
                    <strong className="block text-neutral-900 mb-1">15. Որոշման կայացման ժամկետներ</strong>
                    <p className="text-gray-600">Առավելագույնը 3 աշխատանքային օր՝ փաստաթղթերը ներկայացնելուց հետո։ Վարկը տրամադրվում է 2 աշխատանքային օրվա ընթացքում:</p>
                  </div>

                  <div>
                    <strong className="block text-neutral-900 mb-1">16. Այլ պայմաններ</strong>
                    <p className="text-gray-600">- Փոխկապակցված անձը չպետք է ունենա այս վարկատեսակի գործող վարկ:<br/>- Կանխիկացման դեպքում գանձվում է վճար ըստ Բանկի սակագների:</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Required Documents */}
            {activeTab === 'documents' && (
              <div className="space-y-4 text-sm text-gray-700 animate-fadeIn">
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Վարկի տրամադրման դիմում-հայտ</li>
                  <li>Անձնագիր կամ նույնականացման քարտ, ինչպես նաև սոցիալական քարտ կամ սոցիալական քարտ չունենալու մասին տեղեկանք (ID քարտի դեպքում սոց. քարտ չի պահանջվում)</li>
                  <li>Տեղեկանք փաստացի բնակության վայրից</li>
                  <li>Տեղեկանք եկամուտների վերաբերյալ</li>
                  <li>Այլ եկամուտների մեծությունը հավաստող տեղեկատվություն (առկայության դեպքում)</li>
                  <li>Տեղեկատվություն երաշխավորող անձի/անձանց վերաբերյալ</li>
                  <li>Անհրաժեշտության դեպքում կարող են պահանջվել նաև այլ փաստաթղթեր</li>
                </ol>
              </div>
            )}

          </div>

          {/* Right Sticky Calculator / Summary Box (4 Cols) */}
          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-24 space-y-6">
            <div className="flex justify-center">
              <span className="w-10 h-10 rounded-full bg-[#6400dc] text-white flex items-center justify-center font-bold text-lg">
                ֏
              </span>
            </div>

            <div className="space-y-4 border-t border-b border-gray-100 py-6 text-left">
              <div>
                <div className="text-xl md:text-2xl font-black text-[#6400dc]">մինչև 10 մլն. ֏</div>
                <div className="text-xs text-gray-400 font-medium">Գումար</div>
              </div>
              <div className="pt-2">
                <div className="text-xl md:text-2xl font-black text-[#6400dc]">մինչև 60 ամիս</div>
                <div className="text-xs text-gray-400 font-medium">Ժամկետ</div>
              </div>
              <div className="pt-2">
                <div className="text-xl md:text-2xl font-black text-[#6400dc]">սկսած 19%-ից</div>
                <div className="text-xs text-gray-400 font-medium">Տոկոսադրույք</div>
              </div>
            </div>

            <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs py-3.5 rounded-full transition shadow-md cursor-pointer">
              Առցանց հայտ
            </button>
          </div>

        </div>

      </div>

      {/* Evoca Online Mobile & Footer */}
      <EvocaOnlineMobile />
      <Footer />
    </div>
  );
}