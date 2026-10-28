import React from 'react';

const cardsData = [
  {
    tag: 'Թվային քարտեր',
    title: 'Evoca Digital քարտ',
    description: 'Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածով։ Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը։',
  },
  {
    tag: 'Նվեր քարտեր',
    title: 'Evoca Gift Card',
    description: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:',
  },
  {
    tag: 'Նոր հավելված',
    title: 'EvocaTOUCH 2',
    description: 'EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ։',
  },
  {
    tag: 'Օնլայն վճարումներ',
    title: 'Արագ online վճարումներ',
    description: 'Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:',
  },
];

export default function StatueSection() {
  return (
    <section className="relative bg-[#6400dc] text-white py-12 px-6 my-8 rounded-[60px] overflow-hidden max-w-[1400px] mx-auto">
      
      {/* Ֆոնային շարժվող / լողացող պատկերներ (Shapes) */}
      <img 
        src="https://www.evoca.am/img/shape1.png" 
        alt="shape" 
        className="absolute top-8 left-10 w-6 opacity-80 animate-float-slow pointer-events-none" 
      />
      <img 
        src="https://www.evoca.am/img/shape6.png" 
        alt="shape" 
        className="absolute top-12 right-20 w-8 opacity-80 animate-float-fast pointer-events-none" 
      />
      <img 
        src="https://www.evoca.am/img/shape4.png" 
        alt="shape" 
        className="absolute bottom-16 left-1/4 w-7 opacity-70 animate-float-slow pointer-events-none" 
      />
      <img 
        src="https://www.evoca.am/img/shape3.png" 
        alt="shape" 
        className="absolute top-1/2 right-8 w-6 opacity-80 animate-float-fast pointer-events-none" 
      />
      <img 
        src="https://www.evoca.am/img/shape2.png" 
        alt="shape" 
        className="absolute bottom-8 right-1/3 w-8 opacity-75 animate-float-slow pointer-events-none" 
      />
      <img 
        src="https://www.evoca.am/img/shape5.png" 
        alt="shape" 
        className="absolute bottom-4 right-5 w-10 opacity-90 animate-float-fast pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Վերնագիր */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight">
            Լավագույնը Evocabank-ից
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Ձախ մաս - Արձանի նկարը */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="relative w-full max-w-sm h-[380px] flex items-center justify-center">
              <img 
                src="https://www.evoca.am/img/statue-1.png" 
                alt="Statue" 
                className="max-h-full object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Աջ մաս - 4 Քառակուսիները */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {cardsData.map((card, index) => (
              <div 
                key={index}
                className="bg-white text-gray-900 p-6 rounded-[28px] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[#6400dc] bg-[#f3e8ff] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-black mb-2 text-gray-900">
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