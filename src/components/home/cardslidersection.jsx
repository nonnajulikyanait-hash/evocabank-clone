import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

const cardsData = [
  {
    id: 1,
    title: 'Evoca Travel Card',
    description: 'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը։',
    image: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg',
  },
  {
    id: 2,
    title: 'Evoca Visa Platinum',
    description: 'Ձեռք բեր Evoca Visa Platinum քարտ և օգտվիր արտոնյալ բանկային ծառայություններից:',
    image: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
  },
  {
    id: 3,
    title: 'Wilco Visa Infinite',
    description: 'Բացառիկ հնարավորություններ և անհատական սպասարկում Visa Infinite-ի հետ:',
    image: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
  },
  {
    id: 4,
    title: 'Evoca Gift Card',
    description: 'Evoca Gift Card-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է:\nԳնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:\nEvoca Gift Card-ով կարող ես վճարել ցանկացած POS և V-POS տերմինալով խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում, օնլայն խանութներում:',
    image: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
  },
  {
    id: 5,
    title: 'Digital Gift Card',
    description: 'Արագ և հարմարավետ թվային նվեր քարտ ցանկացած առիթի համար:',
    image: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
  },
  {
    id: 6,
    title: 'Visa Infinite',
    description: 'Ձեր բանալին՝ դեպի արտոնությունների մեծ աշխարհ:\nՔարտը կնվիրի Ձեզ բացառիկ հնարավորությունների փաթեթ՝ անվտանգ գնումների, ապահովագրված ճամփորդությունների, VIP կարգավիճակի ձեռքբերման համար և ոչ միայն: Այն կգոհացնի անգամ ամենաքմահաճ ու պահանջկոտ հաճախորդին:',
    image: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
  },
  {
    id: 7,
    title: 'Visa Vision',
    description: 'Evocabank-ը ներկայացնում է իր նոր՝ Visa Vision քարտը, որի հետ դու կստանաս՝',
    bullets: [
      '0% կանխիկացում Evoca-ի բոլոր բանկոմատներից',
      'Cashback բոլոր անկանխիկ վճարումներից',
      'Դրական մնացորդի վրա գումարի կուտակում',
      'Վարկային սահմանաչափ` քո ցանկությամբ'
    ],
    image: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
  },
  {
    id: 8,
    title: 'Mastercard World Digital',
    description: 'Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում։',
    image: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png',
  },
  {
    id: 9,
    title: 'UnionPay Business Platinum',
    description: 'Բիզնես գործարքների և միջազգային վճարումների հուսալի գործընկեր:',
    image: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png',
  },
  {
    id: 10,
    title: 'MyLer Gift Card',
    description: 'Յուրահատուկ նվեր քարտ լավագույն տպավորությունների համար:',
    image: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png',
  },
  {
    id: 11,
    title: 'UnionPay Gold',
    description: 'Ամբողջ աշխարհում արագ և հարմար վճարումների ուղեկիցը։',
    image: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png',
  },
  {
    id: 12,
    title: '4U.am Gift card',
    description: 'Գնումների լայն հնարավորություններ 4U.am հարթակում:',
    image: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png',
  },
  {
    id: 13,
    title: 'Mastercard Gold',
    description: 'Քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները:\nՀաշված րոպեների ընթացքում դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա՝ վճարելով Mastercard Gold քարտով:',
    image: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
  },
  {
    id: 14,
    title: 'Mastercard Standard',
    description: 'Ամենօրյա գնումներից մինչև անմոռանալի ճանապարհորդություն՝ քո Mastercard Standard քարտով:\nԵթե հաճախ ես ճամփորդում, այս քարտը քեզ համար պարզապես անհրաժեշտություն կդառնա։ Դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա` վճարելով Mastercard Standard քարտով։',
    image: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png',
  },
  {
    id: 15,
    title: 'Visa Digital',
    description: 'Անվտանգ և արագ առցանց վճարումներ Visa Digital քարտով:',
    image: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
  },
  {
    id: 16,
    title: 'Visa Classic',
    description: 'Ունիվերսալ վճարային քարտ, որը հասանելի կլինի աշխարհի ցանկացած կետում` 24/7 սկզբունքով:\nԿատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով պարզ և արագ` առանց PIN կոդի մուտքագրման:',
    image: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
  },
  {
    id: 17,
    title: 'Arca Classic',
    description: 'Ձեռք բեր ArCa Classic քարտը և կատարիր քո գործարքները մեր նորաոճ քարտի օգնությամբ:\nԸնդամենը մեկ հպում EvocaTOUCH հավելվածում և վերջ: Քարտը կարող ես ստանալ նույնիսկ առանց Բանկ այցելելու՝ հավելվածում նշելով առաքման տարբերակը: Evocabank-ը մշտապես հոգում է քո հարմարավետության մասին:',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
  },
  {
    id: 18,
    title: 'Arca-UnionPay',
    description: 'Պետք չէ ընտրություն կատարել լոկալ և միջազգային քարտերի միջև։\nEvoca-ն միավորում է Arca ազգային և UnionPay միջազգային վճարային համակարգերի հնարավորությունները մեկ քարտում` թողարկելով Arca-UnionPay քարտը:',
    image: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png',
  },
  {
    id: 19,
    title: 'Visa Business',
    description: 'Մեկնեք գործուղման Evocabank-ի Visa Business քարտով։ Նախապես գնեք Ձեր ավիատոմսը, ամրագրեք հյուրանոցային համար կամ վարձեք ավտոմեքենա։\nՁեր կազմակերպության դրամական միջոցները հասանելի են աշխարհի բոլոր կետերում:',
    image: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png',
  },
  {
    id: 20,
    title: 'Dalma Gift Card',
    description: 'Նվեր ընտրելն այլևս դժվար չէ: 21-րդ դարում տոներին Gift քարտ նվիրելը նորաձև է դարձել։ Դու որոշում ես՝ որքան գումար տալ, նրանք որոշում են՝ որտեղ ծախսեն:\nDalma Gift Card-ը նվերի իդեալական տարբերակ է, որը համապատասխանում է նվեր ընտրելու քո բոլոր պահանջներին։',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png',
  },
  {
    id: 21,
    title: 'Rio Gift Card',
    description: 'Մեզ հետ դու կարող ես խնայել ամենաթանկը՝ ժամանակը, բայց նույն պահին ունենալ նվերի լավագույն տարբերակը։',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png',
  },
  {
    id: 22,
    title: 'Visa Gold',
    description: 'Քարտն ապահովում է Ձեր հարմարավետությունն ու հաճելի դարձնում ցանկացած գնում:\nVisa Gold քարտը ճամփորդության ողջ ընթացքում կլինի Ձեր հուսալի ուղեկիցն ու կընդգծի Ձեր յուրահատուկ կարգավիճակը:',
    image: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png',
  },
];

