import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Qartez() {
  const [activeTab, setActiveTab] = useState('branches'); // 'branches' | 'atms' | 'terminals'
  const [selectedCity, setSelectedCity] = useState('Երևան');
  const [selectedRegion, setSelectedRegion] = useState('Բոլորը');

  // 1. Մասնաճյուղերի ցանկ
  const branches = [
    {
      id: 1,
      title: 'Գլխամասային գրասենյակ',
      hours: '09:30 - 17:00',
      address: 'Հանրապետության 44/2',
      phones: '+374 10 60 55 55, +374 98 20 55 55, +374 99 60 55 55',
      lat: 40.1762,
      lng: 44.5126
    },
    {
      id: 2,
      title: 'Evoca Premium Branch',
      hours: 'Երկուշաբթիից ուրբաթ 10:00 - 18:00',
      address: 'ՀՀ ք. Երևան, Զաքյան 10, 0052',
      phones: '8444',
      lat: 40.1745,
      lng: 44.5085
    },
    {
      id: 3,
      title: '«Ազատության 12» մասնաճյուղ',
      hours: '09:30 - 17:00, Շաբաթ՝ 10:00 - 14:00',
      address: 'Ազատության 12',
      phones: '+374 10 60 55 55',
      lat: 40.2035,
      lng: 44.5268
    },
    {
      id: 4,
      title: '«Թումանյան» մասնաճյուղ',
      hours: '09:30 - 21:30, Շաբաթ՝ 10:00 - 17:30',
      address: 'Թումանյան 15',
      phones: '+374 10 60 55 55',
      lat: 40.1831,
      lng: 44.5142
    },
    {
      id: 5,
      title: '«Կասյան» մասնաճյուղ',
      hours: '09:30 - 17:00',
      address: 'Կասյան 5',
      phones: '+374 10 60 55 55',
      lat: 40.1989,
      lng: 44.4908
    }
  ];

  // 2. Բանկոմատների ցանկ
  const atms = [
    { id: 1, title: 'Տիտոգրադյան 15/1', desc: 'Սպասարկում է ArCa, VISA, Mastercard' },
    { id: 2, title: 'Կիևյան 11ա 64', desc: 'Սպասարկում է ArCa, VISA, Mastercard' },
    { id: 3, title: 'Խորենացի 47', desc: 'Սպասարկում է ArCa, VISA, Mastercard' },
    { id: 4, title: 'Արշակունյաց 48/5', desc: 'Սպասարկում է ArCa, VISA, Mastercard' },
    { id: 5, title: 'Մեջլումով 23/4', desc: 'Կանխիկի մուտք՝ Այո' }
  ];

  // 3. Տերմինալների ցանկ
  const terminals = [
    { id: 1, title: 'Հանրապետության 44/2' },
    { id: 2, title: 'Ադմիրալ Իսակով 9/2' },
    { id: 3, title: 'Պրոշյան 2/1' },
    { id: 4, title: 'Սմբատ Զորավարի փ. 11/1' },
    { id: 5, title: 'Հակոբ Հակոբյան 8/2 - 13' },
    { id: 6, title: 'Շերամի 77/53' },
    { id: 7, title: 'Ծարավ Աղբյուր 55/15' },
    { id: 8, title: 'Չեխովի 52/26' },
    { id: 9, title: 'Լվովյան 14/1' },
    { id: 10, title: 'Ադոնցի փողոց 19/8 5-րդ մ/շ 105 տար.' },
    { id: 11, title: 'Վիլնյուս 41' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Վերնագրային մաս */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-10 pb-6 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6 md:mb-8">
            Բանկի հասցեները և աշխատաժամերը
          </h1>

          {/* 3 Թաբեր */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 border-b border-gray-200 pb-3 mb-6 text-xs sm:text-sm md:text-base font-bold text-gray-500 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab('branches')}
              className={`pb-3 transition-colors cursor-pointer relative ${
                activeTab === 'branches' ? 'text-[#6400dc] border-b-2 border-[#6400dc]' : 'hover:text-gray-900'
              }`}
            >
              Մասնաճյուղեր
            </button>
            <button
              onClick={() => setActiveTab('atms')}
              className={`pb-3 transition-colors cursor-pointer relative ${
                activeTab === 'atms' ? 'text-[#6400dc] border-b-2 border-[#6400dc]' : 'hover:text-gray-900'
              }`}
            >
              Բանկոմատներ
            </button>
            <button
              onClick={() => setActiveTab('terminals')}
              className={`pb-3 transition-colors cursor-pointer relative ${
                activeTab === 'terminals' ? 'text-[#6400dc] border-b-2 border-[#6400dc]' : 'hover:text-gray-900'
              }`}
            >
              Արտարժույթի փոխանակման տերմինալներ
            </button>
          </div>
        </div>

        {/* Քարտեզի և ցանկի հիմնական բաժին */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Ձախ մաս՝ Հասցեների ցանկ */}
            <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 shadow-sm max-h-[500px] lg:max-h-[600px] overflow-y-auto text-left space-y-6">
              
              {/* 1. ՄԱՍՆԱՃՅՈՒՂԵՐ */}
              {activeTab === 'branches' && branches.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0 space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 flex items-center gap-1.5">
                    <span className="text-[#6400dc]">📍</span> {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <span>🕒</span> {item.hours}
                  </p>
                  <p className="text-xs text-gray-600 flex items-center gap-1">
                    <span>📍</span> {item.address}
                  </p>
                  <p className="text-xs text-[#6400dc] font-semibold flex items-center gap-1">
                    <span>📞</span> {item.phones}
                  </p>
                </div>
              ))}

              {/* 2. ԲԱՆԿՈՄԱՏՆԵՐ */}
              {activeTab === 'atms' && atms.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0 space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 flex items-center gap-1.5">
                    <span className="text-[#6400dc]">📍</span> {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">ArCa</span>
                    <span className="text-[10px] bg-blue-50 text-blue-900 px-2 py-0.5 rounded font-bold">VISA</span>
                    <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded font-bold">Mastercard</span>
                  </div>
                </div>
              ))}

              {/* 3. ՏԵՐՄԻՆԱԼՆԵՐ */}
              {activeTab === 'terminals' && terminals.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-xs sm:text-sm font-bold text-neutral-800 flex items-center gap-1.5">
                    <span className="text-[#6400dc]">📍</span> {item.title}
                  </h3>
                </div>
              ))}

            </div>

            {/* Աջ մաս՝ Ինտերակտիվ Քարտեզ OpenStreetMap-ով */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-gray-100 shadow-md h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100">
              
              {/* Ֆիլտրերի վերնաշերտ (Overlay Filter) */}
              <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2">
                  <button className="bg-white border border-gray-200 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold text-neutral-700 shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-gray-50">
                    <span>≡</span> Ֆիլտր
                  </button>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <select 
                    value={selectedCity} 
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="bg-white border border-gray-200 rounded-xl px-2 sm:px-3 py-1.5 text-xs font-bold text-neutral-700 outline-none cursor-pointer"
                  >
                    <option value="Երևան">Երևան</option>
                    <option value="Գյումրի">Գյումրի</option>
                    <option value="Վանաձոր">Վանաձոր</option>
                  </select>

                  <select 
                    value={selectedRegion} 
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="bg-white border border-gray-200 rounded-xl px-2 sm:px-3 py-1.5 text-xs font-bold text-neutral-700 outline-none cursor-pointer"
                  >
                    <option value="Բոլորը">Համայնք</option>
                    <option value="Կենտրոն">Կենտրոն</option>
                    <option value="Արաբկիր">Արաբկիր</option>
                    <option value="Նոր Նորք">Նոր Նորք</option>
                  </select>
                </div>
              </div>

              {/* OpenStreetMap Iframe */}
              <iframe
                title="Evocabank Map"
                className="w-full h-full border-0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=44.4500%2C40.1300%2C44.5800%2C40.2300&amp;layer=mapnik&amp;marker=40.1762%2C44.5126"
              ></iframe>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}