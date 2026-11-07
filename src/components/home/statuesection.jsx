import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  {
    id: 49,
    tag: 'Թվային քարտեր',
    title: 'Evoca Digital քարտ',
    description: 'Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով։ Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը։',
  },
  {
    id: 2,
    tag: 'Նվեր քարտեր',
    title: 'Evoca Gift Card',
    description: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:',
    cardTitle: 'Evoca Gift Card',
  },
  {
    id: 3,
    tag: 'Նոր հավելված',
    title: 'EvocaTOUCH 2',
    description: 'EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ։',
  },
  {
    id: 4,
    tag: 'Օնլայն վճարումներ',
    title: 'Արագ online վճարումներ',
    description: 'Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:',
  },
];

export default function StatueSection() {
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    if (card.id === 49) {
      navigate('/bolor-norutyunner', { state: { openNewsId: 49 } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (card.id === 3) {
      navigate('/bolor-norutyunner', { state: { openNewsId: 50 } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (card.id === 2 || card.title === 'Evoca Gift Card') {
      navigate('/qarter', { state: { cardTitle: 'Evoca Gift Card' } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (card.id === 4) {
      navigate('/akntartayinvcharumner');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#6400dc] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 my-6 md:my-8 rounded-[30px] sm:rounded-[45px] md:rounded-[60px] overflow-hidden max-w-[1400px] mx-auto">
      
      {/* Shapes (փոքր էկրանների վրա մասամբ թաքնված կամ չափսերը հարմարեցված) */}
      <img src="https://www.evoca.am/img/shape1.png" alt="shape" className="absolute top-4 sm:top-8 left-4 sm:left-10 w-4 sm:w-6 opacity-80 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape6.png" alt="shape" className="absolute top-6 sm:top-12 right-10 sm:right-20 w-5 sm:w-8 opacity-80 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape4.png" alt="shape" className="absolute bottom-10 sm:bottom-16 left-1/4 w-5 sm:w-7 opacity-70 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape3.png" alt="shape" className="absolute top-1/2 right-4 sm:right-8 w-4 sm:w-6 opacity-80 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape2.png" alt="shape" className="absolute bottom-4 sm:bottom-8 right-1/3 w-5 sm:w-8 opacity-75 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape5.png" alt="shape" className="absolute bottom-2 sm:bottom-4 right-3 sm:right-5 w-6 sm:w-10 opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight">
            Լավագույնը Evocabank-ից
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          
          {/* Արձանիկի հատված */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="relative w-full max-w-[280px] sm:max-w-sm h-[260px] sm:h-[340px] md:h-[380px] flex items-center justify-center">
              <img 
                src="https://www.evoca.am/img/statue-1.png" 
                alt="Statue" 
                className="max-h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Քարտերի ցանց (Grid) */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {cardsData.map((card) => (
              <div 
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="bg-white text-gray-900 p-5 sm:p-6 rounded-[22px] sm:rounded-[28px] shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between cursor-pointer hover:bg-purple-50"
              >
                <div>
                  <span className="inline-block text-[#6400dc] bg-[#f3e8ff] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-black mb-2 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}