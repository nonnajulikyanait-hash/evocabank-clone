import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const cardsData = [
  {
    id: 1,
    title: 'Evoca Travel Card',
    description: 'Ajs qartn ir bazmativ aravelutyunnerov kdarna qo tchampordakan anbazhan enkeri',
    image: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg',
  },
  {
    id: 2,
    title: 'Evoca Visa Platinum',
    description: 'Dzerq ber Evoca Visa Platinum qart yev ogtvir artonyal bankayin tsarayutyunneric:',
    image: 'https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png',
  },
  {
    id: 3,
    title: 'Wilco Visa Infinite',
    description: 'Bacarik hnaravorutyunner yev anhatakan spasarkum Visa Infinite-i het:',
    image: 'https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png',
  },
  {
    id: 4,
    title: 'Evoca Gift Card',
    description: 'Evoca Gift Card-e yerbeq chi hiasthaphecni. ayn idealakan nver e:\nGnir Evoca Gift Card, yev lavagujn nvere klini qone:\nEvoca Gift Card-ov karogh es vtcharel cankacad POS yev V-POS terminalov xanutnerum, srcarannerum, zvartchanqi kentronnerum, supermarkatnerum, onlayn xanutnerum:',
    image: 'https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png',
  },
  {
    id: 5,
    title: 'Digital Gift Card',
    description: 'Araq yev harmaravet tvayin nver qart cankacad arithi hamar:',
    image: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png',
  },
  {
    id: 6,
    title: 'Visa Infinite',
    description: 'Dzer banalin` depi artonutyunneri mec ashxarh:\nQarte knviri Dzez bacarik hnaravorutyunneri phatheth` anvtang gnumneri, apahovagrvad tchampordutyunneri, VIP kargavitshaki dzerqberman hamar yev otch miayn:',
    image: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png',
  },
  {
    id: 7,
    title: 'Visa Vision',
    description: 'Evocabank-e nerkayacnum e ir nor` Visa Vision qarte, ori het du kstanas`',
    bullets: [
      '0% kanxikacum Evoca-i bolor bankomatneric',
      'Cashback bolor ankanxik vtcharumneric',
      'Drakan mnacordi vra gumari kutakum',
      'Varkayin sahmanatshap` qo cankutyamb'
    ],
    image: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png',
  },
  {
    id: 8,
    title: 'Mastercard World Digital',
    description: 'Patvirir tvayin qarte hima yev ayn hasaneli klini qo havelvacum hashvac ropeneri entagcum:',
    image: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png',
  },
  {
    id: 9,
    title: 'UnionPay Business Platinum',
    description: 'Biznes gorcarqneri yev mijazgayin vtcharumneri husali gorcenker:',
    image: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png',
  },
  {
    id: 10,
    title: 'MyLer Gift Card',
    description: 'Yurahatuk nver qart lavagujn tpavorutyunneri hamar:',
    image: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png',
  },
  {
    id: 11,
    title: 'UnionPay Gold',
    description: 'Amboghj ashxarhum araq yev harmar vtcharumneri ughekice:',
    image: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png',
  },
  {
    id: 12,
    title: '4U.am Gift card',
    description: 'Gnumneri layn hnaravorutyunner 4U.am harthakum:',
    image: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png',
  },
  {
    id: 13,
    title: 'Mastercard Gold',
    description: 'Qarte kendergci qo kargavitshake yev anmoranali kdarcni qo bolor tchampordutyunnere:',
    image: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png',
  },
  {
    id: 14,
    title: 'Mastercard Standard',
    description: 'Amenorja gnumneric minchev anmoranali tchampordutyun` qo Mastercard Standard qartov:',
    image: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png',
  },
  {
    id: 15,
    title: 'Visa Digital',
    description: 'Anvtang yev araq arconc vtcharumner Visa Digital qartov:',
    image: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
  },
  {
    id: 16,
    title: 'Visa Classic',
    description: 'Universal vtcharayin qart, ore hasaneli klini ashxarhi cankacad ketum` 24/7 skzbunqov:',
    image: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
  },
  {
    id: 17,
    title: 'Arca Classic',
    description: 'Dzerq ber ArCa Classic qarte yev katarir qo gorcarqnere mer noraoch qarti ognutyamb:',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
  },
  {
    id: 18,
    title: 'Arca-UnionPay',
    description: 'Petq che entroutyun kataral lokal yev mijazgayin qarteri mijev. Evoca-n miavorum e Arca yev UnionPay hamakargere:',
    image: 'https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png',
  },
  {
    id: 19,
    title: 'Visa Business',
    description: 'Mekneq gorcurman Evocabank-i Visa Business qartov: Dzer kazmakerputyan dramakan mijocnere hasaneli en bolor keterum:',
    image: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png',
  },
  {
    id: 20,
    title: 'Dalma Gift Card',
    description: 'Nver entreln ajlevs dzvar che. Dalma Gift Card-e nveri idealakan tarberak e:',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png',
  },
  {
    id: 21,
    title: 'Rio Gift Card',
    description: 'Mez het du karogh es xnayel zhamanake, bajc unenal nveri lavagujn tarberake:',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png',
  },
  {
    id: 22,
    title: 'Visa Gold',
    description: 'Qartn apahovum e Dzer harmaravetutyunn u hatcheli darcnum cankacad gnum: Visa Gold qarte tchampordutjan voghj entagcum klini Dzer husali ughekice:',
    image: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png',
  },
];

export default function CardsSliderSection() {
  const [selectedCard, setSelectedCard] = useState(cardsData[21]); // Visa Gold by default as shown in image
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 md:px-8 bg-[#f0f7fe] transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Side: Vertical Swiper with Top/Bottom Purple Arrows */}
        <div className="w-full lg:w-4/12 flex flex-col items-center relative">
          
          {/* Top Arrow */}
          <button 
            ref={prevRef}
            className="z-10 p-2 text-[#6400dc] hover:scale-125 transition-transform duration-200 cursor-pointer mb-2"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>

          {/* Vertical Swiper Container */}
          <div className="h-[360px] w-full max-w-[280px]">
            <Swiper
              direction={'vertical'}
              slidesPerView={3}
              spaceBetween={16}
              mousewheel={true}
              modules={[Navigation, Mousewheel]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              className="h-full w-full"
            >
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div
                    onClick={() => setSelectedCard(card)}
                    onMouseEnter={() => setSelectedCard(card)}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl cursor-pointer transition-all duration-300 bg-white shadow-sm border ${
                      selectedCard.id === card.id 
                        ? 'border-[#6400dc] shadow-md ring-2 ring-[#6400dc]/20 scale-105' 
                        : 'border-transparent opacity-80 hover:opacity-100 hover:scale-102'
                    }`}
                  >
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-24 h-15 object-contain transition-transform duration-300 hover:scale-110"
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
            ref={nextRef}
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
          <div className="relative group">
            <img 
              src={selectedCard.image} 
              alt={selectedCard.title} 
              className="w-[340px] md:w-[380px] h-auto object-contain drop-shadow-2xl transition-all duration-500 transform group-hover:scale-108 group-hover:-rotate-1"
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
            <button className="bg-[#6400dc] hover:bg-[#5200b8] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:scale-105 cursor-pointer">
              Մանրամասն
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}