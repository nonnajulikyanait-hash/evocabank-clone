import React, { useState, useEffect } from 'react';

const faces = [
  'https://www.evoca.am/img/temp/biometric/face3.png',
  'https://www.evoca.am/img/temp/biometric/face1.png',
  'https://www.evoca.am/img/temp/biometric/face2.png',
];

export default function BiometricSection() {
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

  // Ավտոմատ փոխում է դեմքերը ամեն 3 վայրկյանը մեկ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFaceIndex((prevIndex) => (prevIndex + 1) % faces.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Ձախ մաս - Դեմքերի անիմացիա և մանուշակագույն եռանկյունի ֆոն */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Հետևի մանուշակագույն եռանկյունաձև ֆոն */}
          <div className="absolute w-72 h-72 bg-[#6400dc] rounded-3xl transform rotate-45 opacity-90 z-0"></div>
          
          {/* Փոխվող դեմքի նկարը */}
          <div className="relative z-10 w-80 h-80 flex justify-center items-center">
            <img 
              src={faces[currentFaceIndex]} 
              alt="Biometric Verification" 
              className="max-h-72 object-contain transition-opacity duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Աջ մաս - Տեքստ, QR կոդ և կոճակ */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-snug">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex items-center gap-8 pt-2">
            {/* QR Կոդ */}
            <div className="bg-white p-2 border border-gray-200 rounded-xl shadow-md">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="QR Code" 
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* Մանուշակագույն կոճակ */}
            <div>
              <button className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-sm px-8 py-4 rounded-full transition shadow-lg cursor-pointer">
                Իմանալ ավելին
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}