import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Avtosrahner() {
  // Գործընկեր ավտոսրահների ցանկը՝ իրենց պայմաններով, տվյալներով և նկարներով
  const dealerships = [
    {
      id: 1,
      title: 'ECO MOTORS',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: `Երևան, Դավիթ Բեկ 97/26\nԵրևան, Դավիթ Բեկ 164/11\nԵրևան, Մալաթիա Սեբաստիա 108/2\nԿոտայքի մարզ, Վերին Պտղնի 14`,
      phone: '+37495949466 | +37496949466',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/auto-web.png'
    },
    {
      id: 2,
      title: 'Jcars',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      cars: 'BYD, Denza, Fangchangbao, Yangwang',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'Երևան, Դավիթ Բեկ 170',
      phone: '+37496949410',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/j%20cars.png'
    },
    {
      id: 3,
      title: 'City Auto',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      cars: 'LIXIANG, ASTON MARTIN, BYD, ZEEKR, MERCEDES, VOLKSWAGEN',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'Երևան, Մազմանյան 1',
      phone: '+37491129797',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/city%20auto.png'
    },
    {
      id: 4,
      title: 'Original Motors',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      cars: 'MAZDA, BYD',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'Աբովյան, Երևանյան փ., 1/100',
      phone: '+37495666266',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/Original%20Motors.png'
    },
    {
      id: 5,
      title: 'Tesla Service Yerevan',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      cars: 'Tesla',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'Երևան, Գարեգին Նժդեհի փ. 37/4',
      phone: '+37441040020',
      website: 'tsy.com.am',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/tesla%20new.png'
    },
    {
      id: 6,
      title: 'E-auto',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: 'սկսած 14.5%',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'Երևան, Դավիթ Բեկ փողոց 138/4',
      phone: '+37491330330',
      website: 'https://hongqi.am/',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/E-auto.png'
    },
    {
      id: 7,
      title: 'TESLA ENERGY',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'ՀՀ, Կոտայք, գ. Պռոշյան, Գ. Չաուշի փ. 1-ին նրբ. 3',
      phone: '+37444551111',
      website: 'https://teslaenergy.am/',
      image: 'https://www.evoca.am/file_manager/tesla.png'
    },
    {
      id: 8,
      title: 'E-Mobile',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      cars: 'MAZDA, BYD, LiXiang, HONDA, ZEEKR, MERCEDES-BENZ',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'Երևան, Իսակով 15/1',
      phone: '+37493659066',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/E-mobile.png'
    },
    {
      id: 9,
      title: 'iMotors',
      amount: 'մինչև 50,000,000 ՀՀ դրամ',
      term: 'մինչև 84 ամիս',
      rate: '14.5%',
      cars: 'BYD, ZEEKR, LiXiang',
      kasko: 'Անվճար ԿԱՍԿՈ',
      address: 'Կոտայք, Վերին Պտղնի, Նորավան թղմ․, 1-ին փողոց, 31',
      phone: '+37491000380',
      website: 'www.imotors.am',
      image: 'https://www.evoca.am/file_manager/Partner%20Car%20Dealerships/imotors-web.png'
    }
  ];

  // Բացված ակորդեոնների կառավարման վիճակ (state)
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 md:pt-10 pb-16 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-4 md:mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Գործընկեր ավտոսրահներ</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6">
            Գործընկեր ավտոսրահներ
          </h1>

          {/* Ներածական տեքստեր */}
          <div className="space-y-4 text-xs sm:text-sm text-gray-600 mb-10 leading-relaxed">
            <p className="font-semibold text-neutral-800">
              Պետք է ավտովարկ և որոշել ես դիմել Evoca-ին, իմացիր՝ արդեն ունես արտոնյալ պայմաններ։
            </p>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">Նոր մեքենա, ցածր տոկոսադրույք</h2>
              <p>
                Դու գիտես, որ Evoca-ում ավտոմեքենա կարող ես ձեռք բերել ինչպես առաջնային, այնպես էլ երկրորդային շուկայից։ Առաջնային շուկայի դեպքում՝ Evoca-ն համագործակցում է մի շարք ավտոսրահների հետ և առաջարկում վարկավորման արտոնյալ պայմաններ։
              </p>
            </div>
            <p>
              Վարկավորման արտոնյալ պայմանները հերիք չի, դու նաև ունես տեղում վարկային հայտ ներկայացնելու հնարավորություն։ Հայտը ներկայացնելուց հետո հարցման պատասխանը ստանում ես րոպեների ընթացքում։ Կարող ես տեղում կնքել վարկային պայմանագիրը և դու ունես նոր ավտոմեքենա՝ հատուկ պայմաններով։ Օնլայն վարկավորման դեպքում՝ ավտովարկը տրամադրվում է առանց սպասարկման վճարների, իսկ ԿԱՍԿՈ ապահովագրությունը վարկի մայր գումարի մնացորդի չափով յուրաքանչյուր տարի մինչև վարկի մարման վերջնաժամկետը կնքվում է Բանկի կողմից և Բանկի հաշվին:
            </p>
            <p className="text-neutral-900 font-medium">
              Evoca-ի գործընկեր ավտոսրահների կողմից առաջարկվող պայմաններին մանրամասն կարող ես ծանոթանալ ստորև․
            </p>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>

          {/* Ակորդեոնների ցանկ */}
          <div className="space-y-4">
            {dealerships.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  {/* Ակորդեոնի գլխամաս (Header) */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 transition-colors text-left cursor-pointer font-bold text-neutral-900 text-sm sm:text-base"
                  >
                    <span>{item.title}</span>
                    <span className={`transform transition-transform duration-300 text-purple-600 font-bold ${isOpen ? 'rotate-180' : ''}`}>
                      ⌄
                    </span>
                  </button>

                  {/* Ակորդեոնի բովանդակություն (Body) */}
                  {isOpen && (
                    <div className="p-4 sm:p-6 bg-gray-50/50 border-t border-gray-200 space-y-3 text-xs sm:text-sm">
                      <p><strong className="text-neutral-900">Գումար՝</strong> {item.amount}</p>
                      <p><strong className="text-neutral-900">Ժամկետ՝</strong> {item.term}</p>
                      <p><strong className="text-neutral-900">Տոկոսադրույք՝</strong> {item.rate}</p>
                      {item.cars && (
                        <p><strong className="text-neutral-900">Ավտոմեքենաներ՝</strong> {item.cars}</p>
                      )}
                      <p><strong className="text-neutral-900">Ապահովագրություն՝</strong> <span className="text-green-700 font-semibold">{item.kasko}</span></p>
                      <div>
                        <strong className="text-neutral-900">Սրահի հասցե՝</strong>
                        <p className="text-gray-600 whitespace-pre-line mt-1">{item.address}</p>
                      </div>
                      <p><strong className="text-neutral-900">Կոնտակտային տվյալներ՝</strong> {item.phone}</p>
                      {item.website && (
                        <p>
                          <strong className="text-neutral-900">Կայք՝</strong>{' '}
                          <a href={item.website} target="_blank" rel="noreferrer" className="text-[#6400dc] hover:underline">
                            {item.website}
                          </a>
                        </p>
                      )}

                      {/* Սրահի նկար */}
                      <div className="pt-3">
                        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm max-w-xs h-40">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}