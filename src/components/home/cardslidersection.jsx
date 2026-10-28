import React, { useState } from 'react';

const cardsData = [
  {
    id: 1,
    title: 'Evoca Travel Card',
    description: 'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը',
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
    description: 'Evocabank-ը ներկայացնում է իր նոր՝ Visa Vision քարտը, որի հետ դու կստանաս՝\n- 0% կանխիկացում Evoca-ի բոլոր բանկոմատներից\n- Cashback բոլոր անկանխիկ վճարումներից\n- Դրական մնացորդի վրա գումարի կուտակում\n- Վարկային սահմանաչափ` քո ցանկությամբ',
    image: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
    hasPurpleBullets: true,
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

export default function CardSliderSection() {
  const [selectedCard, setSelectedCard] = useState(cardsData[0]);

  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս - Ուղղահայաց սքրոլվող կամ ոլորվող փոքր քարտերի ցանկ */}
        <div className="w-full lg:w-5/12 h-[450px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
          {cardsData.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setSelectedCard(card)}
              onClick={() => setSelectedCard(card)}
              className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border ${
                selectedCard.id === card.id
                  ? 'border-[#6400dc] bg-purple-50 shadow-md'
                  : 'border-gray-100 bg-white'
              }`}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-24 h-16 object-contain rounded-lg bg-gray-50 p-1 shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-900">{card.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-1">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Աջ մաս - Ընտրված քարտի մեծ ցուցադրություն */}
        <div className="w-full lg:w-7/12 flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-3xl border border-gray-100 shadow-xl gap-8">
          
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              {selectedCard.title}
            </h3>
            
            <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {selectedCard.hasPurpleBullets ? (
                selectedCard.description.split('\n').map((line, i) => (
                  line.startsWith('-') ? (
                    <div key={i} className="flex items-center gap-2 my-1">
                      <span className="w-2 h-2 rounded-full bg-[#6400dc] shrink-0"></span>
                      <span>{line.replace('-', '').trim()}</span>
                    </div>
                  ) : (
                    <p key={i}>{line}</p>
                  )
                ))
              ) : (
                selectedCard.description
              )}
            </div>

            <div>
              <button className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition shadow-md cursor-pointer">
                Մանրամասն
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src={selectedCard.image} 
              alt={selectedCard.title} 
              className="max-h-[280px] object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}