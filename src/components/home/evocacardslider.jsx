import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slidesData = [
  {
    id: 1,
    title: 'Evoca Travel Card',
    description: 'Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը',
    btnText: 'Իմանալ ավելին',
    bgColor: 'bg-[#dadada]',
    textColor: 'text-gray-900',
    descColor: 'text-gray-700',
    btnBg: 'bg-[#6400dc] text-white',
    image: 'https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png',
  },
  {
    id: 2,
    title: 'Evoca Աշխատավարձային Նախագիծ',
    description: 'Բեր աշխատավարձդ Evoca: Տար շատ ավելին...',
    btnText: 'Իմանալ ավելին',
    bgColor: 'bg-[#6539aa]',
    textColor: 'text-white',
    descColor: 'text-gray-200',
    btnBg: 'bg-white text-[#6539aa]',
    image: 'https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png',
  },
  {
    id: 3,
    title: 'Կարճ հեռախոսահամար՝ 8444',
    description: 'Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին․․․',
    btnText: 'Իմանալ ավելին',
    bgColor: 'bg-[#000000]',
    textColor: 'text-white',
    descColor: 'text-gray-300',
    btnBg: 'bg-[#6400dc] text-white',
    image: 'https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png',
  },
  {
    id: 4,
    title: 'Visa Vision',
    description: 'Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից',
    btnText: 'Իմանալ ավելին',
    bgColor: 'bg-[#27292b]',
    textColor: 'text-white',
    descColor: 'text-gray-300',
    btnBg: 'bg-[#6400dc] text-white',
    image: 'https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg',
  },
  {
    id: 5,
    title: 'Visa Infinite',
    description: 'Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա',
    btnText: 'Իմանալ ավելին',
    bgColor: 'bg-[#000000]',
    textColor: 'text-white',
    descColor: 'text-gray-300',
    btnBg: 'bg-[#6400dc] text-white',
    image: 'https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png',
  },
  {
    id: 6,
    title: 'Հիփոթեքային վարկեր Evocabank-ում` ամենահարմար պայմաններով',
    description: 'Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:',
    btnText: 'Իմանալ ավելին',
    bgColor: 'bg-[#E4DFFF]',
    textColor: 'text-gray-900',
    descColor: 'text-gray-700',
    btnBg: 'bg-[#6400dc] text-white',
    image: 'https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg',
  },
  {
    id: 7,
    title: 'UnionPay Gold',
    description: 'Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը',
    btnText: 'Իմանալ ավելին',
    bgColor: 'bg-[#b6a44f]',
    textColor: 'text-white',
    descColor: 'text-gray-100',
    btnBg: 'bg-black text-white',
    image: 'https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png',
  },
  {
    id: 8,
    title: 'Օնլայն ավանդ EvocaTOUCH հավելվածով',
    description: 'Դի’ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:',
    btnText: 'Ծանոթանալ պայմաններին',
    bgColor: 'bg-[#FFDCFB]',
    textColor: 'text-gray-900',
    descColor: 'text-gray-800',
    btnBg: 'bg-[#6400dc] text-white',
    image: 'https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg',
  },
];

export default function EvocaCardSlider() {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-[40px] overflow-hidden shadow-xl"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`${slide.bgColor} p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[460px] transition-colors duration-500`}>
                <div className="max-w-lg text-left space-y-6 z-10">
                  <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${slide.textColor}`}>
                    {slide.title}
                  </h2>
                  <p className={`text-lg leading-relaxed ${slide.descColor}`}>
                    {slide.description}
                  </p>
                  <div>
                    <button className={`${slide.btnBg} hover:opacity-90 font-bold text-sm px-8 py-3.5 rounded-full transition shadow-lg cursor-pointer`}>
                      {slide.btnText}
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center z-10">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="max-h-[360px] object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}