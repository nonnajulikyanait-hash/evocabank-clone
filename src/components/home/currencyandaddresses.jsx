import React, { useState } from 'react';

export default function CurrencyAndAddresses() {
  const [activeTab, setActiveTab] = useState('cash'); // 'cash', 'noncash', 'gold', 'ruble'

  // Calculator states for conversion
  const [giveAmount, setGiveAmount] = useState('1000');
  const [giveCurrency, setGiveCurrency] = useState('AMD');
  const [getCurrency, setGetCurrency] = useState('USD');

  // News items shown at the top of this section in original site
  const topNews = [
    {
      id: 1,
      title: 'Սիթվեն Բարթըթը՝ Երևանում` Evoca Conference 2026-ին',
      date: '19.10.2026',
    },
    {
      id: 2,
      title: 'Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը',
      date: '26.10.2026',
    },
    {
      id: 3,
      title: 'Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր',
      date: '08.10.2026',
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top News Cards Slider/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topNews.map((news) => (
            <div 
              key={news.id}
              className="bg-[#fbfbfb] border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
            >
              <h4 className="text-sm font-bold text-gray-900 leading-snug mb-4">
                {news.title}
              </h4>
              <span className="text-xs text-gray-400 font-medium">
                {news.date}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content: Left Currency Rates & Right Addresses Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Currency & Exchange Rates */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            
            {/* Info Text */}
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left">
              20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխանակման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով։ 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ։
            </p>

            {/* Exchange Tabs */}
            <div className="flex flex-wrap items-center gap-6 border-b border-gray-100 pb-3 text-xs md:text-sm font-semibold">
              <button
                onClick={() => setActiveTab('cash')}
                className={`pb-2 transition-all cursor-pointer ${activeTab === 'cash' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Կանխիկ
              </button>
              <button
                onClick={() => setActiveTab('noncash')}
                className={`pb-2 transition-all cursor-pointer ${activeTab === 'noncash' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Անկանխիկ
              </button>
              <button
                onClick={() => setActiveTab('gold')}
                className={`pb-2 transition-all cursor-pointer ${activeTab === 'gold' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Ոսկու փոխարժեք
              </button>
              <button
                onClick={() => setActiveTab('ruble')}
                className={`pb-2 transition-all cursor-pointer ${activeTab === 'ruble' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Ռուբլու կանխիկ մուտք
              </button>
            </div>

            {/* Tab 1 & 2: Cash / Non-Cash Rates Table */}
            {(activeTab === 'cash' || activeTab === 'noncash') && (
              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                        <th className="pb-3">Արժույթ</th>
                        <th className="pb-3">Առք</th>
                        <th className="pb-3">Վաճառք</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr className="text-gray-800">
                        <td className="py-4 font-bold flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px]">💵</span> USD
                        </td>
                        <td className="py-4 text-emerald-600 font-semibold">358</td>
                        <td className="py-4 text-emerald-600 font-semibold">363</td>
                      </tr>
                      <tr className="text-gray-800">
                        <td className="py-4 font-bold flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center text-white text-[10px]">💶</span> EUR
                        </td>
                        <td className="py-4 text-emerald-600 font-semibold">396</td>
                        <td className="py-4 text-emerald-600 font-semibold">407</td>
                      </tr>
                      <tr className="text-gray-800">
                        <td className="py-4 font-bold flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center text-white text-[10px]">🇷🇺</span> RUB
                        </td>
                        <td className="py-4 text-emerald-600 font-semibold">4.37</td>
                        <td className="py-4 text-emerald-600 font-semibold">4.58</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Conversion Mini Box inside table view */}
                <div className="bg-[#fbfbfb] p-4 rounded-2xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="w-full sm:w-1/2 text-left">
                    <span className="text-[11px] text-gray-400 block mb-1">Ունեմ</span>
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2">
                      <input 
                        type="text" 
                        value={giveAmount} 
                        onChange={(e) => setGiveAmount(e.target.value)} 
                        className="w-full outline-none font-bold text-gray-800 text-sm"
                      />
                      <select 
                        value={giveCurrency} 
                        onChange={(e) => setGiveCurrency(e.target.value)}
                        className="bg-transparent text-xs font-bold text-[#6400dc] outline-none cursor-pointer"
                      >
                        <option value="AMD">AMD</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 text-left">
                    <span className="text-[11px] text-gray-400 block mb-1">Կստանամ</span>
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-3 py-2">
                      <span className="font-bold text-gray-800 text-sm">
                        {(Number(giveAmount) / 363).toFixed(2)}
                      </span>
                      <select 
                        value={getCurrency} 
                        onChange={(e) => setGetCurrency(e.target.value)}
                        className="bg-transparent text-xs font-bold text-[#6400dc] outline-none cursor-pointer"
                      >
                        <option value="USD">USD</option>
                        <option value="AMD">AMD</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs text-gray-400 pt-2">
                  <span>Թարմացվել է՝ 29.10.2026</span>
                  <a href="#all" className="text-[#6400dc] font-bold hover:underline">Այլ արժույթներ</a>
                </div>
              </div>
            )}

            {/* Tab 3: Gold Exchange Rate */}
            {activeTab === 'gold' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                      <th className="pb-3">Հարգ</th>
                      <th className="pb-3">Սակագին (Արժեքը ՀՀ Դրամով 1 գրამის համար)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-gray-800 font-semibold">
                    <tr><td className="py-3">375</td><td className="py-3 text-gray-900">17,200 ֏</td></tr>
                    <tr><td className="py-3">500</td><td className="py-3 text-gray-900">23,000 ֏</td></tr>
                    <tr><td className="py-3">583</td><td className="py-3 text-gray-900">26,800 ֏</td></tr>
                    <tr><td className="py-3">750</td><td className="py-3 text-gray-900">34,500 ֏</td></tr>
                    <tr><td className="py-3">875</td><td className="py-3 text-gray-900">40,300 ֏</td></tr>
                    <tr><td className="py-3">900</td><td className="py-3 text-gray-900">41,500 ֏</td></tr>
                    <tr><td className="py-3">958</td><td className="py-3 text-gray-900">44,100 ֏</td></tr>
                    <tr><td className="py-3">999</td><td className="py-3 text-gray-900">46,000 ֏</td></tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Tab 4: Ruble Cash Deposit */}
            {activeTab === 'ruble' && (
              <div className="space-y-4">
                <div className="flex justify-between text-xs text-gray-400 font-medium border-b pb-2">
                  <span>Արժույթ</span>
                  <span>Սակագին</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-gray-800 py-2">
                  <span>RUB</span>
                  <span className="text-[#6400dc]">10%</span>
                </div>
              </div>
            )}

          </div>

          {/* Right Side: Our Addresses (Mer hasgnerte) */}
          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-black text-gray-900">Մեր հասցեները</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Բանկի հասցեները, աշխատաժամերը, բանկոմատները
              </p>
            </div>

            {/* Map Card Image / Illustration */}
            <div className="flex justify-center py-4 bg-[#fbfbfb] rounded-2xl border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                alt="Evocabank Map" 
                className="max-h-48 object-contain drop-shadow-md rounded-xl"
              />
            </div>

            <div>
              <a 
                href="#map" 
                className="inline-flex items-center justify-center w-full bg-purple-50 hover:bg-purple-100 text-[#6400dc] font-bold text-xs sm:text-sm py-3 px-6 rounded-2xl transition-all cursor-pointer shadow-sm"
              >
                Դիտել քարտեզը &gt;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}