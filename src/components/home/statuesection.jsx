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
    <section className="relative bg-[#6400dc] text-white py-20 px-6 overflow-hidden">
      
      {/* Ֆոնային շարժվող / լողացող նկարներ (Shapes) */}
      <img src="https://www.evoca.am/img/shape1.png" alt="shape" className="absolute top-10 left-10 w-6 opacity-80 animate-pulse pointer-events-none" />
      <img src="https://www.evoca.am/img/shape6.png" alt="shape" className="absolute top-16 right-20 w-8 opacity-80 animate-bounce pointer-events-none" />
      <img src="https://www.evoca.am/img/shape4.png" alt="shape" className="absolute bottom-20 left-1/4 w-7 opacity-70 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape3.png" alt="shape" className="absolute top-1/2 right-10 w-6 opacity-80 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape2.png" alt="shape" className="absolute bottom-10 right-1/3 w-8 opacity-75 pointer-events-none" />
      <img src="https://www.evoca.am/img/shape5.png" alt="shape" className="absolute bottom-5 right-5 w-10 opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Վերնագիր */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Լավագույնը Evocabank-ից
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Ձախ մաս - Արձանի նկարը */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="relative w-full max-w-md h-[480px] flex items-center justify-center">
              <img 
                src="https://www.evoca.am/img/statue-1.png" 
                alt="Statue" 
                className="max-h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Աջ մաս - 4 Քառակուսիները */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardsData.map((card, index) => (
              <div 
                key={index}
                className="bg-white text-gray-900 p-8 rounded-[32px] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[#6400dc] bg-[#f3e8ff] text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {card.tag}
                  </span>
                  <h3 className="text-xl font-black mb-3 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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