export default function CardsSliderSection() {
  const [selectedCard, setSelectedCard] = useState(cardsData[4]); // Digital Gift Card default
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="py-16 px-4 md:px-8 bg-[#f0f7fe] transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Side: Vertical Swiper without hover background */}
        <div className="w-full lg:w-4/12 flex flex-col items-center relative">
          
          {/* Top Arrow */}
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="z-10 p-2 text-[#6400dc] hover:scale-125 transition-transform duration-200 cursor-pointer mb-2"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>

          {/* Vertical Swiper Container - Fully Transparent */}
          <div className="h-[360px] w-full max-w-[280px]">
            <Swiper
              direction={'vertical'}
              slidesPerView={3}
              spaceBetween={16}
              mousewheel={true}
              modules={[Mousewheel]}
              onSwiper={setSwiperInstance}
              className="h-full w-full"
            >
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div
                    onClick={() => setSelectedCard(card)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl cursor-pointer bg-transparent transition-all duration-200 ${
                      selectedCard.id === card.id 
                        ? 'border-b-2 border-[#6400dc]' 
                        : 'border-b-2 border-transparent opacity-70'
                    }`}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-24 h-15 object-contain"
                    />
                    <span className="text-xs font-bold text-gray-800 mt-1 text-center truncate w-full">
                      {card.title}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom Arrow */}
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="z-10 p-2 text-[#6400dc] hover:scale-125 transition-transform duration-200 cursor-pointer mt-2"
            aria-label="Next card"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

        {/* Center: Selected Card Image Display */}
        <div className="w-full lg:w-4/12 flex justify-center items-center py-4">
          <div className="relative">
            <img 
              src={selectedCard.image} 
              alt={selectedCard.title} 
              className="w-[340px] md:w-[380px] h-auto object-contain drop-shadow-2xl transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Side: Card Information & Detail Button */}
        <div className="w-full lg:w-4/12 space-y-5 text-left pl-0 lg:pl-4">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            {selectedCard.title}
          </h3>

          <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line space-y-2">
            <p>{selectedCard.description}</p>
            {selectedCard.bullets && (
              <ul className="space-y-1 mt-2">
                {selectedCard.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6400dc] shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-2">
            <button className="bg-[#6400dc] hover:bg-[#5200b8] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all cursor-pointer">
              Մանրամասն
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}